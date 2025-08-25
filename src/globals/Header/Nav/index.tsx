'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, SearchIcon, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

import { IconRenderer } from '@/components/IconRenderer';
import { CMSLink } from '@/components/Link';
import type { Header as HeaderType } from '@/payload-types';

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navItems = data?.navItems || [];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden items-center space-x-8 md:flex">
        {navItems.map((item, i) => (
          <div
            key={i}
            className="relative"
            onMouseEnter={() => setHoveredItem(item.link.label || '')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <CMSLink
              {...item.link}
              appearance="link"
              className="flex items-center py-2 text-secondary-600 transition-colors hover:text-primary-700 hover:no-underline"
            >
              {item.submenu && item.submenu.length > 0 && (
                <ChevronDown className="ml-1 size-4 transition-transform duration-200" />
              )}
            </CMSLink>

            {/* Submenu */}
            <AnimatePresence>
              {item.submenu && item.submenu.length > 0 && hoveredItem === item.link.label && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full w-64 overflow-hidden rounded-xl border border-secondary-100 bg-white shadow-xl"
                >
                  <div className="p-2">
                    {item.submenu.map((subItem, subIndex) => (
                      <CMSLink
                        key={subIndex}
                        {...{ ...subItem.link, label: null }}
                        className="group flex items-start space-x-3 rounded-lg p-3 transition-colors hover:bg-secondary-100"
                      >
                        {subItem.icon && (
                          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 transition-colors group-hover:bg-primary-100">
                            <IconRenderer
                              name={subItem.icon}
                              size={20}
                              className="size-5 text-primary-600"
                            />
                          </div>
                        )}
                        <div>
                          <div className="font-medium text-secondary-900 transition-colors group-hover:text-primary-700">
                            {subItem.link.label}
                          </div>
                          {subItem.description && (
                            <div className="text-sm text-secondary-500">{subItem.description}</div>
                          )}
                        </div>
                      </CMSLink>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        <Link href="/search">
          <span className="sr-only">Search</span>
          <SearchIcon className="w-5 text-secondary-600 transition-colors hover:text-primary-700" />
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

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute inset-x-0 top-full z-50 bg-white py-6 shadow-lg md:hidden"
          >
            <nav className="container mx-auto max-h-[calc(100vh-160px)] space-y-2 overflow-y-auto px-4">
              <Link
                href="/search"
                className="flex items-center gap-x-3 rounded-lg p-3 text-secondary-600 transition-colors hover:bg-secondary-100 hover:text-primary-700"
              >
                <SearchIcon className="size-5" />
                <span>Пошук</span>
                <span className="sr-only">Search</span>
              </Link>

              {navItems.map((item, i) => (
                <div key={i}>
                  <div
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between rounded-lg p-3 text-secondary-600 transition-colors hover:bg-secondary-100 hover:text-primary-700"
                  >
                    <CMSLink
                      {...{ ...item.link, label: null }}
                      className="flex items-center space-x-3"
                    >
                      {item.icon && <IconRenderer name={item.icon} size={20} className="size-5" />}
                      <span>{item.link.label}</span>
                    </CMSLink>
                    {item.submenu && item.submenu.length > 0 && <ChevronDown className="size-4" />}
                  </div>

                  {/* Mobile submenu */}
                  {item.submenu && item.submenu.length > 0 && (
                    <div className="ml-5 mt-1 space-y-1">
                      {item.submenu.map((subItem, subIndex) => (
                        <div
                          key={subIndex}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center space-x-3 rounded-lg p-3 text-secondary-500 transition-colors hover:bg-secondary-100 hover:text-primary-700"
                        >
                          <CMSLink
                            {...{ ...subItem.link, label: null }}
                            className="flex items-center space-x-3"
                          >
                            {subItem.icon && (
                              <IconRenderer name={subItem.icon} size={16} className="size-4" />
                            )}
                            <span>{subItem.link.label}</span>
                          </CMSLink>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
