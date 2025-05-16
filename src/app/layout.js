import './globals.css'
import { Inter, Poppins } from 'next/font/google'

// Load Inter font for body text
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

// Load Poppins font for headings
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700', '800']
})

export const metadata = {
  title: 'WebUmul Studios | Professional Web & Mobile Development for Small Businesses',
  description: 'WebUmul Studios provides professional website and mobile app development services tailored for small businesses. Get a stunning online presence that drives results.',
  keywords: ['web development', 'mobile app development', 'small business websites', 'business web design', 'affordable web development', 'professional web services', 'ecommerce websites', 'responsive design'],
  authors: [{ name: 'WebUmul Studios' }],
  creator: 'WebUmul Studios',
  openGraph: {
    title: 'WebUmul Studios | Professional Web & Mobile Development for Small Businesses',
    description: 'WebUmul Studios provides professional website and mobile app development services tailored for small businesses. Get a stunning online presence that drives results.',
    url: 'https://webcraftstudios.com',
    siteName: 'WebUmul Studios',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WebUmul Studios - Web & Mobile Development',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
