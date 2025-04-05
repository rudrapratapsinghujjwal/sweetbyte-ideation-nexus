
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const BasicInfoFields = ({ control }) => {
  return (
    <FormField
      control={control}
      name="title"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Idea Title</FormLabel>
          <FormControl>
            <Input placeholder="Enter a catchy, descriptive title" {...field} />
          </FormControl>
          <FormDescription>
            Make it concise but memorable.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default BasicInfoFields;
