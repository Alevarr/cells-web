"use client";
import {
  Form,
  FormControl,
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
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { z } from "zod";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { InputMask } from "@react-input/mask";

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

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <div className="pb-[3px] bg-gradient-to-r from-transparent via-primary to-transparent">
          <h2 className="text-primary-dark bg-white pb-2 text-center text-lg">
            Основная информация
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-end">
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
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Организатор" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="m@example.com">Влево</SelectItem>
                      <SelectItem value="m@google.com">Вправо</SelectItem>
                      <SelectItem value="m@support.com">Посередине</SelectItem>
                    </SelectContent>
                  </Select>
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
                      <SelectItem value="m@google.com">
                        Политическое лицо
                      </SelectItem>
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

        <Button disabled={isLoading} className="ml-auto w-full" type="submit">
          {/* {isLoading && <RotateCw className="mr-2 h-4 w-4 animate-spin" />} */}
          Сохранить
        </Button>
      </form>
    </Form>
  );
}
