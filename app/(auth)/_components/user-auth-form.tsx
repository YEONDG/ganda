import { signIn } from "next-auth/react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"

const UserAuthForm = ({ text }: { text: string }) => {
  const loginWithKakao = async () => {
    try {
      await signIn("kakao")
    } catch (error) {
      toast.error("로그인 실패")
    }
  }

  const loginWithGoogle = async () => {
    try {
      await signIn("google")
    } catch (error) {
      toast.error("로그인 실패")
    }
  }

  const loginWithNaver = async () => {
    try {
      await signIn("naver")
    } catch (error) {
      toast.error("로그인 실패")
    }
  }
  return (
    <div className="flex flex-col gap-2">
      <Button onClick={loginWithKakao}>카카오 {text}</Button>
      <Button onClick={loginWithGoogle}>구글 {text}</Button>
      <Button onClick={loginWithNaver}>네이버 {text}</Button>
    </div>
  )
}

export default UserAuthForm
