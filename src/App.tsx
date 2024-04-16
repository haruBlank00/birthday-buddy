import { BirthdayCard } from "@/components/birthday-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { birthdayFormFields } from "@/forms/birthday-form";
import {
  TBirthday,
  TNewBirthday,
  birthdaySchemaResolver,
} from "@/types/schema";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormBuilder } from "./components/form-builder";

function App() {
  const [birthdays, setBirthdays] = useState<TBirthday[]>([]);
  const form = useForm({
    mode: "all",
    resolver: birthdaySchemaResolver,
    defaultValues: {
      name: "",
      dob: "",
      image: undefined,
    },
  });

  const onSubmitHandler = (data: TNewBirthday) => {
    const newBirthday: TBirthday = {
      id: crypto.randomUUID(),
      name: data.name,
      dob: new Date(data.dob).toDateString(),
      image: data.image || "https://github.com/shadcn.png",
    };

    setBirthdays((birthdays) => [...birthdays, newBirthday]);
    form.reset();
  };

  return (
    <div className="h-screen bg-red-400 grid place-items-center">
      <Card className="w-[650px]">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            5 Birthdays Today
            <div>
              <button>Add </button>
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <Form {...form}>
            <form
              className="space-y-4"
              onSubmit={form.handleSubmit(onSubmitHandler)}
            >
              <FormBuilder fields={birthdayFormFields} form={form} />
              <Button className="w-full">Add birthday</Button>
            </form>
          </Form>

          {birthdays.map((birthday) => (
            <BirthdayCard {...birthday} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
