
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ChevronRight, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface IdeaRatings {
  originality: number;
  marketFit: number;
  profitability: number;
  technicalFeasibility: number;
}

interface IdeaCardProps {
  id: number;
  title: string;
  shortDescription: string;
  createdAt: string;
  price: number;
  ratings: IdeaRatings;
  status: string;
  category: string;
  isInvestorView?: boolean;
  onViewDetails?: (id: number) => void;
  onScheduleMeeting?: (id: number) => void;
}

const IdeaCard = ({
  id,
  title,
  shortDescription,
  createdAt,
  price,
  ratings,
  status,
  category,
  isInvestorView = false,
  onViewDetails,
  onScheduleMeeting
}: IdeaCardProps) => {
  // Calculate overall score (average of all ratings)
  const overallScore = Math.round(
    (ratings.originality + ratings.marketFit + ratings.profitability + ratings.technicalFeasibility) / 4
  );
  
  // Format the date
  const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  // For investor view, we'll blur or truncate the description
  const processedDescription = isInvestorView 
    ? shortDescription.substring(0, Math.floor(shortDescription.length * 0.25)) + "..." 
    : shortDescription;

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

  const getRatingColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 80) return 'text-blue-500';
    if (score >= 70) return 'text-amber-500';
    return 'text-red-500';
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold line-clamp-1">{title}</CardTitle>
            <CardDescription className="flex items-center mt-1 text-sm">
              <Clock className="mr-1 h-3.5 w-3.5" />
              {formattedDate}
            </CardDescription>
          </div>
          <Badge className={cn("ml-2", getBadgeColor(status))}>
            {status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Badge variant="outline" className="mb-3">
            {category}
          </Badge>
          <p className={cn("text-sm text-gray-600 line-clamp-3", 
            isInvestorView && "blur-sm hover:blur-[2px]")}>
            {processedDescription}
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="flex flex-col items-center p-2 bg-gray-50 rounded-md">
            <span className="text-xs text-gray-500">Overall Score</span>
            <span className={cn("text-lg font-bold", getRatingColor(overallScore))}>
              {overallScore}%
            </span>
          </div>
          <div className="flex flex-col items-center p-2 bg-gray-50 rounded-md">
            <span className="text-xs text-gray-500">Price</span>
            <span className="text-lg font-bold flex items-center">
              <span className="text-amber-500 mr-1">₿</span>
              {price.toLocaleString()}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        <Button 
          variant="ghost" 
          className="text-blue-600 p-0"
          onClick={() => onViewDetails && onViewDetails(id)}
        >
          View Details
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
        
        {isInvestorView && status === 'Open' && (
          <Button 
            variant="outline" 
            className="text-blue-600 border-blue-600"
            onClick={() => onScheduleMeeting && onScheduleMeeting(id)}
          >
            <Award className="mr-1 h-4 w-4" />
            Schedule Meeting
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default IdeaCard;
