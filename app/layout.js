import './globals.css'
import { Inter } from 'next/font/google'
import Provider from './context/AuthContext'
import ToasterContext from './context/ToasterContext'
import Sidebar from './components/sidebar'
import Header from './components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Listed Frontend Developer Task',
  description: 'Created by Harshal Raikwar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F5F5F5]">
        <Provider>
          <ToasterContext />
          <Sidebar />
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  )
}
