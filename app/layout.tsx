import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cristobal Fuentealba',
  description: 'Fullstack web developer specializing in React, Next.js, Node.js and modern web technologies. Creating responsive and scalable web applications.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
