import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'glightbox/dist/css/glightbox.css'
import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

import TopBar from './components/TopBar'
import Header from './components/Header'
import BackToTopBtn from './components/BackToTopBtn'
import ClientAOSWrapper from './components/ClientAOSWrapper' // <-- AOS wrapper

const playfair = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Thief Restaurant',
  description: 'Restaurant reservation site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: '#d77a61',
          colorText: '#d8b4a0',
          colorBackground: '#1f333d',
          colorInputBackground: '#152328',
        },
        elements: {
          formButtonPrimary: 'bg-[#d77a61] hover:bg-[#c96c56]',
          card: 'bg-[#1f333d] shadow-2xl',
          headerTitle: 'text-[#d8b4a0]',
          headerSubtitle: 'text-[#d8b4a0]',
          socialButtonsBlockButton: 'border-[#d77a61]',
          dividerLine: 'bg-[#d77a61]',
          formFieldInput: 'bg-[#152328] border-[#d77a61] text-white',
          footerActionText: 'text-[#d8b4a0]',
        }
      }}
    >
      <html lang="en">
        <body className={playfair.variable}>
          <TopBar />
          <Header />

          <ClientAOSWrapper>
            {children}
          </ClientAOSWrapper>

          <BackToTopBtn />

          <Script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-C6RzsynM9kWDrMNeT87bh950GNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        </body>
      </html>
    </ClerkProvider>
  )
}
