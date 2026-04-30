import { Geist } from "next/font/google"
import "./globals.css"
import Providers from "../components/Providers"

const geist = Geist({
  subsets: ["latin"],
})

export const metadata = {
  title: "ReadSocial",
  description: "Rede social literária",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={geist.className}>
      <body className="bg-[#f6f1ed] dark:bg-[#120e0c] text-[#2f211d] dark:text-[#f2e7df] transition-colors duration-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}