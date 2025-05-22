// app/login/layout.tsx
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#152328] text-white min-h-screen flex items-center justify-center p-4">
      {children}
    </div>
  );
}