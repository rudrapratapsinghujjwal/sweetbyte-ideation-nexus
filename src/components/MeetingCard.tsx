
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Video } from "lucide-react";

interface MeetingProps {
  id: number;
  ideaId: number;
  ideaTitle: string;
  creator: string;
  scheduledFor: string;
  status: string;
}

const MeetingCard = ({
  id,
  ideaId,
  ideaTitle,
  creator,
  scheduledFor,
  status,
}: MeetingProps) => {
  const formattedDate = new Date(scheduledFor).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short', 
    day: 'numeric'
  });
  
  const formattedTime = new Date(scheduledFor).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-md font-medium">Meeting with {creator}</CardTitle>
          <Badge 
            variant={status === 'Confirmed' ? 'default' : 'outline'}
            className={status === 'Confirmed' ? 'bg-green-500' : ''}
          >
            {status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="font-medium mb-2 text-md line-clamp-1">
          Re: {ideaTitle}
        </h3>
        
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-1 text-gray-400" />
            {formattedDate}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-1 text-gray-400" />
            {formattedTime}
          </div>
        </div>
        
        <Button 
          variant="outline" 
          className="w-full mt-2"
          disabled={status !== 'Confirmed'}
        >
          <Video className="h-4 w-4 mr-2" />
          {status === 'Confirmed' ? 'Join Meeting' : 'Meeting Pending'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default MeetingCard;
