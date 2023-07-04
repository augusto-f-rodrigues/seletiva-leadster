import './globals.css'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'

const pJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Leadster',
  description: 'Conheça as estratégias que mudaram o jogo e como aplicá-las no seu negócio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={pJakartaSans.className}>{children}</body>
    </html>
  )
}
