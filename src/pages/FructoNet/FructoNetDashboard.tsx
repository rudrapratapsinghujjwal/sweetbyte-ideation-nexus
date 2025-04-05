
import { CalendarDays, DollarSign, LightbulbIcon, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import MetricsCard from "@/components/MetricsCard";
import { mockIdeas, mockInvestor } from "@/data/mockData";
import MeetingCard from "@/components/MeetingCard";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";

const categoryData = [
  { name: "Fintech", value: 28 },
  { name: "Healthcare", value: 22 },
  { name: "E-commerce", value: 15 },
  { name: "Logistics", value: 12 },
  { name: "Sustainability", value: 18 },
  { name: "Other", value: 5 },
];

const investmentData = [
  { month: "Jan", amount: 3500 },
  { month: "Feb", amount: 7200 },
  { month: "Mar", amount: 8900 },
  { month: "Apr", amount: 5600 },
  { month: "May", amount: 12000 },
  { month: "Jun", amount: 8100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#ffc658'];

const FructoNetDashboard = () => {
  const navigate = useNavigate();
  const upcomingMeetings = mockInvestor.meetings.filter(meeting => meeting.status === 'Confirmed');
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header portal="fructonet" />
      <main className="flex-1 py-6 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Investor Dashboard</h1>
            <p className="text-muted-foreground">
              Track your investments, explore new ideas, and manage upcoming meetings.
            </p>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <MetricsCard
              title="Total Investments"
              value={`${mockInvestor.totalInvestments.toLocaleString()} SByte`}
              description="Across all ideas"
              icon={<DollarSign className="h-4 w-4" />}
              trend={{ value: 18, isPositive: true }}
            />
            <MetricsCard
              title="Portfolio Size"
              value={mockInvestor.portfolioSize}
              description="Ideas invested in"
              icon={<LightbulbIcon className="h-4 w-4" />}
              trend={{ value: 2, isPositive: true }}
            />
            <MetricsCard
              title="New Ideas This Week"
              value="24"
              description="In the marketplace"
              icon={<TrendingUp className="h-4 w-4" />}
              trend={{ value: 15, isPositive: true }}
            />
            <MetricsCard
              title="Upcoming Meetings"
              value={upcomingMeetings.length}
              description="Scheduled with innovators"
              icon={<CalendarDays className="h-4 w-4" />}
            />
          </div>
          
          <div className="grid gap-4 lg:grid-cols-7">
            <div className="lg:col-span-4">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold mb-6">Investment Trend</h2>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={investmentData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip 
                        formatter={(value) => [`${value.toLocaleString()} SByte`, "Amount"]}
                      />
                      <Legend />
                      <Bar 
                        dataKey="amount" 
                        name="Investment Amount" 
                        fill="#EC4899" 
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow p-6 h-full">
                <h2 className="text-xl font-bold mb-6">Idea Categories</h2>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}%`, "Distribution"]} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Upcoming Meetings</h2>
              <Button variant="outline" onClick={() => navigate("/fructonet/meetings")}>
                View All Meetings
              </Button>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {upcomingMeetings.length > 0 ? (
                upcomingMeetings.map((meeting) => (
                  <MeetingCard key={meeting.id} {...meeting} />
                ))
              ) : (
                <div className="col-span-full text-center py-12 bg-gray-50 rounded-lg">
                  <CalendarDays className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-medium mb-2">No upcoming meetings</h3>
                  <p className="text-muted-foreground mb-6">
                    Schedule meetings with idea creators to discuss potential investments
                  </p>
                  <Button onClick={() => navigate("/fructonet/marketplace")}>
                    Browse Idea Marketplace
                  </Button>
                </div>
              )}
            </div>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Trending Ideas</h2>
              <Button variant="outline" onClick={() => navigate("/fructonet/marketplace")}>
                Explore Marketplace
              </Button>
            </div>
            
            <div className="grid gap-4 md:grid-cols-3">
              {mockIdeas.filter(idea => idea.status === "Open").slice(0, 3).map((idea) => (
                <IdeaCard 
                  key={idea.id} 
                  {...idea}
                  isInvestorView={true}
                  onViewDetails={(id) => navigate(`/fructonet/marketplace/${id}`)}
                  onScheduleMeeting={(id) => navigate(`/fructonet/marketplace/${id}/schedule`)}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FructoNetDashboard;
