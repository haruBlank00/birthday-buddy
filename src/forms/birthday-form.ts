import { InputField } from "@/types";

export const birthdayFormFields: InputField[] = [
  {
    name: "name",
    placeholder: "John doe",
    type: "text",
    label: "Name",
  },
  {
    name: "dob",
    placeholder: "2022-01-01",
    type: "date",
    label: "Date of birth",
  },
  {
    name: "image",
    placeholder: "https://example.com/image.jpg",
    type: "text",
    label: "Profile Image",
  },
];
