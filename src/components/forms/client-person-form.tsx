"use client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { z } from "zod";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { InputMask } from "@react-input/mask";
import BottomGradient from "../bottom-gradient";
import { Textarea } from "../ui/textarea";
import { Check, Trash } from "lucide-react";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

const formSchema = z.object({
  nickname: z.string().min(1).max(20),
  occupation: z.string(),
  buisinessType: z.string(),
  positioning: z.string().min(1).max(60),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  dateOfBirth: z.string(),
  country: z.string(),
  city: z.string(),
  phone: z
    .string()
    .regex(
      new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/)
    ),
  email: z.string().email(),
  telegram: z
    .string()
    .refine((value) => value.startsWith("@"), {
      message: "Telegram username must start with @",
    })
    .optional(),
  vk: z.string().optional(),
  site: z.string().optional(),
  businessTrips: z.boolean(),
  barter: z.boolean(),
  description: z.string().max(500),
});

type FormValues = z.infer<typeof formSchema>;

export default function ClientPersonForm() {
  const [isLoading, startTransition] = useTransition();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormValues) => {
    // startTransition(async () => {
    //   const res = await addSensor(data, { redirectUrl });
    //   if (res?.error) {
    //     toast.error(res.error.message);
    //   }
    // });
  };

  const [occupationOther, setOccupationOther] = useState(false);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 items-center"
      >
        <BottomGradient>Основная информация</BottomGradient>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-end w-full max-w-screen-lg">
          <FormField
            control={form.control}
            name="nickname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Псевдоним</FormLabel>
                <FormControl>
                  <Input
                    required
                    showInputLength
                    placeholder="Вдохновение"
                    disabled={isLoading}
                    {...field}
                    maxLength={20}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="occupation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Направление</FormLabel>
                <FormControl>
                  {occupationOther === false ? (
                    <Select
                      onValueChange={(value) => {
                        if (value === "other") {
                          setOccupationOther(true);
                          return field.onChange(undefined);
                        }
                        field.onChange(value);
                      }}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Организатор" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="m@supporrt.com">
                          Посередине
                        </SelectItem>
                        <Separator />

                        <SelectItem value="m@googlrrre.com">Вправо</SelectItem>
                        <Separator />

                        <SelectItem value="m@examplrre.com">Влево</SelectItem>
                        <Separator />

                        <SelectItem
                          value="other"
                          onClick={() => setOccupationOther(true)}
                        >
                          Другое
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    <Input
                      required
                      showInputLength
                      placeholder="Другое"
                      disabled={isLoading}
                      {...field}
                      maxLength={20}
                    />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="buisinessType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Форма занятости</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Физическое лицо" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="m@example.com">
                        Оптическое лицо
                      </SelectItem>
                      <Separator />
                      <SelectItem value="m@google.com">
                        Политическое лицо
                      </SelectItem>
                      <Separator />

                      <SelectItem value="m@support.com">
                        Фигуральное выражение
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="positioning"
            render={({ field }) => (
              <FormItem className="sm:col-span-3">
                <FormLabel>Позиционирование</FormLabel>
                <FormControl>
                  <Input
                    required
                    showInputLength
                    placeholder="Например, Топ в вашей нише..."
                    disabled={isLoading}
                    {...field}
                    maxLength={60}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Имя</FormLabel>
                <FormControl>
                  <Input
                    required
                    placeholder="Колобок"
                    disabled={isLoading}
                    {...field}
                    maxLength={20}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Фамилия</FormLabel>
                <FormControl>
                  <Input
                    required
                    placeholder="Румяный бок"
                    disabled={isLoading}
                    {...field}
                    maxLength={20}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dateOfBirth"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Дата рождения</FormLabel>
                <FormControl>
                  <InputMask
                    component={Input}
                    {...field}
                    mask="dd-mm-yyyy"
                    replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
                    placeholder="__-__-____"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Страна</FormLabel>
                <FormControl>
                  <Input
                    required
                    placeholder="Россия"
                    disabled={isLoading}
                    {...field}
                    maxLength={20}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Город</FormLabel>
                <FormControl>
                  <Input
                    required
                    placeholder="Санкт-Петербург"
                    disabled={isLoading}
                    {...field}
                    maxLength={20}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Номер телефона</FormLabel>
                <FormControl>
                  <InputMask
                    component={Input}
                    {...field}
                    placeholder="+7 (___) ___-__-__"
                    mask="+7 (bbb) ccc-dd-ee"
                    replacement={{
                      b: /\d/,
                      c: /\d/,
                      d: /\d/,
                      e: /\d/,
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Почта</FormLabel>
                <FormControl>
                  <Input
                    required
                    placeholder="example@gmail.com"
                    disabled={isLoading}
                    {...field}
                    maxLength={20}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="telegram"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Телеграм</FormLabel>
                <FormControl>
                  <Input
                    placeholder="@example"
                    disabled={isLoading}
                    {...field}
                    maxLength={20}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="vk"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ВК</FormLabel>
                <FormControl>
                  <Input
                    placeholder="TODO"
                    disabled={isLoading}
                    {...field}
                    maxLength={20}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="site"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Вебсайт</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://example.ru"
                    disabled={isLoading}
                    {...field}
                    maxLength={20}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="businessTrips"
            render={({ field }) => (
              <FormItem className="flex justify-start">
                <FormControl>
                  <div className="flex flex-row gap-2 items-center self-center">
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="w-10 h-10"
                    />
                    <FormLabel className="text-muted-foreground">
                      Готов к командировкам
                    </FormLabel>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="barter"
            render={({ field }) => (
              <FormItem className="flex justify-start">
                <FormControl>
                  <div className="flex flex-row gap-2 items-center self-center">
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="w-10 h-10"
                    />
                    <FormLabel className="text-muted-foreground">
                      Предлагать бартер
                    </FormLabel>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <BottomGradient>Инфо</BottomGradient>
        <div className="w-full max-w-screen-lg flex flex-col gap-3">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Описание</FormLabel>
                <FormControl>
                  <Textarea
                    required
                    showInputLength
                    placeholder="Обязательно опишите ваши ценности и цели, условия, на которых вам интересно сотрудничество."
                    disabled={isLoading}
                    {...field}
                    maxLength={500}
                    className="min-h-40"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormItem>
            <FormLabel>Видеовизитка</FormLabel>
            <div className="flex">
              <Input
                required
                placeholder="https:/vk.com/"
                className="rounded-r-none"
                containerClassName="grow"
              />
              <Button
                variant="outline-minimal"
                className="h-auto rounded-l-none"
                type="button"
              >
                <Check />
              </Button>
            </div>
          </FormItem>
          <FormItem className="space-y-4">
            <div>
              <FormLabel>Теговые слова</FormLabel>
              <FormDescription className="text-xs text-muted-foreground">
                (максимальное количество тегов - 10)
              </FormDescription>
            </div>

            <div className="flex flex-row gap-2">
              <Badge variant="ghost" className="flex gap-2 text-sm">
                <span>#Корпоративы</span>
                <Button variant="ghost" size="icon">
                  <Trash className="w-5 h-5" />
                </Button>
              </Badge>
              <Badge variant="ghost" className="flex gap-2 text-sm">
                <span>#Корпоративы</span>
                <Button variant="ghost" size="icon">
                  <Trash className="w-5 h-5" />
                </Button>
              </Badge>
            </div>
            <div className="flex">
              <Input
                required
                placeholder="https:/vk.com/"
                className="rounded-r-none"
                containerClassName="grow"
              />
              <Button
                variant="outline-minimal"
                className="h-auto rounded-l-none"
                type="button"
              >
                <Check />
              </Button>
            </div>
          </FormItem>
          <div className="flex flex-row justify-between items-center mt-11">
            <Button disabled={isLoading} variant="outline" type="button">
              {/* {isLoading && <RotateCw className="mr-2 h-4 w-4 animate-spin" />} */}
              Удалить профиль
            </Button>
            <Button disabled={isLoading} variant="secondary" type="submit">
              {/* {isLoading && <RotateCw className="mr-2 h-4 w-4 animate-spin" />} */}
              Сохранить
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
