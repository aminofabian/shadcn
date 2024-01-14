import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ShadCNThemeProvider } from '@/providers/shadCNProvider/shadCNProvider';
import NavBar from '@/components/NavBar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
    <ShadCNThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
    >
    {children}
    </ShadCNThemeProvider>
    </body>
    </html>
    )
  }
  