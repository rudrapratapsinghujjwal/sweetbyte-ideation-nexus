
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { mockIdeas } from "@/data/mockData";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { ArrowLeft, CoinsIcon } from "lucide-react";

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

const EditIdeaPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const originalIdea = mockIdeas.find(idea => idea.id === Number(id));
  
  const [idea, setIdea] = useState({
    title: "",
    shortDescription: "",
    fullDescription: "",
    category: "",
    price: 0,
    status: "Open"
  });
  
  useEffect(() => {
    if (originalIdea) {
      setIdea({
        title: originalIdea.title,
        shortDescription: originalIdea.shortDescription,
        fullDescription: originalIdea.fullDescription,
        category: originalIdea.category,
        price: originalIdea.price,
        status: originalIdea.status
      });
    }
  }, [originalIdea]);
  
  if (!originalIdea) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header portal="glucohub" />
        <main className="flex-1 py-6 px-4 sm:px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center py-12">
            <h1 className="text-3xl font-bold mb-4">Idea Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The idea you're trying to edit doesn't exist or has been removed.
            </p>
            <Button onClick={() => navigate("/glucohub/ideas")}>
              Go Back to Ideas
            </Button>
          </div>
        </main>
      </div>
    );
  }
  
  const handleChange = (field: string, value: string | number) => {
    setIdea(prev => ({ ...prev, [field]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would send data to a backend
    // For now we'll just show a success toast
    toast({
      title: "Idea Updated Successfully",
      description: "Your changes have been saved."
    });
    
    // Navigate back to idea details
    navigate(`/glucohub/ideas/${id}`);
  };
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header portal="glucohub" />
      <main className="flex-1 py-6 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            className="mb-4"
            onClick={() => navigate(`/glucohub/ideas/${id}`)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Idea Details
          </Button>
          
          <h1 className="text-3xl font-bold mb-6">Edit Idea</h1>
          
          <Card>
            <CardHeader>
              <CardTitle>Edit Your Idea</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Title</label>
                  <Input 
                    value={idea.title}
                    onChange={(e) => handleChange('title', e.target.value)}
                    placeholder="Enter a title for your idea"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Short Description</label>
                  <Textarea 
                    value={idea.shortDescription}
                    onChange={(e) => handleChange('shortDescription', e.target.value)}
                    placeholder="Provide a brief overview"
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    This will be visible in marketplace listings.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Description</label>
                  <Textarea 
                    value={idea.fullDescription}
                    onChange={(e) => handleChange('fullDescription', e.target.value)}
                    placeholder="Provide detailed information"
                    required
                    className="min-h-[150px]"
                  />
                  <p className="text-xs text-muted-foreground">
                    This will only be visible after investors schedule a meeting.
                  </p>
                </div>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Category</label>
                    <Select 
                      value={idea.category}
                      onValueChange={(value) => handleChange('category', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {CATEGORIES.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Price (SByte)</label>
                    <div className="flex items-center space-x-2">
                      <CoinsIcon className="h-4 w-4 text-amber-500" />
                      <Input 
                        type="number"
                        value={idea.price}
                        onChange={(e) => handleChange('price', parseFloat(e.target.value))}
                        required
                        min={100}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Status</label>
                  <Select 
                    value={idea.status}
                    onValueChange={(value) => handleChange('status', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Open">Open</SelectItem>
                      <SelectItem value="Closed">Closed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex justify-end space-x-3">
                  <Button type="button" variant="outline" onClick={() => navigate(`/glucohub/ideas/${id}`)}>
                    Cancel
                  </Button>
                  <Button type="submit">Save Changes</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default EditIdeaPage;
