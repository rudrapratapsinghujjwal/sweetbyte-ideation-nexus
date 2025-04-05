
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Home, Menu, LightbulbIcon, TrendingUp, User, LogOut, CreditCard } from "lucide-react";
import { mockUser } from '@/data/mockData';
import SugarByteCard from './SugarByteCard';

interface HeaderProps {
  portal: 'glucohub' | 'fructonet';
}

const Header = ({ portal }: HeaderProps) => {
  const [sbyteBalance] = useState(5230);
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                {portal === 'glucohub' ? (
                  <>
                    <Link to="/glucohub" className="flex items-center gap-2 text-lg font-medium">
                      <Home className="h-5 w-5" />
                      Dashboard
                    </Link>
                    <Link to="/glucohub/ideas" className="flex items-center gap-2 text-lg font-medium">
                      <LightbulbIcon className="h-5 w-5" />
                      My Ideas
                    </Link>
                    <Link to="/glucohub/analytics" className="flex items-center gap-2 text-lg font-medium">
                      <TrendingUp className="h-5 w-5" />
                      Analytics
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/fructonet" className="flex items-center gap-2 text-lg font-medium">
                      <Home className="h-5 w-5" />
                      Dashboard
                    </Link>
                    <Link to="/fructonet/marketplace" className="flex items-center gap-2 text-lg font-medium">
                      <LightbulbIcon className="h-5 w-5" />
                      Idea Marketplace
                    </Link>
                    <Link to="/fructonet/meetings" className="flex items-center gap-2 text-lg font-medium">
                      <TrendingUp className="h-5 w-5" />
                      Meetings
                    </Link>
                  </>
                )}
              </nav>
            </SheetContent>
          </Sheet>
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 to-pink-600 flex items-center justify-center">
              <span className="text-white font-extrabold text-xs">SB</span>
            </div>
            <span className="font-bold text-xl hidden md:inline-flex bg-gradient-to-r from-amber-400 to-pink-600 bg-clip-text text-transparent">
              {portal === 'glucohub' ? 'GlucoHub' : 'FructoNet'}
            </span>
          </Link>
        </div>
        
        <div className="hidden md:flex space-x-4">
          {portal === 'glucohub' ? (
            <>
              <Link to="/glucohub">
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <Link to="/glucohub/ideas">
                <Button variant="ghost">My Ideas</Button>
              </Link>
              <Link to="/glucohub/analytics">
                <Button variant="ghost">Analytics</Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/fructonet">
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <Link to="/fructonet/marketplace">
                <Button variant="ghost">Idea Marketplace</Button>
              </Link>
              <Link to="/fructonet/meetings">
                <Button variant="ghost">Meetings</Button>
              </Link>
            </>
          )}
        </div>

        <div className="flex items-center gap-2">
          <SugarByteCard balance={sbyteBalance} />
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={mockUser.profilePicture} alt={mockUser.username} />
                  <AvatarFallback>{mockUser.username.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{mockUser.username}</p>
                  <p className="text-xs leading-none text-muted-foreground">{mockUser.email}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
