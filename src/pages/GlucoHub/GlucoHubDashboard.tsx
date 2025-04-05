
import { LightbulbIcon, TrendingUp, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import MetricsCard from "@/components/MetricsCard";
import IdeaCard from "@/components/IdeaCard";
import { mockIdeas, mockUser } from "@/data/mockData";
import { useNavigate } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const earningsData = [
  { month: "Jan", earnings: 1200 },
  { month: "Feb", earnings: 1900 },
  { month: "Mar", earnings: 3000 },
  { month: "Apr", earnings: 5000 },
  { month: "May", earnings: 4780 },
  { month: "Jun", earnings: 6890 },
  { month: "Jul", earnings: 8200 },
];

const metricsData = [
  { name: "Originality", value: 85 },
  { name: "Market Fit", value: 92 },
  { name: "Profitability", value: 78 },
  { name: "Technical", value: 84 },
];

const GlucoHubDashboard = () => {
  const navigate = useNavigate();
  const recentIdeas = mockIdeas.filter(idea => idea.status === "Open").slice(0, 3);
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header portal="glucohub" />
      <main className="flex-1 py-6 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Welcome back, {mockUser.username}</h1>
            <p className="text-muted-foreground">
              Here's an overview of your idea performance and analytics.
            </p>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <MetricsCard
              title="Total Earnings"
              value={`${mockUser.earnings.toLocaleString()} SByte`}
              description="Last 30 days"
              icon={<DollarSign className="h-4 w-4" />}
              trend={{ value: 12, isPositive: true }}
            />
            <MetricsCard
              title="Ideas Submitted"
              value={mockUser.ideas}
              description="Total ideas in marketplace"
              icon={<LightbulbIcon className="h-4 w-4" />}
            />
            <MetricsCard
              title="Average Rating"
              value="87%"
              description="Based on all metrics"
              icon={<TrendingUp className="h-4 w-4" />}
              trend={{ value: 5, isPositive: true }}
            />
            <MetricsCard
              title="Investor Interest"
              value="12"
              description="Viewed in last 7 days"
              icon={<Users className="h-4 w-4" />}
              trend={{ value: 8, isPositive: true }}
            />
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Earnings Overview</CardTitle>
                <CardDescription>
                  Your SByte earnings over the past 6 months
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={earningsData}>
                    <defs>
                      <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#F59E0B" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${value} SByte`, "Earnings"]} />
                    <Area 
                      type="monotone" 
                      dataKey="earnings" 
                      stroke="#F59E0B" 
                      fillOpacity={1} 
                      fill="url(#colorEarnings)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Idea Ratings Distribution</CardTitle>
                <CardDescription>
                  Average metrics for your ideas
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={metricsData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip formatter={(value) => [`${value}%`, "Score"]} />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#EC4899"
                      activeDot={{ r: 8 }}
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Recent Ideas</h2>
              <Button onClick={() => navigate("/glucohub/ideas/new")}>Add New Idea</Button>
            </div>
            
            <div className="grid gap-4 md:grid-cols-3">
              {recentIdeas.map((idea) => (
                <IdeaCard 
                  key={idea.id} 
                  {...idea} 
                  onViewDetails={(id) => navigate(`/glucohub/ideas/${id}`)}
                />
              ))}
            </div>
            
            {recentIdeas.length === 0 ? (
              <Card className="bg-muted">
                <CardContent className="py-10 flex justify-center items-center flex-col text-center">
                  <LightbulbIcon className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-medium mb-1">No ideas yet</h3>
                  <p className="text-muted-foreground mb-4">
                    Start by adding your first innovative idea to the marketplace.
                  </p>
                  <Button onClick={() => navigate("/glucohub/ideas/new")}>
                    Submit Your First Idea
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="flex justify-center mt-4">
                <Button 
                  variant="outline" 
                  onClick={() => navigate("/glucohub/ideas")}
                >
                  View All Ideas
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default GlucoHubDashboard;
