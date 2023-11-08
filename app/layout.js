import './globals.css'

export const metadata = {
  title: 'Sirv CDN with Next Image',
  description: 'A demo showcasing the use of Sirv CDN with Next Image',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
