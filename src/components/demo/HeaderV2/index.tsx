'use client'

import type React from 'react'

import { motion, AnimatePresence } from 'motion/react'
import Link from 'next/link'
import {
  Menu,
  X,
  ChevronDown,
  Sprout,
  Info,
  Newspaper,
  Phone,
  ShoppingBag,
  Users,
  Building2,
} from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

// Типи для підменю
type MenuItem = {
  label: string
  href: string
  icon?: React.ElementType
  submenu?: {
    label: string
    href: string
    description?: string
    icon?: React.ElementType
  }[]
}

// Структура меню
const menuItems: MenuItem[] = [
  {
    label: 'Про нас',
    href: '#про-нас',
    icon: Info,
    submenu: [
      {
        label: 'Історія компанії',
        href: '#історія',
        description: 'Дізнайтеся більше про нашу історію та цінності',
        icon: Building2,
      },
      {
        label: 'Команда',
        href: '#команда',
        description: 'Познайомтеся з нашими експертами',
        icon: Users,
      },
    ],
  },
  {
    label: 'Продукти',
    href: '#продукти',
    icon: ShoppingBag,
    submenu: [
      {
        label: 'Попкорн',
        href: '#попкорн',
        description: 'Преміальна кукурудза для попкорну',
        icon: Sprout,
      },
      {
        label: 'Зернові культури',
        href: '#зернові',
        description: 'Різноманітні зернові культури найвищої якості',
        icon: Sprout,
      },
    ],
  },
  {
    label: 'Новини',
    href: '#новини',
    icon: Newspaper,
  },
  {
    label: 'Контакти',
    href: '#контакти',
    icon: Phone,
  },
]

export default function HeaderV2() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-2"
          >
            <Link href="/" className="flex items-center space-x-2">
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
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center text-gray-600 hover:text-green-700 transition-colors py-2"
                  >
                    <span>{item.label}</span>
                    {item.submenu && (
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200" />
                    )}
                  </Link>
                </motion.div>

                {/* Підменю */}
                <AnimatePresence>
                  {item.submenu && hoveredItem === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-64 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                    >
                      <div className="p-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors group"
                          >
                            {subItem.icon && (
                              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                                <subItem.icon className="w-5 h-5 text-green-600" />
                              </div>
                            )}
                            <div>
                              <div className="font-medium text-gray-900 group-hover:text-green-700 transition-colors">
                                {subItem.label}
                              </div>
                              {subItem.description && (
                                <div className="text-sm text-gray-500">{subItem.description}</div>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
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
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-6"
            >
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between p-3 text-gray-600 hover:text-green-700 hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center space-x-3">
                        {item.icon && <item.icon className="w-5 h-5" />}
                        <span>{item.label}</span>
                      </div>
                      {item.submenu && <ChevronDown className="h-4 w-4" />}
                    </Link>

                    {/* Мобільне підменю */}
                    {item.submenu && (
                      <div className="ml-5 mt-1 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="flex items-center space-x-3 p-3 text-gray-500 hover:text-green-700 hover:bg-gray-50 rounded-lg transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.icon && <subItem.icon className="w-4 h-4" />}
                            <span>{subItem.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
