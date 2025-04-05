
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

const DescriptionFields = ({ control }) => {
  return (
    <>
      <FormField
        control={control}
        name="shortDescription"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Short Description</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Provide a brief overview of your idea (visible to investors)"
                className="resize-none"
                {...field}
              />
            </FormControl>
            <FormDescription>
              A concise summary that will appear in marketplace listings.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={control}
        name="fullDescription"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Full Description</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Detailed explanation of your concept, implementation, and potential impact"
                className="min-h-[150px]"
                {...field}
              />
            </FormControl>
            <FormDescription>
              This will only be visible to investors after they schedule a meeting.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default DescriptionFields;
