
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft, Award, Timer } from "lucide-react";
import { mockIdeas } from "@/data/mockData";

const IdeaDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const idea = mockIdeas.find(idea => idea.id === Number(id));

  if (!idea) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header portal="fructonet" />
        <main className="flex-1 py-6 px-4 sm:px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center py-12">
            <h1 className="text-3xl font-bold mb-4">Idea Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The idea you're looking for doesn't exist or has been removed.
            </p>
            <Button onClick={() => navigate("/fructonet/marketplace")}>
              Go Back to Marketplace
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

  // For investor view - display only part of the description (25%)
  const visibleDescription = idea.shortDescription.substring(0, Math.floor(idea.shortDescription.length * 0.25)) + "...";

  return (
    <div className="flex min-h-screen flex-col">
      <Header portal="fructonet" />
      <main className="flex-1 py-6 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            className="mb-4"
            onClick={() => navigate("/fructonet/marketplace")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Marketplace
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

            {idea.status === 'Open' && (
              <Button onClick={() => navigate(`/fructonet/marketplace/${id}/schedule`)}>
                <Award className="mr-2 h-4 w-4" />
                Schedule Meeting
              </Button>
            )}
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Idea Overview</CardTitle>
                  <CardDescription>
                    Preview of the innovative concept
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mb-4">
                    <p className="text-amber-800 flex items-center text-sm">
                      <Timer className="h-4 w-4 mr-2" />
                      Only a preview is available. Schedule a meeting with the innovator to view the complete idea details.
                    </p>
                  </div>
                  <p className="blur-sm hover:blur-[2px] whitespace-pre-line">{visibleDescription}</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl">Investment Details</CardTitle>
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
                  <CardTitle className="text-xl">Expert Ratings</CardTitle>
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
              
              {idea.status === 'Open' && (
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl">Next Steps</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      To see the complete idea and discuss investment opportunities, schedule a meeting with the innovator.
                    </p>
                    <Button 
                      className="w-full"
                      onClick={() => navigate(`/fructonet/marketplace/${id}/schedule`)}
                    >
                      <Award className="mr-2 h-4 w-4" />
                      Schedule Meeting
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IdeaDetailsPage;
