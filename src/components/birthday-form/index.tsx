import { FormBuilder } from "@/components/form-builder";
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
import { TBirthday } from "@/types/schema";
import { useRef } from "react";
import { UseFormReturn } from "react-hook-form";

type BirthdayFormDialogueProps = {
  open: boolean;
  close: () => void;
  onSubmit: (data: TBirthday) => void;
  form: UseFormReturn<TBirthday>;
};

export const BirthdayFormDialogue = ({
  open,
  close,
  onSubmit,
  form,
}: BirthdayFormDialogueProps) => {
  const submitBtn = useRef<HTMLButtonElement>(null);

  const onSubmitHandler = (data: TBirthday) => {
    onSubmit(data);
    onClose();
  };

  const onClose = () => {
    form.reset({
      dob: "",
      image: "",
      name: "",
      id: "",
    });
    close();
  };

  const haveId = Boolean(form.getValues("id"));
  const title = haveId ? "Edit birthday" : "Add birthday";
  const description = haveId ? "Edit your birthday" : "Add your birthday";
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <div>
          <Form {...form}>
            <form
              className="space-y-4"
              onSubmit={form.handleSubmit(onSubmitHandler)}
            >
              <FormBuilder fields={birthdayFormFields} form={form} />
              <Button className="w-full hidden" ref={submitBtn} type="submit">
                {title}
              </Button>
            </form>
          </Form>
        </div>

        <DialogFooter>
          <Button onClick={() => submitBtn.current?.click()} type="button">
            {title}
          </Button>
          <Button variant={"outline"} onClick={onClose} type="button">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
