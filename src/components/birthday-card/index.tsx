import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TBirthday } from "@/types/schema";
import { differenceInYears } from "date-fns";
import { Edit2, Trash2 } from "lucide-react";

type BirthdayCardProps = {
  onEditBirthday: (id: string) => void;
  onDeleteBirthday: (id: string) => void;
} & TBirthday;

export const BirthdayCard = ({
  name,
  dob,
  image,
  id,
  onDeleteBirthday,
  onEditBirthday,
}: BirthdayCardProps) => {
  const age = differenceInYears(new Date(), dob);
  const ageString = age > 1 ? `${age} years` : `${age} year`;

  return (
    <div className="shadow-md p-4 flex items-center gap-x-4 hover:scale-105 transition-transform cursor-pointer">
      <Avatar className="h-16 w-16">
        <AvatarImage src={image} />
        <AvatarFallback>{name}</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-2xl capitalize font-semibold">{name}</p>
        <p className="text-gray-400">{ageString}</p>
      </div>

      <div className="ml-auto flex items-center gap-4">
        <Trash2
          className="w-8 h-8 hover:bg-red-600 hover:text-white rounded-md p-2 box-content"
          onClick={() => onDeleteBirthday(id)}
        />
        <Edit2
          className="w-8 h-8 hover:bg-yellow-600 hover:text-white rounded-md p-2 box-content"
          onClick={() => onEditBirthday(id)}
        />
      </div>
    </div>
  );
};
