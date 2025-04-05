
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { BrainCircuit } from "lucide-react";

interface Rating {
  originality: number;
  marketFit: number;
  profitability: number;
  technicalFeasibility: number;
}

interface AiAnalysisSectionProps {
  aiAnalyzing: boolean;
  ratings: Rating;
  onAnalyze: () => void;
}

const AiAnalysisSection = ({ aiAnalyzing, ratings, onAnalyze }: AiAnalysisSectionProps) => {
  const hasRatings = Object.values(ratings).some(value => value > 0);
  
  const getRatingColor = (score: number) => {
    if (score >= 90) return "text-green-500";
    if (score >= 80) return "text-blue-500";
    if (score >= 70) return "text-amber-500";
    return "text-red-500";
  };
  
  return (
    <div className="border rounded-lg p-4 bg-gray-50">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-lg">AI-Powered Idea Analysis</h3>
        <Button 
          type="button" 
          variant="outline" 
          onClick={onAnalyze}
          disabled={aiAnalyzing}
        >
          <BrainCircuit className="mr-2 h-4 w-4" />
          {aiAnalyzing ? "Analyzing..." : "Analyze My Idea"}
        </Button>
      </div>
      
      {!hasRatings && !aiAnalyzing && (
        <div className="text-sm text-gray-500 italic">
          Click "Analyze My Idea" to get AI-generated ratings for your concept.
        </div>
      )}
      
      {aiAnalyzing && (
        <div className="flex items-center justify-center py-6">
          <div className="animate-pulse flex flex-col items-center">
            <BrainCircuit className="h-10 w-10 text-blue-500 mb-2" />
            <p className="text-sm text-gray-600">Our AI is evaluating your idea...</p>
          </div>
        </div>
      )}
      
      {hasRatings && !aiAnalyzing && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Originality</label>
            <div className="flex items-center mt-1">
              <Slider
                value={[ratings.originality]}
                max={100}
                step={1}
                disabled
                className="mr-3"
              />
              <span className={`font-bold ${getRatingColor(ratings.originality)}`}>
                {ratings.originality}%
              </span>
            </div>
          </div>
          
          <div>
            <label className="text-sm font-medium">Market Fit</label>
            <div className="flex items-center mt-1">
              <Slider
                value={[ratings.marketFit]}
                max={100}
                step={1}
                disabled
                className="mr-3"
              />
              <span className={`font-bold ${getRatingColor(ratings.marketFit)}`}>
                {ratings.marketFit}%
              </span>
            </div>
          </div>
          
          <div>
            <label className="text-sm font-medium">Profitability</label>
            <div className="flex items-center mt-1">
              <Slider
                value={[ratings.profitability]}
                max={100}
                step={1}
                disabled
                className="mr-3"
              />
              <span className={`font-bold ${getRatingColor(ratings.profitability)}`}>
                {ratings.profitability}%
              </span>
            </div>
          </div>
          
          <div>
            <label className="text-sm font-medium">Technical Feasibility</label>
            <div className="flex items-center mt-1">
              <Slider
                value={[ratings.technicalFeasibility]}
                max={100}
                step={1}
                disabled
                className="mr-3"
              />
              <span className={`font-bold ${getRatingColor(ratings.technicalFeasibility)}`}>
                {ratings.technicalFeasibility}%
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AiAnalysisSection;
