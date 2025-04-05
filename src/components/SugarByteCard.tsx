
import { CoinsIcon, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SugarByteCardProps {
  balance: number;
}

const SugarByteCard = ({ balance }: SugarByteCardProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center bg-gradient-to-r from-amber-400 to-pink-600 text-white rounded-full px-3 py-1 mr-2 cursor-pointer">
            <CoinsIcon className="h-4 w-4 mr-1" />
            <span className="font-medium">{balance.toLocaleString()}</span>
            <Button variant="ghost" size="icon" className="h-5 w-5 ml-1 text-white p-0">
              <Plus className="h-3 w-3" />
            </Button>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Your SUGARByte (SByte) balance</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SugarByteCard;
