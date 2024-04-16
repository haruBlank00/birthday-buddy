import { zodResolver } from "@hookform/resolvers/zod";
import { isValid } from "date-fns";
import { z } from "zod";

const urlSchema = z.string().url({
  message: "Please enter a valid url.",
});

const uuidSchema = z.string().uuid({
  message: "Please enter a valid uuid.",
});

export const birthdaySchema = z.object({
  id: z
    .string()
    .default("")
    .refine((id) => {
      if (!id) return true;
      const result = uuidSchema.safeParse(id);
      return result.success;
    }),
  name: z
    .string({
      required_error: "Please enter a name.",
      invalid_type_error: "Please enter a valid name.",
    })
    .min(1, { message: "Please enter a name." }),
  dob: z
    .string()
    .refine(
      (dob) => isValid(new Date(dob)),
      "Please enter a valid date of birth."
    ),
  image: z.string().refine((image) => {
    if (!image) return true;
    const result = urlSchema.safeParse(image);
    return result.success;
  }, "Please enter a valid url."),
});

export type TBirthday = z.infer<typeof birthdaySchema>;

export const birthdaySchemaResolver = zodResolver(birthdaySchema);
