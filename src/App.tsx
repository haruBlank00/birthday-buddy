import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function App() {
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

        <CardContent>
          <div className="shadow p-4 flex items-center gap-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>Ben</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-2xl capitalize font-semibold">Ben</p>
              <p className="text-gray-400">29 years</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
