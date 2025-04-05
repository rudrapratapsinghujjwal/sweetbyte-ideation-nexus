
import { useState } from "react";
import Header from "@/components/Header";
import MeetingCard from "@/components/MeetingCard";
import { mockInvestor } from "@/data/mockData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { CalendarDays, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MeetingsPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("upcoming");
  
  const confirmedMeetings = mockInvestor.meetings.filter(meeting => meeting.status === 'Confirmed');
  const pendingMeetings = mockInvestor.meetings.filter(meeting => meeting.status === 'Pending');
  
  // Display either confirmed or pending meetings based on the active tab
  const displayedMeetings = activeTab === 'upcoming' ? confirmedMeetings : pendingMeetings;

  return (
    <div className="flex min-h-screen flex-col">
      <Header portal="fructonet" />
      <main className="flex-1 py-6 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold tracking-tight">Meetings</h1>
            <Button onClick={() => navigate("/fructonet/marketplace")}>
              <Plus className="mr-2 h-4 w-4" />
              Schedule New Meeting
            </Button>
          </div>
          
          <Tabs defaultValue="upcoming" value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="upcoming">
                Upcoming
                {confirmedMeetings.length > 0 && (
                  <span className="ml-1 px-1.5 py-0.5 text-xs bg-green-500 text-white rounded-full">
                    {confirmedMeetings.length}
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger value="pending">
                Pending Approval
                {pendingMeetings.length > 0 && (
                  <span className="ml-1 px-1.5 py-0.5 text-xs bg-amber-500 text-white rounded-full">
                    {pendingMeetings.length}
                  </span>
                )}
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming" className="mt-6">
              {renderMeetingsList(confirmedMeetings, "upcoming")}
            </TabsContent>
            
            <TabsContent value="pending" className="mt-6">
              {renderMeetingsList(pendingMeetings, "pending")}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
  
  function renderMeetingsList(meetings: typeof mockInvestor.meetings, type: "upcoming" | "pending") {
    if (meetings.length === 0) {
      return (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <CalendarDays className="h-12 w-12 mx-auto text-gray-400 mb-4" />
          <h3 className="text-xl font-medium mb-2">
            {type === "upcoming" ? "No upcoming meetings" : "No pending meetings"}
          </h3>
          <p className="text-muted-foreground mb-6">
            {type === "upcoming" 
              ? "You have no confirmed meetings with idea creators yet" 
              : "No meeting requests are awaiting confirmation"}
          </p>
          <Button onClick={() => navigate("/fructonet/marketplace")}>
            Browse Idea Marketplace
          </Button>
        </div>
      );
    }
    
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {meetings.map((meeting) => (
          <MeetingCard key={meeting.id} {...meeting} />
        ))}
      </div>
    );
  }
};

export default MeetingsPage;
