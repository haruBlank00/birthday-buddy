import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BirthdayCard } from "@/components/birthday-card";

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

        <CardContent className="space-y-4">
          <BirthdayCard
            dob={new Date("2022-01-01")}
            image="https://github.com/shadcn.png"
            name="Shadcn"
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
