import './globals.css'

export const metadata = {
  title: 'Pooja Vishwakarma | Software Engineer',
  description: 'Portfolio of Pooja Vishwakarma, a full-stack software engineer.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
