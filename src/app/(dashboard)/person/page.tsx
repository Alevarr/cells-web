import PersonBackgroundLeft from "@/components/icons/person-background-left";
import PersonBackgroundRight from "@/components/icons/person-background-right";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function page() {
  return (
    <Tabs defaultValue="client" className="">
      <TabsList className="flex flex-row w-full h-auto justify-between bg-transparent text-primary mb-12 gap-6">
        <TabsTrigger
          className="grow p-1 bg-gradient-to-r from-primary-light via-primary-mid to-primary-mid max-w-[492px] rounded-[15px]"
          value="client"
        >
          <div className="py-5 px-3 sm:px-6 bg-white w-full rounded-[15px] text-sm sm:text-lg">
            Заказчик
          </div>
        </TabsTrigger>
        <TabsTrigger
          className="grow p-1 bg-gradient-to-l from-primary-light via-primary-mid to-primary-mid max-w-[492px] rounded-[15px]"
          value="freelancer"
        >
          <div className="py-5 px-3 sm:px-6 bg-white w-full rounded-[15px] test-sm sm:text-lg">
            Исполнитель
          </div>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="client">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-row justify-between w-full">
              <PersonBackgroundLeft className="relative" />
              <Avatar className="w-32 h-32 sm:w-64 sm:h-64 shadow-avatar">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <PersonBackgroundRight className="relative" />
            </div>
            <RadioGroup defaultValue="person" className="flex flex-col gap-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="person" id="r1" className="" />
                <Label htmlFor="r1" className="text-muted-foreground">
                  Персона
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="group" id="r2" className="" />
                <Label htmlFor="r2" className="text-muted-foreground">
                  Коллектив
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div className="pb-[3px] bg-gradient-to-r from-transparent via-primary to-transparent">
            <h2 className="text-primary-dark bg-white pb-2 text-center text-lg">
              Основная информация
            </h2>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="freelancer"></TabsContent>
    </Tabs>
  );
}
