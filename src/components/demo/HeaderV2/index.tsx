'use client';

import type React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Building2,
  ChevronDown,
  Info,
  Mail,
  Menu,
  Newspaper,
  Phone,
  SearchIcon,
  ShoppingBag,
  Sprout,
  Users,
  X,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

// Типи для підменю
type MenuItem = {
  label: string;
  href: string;
  icon?: React.ElementType;
  submenu?: {
    label: string;
    href: string;
    description?: string;
    icon?: React.ElementType;
  }[];
};

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
];

export default function HeaderV2() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky inset-x-0 -top-8 z-50 border-b bg-white/80 backdrop-blur-md"
    >
      {/* Contacts */}
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

      <div className="container mx-auto px-4">
        {/* Header content */}
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
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
          <nav className="hidden items-center space-x-8 md:flex">
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
                    className="flex items-center py-2 text-gray-600 transition-colors hover:text-green-700"
                  >
                    <span>{item.label}</span>
                    {item.submenu && (
                      <ChevronDown className="ml-1 size-4 transition-transform duration-200" />
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
                      className="absolute left-0 top-full mt-2 w-64 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl"
                    >
                      <div className="p-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="group flex items-start space-x-3 rounded-lg p-3 transition-colors hover:bg-gray-50"
                          >
                            {subItem.icon && (
                              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-green-50 transition-colors group-hover:bg-green-100">
                                <subItem.icon className="size-5 text-green-600" />
                              </div>
                            )}
                            <div>
                              <div className="font-medium text-gray-900 transition-colors group-hover:text-green-700">
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
            <Link href="/search">
              <span className="sr-only">Search</span>
              <SearchIcon className="w-5 text-gray-600 transition-colors hover:text-green-700" />
            </Link>
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
              className="pb-6 md:hidden"
            >
              <nav className="space-y-2">
                <Link
                  href="/search"
                  className="flex items-center space-x-3 p-3 text-gray-600 transition-colors hover:bg-gray-50 hover:text-green-700"
                >
                  <SearchIcon className="size-5" />
                  <span>Пошук</span>
                  <span className="sr-only">Search</span>
                </Link>
                {menuItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between rounded-lg p-3 text-gray-600 transition-colors hover:bg-gray-50 hover:text-green-700"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center space-x-3">
                        {item.icon && <item.icon className="size-5" />}
                        <span>{item.label}</span>
                      </div>
                      {item.submenu && <ChevronDown className="size-4" />}
                    </Link>

                    {/* Мобільне підменю */}
                    {item.submenu && (
                      <div className="ml-5 mt-1 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="flex items-center space-x-3 rounded-lg p-3 text-gray-500 transition-colors hover:bg-gray-50 hover:text-green-700"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.icon && <subItem.icon className="size-4" />}
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
  );
}
