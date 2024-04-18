import ClientPersonForm from "@/components/forms/client-person-form";
import PersonBackgroundLeft from "@/components/icons/person-background-left";
import PersonBackgroundMobileLeft from "@/components/icons/person-background-mobile-left";
import PersonBackgroundMobileRight from "@/components/icons/person-background-mobile-right";
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
          className="grow p-1 bg-gradient-to-r from-primary-light via-primary-mid to-primary-mid max-w-[492px]"
          value="client"
        >
          <div className="py-5 px-3 sm:px-6 bg-white w-full rounded-common text-sm sm:text-lg">
            Заказчик
          </div>
        </TabsTrigger>
        <TabsTrigger
          className="grow p-1 bg-gradient-to-l from-primary-light via-primary-mid to-primary-mid max-w-[492px]"
          value="freelancer"
        >
          <div className="py-5 px-3 sm:px-6 bg-white w-full rounded-common test-sm sm:text-lg">
            Исполнитель
          </div>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="client">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-row justify-between w-full">
              <PersonBackgroundLeft className="hidden sm:block" />
              <PersonBackgroundMobileLeft className="sm:hidden" />
              <Avatar className="w-32 h-32 sm:w-64 sm:h-64 shadow-avatar">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <div className="absolute h-12 flex justify-center items-center w-full backdrop-blur-md">
                  <span className="text-primary-foreground text-sm font-light">
                    Изменить
                  </span>
                </div>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <PersonBackgroundRight className="hidden sm:block" />
              <PersonBackgroundMobileRight className="sm:hidden" />
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
          <ClientPersonForm />
        </div>
      </TabsContent>
      <TabsContent value="freelancer"></TabsContent>
    </Tabs>
  );
}
