"use client";

import ThemeButton from "@/components/theme/ui/theme-button";
import { Alert, AlertIcon, AlertTitle } from "@/components/ui/alert";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Send } from "@/components/ui/icons/send-icon";
import { Input, InputWrapper, PhoneInput } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, Building2, Ghost, Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const FormSchema = z.object({
  name: z.string().min(2, "Минимум 2 символа"),
  phone: z.string().min(12, "Неверный формат"),
  email: z.string().email("Неверный формат"),
  company: z.string().optional(),
  comment: z.string().optional(),
});

const ContactsForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      company: "",
      comment: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log("Form submitted:", data);
    toast.custom((t) => (
      <Alert variant="mono" icon="primary" onClose={() => toast.dismiss(t)}>
        <AlertIcon>
          <AlertCircle />
        </AlertIcon>
        <AlertTitle>Your form has been successfully submitted</AlertTitle>
      </Alert>
    ));
  };

  const handleReset = () => {
    form.reset();
  };

  return (
    <div className="not-prose mx-auto w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Как вас зовут?</FormLabel>
                <FormControl>
                  <InputWrapper>
                    <Ghost />
                    <Input placeholder="Гендальф Белый" {...field} />
                  </InputWrapper>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid gap-2 md:grid-cols-2">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Телефон</FormLabel>
                  <FormControl>
                    <InputWrapper>
                      <Phone />
                      <PhoneInput country="RU" {...field} />
                    </InputWrapper>
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
                  <FormLabel>E-mail</FormLabel>
                  <InputWrapper>
                    <Mail />
                    <Input placeholder="gandalf@white.ru" {...field} />
                  </InputWrapper>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Название компании</FormLabel>
                <InputWrapper>
                  <Building2 />
                  <Input placeholder="Magic Laboratories Inc." {...field} />
                </InputWrapper>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Комментарий</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Задайте вопрос, что вас интересует..."
                    rows={3}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-center space-x-4">
            <ThemeButton variant="outline">
              Отправить <Send size={16} />
            </ThemeButton>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactsForm;
