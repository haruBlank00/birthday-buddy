import { BirthdayCard } from "@/components/birthday-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useDisclosure } from "@/hooks/useDisclosure";
import { TBirthday, birthdaySchemaResolver } from "@/types/schema";
import { formatISO } from "date-fns";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { BirthdayFormDialogue } from "./components/birthday-form";

function App() {
  const [birthdays, setBirthdays] = useState<TBirthday[]>([]);
  const {
    isOpen: isFormOpen,
    close: closeForm,
    open: openForm,
  } = useDisclosure();

  const onSubmit = (data: TBirthday) => {
    const haveId = Boolean(data.id);
    if (haveId) {
      setBirthdays((birthdays) =>
        birthdays.map((birthday) => {
          if (birthday.id === data.id) {
            return data;
          }
          return birthday;
        })
      );
      toast("Birthday updated successfully", {
        description: `You updated birthday for ${data.name}`,
        icon: <Plus className="mr-4" />,
      });
      return;
    }
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

  const form = useForm({
    mode: "onSubmit",
    resolver: birthdaySchemaResolver,
    defaultValues: {
      id: "",
      name: "",
      dob: "",
      image: "",
    },
  });

  const deleteBirthdayHandler = (id: string) => {
    setBirthdays((birthdays) =>
      birthdays.filter((birthday) => birthday.id !== id)
    );
    toast("Birthday deleted successfully", {
      description: `You deleted a birthday`,
    });
  };

  const editBirthdayHandler = (id: string) => {
    const birthdayToEdit = birthdays.find((birthday) => birthday.id === id);
    if (!birthdayToEdit) {
      toast("Something went wrong", {
        description: `Couldn't find birthday with id ${id}`,
      });
      return;
    }

    form.reset({
      ...birthdayToEdit,
      dob: formatISO(new Date(birthdayToEdit.dob), {
        representation: "date",
      }),
    });
    openForm();
  };

  const birthdayCards = birthdays.map((birthday) => (
    <BirthdayCard
      {...birthday}
      key={birthday.id}
      onEditBirthday={editBirthdayHandler}
      onDeleteBirthday={deleteBirthdayHandler}
    />
  ));

  const birthdaysCount = birthdays.length;
  return (
    <div className="h-screen bg-red-400 grid place-items-center">
      <BirthdayFormDialogue
        open={isFormOpen}
        close={closeForm}
        onSubmit={onSubmit}
        form={form}
      />
      <Card className="w-[650px]">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            {birthdaysCount} Birthdays Today
            <div>
              <Button onClick={openForm}>
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
