// app/login/page.tsx
import { SignIn } from '@clerk/nextjs'

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn 
        routing='hash'
        afterSignInUrl="/admin/bookings"
        signUpUrl="/signup"
      />
    </div>
  )
}