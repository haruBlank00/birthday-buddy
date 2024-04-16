import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type TBirthdayCardProps = {
  name: string;
  dob: Date;
  image: string;
};
export const BirthdayCard = ({ name, dob, image }: TBirthdayCardProps) => {
  return (
    <div className="shadow-md p-4 flex items-center gap-x-4 hover:scale-105 transition-transform cursor-pointer">
      <Avatar className="h-16 w-16">
        <AvatarImage src={image} />
        <AvatarFallback>{name}</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-2xl capitalize font-semibold">{name}</p>
        <p className="text-gray-400">{dob.toLocaleDateString()}</p>
      </div>
    </div>
  );
};
