import './globals.css'
import { Inter } from 'next/font/google'

// Load Inter font with specific weights
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: 'Professional Portfolio | Web & Mobile Developer',
  description: 'Professional portfolio showcasing web and mobile development projects, skills, and experience.',
  keywords: ['web developer', 'mobile developer', 'portfolio', 'react', 'next.js', 'frontend', 'backend'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    title: 'Professional Portfolio | Web & Mobile Developer',
    description: 'Professional portfolio showcasing web and mobile development projects, skills, and experience.',
    url: 'https://your-portfolio-url.com',
    siteName: 'Developer Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Developer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
