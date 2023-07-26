import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { UserProvider } from '@auth0/nextjs-auth0/client';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Over and Out',
  description: 'Products and services for Edge Computing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body className="bg-slate-900">{children}</body>
      </UserProvider>
    </html>
  )
}
