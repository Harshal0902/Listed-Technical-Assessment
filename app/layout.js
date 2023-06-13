import './globals.css'
import { Inter } from 'next/font/google'
import Provider from './context/AuthContext'
import ToasterContext from './context/ToasterContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Listed Frontend Developer Task',
  description: 'Created by Harshal Raikwar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <ToasterContext />
          {children}
        </Provider>
      </body>
    </html>
  )
}
