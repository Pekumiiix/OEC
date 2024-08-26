"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { toast } from "sonner";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email("Input a valid email address"),
  phone: z.string().min(11, {
    message: "Input a valid phone number",
  }),
  company: z.string().min(0, {
    message: "",
  }),
  message: z.string().min(2, {
    message: "Feild cannot be left blank",
  }),
});

export default function ContactMain() {
  const [isChecked, setChecked] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    console.log(values);
    toast.success("Submitted successfully");
    form.reset(); // Use the toast here
  };

  const handleCheckboxChange = (e: any) => {
    setChecked(e.target.checked);
  };

  return (
    <main className="flex gap-x-5 gap-y-5 w-full">
      <div className="container w-full flex flex-wrap gap-y-[64px] justify-between">
        <section className="flex flex-col gap-[64px]">
          <div className="flex flex-col">
            <p className="text-[#212529] text-[40px]">Location</p>
            <p className="text-[#424649] text-lg">
              Avenida Marta Lopes, Nº2 8400-401 <br /> Vila Real, Portugal
            </p>
          </div>

          <div className="flex flex-col">
            <p className="text-[#212529] text-[40px]">Open hours</p>
            <p className="text-[#424649] text-lg">
              Weekdays - 9:00am to 6:00pm <br /> Weekends - Closed
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-10 max-w-[779px]">
          <p className="text-[#212529] text-[40px]">Form</p>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-wrap gap-x-5 gap-y-5"
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="w-full md:w-[48.5%] md:max-w-[380px]">
                    <FormLabel className="text-lg text-[rgba(33,37,41,0.5)]">
                      Username
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full md:w-[48.5%] md:max-w-[380px]">
                    <FormLabel className="text-lg text-[rgba(33,37,41,0.5)]">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Email address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="w-full md:w-[48.5%] md:max-w-[380px]">
                    <FormLabel className="text-lg text-[rgba(33,37,41,0.5)]">
                      Phone number
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem className="w-full md:w-[48.5%] md:max-w-[380px]">
                    <FormLabel className="text-lg text-[rgba(33,37,41,0.5)]">
                      Company
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Company(optional)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="min-w-full">
                    <FormLabel className="text-lg text-[rgba(33,37,41,0.5)]">
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter message here" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="w-full flex items-center space-x-2">
                <input
                  id="consent"
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor="consent"
                  className="text-sm sm:text-lg text-[#424649] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I consent to Oakland C.E. processing my data for contact
                  purposes.
                </label>
              </div>

              <Button
                type="submit"
                disabled={isChecked ? false : true}
                className="bg-[#212529] px-5 py-3.5 rounded-[40px] text-lg text-white h-[57px] hover:bg-white hover:text-[#212529]"
              >
                Submit
              </Button>
            </form>
          </Form>
        </section>
      </div>
    </main>
  );
}
