
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CoinsIcon } from "lucide-react";
import { CATEGORIES } from "./schema";

const CategoryPriceFields = ({ control }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <FormField
        control={control}
        name="category"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Category</FormLabel>
            <Select 
              onValueChange={field.onChange} 
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {CATEGORIES.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormDescription>
              Choose the most relevant category for your idea.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={control}
        name="price"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Price (SByte)</FormLabel>
            <FormControl>
              <div className="flex items-center space-x-2">
                <CoinsIcon className="h-4 w-4 text-amber-500" />
                <Input 
                  type="number" 
                  onChange={e => field.onChange(parseFloat(e.target.value))}
                  value={field.value}
                />
              </div>
            </FormControl>
            <FormDescription>
              Set the amount of SUGARByte tokens for your idea.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default CategoryPriceFields;
