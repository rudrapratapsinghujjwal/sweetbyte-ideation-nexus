
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft, User, Award, Timer, Edit } from "lucide-react";
import { mockIdeas } from "@/data/mockData";

const IdeaDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const idea = mockIdeas.find(idea => idea.id === Number(id));

  if (!idea) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header portal="glucohub" />
        <main className="flex-1 py-6 px-4 sm:px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center py-12">
            <h1 className="text-3xl font-bold mb-4">Idea Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The idea you're looking for doesn't exist or has been removed.
            </p>
            <Button onClick={() => navigate("/glucohub/ideas")}>
              Go Back to Ideas
            </Button>
          </div>
        </main>
      </div>
    );
  }

  // Format the date
  const formattedDate = new Date(idea.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  const getBadgeColor = (status: string) => {
    switch (status) {
      case 'Open':
        return 'bg-green-500 hover:bg-green-600';
      case 'Closed':
        return 'bg-gray-500 hover:bg-gray-600';
      default:
        return 'bg-blue-500 hover:bg-blue-600';
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header portal="glucohub" />
      <main className="flex-1 py-6 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            className="mb-4"
            onClick={() => navigate("/glucohub/ideas")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Ideas
          </Button>
          
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold">{idea.title}</h1>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>{formattedDate}</span>
                </div>
                <Badge className={getBadgeColor(idea.status)}>
                  {idea.status}
                </Badge>
                <Badge variant="outline">{idea.category}</Badge>
              </div>
            </div>

            <Button onClick={() => navigate(`/glucohub/ideas/${id}/edit`)}>
              <Edit className="mr-2 h-4 w-4" />
              Edit Idea
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-line">{idea.shortDescription}</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Full Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-line">{idea.fullDescription || "No detailed description provided."}</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl">Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <span className="flex items-center justify-center text-3xl font-bold mb-2">
                      <span className="text-amber-500 mr-1">₿</span>
                      {idea.price.toLocaleString()}
                    </span>
                    <p className="text-muted-foreground">SByte</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl">Ratings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Originality</span>
                      <span className="font-medium">{idea.ratings.originality}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${idea.ratings.originality}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Market Fit</span>
                      <span className="font-medium">{idea.ratings.marketFit}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${idea.ratings.marketFit}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Profitability</span>
                      <span className="font-medium">{idea.ratings.profitability}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-amber-500 h-2 rounded-full" 
                        style={{ width: `${idea.ratings.profitability}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Technical Feasibility</span>
                      <span className="font-medium">{idea.ratings.technicalFeasibility}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-purple-500 h-2 rounded-full" 
                        style={{ width: `${idea.ratings.technicalFeasibility}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="pt-3 border-t mt-3">
                    <div className="flex justify-between text-sm font-medium">
                      <span>Overall Score</span>
                      <span>{Math.round((
                        idea.ratings.originality + 
                        idea.ratings.marketFit + 
                        idea.ratings.profitability + 
                        idea.ratings.technicalFeasibility
                      ) / 4)}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IdeaDetailsPage;
