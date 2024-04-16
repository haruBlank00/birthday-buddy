import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { differenceInYears } from "date-fns";

type TBirthdayCardProps = {
  name: string;
  dob: Date;
  image: string;
};
export const BirthdayCard = ({ name, dob, image }: TBirthdayCardProps) => {
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
    </div>
  );
};
