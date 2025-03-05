import { Nunito } from 'next/font/google';

import './globals.css'

import ToastProvider from './providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';
// Components
import Navbar from './components/navbar';
import ClientOnly from './components/ClientOnly';
// Modals
import RegisterModal from './components/modals/RegisterModal';
import LoginModal from './components/modals/LoginModal';
import RentModal from './components/modals/RentModal';
import SearchModal from './components/modals/SearchModal';
import Categories from './components/navbar/Categories';

export const metadata = {
  title: 'Urban Nest | Home',
  description: 'Urban Nest Estates',
  icon: {
    url: "/favicon.png",
    type: "image/png",
  },
  shortcut: { url: "/favicon.png", type: "image/png" },
}

const font = Nunito({
  subsets: ["latin"]
})

export default async function RootLayout({ children, }: { children: React.ReactNode }) {

  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToastProvider />
          <RegisterModal />
          <LoginModal />
          <RentModal />
          <SearchModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className='pb-20 pt-28 grid grid-cols-[100%] md:grid-cols-[15%_35%_50%] gap-5'>
          <div className='col-span-1 md:col-span-1'>
          <Categories/>
          </div>
          <div className='col-span-1 md:col-span-2'>
          {children}
          </div>
        </div>
      </body>
    </html>
  )
}
