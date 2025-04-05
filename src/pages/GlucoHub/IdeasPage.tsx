
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import IdeaCard from "@/components/IdeaCard";
import { Button } from "@/components/ui/button";
import { mockIdeas } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PlusCircle, Search } from "lucide-react";

const IdeasPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  
  // Filter ideas based on search query and status filter
  const filteredIdeas = mockIdeas.filter((idea) => {
    const matchesSearch = idea.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      idea.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || idea.status.toLowerCase() === statusFilter.toLowerCase();
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex min-h-screen flex-col">
      <Header portal="glucohub" />
      <main className="flex-1 py-6 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold tracking-tight">My Ideas</h1>
            <Button onClick={() => navigate("/glucohub/ideas/new")}>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add New Idea
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search ideas..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select
              value={statusFilter}
              onValueChange={setStatusFilter}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {filteredIdeas.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredIdeas.map((idea) => (
                <IdeaCard 
                  key={idea.id} 
                  {...idea} 
                  onViewDetails={(id) => navigate(`/glucohub/ideas/${id}`)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No ideas found</h3>
              <p className="text-muted-foreground mb-6">
                {searchQuery || statusFilter !== "all" 
                  ? "Try adjusting your search or filters" 
                  : "Start by adding your first idea to the marketplace"}
              </p>
              <Button onClick={() => navigate("/glucohub/ideas/new")}>
                Submit a New Idea
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default IdeasPage;
