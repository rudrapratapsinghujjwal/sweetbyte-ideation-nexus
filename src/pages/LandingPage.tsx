
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Lightbulb, TrendingUp, Zap, Lock, Shield, LineChart, Brain } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 to-pink-600 flex items-center justify-center">
              <span className="text-white font-extrabold text-xs">SB</span>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-amber-400 to-pink-600 bg-clip-text text-transparent">
              Sugarverse
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-primary">Features</a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-primary">How It Works</a>
            <a href="#about" className="text-sm font-medium hover:text-primary">About SUGARByte</a>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/glucohub">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link to="/glucohub">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-white to-amber-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Where Innovative Ideas Meet Smart Capital
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Sugarverse connects idea creators with investors through a secure, 
                    transparent marketplace powered by SUGARByte cryptocurrency.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link to="/glucohub">
                    <Button size="lg" className="bg-gradient-to-r from-amber-400 to-pink-600">
                      For Innovators
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/fructonet">
                    <Button size="lg" variant="outline">
                      For Investors
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[350px] md:h-[420px] md:w-[420px]">
                  <div className="absolute top-0 left-0 h-full w-full rounded-full bg-gradient-to-br from-amber-200 to-pink-300 opacity-20 blur-3xl"></div>
                  <div className="relative flex h-full items-center justify-center">
                    {/* Replace with your actual platform preview/graphic */}
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="border-2 border-amber-200 shadow-lg">
                        <CardContent className="p-4 flex items-center space-x-4">
                          <Lightbulb className="h-8 w-8 text-amber-500" />
                          <div>
                            <div className="font-bold">GlucoHub</div>
                            <div className="text-sm text-gray-500">For Innovators</div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="border-2 border-pink-200 shadow-lg">
                        <CardContent className="p-4 flex items-center space-x-4">
                          <TrendingUp className="h-8 w-8 text-pink-500" />
                          <div>
                            <div className="font-bold">FructoNet</div>
                            <div className="text-sm text-gray-500">For Investors</div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="col-span-2 border-2 border-gradient shadow-lg">
                        <CardContent className="p-4 flex items-center justify-center">
                          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 to-pink-600 flex items-center justify-center mr-3">
                            <span className="text-white font-extrabold text-xs">SB</span>
                          </div>
                          <div className="font-bold text-lg bg-gradient-to-r from-amber-400 to-pink-600 bg-clip-text text-transparent">
                            SUGARByte Token
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section id="features" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Powerful Platform Features
              </h2>
              <p className="mt-4 text-gray-500 md:text-xl">
                Sugarverse combines cutting-edge technology with intuitive design to create a seamless experience.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-amber-100">
                    <Brain className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold">AI-Powered Idea Analysis</h3>
                  <p className="text-gray-500">
                    Our advanced algorithms evaluate ideas based on originality, market fit, profitability, 
                    and technical feasibility to provide objective ratings.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-pink-100">
                    <Lock className="h-6 w-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold">Secure Idea Protection</h3>
                  <p className="text-gray-500">
                    Only 25% of your idea is visible to investors until they schedule a meeting, 
                    ensuring your intellectual property remains protected.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-blue-100">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold">Transparent Marketplace</h3>
                  <p className="text-gray-500">
                    Browse, filter, and search for ideas that match your investment criteria,
                    with clear ratings and categorization.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-green-100">
                    <LineChart className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold">Advanced Analytics</h3>
                  <p className="text-gray-500">
                    Track performance metrics, monitor investment trends, and gain insights
                    into market opportunities.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-purple-100">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold">Smart Contracts</h3>
                  <p className="text-gray-500">
                    Secure, transparent transactions and idea transfers powered by blockchain
                    technology and smart contracts.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-yellow-100">
                    <Zap className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold">Native SUGARByte Currency</h3>
                  <p className="text-gray-500">
                    Our platform token (SByte) powers all transactions, rewards innovation,
                    and creates a self-sustaining ecosystem.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                How Sugarverse Works
              </h2>
              <p className="mt-4 text-gray-500 md:text-xl">
                A simple yet powerful process connecting innovators with investors
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-amber-500">For Innovators (GlucoHub)</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">Submit Your Idea</h4>
                      <p className="text-gray-500">
                        Create a detailed description of your concept, including potential market impact and implementation.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">Get AI Analysis</h4>
                      <p className="text-gray-500">
                        Our system evaluates your idea based on key metrics and provides objective ratings.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">Set Your Price</h4>
                      <p className="text-gray-500">
                        Determine the value of your idea in SUGARByte tokens based on its potential and complexity.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold">Connect With Investors</h4>
                      <p className="text-gray-500">
                        Meet with interested investors to discuss your idea in detail and finalize deals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-pink-500">For Investors (FructoNet)</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">Browse the Marketplace</h4>
                      <p className="text-gray-500">
                        Explore ideas with partial visibility, filterable by category, rating, and price.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">Schedule Meetings</h4>
                      <p className="text-gray-500">
                        Connect with innovators to learn more about promising ideas that interest you.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">Unlock Full Details</h4>
                      <p className="text-gray-500">
                        After the meeting, gain complete access to the idea's specifications and analysis.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold">Invest with SUGARByte</h4>
                      <p className="text-gray-500">
                        Complete secure transactions using our native token to acquire innovative ideas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* About SUGARByte Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                    Powered by SUGARByte
                  </h2>
                  <p className="text-gray-500 md:text-xl">
                    Our native cryptocurrency that fuels the entire Sugarverse ecosystem
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-500">
                    SUGARByte (SByte) is more than just a token – it's the lifeblood of our platform. 
                    By creating a dedicated cryptocurrency for idea transactions, we establish a secure, 
                    transparent, and self-sustaining marketplace.
                  </p>
                  <p className="text-gray-500">
                    Every transaction, from idea submission to investment, is powered by SByte, creating
                    a vibrant economy of innovation. As the platform grows, so does the value and utility
                    of SUGARByte tokens.
                  </p>
                  <p className="text-gray-500">
                    Smart contracts built on blockchain technology ensure that all transactions are secure,
                    transparent, and immutable – protecting both creators and investors.
                  </p>
                </div>
                <div>
                  <Button className="bg-gradient-to-r from-amber-400 to-pink-600">
                    Learn More About SUGARByte
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <div className="relative h-[350px] w-[350px] md:h-[420px] md:w-[420px]">
                  <div className="absolute top-0 left-0 h-full w-full rounded-full bg-gradient-to-br from-amber-200 to-pink-300 opacity-20 blur-3xl"></div>
                  <div className="relative flex h-full w-full items-center justify-center">
                    <div className="h-32 w-32 rounded-full bg-gradient-to-br from-amber-400 to-pink-600 flex items-center justify-center shadow-xl">
                      <span className="text-white font-extrabold text-3xl">SB</span>
                    </div>
                    {/* Token visualization details */}
                    <div className="absolute top-1/4 left-3/4 h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center shadow-md">
                      <Lightbulb className="h-6 w-6 text-amber-600" />
                    </div>
                    <div className="absolute top-2/3 left-1/4 h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center shadow-md">
                      <TrendingUp className="h-6 w-6 text-pink-600" />
                    </div>
                    <div className="absolute top-1/2 right-1/6 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center shadow-md">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-amber-400 to-pink-600">
          <div className="container px-4 md:px-6 text-white">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Ready to Join Sugarverse?
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl/relaxed">
                  Whether you're an innovator with groundbreaking ideas or an investor seeking the next big opportunity,
                  Sugarverse is your gateway to a new economy of innovation.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to="/glucohub">
                  <Button size="lg" variant="secondary">
                    For Innovators
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/fructonet">
                  <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                    For Investors
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-amber-400 to-pink-600 flex items-center justify-center">
              <span className="text-white font-extrabold text-[8px]">SB</span>
            </div>
            <span className="font-semibold bg-gradient-to-r from-amber-400 to-pink-600 bg-clip-text text-transparent">
              Sugarverse
            </span>
          </div>
          <p className="text-xs text-gray-500">
            © 2023 Sugarverse. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs hover:underline underline-offset-4">
              Terms
            </a>
            <a href="#" className="text-xs hover:underline underline-offset-4">
              Privacy
            </a>
            <a href="#" className="text-xs hover:underline underline-offset-4">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
