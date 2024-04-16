import { BirthdayCard } from "@/components/birthday-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useDisclosure } from "@/hooks/useDisclosure";
import { TBirthday, TNewBirthday } from "@/types/schema";
import { Plus } from "lucide-react";
import { useState } from "react";
import { BirthdayFormDialogue } from "./components/birthday-form";
import { toast } from "sonner";

function App() {
  const [birthdays, setBirthdays] = useState<TBirthday[]>([]);
  const { isOpen, close, open } = useDisclosure();

  const onSubmit = (data: TNewBirthday) => {
    const newBirthday: TBirthday = {
      id: crypto.randomUUID(),
      name: data.name,
      dob: new Date(data.dob).toDateString(),
      image: data.image || "https://github.com/shadcn.png",
    };

    setBirthdays((birthdays) => [...birthdays, newBirthday]);
    toast("Birthday added successfully", {
      description: `You added birthday for ${data.name}`,
      icon: <Plus className="mr-4" />,
    });
  };

  const birthdayCards = birthdays.map((birthday) => (
    <BirthdayCard {...birthday} key={birthday.id} />
  ));

  return (
    <div className="h-screen bg-red-400 grid place-items-center">
      <BirthdayFormDialogue open={isOpen} close={close} onSubmit={onSubmit} />
      <Card className="w-[650px]">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            5 Birthdays Today
            <div>
              <Button onClick={open}>
                <Plus className="mr-2" />
                Add
              </Button>
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">{birthdayCards}</CardContent>
      </Card>
    </div>
  );
}

export default App;
