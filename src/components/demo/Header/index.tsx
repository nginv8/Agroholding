'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Menu, Phone, SearchIcon, X } from 'lucide-react';
import * as motion from 'motion/react-client';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky inset-x-0 -top-8 z-50 bg-transparent"
    >
      <div className="bg-green-700">
        <div className="container mx-auto flex h-8 items-center justify-center gap-8 px-4 md:justify-between">
          <Link
            href="tel:+96 733 324 996"
            className="flex items-center font-light text-white transition-colors hover:text-orange-200"
          >
            <Phone size={18} className="mr-2" />
            +96 733 324 996
          </Link>
          <Link
            href="mailto:agroholdeing@gmail.com"
            className="ml-4 hidden items-center font-light text-white transition-colors hover:text-orange-200 md:flex"
          >
            <Mail size={18} className="mr-2" />
            agroholdeing@gmail.com
          </Link>
        </div>
      </div>

      <div className="absolute inset-x-0 border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/" className="text-2xl font-bold text-green-800">
                <Image
                  src="/logo.svg"
                  alt="Наша команда"
                  width="160"
                  height="48"
                  className="h-14 w-auto"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden items-center space-x-8 md:flex">
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
                    className="text-gray-600 transition-colors hover:text-green-700"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <SearchIcon className="w-5 text-gray-600 transition-colors hover:text-green-700" />
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
              className="pb-4 md:hidden"
            >
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/search"
                  className="flex items-center space-x-2 text-gray-600 transition-colors hover:text-green-700"
                >
                  <SearchIcon className="size-4" />
                  <span>Пошук</span>
                  <span className="sr-only">Search</span>
                </Link>
                {['Про нас', 'Продукти', 'Новини', 'Контакти'].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 transition-colors hover:text-green-700"
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
  );
}
