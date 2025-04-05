import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CoinsIcon, AlertCircle, BrainCircuit } from "lucide-react";

const formSchema = z.object({
  title: z.string().min(10, {
    message: "Title must be at least 10 characters.",
  }).max(100, {
    message: "Title must not exceed 100 characters."
  }),
  shortDescription: z.string().min(20, {
    message: "Short description must be at least 20 characters.",
  }).max(200, {
    message: "Short description must not exceed 200 characters."
  }),
  fullDescription: z.string().min(100, {
    message: "Full description must be at least 100 characters.",
  }).max(2000, {
    message: "Full description must not exceed 2000 characters."
  }),
  category: z.string({
    required_error: "Please select a category.",
  }),
  price: z.number().min(100, {
    message: "Price must be at least 100 SByte.",
  }).max(100000, {
    message: "Price cannot exceed 100,000 SByte."
  }),
});

const CATEGORIES = [
  "Fintech",
  "Healthcare",
  "E-commerce",
  "Logistics & Supply Chain",
  "Sustainability",
  "Entertainment",
  "Education",
  "Real Estate",
  "Social Media",
  "Legal Tech",
  "Health & Nutrition",
  "Blockchain & Web3"
];

const IdeaForm = () => {
  const [aiAnalyzing, setAiAnalyzing] = useState(false);
  const [ratings, setRatings] = useState({
    originality: 0,
    marketFit: 0,
    profitability: 0,
    technicalFeasibility: 0
  });
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      shortDescription: "",
      fullDescription: "",
      category: "",
      price: 1000,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, you would submit to your backend
    console.log(values);
    toast({
      title: "Idea Submitted Successfully!",
      description: "Your idea has been added to the marketplace.",
    });
    form.reset();
    setRatings({
      originality: 0,
      marketFit: 0,
      profitability: 0,
      technicalFeasibility: 0
    });
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

  const getRatingColor = (score: number) => {
    if (score >= 90) return "text-green-500";
    if (score >= 80) return "text-blue-500";
    if (score >= 70) return "text-amber-500";
    return "text-red-500";
  };

  const hasRatings = Object.values(ratings).some(value => value > 0);

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
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Idea Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter a catchy, descriptive title" {...field} />
                    </FormControl>
                    <FormDescription>
                      Make it concise but memorable.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="shortDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Short Description</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Provide a brief overview of your idea (visible to investors)"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      A concise summary that will appear in marketplace listings.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="fullDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Description</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Detailed explanation of your concept, implementation, and potential impact"
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      This will only be visible to investors after they schedule a meeting.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {CATEGORIES.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Choose the most relevant category for your idea.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price (SByte)</FormLabel>
                      <FormControl>
                        <div className="flex items-center space-x-2">
                          <CoinsIcon className="h-4 w-4 text-amber-500" />
                          <Input 
                            type="number" 
                            onChange={e => field.onChange(parseFloat(e.target.value))}
                            value={field.value}
                          />
                        </div>
                      </FormControl>
                      <FormDescription>
                        Set the amount of SUGARByte tokens for your idea.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="border rounded-lg p-4 bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-lg">AI-Powered Idea Analysis</h3>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={runAiAnalysis}
                    disabled={aiAnalyzing}
                  >
                    <BrainCircuit className="mr-2 h-4 w-4" />
                    {aiAnalyzing ? "Analyzing..." : "Analyze My Idea"}
                  </Button>
                </div>
                
                {!hasRatings && !aiAnalyzing && (
                  <div className="text-sm text-gray-500 italic">
                    Click "Analyze My Idea" to get AI-generated ratings for your concept.
                  </div>
                )}
                
                {aiAnalyzing && (
                  <div className="flex items-center justify-center py-6">
                    <div className="animate-pulse flex flex-col items-center">
                      <BrainCircuit className="h-10 w-10 text-blue-500 mb-2" />
                      <p className="text-sm text-gray-600">Our AI is evaluating your idea...</p>
                    </div>
                  </div>
                )}
                
                {hasRatings && !aiAnalyzing && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Originality</label>
                      <div className="flex items-center mt-1">
                        <Slider
                          value={[ratings.originality]}
                          max={100}
                          step={1}
                          disabled
                          className="mr-3"
                        />
                        <span className={`font-bold ${getRatingColor(ratings.originality)}`}>
                          {ratings.originality}%
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium">Market Fit</label>
                      <div className="flex items-center mt-1">
                        <Slider
                          value={[ratings.marketFit]}
                          max={100}
                          step={1}
                          disabled
                          className="mr-3"
                        />
                        <span className={`font-bold ${getRatingColor(ratings.marketFit)}`}>
                          {ratings.marketFit}%
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium">Profitability</label>
                      <div className="flex items-center mt-1">
                        <Slider
                          value={[ratings.profitability]}
                          max={100}
                          step={1}
                          disabled
                          className="mr-3"
                        />
                        <span className={`font-bold ${getRatingColor(ratings.profitability)}`}>
                          {ratings.profitability}%
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium">Technical Feasibility</label>
                      <div className="flex items-center mt-1">
                        <Slider
                          value={[ratings.technicalFeasibility]}
                          max={100}
                          step={1}
                          disabled
                          className="mr-3"
                        />
                        <span className={`font-bold ${getRatingColor(ratings.technicalFeasibility)}`}>
                          {ratings.technicalFeasibility}%
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
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
