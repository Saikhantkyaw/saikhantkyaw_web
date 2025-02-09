import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
          Sai Khant Kyaw
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="#about" className="text-gray-600 hover:text-gray-800">
              About
            </Link>
          </li>
          <li>
            <Link href="#services" className="text-gray-600 hover:text-gray-800">
              Services
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-gray-600 hover:text-gray-800">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

