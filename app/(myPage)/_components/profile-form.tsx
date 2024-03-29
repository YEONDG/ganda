"use client"

import { useRouter } from "next/navigation"
import { updateUsername } from "@/apis/dashboard/dashboard"
import { zodResolver } from "@hookform/resolvers/zod"
import { User } from "@prisma/client"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { UsernameRequest, UsernameValidator } from "@/lib/validators/username"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

interface ProfileFormProps {
  user: Pick<User, "id"> & { username: string | null }
}

export const ProfileForm = ({ user }: ProfileFormProps) => {
  const router = useRouter()

  const form = useForm<UsernameRequest>({
    resolver: zodResolver(UsernameValidator),
    defaultValues: {
      username: user.username ?? "",
    },
  })

  const onSubmit = async (values: UsernameRequest) => {
    try {
      const response = await updateUsername(values)

      toast.success("닉네임 변경 완료.")
      router.refresh()
    } catch (error) {
      console.error("닉네임 변경 실패.", error)
      return toast.error("닉네임 변경 실패.")
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>닉네임 : {user.username}</FormLabel>
              <FormControl>
                <Input
                  placeholder="닉네임"
                  {...field}
                  className="bg-slate-200 dark:text-black"
                />
              </FormControl>
              <FormDescription>최소 2글자이상 최대 12글자이하.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">제출하기</Button>
      </form>
    </Form>
  )
}
