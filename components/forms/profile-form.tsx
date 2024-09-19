"use client";
import { EditUserProfileSchema } from "@/lib/types";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Loader2 } from "lucide-react";
type Props = {
  user: any;
  onUpdate?: any;
};

function ProfileForm(props: Props) {
  const [isLoading, setisLoading] = useState(false);
  const form = useForm<z.infer<typeof EditUserProfileSchema>>({
    mode: "onChange",
    resolver: zodResolver(EditUserProfileSchema),
    defaultValues: {
      name: props.user.name,
      email: props.user.email,
    },
  });
  async function handleSubmit(values: z.infer<typeof EditUserProfileSchema>) {
    setisLoading(true);
    await props.onUpdate(values.name);
    setisLoading(false);
  }

  useEffect(() => {
    form.reset({ name: props.user.name, email: props.user.email });
  }, [props.user]);

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          disabled={isLoading}
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">User full name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Name" />
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
              <FormLabel className="text-lg">Email</FormLabel>
              <FormControl>
                <Input
                  disabled={true}
                  {...field}
                  placeholder="fuzzie@fuzzie.com"
                  type="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="self-start hover:bg-[#2F006B] hover:text-white"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 hw-4 w-4 animate-spin" />
              Saving
            </>
          ) : (
            "Save Settings"
          )}
        </Button>
      </form>
    </Form>
  );
}

export default ProfileForm;
