
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import IdeaCard from "@/components/IdeaCard";
import { mockIdeas } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

const CATEGORIES = [
  "All Categories",
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

const MarketplacePage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [minRating, setMinRating] = useState(0);
  const [showOpenOnly, setShowOpenOnly] = useState(true);
  const [activeTab, setActiveTab] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Filter ideas based on all criteria
  const filteredIdeas = mockIdeas.filter((idea) => {
    // Handle tabs
    if (activeTab === "trending" && idea.ratings.marketFit < 85) return false;
    if (activeTab === "recent") {
      const twoWeeksAgo = new Date();
      twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
      if (new Date(idea.createdAt) < twoWeeksAgo) return false;
    }
    
    // Handle search
    const matchesSearch = idea.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      idea.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;
    
    // Handle category
    if (categoryFilter !== "All Categories" && idea.category !== categoryFilter) return false;
    
    // Handle price range
    if (idea.price < priceRange[0] || idea.price > priceRange[1]) return false;
    
    // Handle minimum rating
    const avgRating = (idea.ratings.originality + idea.ratings.marketFit + 
                       idea.ratings.profitability + idea.ratings.technicalFeasibility) / 4;
    if (avgRating < minRating) return false;
    
    // Handle open only
    if (showOpenOnly && idea.status !== "Open") return false;
    
    return true;
  });

  return (
    <div className="flex min-h-screen flex-col">
      <Header portal="fructonet" />
      <main className="flex-1 py-6 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Idea Marketplace</h1>
            <p className="text-muted-foreground">
              Discover innovative concepts from creators around the globe
            </p>
          </div>
          
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
            <div className="flex flex-col md:flex-row justify-between md:items-center space-y-4 md:space-y-0">
              <TabsList>
                <TabsTrigger value="all">All Ideas</TabsTrigger>
                <TabsTrigger value="trending">Trending</TabsTrigger>
                <TabsTrigger value="recent">Recently Added</TabsTrigger>
              </TabsList>
              
              <div className="flex space-x-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search ideas..."
                    className="pl-8 min-w-[200px]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <Dialog open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline">
                      <SlidersHorizontal className="mr-2 h-4 w-4" />
                      Filters
                      {(categoryFilter !== "All Categories" || priceRange[0] > 0 || 
                        priceRange[1] < 10000 || minRating > 0 || !showOpenOnly) && (
                        <Badge className="ml-2 bg-blue-500 hover:bg-blue-600">Active</Badge>
                      )}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Filter Ideas</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <h4 className="font-medium">Category</h4>
                        <Select
                          value={categoryFilter}
                          onValueChange={setCategoryFilter}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
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
                        <div className="flex justify-between">
                          <h4 className="font-medium">Price Range (SByte)</h4>
                          <span className="text-sm text-muted-foreground">
                            {priceRange[0]} - {priceRange[1]}
                          </span>
                        </div>
                        <Slider
                          defaultValue={[0, 10000]}
                          max={10000}
                          step={100}
                          value={priceRange}
                          onValueChange={setPriceRange}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <h4 className="font-medium">Minimum Rating</h4>
                          <span className="text-sm text-muted-foreground">{minRating}%</span>
                        </div>
                        <Slider
                          defaultValue={[0]}
                          max={100}
                          step={5}
                          value={[minRating]}
                          onValueChange={([value]) => setMinRating(value)}
                        />
                      </div>
                      
                      <div className="flex items-center space-x-2 pt-2">
                        <Checkbox 
                          id="open-only" 
                          checked={showOpenOnly}
                          onCheckedChange={(checked) => setShowOpenOnly(!!checked)}
                        />
                        <label
                          htmlFor="open-only"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Show only available ideas
                        </label>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <Button variant="outline" onClick={() => {
                        setCategoryFilter("All Categories");
                        setPriceRange([0, 10000]);
                        setMinRating(0);
                        setShowOpenOnly(true);
                      }}>
                        Reset Filters
                      </Button>
                      <Button onClick={() => setIsFilterOpen(false)}>
                        Apply Filters
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            
            <TabsContent value="all" className="mt-6">
              {renderIdeaGrid(filteredIdeas)}
            </TabsContent>
            <TabsContent value="trending" className="mt-6">
              {renderIdeaGrid(filteredIdeas)}
            </TabsContent>
            <TabsContent value="recent" className="mt-6">
              {renderIdeaGrid(filteredIdeas)}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
  
  function renderIdeaGrid(ideas: typeof mockIdeas) {
    if (ideas.length === 0) {
      return (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-medium mb-2">No ideas found</h3>
          <p className="text-muted-foreground mb-4">
            Try adjusting your search criteria or filters
          </p>
          <Button onClick={() => {
            setSearchQuery("");
            setCategoryFilter("All Categories");
            setPriceRange([0, 10000]);
            setMinRating(0);
            setShowOpenOnly(true);
            setActiveTab("all");
          }}>
            Reset All Filters
          </Button>
        </div>
      );
    }
    
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {ideas.map((idea) => (
          <IdeaCard 
            key={idea.id} 
            {...idea}
            isInvestorView={true}
            onViewDetails={(id) => navigate(`/fructonet/marketplace/${id}`)}
            onScheduleMeeting={(id) => navigate(`/fructonet/marketplace/${id}/schedule`)}
          />
        ))}
      </div>
    );
  }
};

export default MarketplacePage;
