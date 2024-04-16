import { InputProps } from "@/components/ui/input";
import { UUID } from "crypto";

export type TBirthday = {
  id: UUID;
  name: string;
  dob: Date;
  image: string;
};

export interface InputField extends InputProps {
  label: string;
  placeholder: string;
  name: string;
}
