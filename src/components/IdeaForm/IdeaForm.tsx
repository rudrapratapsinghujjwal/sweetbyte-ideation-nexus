
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Form } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { mockIdeas } from "@/data/mockData";
import { formSchema } from "./schema";
import BasicInfoFields from "./BasicInfoFields";
import DescriptionFields from "./DescriptionFields";
import CategoryPriceFields from "./CategoryPriceFields";
import AiAnalysisSection from "./AiAnalysisSection";

const IdeaForm = () => {
  const navigate = useNavigate();
  const [aiAnalyzing, setAiAnalyzing] = useState(false);
  const [ratings, setRatings] = useState({
    originality: 0,
    marketFit: 0,
    profitability: 0,
    technicalFeasibility: 0
  });
  
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      shortDescription: "",
      fullDescription: "",
      category: "",
      price: 1000,
    },
  });

  function onSubmit(values) {
    // In a real app, you would submit to your backend
    console.log(values);
    
    // Create a new idea with complete information
    const newIdea = {
      id: mockIdeas.length > 0 ? Math.max(...mockIdeas.map(idea => idea.id)) + 1 : 1,
      title: values.title,
      shortDescription: values.shortDescription,
      fullDescription: values.fullDescription,
      createdAt: new Date().toISOString(),
      price: values.price,
      creator: "Current User",
      ratings: ratings.originality > 0 ? ratings : {
        originality: Math.floor(Math.random() * 31) + 65,
        marketFit: Math.floor(Math.random() * 31) + 65,
        profitability: Math.floor(Math.random() * 31) + 65,
        technicalFeasibility: Math.floor(Math.random() * 31) + 65
      },
      status: "Open",
      category: values.category
    };
    
    // In a real app, this would update the database
    // For demo purposes, we're updating the mockIdeas array directly
    // Using unshift to add to the beginning of the array so it appears first in the list
    mockIdeas.unshift(newIdea);
    
    toast({
      title: "Idea Submitted Successfully!",
      description: "Your idea has been added to the marketplace.",
    });
    
    // Reset form and ratings
    form.reset();
    setRatings({
      originality: 0,
      marketFit: 0,
      profitability: 0,
      technicalFeasibility: 0
    });
    
    // Navigate to the ideas list to see the new idea
    setTimeout(() => {
      navigate("/glucohub/ideas");
    }, 1500);
  }

  // This would normally call an API endpoint with actual AI analysis
  const runAiAnalysis = () => {
    const values = form.getValues();
    if (!values.title || !values.shortDescription || !values.fullDescription) {
      toast({
        title: "Incomplete Information",
        description: "Please fill in the title and descriptions before analysis.",
        variant: "destructive",
      });
      return;
    }
    
    setAiAnalyzing(true);
    
    // Simulate AI analysis with a timeout
    setTimeout(() => {
      // Generate random scores between 65 and 95 for demo purposes
      const generateScore = () => Math.floor(Math.random() * 31) + 65;
      
      setRatings({
        originality: generateScore(),
        marketFit: generateScore(),
        profitability: generateScore(),
        technicalFeasibility: generateScore()
      });
      
      setAiAnalyzing(false);
      
      toast({
        title: "AI Analysis Complete",
        description: "Your idea has been evaluated by our AI system.",
      });
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Submit New Idea</CardTitle>
          <CardDescription>
            Share your innovative concept with potential investors through the Sugarverse marketplace.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <BasicInfoFields control={form.control} />
              
              <DescriptionFields control={form.control} />
              
              <CategoryPriceFields control={form.control} />
              
              <AiAnalysisSection 
                aiAnalyzing={aiAnalyzing} 
                ratings={ratings} 
                onAnalyze={runAiAnalysis} 
              />
              
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Important</AlertTitle>
                <AlertDescription>
                  By submitting, you agree that your idea will be visible in the Sugarverse marketplace.
                  Investors will only see 25% of your description until they schedule a meeting.
                </AlertDescription>
              </Alert>
              
              <Button type="submit" className="w-full">Submit Idea</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default IdeaForm;
