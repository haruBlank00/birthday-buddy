import { zodResolver } from "@hookform/resolvers/zod";
import { isValid } from "date-fns";
import { z } from "zod";
import { UUID } from "crypto";

const urlSchema = z.string().url({
  message: "Please enter a valid url",
});

export const birthdaySchema = z.object({
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

export type TNewBirthday = z.infer<typeof birthdaySchema>;
export type TBirthday = TNewBirthday & {
  id: UUID;
};
export const birthdaySchemaResolver = zodResolver(birthdaySchema);
