
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { CalendarIcon, ArrowLeft, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { mockIdeas } from "@/data/mockData";

const formSchema = z.object({
  date: z.date({
    required_error: "Please select a date for the meeting.",
  }),
  time: z.string({
    required_error: "Please select a time for the meeting.",
  }),
  notes: z.string().optional(),
});

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", 
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
  "05:00 PM"
];

const ScheduleMeetingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const idea = mockIdeas.find(idea => idea.id === Number(id));
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      notes: "",
    },
  });

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

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would send the meeting request to the server
    console.log(values);
    
    toast({
      title: "Meeting Requested",
      description: `Your meeting request for ${format(values.date, "PPP")} at ${values.time} has been sent to the innovator.`,
    });
    
    setIsSubmitted(true);
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header portal="fructonet" />
      <main className="flex-1 py-6 px-4 sm:px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <Button 
            variant="ghost" 
            className="mb-4"
            onClick={() => navigate(`/fructonet/marketplace/${id}`)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Idea Details
          </Button>
          
          <h1 className="text-3xl font-bold mb-2">Schedule a Meeting</h1>
          <p className="text-muted-foreground mb-6">
            Set up a meeting with the innovator to discuss the idea in detail
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Idea Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-medium mb-2">{idea.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                    {idea.shortDescription.substring(0, 100)}...
                  </p>
                  <div className="flex justify-between text-sm font-medium">
                    <span>Price:</span>
                    <span className="flex items-center">
                      <span className="text-amber-500 mr-1">₿</span>
                      {idea.price.toLocaleString()} SByte
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-2">
              {isSubmitted ? (
                <Card>
                  <CardContent className="pt-6 text-center">
                    <CheckCircle className="w-12 h-12 mx-auto text-green-500 mb-4" />
                    <h2 className="text-2xl font-bold mb-2">Meeting Request Sent!</h2>
                    <p className="text-muted-foreground mb-6">
                      Your meeting request has been sent to the innovator. You'll receive a notification once they confirm the meeting.
                    </p>
                    <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
                      <Button onClick={() => navigate("/fructonet/meetings")}>
                        View My Meetings
                      </Button>
                      <Button variant="outline" onClick={() => navigate("/fructonet/marketplace")}>
                        Back to Marketplace
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>Meeting Details</CardTitle>
                    <CardDescription>
                      Select your preferred date and time for the meeting
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                          control={form.control}
                          name="date"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>Date</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className={cn(
                                        "w-full pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(field.value, "PPP")
                                      ) : (
                                        <span>Pick a date</span>
                                      )}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) => {
                                      // Disable past dates and weekends
                                      const today = new Date();
                                      today.setHours(0, 0, 0, 0);
                                      const day = date.getDay();
                                      return date < today || day === 0 || day === 6;
                                    }}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormDescription>
                                Business days only (Monday-Friday)
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="time"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Time</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a time slot" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {timeSlots.map((time) => (
                                    <SelectItem key={time} value={time}>{time}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormDescription>
                                All times are in your local timezone
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="notes"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Additional Notes (Optional)</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Share any specific topics you'd like to discuss during the meeting"
                                  className="resize-none"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="flex justify-end gap-3">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => navigate(`/fructonet/marketplace/${id}`)}
                          >
                            Cancel
                          </Button>
                          <Button type="submit">
                            Request Meeting
                          </Button>
                        </div>
                      </form>
                    </Form>
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

export default ScheduleMeetingPage;
