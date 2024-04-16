import { InputField } from "@/types";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";

type FormBuilderProps<T extends FieldValues> = {
  fields: InputField[];
  form: UseFormReturn<T>;
};
export function FormBuilder<T extends FieldValues>({
  fields,
  form,
}: FormBuilderProps<T>) {
  return fields.map((field) => {
    const { label, name, type, placeholder } = field;

    return (
      <FormField
        key={name}
        control={form.control}
        name={name as Path<T>}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input
                {...field}
                type={type || "text"}
                placeholder={placeholder}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      ></FormField>
    );
  });
}
