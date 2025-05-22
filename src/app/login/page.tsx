// app/login/page.tsx
import { SignIn } from '@clerk/nextjs';
import './page.css';

export default function LoginPage() {
  return (
    <div className="log flex justify-center items-center min-h-screen">
      <SignIn 
        routing='hash'
        afterSignInUrl="/admin/bookings"
        signUpUrl="/signup"
      />
    </div>
  )
}