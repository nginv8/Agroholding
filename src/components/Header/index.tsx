'use client'

import * as motion from 'motion/react-client'
import Link from 'next/link'
import { Mail, Menu, Phone, SearchIcon, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky -top-8 left-0 right-0 z-50 bg-transparent"
    >
      <div className="bg-green-700">
        <div className="container mx-auto px-4 flex justify-center md:justify-between items-center h-8 gap-8">
          <Link
            href="tel:+96 733 324 996"
            className="text-white hover:text-orange-200 transition-colors flex items-center"
          >
            <Phone size={18} className="mr-2" />
            +96 733 324 996
          </Link>
          <Link
            href="mailto:agroholdeing@gmail.com"
            className="text-white hover:text-orange-200 transition-colors md:flex items-center ml-4 hidden "
          >
            <Mail size={18} className="mr-2" />
            agroholdeing@gmail.com
          </Link>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-md border-b absolute left-0 right-0">
        <div className="container mx-auto px-4 ">
          <div className="flex items-center justify-between h-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/" className="text-2xl font-bold text-green-800">
                AgroHolding
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/search">
                <span className="sr-only">Search</span>
              </Link>
              {['Про нас', 'Продукти', 'Новини', 'Контакти'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-green-700 transition-colors"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <SearchIcon className="w-5 text-gray-600 hover:text-green-700 transition-colors" />
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-4"
            >
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/search"
                  className="flex items-center space-x-2 text-gray-600 hover:text-green-700 transition-colors"
                >
                  <SearchIcon className="size-4" />
                  <span>Пошук</span>
                  <span className="sr-only">Search</span>
                </Link>
                {['Про нас', 'Продукти', 'Новини', 'Контакти'].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-green-700 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </div>
      </div>
    </motion.header>
  )
}
