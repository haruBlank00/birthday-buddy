import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { birthdayFormFields } from "@/forms/birthday-form";
import { TNewBirthday, birthdaySchemaResolver } from "@/types/schema";
import { useForm } from "react-hook-form";
import { FormBuilder } from "@/components/form-builder";
import { useRef } from "react";

type BirthdayFormDialogueProps = {
  open: boolean;
  close: () => void;
  onSubmit: (data: TNewBirthday) => void;
};

export const BirthdayFormDialogue = ({
  open,
  close,
  onSubmit,
}: BirthdayFormDialogueProps) => {
  const submitBtn = useRef<HTMLButtonElement>(null);
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
    onSubmit(data);
    onClose();
  };

  const onClose = () => {
    form.reset();
    close();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a new birthday</DialogTitle>
          <DialogDescription>
            Enter the name and date of birth of the person you want to add
          </DialogDescription>
        </DialogHeader>

        <div>
          <Form {...form}>
            <form
              className="space-y-4"
              onSubmit={form.handleSubmit(onSubmitHandler)}
            >
              <FormBuilder fields={birthdayFormFields} form={form} />
              <Button className="w-full hidden" ref={submitBtn}>
                Add birthday
              </Button>
            </form>
          </Form>
        </div>

        <DialogFooter>
          <Button onClick={() => submitBtn.current?.click()}>Create</Button>
          <Button variant={"outline"} onClick={onClose}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
