'use client'

import { useEffect, useState, useRef } from 'react'
import type { TextFieldClientComponent } from 'payload'
import { useField } from '@payloadcms/ui'
import * as lucideIcons from 'react-icons/lu'
import { FixedSizeList as List } from 'react-window'
import { LuChevronDown, LuSearch, LuX } from 'react-icons/lu'

import type React from 'react'

const IconSelectField: TextFieldClientComponent = ({ path, field }) => {
  const { value, setValue } = useField<string>({ path })
  const [options, setOptions] = useState<{ label: string; value: string }[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const IconComponent = value
    ? (lucideIcons[value as keyof typeof lucideIcons] as React.ElementType)
    : null

  const handleClear = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    setValue('')
    setSearchTerm('')
  }

  const handleSelect = (optionValue: string) => {
    setValue(optionValue)
    setSearchTerm('')
    setIsSearching(false)
    setIsOpen(false)
  }

  const toggleSearch = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsSearching(!isSearching)
    setIsOpen((state) => !state)

    setTimeout(() => {
      if (!isSearching && searchInputRef.current) {
        searchInputRef.current.focus()
      }
    }, 10)
  }

  const handleOutsideClick = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsOpen(false)
      setIsSearching(false)
      setSearchTerm('')
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    const iconOptions = Object.keys(lucideIcons).map((iconName) => ({
      label: iconName,
      value: iconName,
    }))

    setOptions(iconOptions)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      {/* Label */}
      <label
        htmlFor={path}
        style={{
          display: 'block',
          marginBottom: '0.25rem',
        }}
      >
        {String(field?.label) || 'Icon'}
        {field?.required && <span style={{ color: 'var(--theme-accent)' }}>*</span>}
      </label>

      {/* Select Container */}
      <div style={{ position: 'relative' }} ref={selectRef}>
        {/* Select Input */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0.5rem 0.75rem',
            width: '100%',
            height: '40px',
            backgroundColor: 'var(--theme-input-bg)',
            border: '1px solid var(--theme-elevation-150)',
            borderRadius: '3px',
            boxShadow: isOpen
              ? '0 0 0 1px var(--theme-elevation-500)'
              : '0 1px 2px var(--theme-elevation-150)',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onClick={toggleSearch}
        >
          {isSearching ? (
            // Search Input
            <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <LuSearch
                style={{ color: 'var(--theme-elevation-400)', marginRight: '0.5rem' }}
                size={16}
              />
              <input
                ref={searchInputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search icons..."
                style={{
                  width: '100%',
                  backgroundColor: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: 'var(--theme-elevation-800)',
                }}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          ) : (
            // Show Selected Icon
            <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              {IconComponent ? (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <IconComponent
                    style={{ marginRight: '0.5rem', color: 'var(--theme-elevation-600)' }}
                    size={18}
                  />
                  <span style={{ color: 'var(--theme-elevation-800)' }}>{value}</span>
                </div>
              ) : (
                <span style={{ color: 'var(--theme-elevation-400)' }}>None</span>
              )}
            </div>
          )}

          {/* Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: '0.5rem' }}>
            {/* Clean Button */}
            {value && (
              <button
                type="button"
                onClick={handleClear}
                style={{
                  padding: '0.25rem',
                  borderRadius: '0.25rem',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  marginRight: '0.25rem',
                }}
                aria-label="Deselect icon"
              >
                <LuX size={16} />
              </button>
            )}

            {/* Select Arrow */}
            <div
              style={{
                color: 'var(--theme-elevation-400)',
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s ease',
              }}
            >
              <LuChevronDown size={16} />
            </div>
          </div>
        </div>

        {/* Dropdown */}
        {isOpen && (
          <div
            style={{
              position: 'absolute',
              zIndex: 50,
              width: '100%',
              marginTop: '2px',
              backgroundColor: 'var(--theme-bg)',
              borderRadius: '3px',
              boxShadow:
                '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 10px 16px 0 rgba(0, 0, 0, 0.1)',
            }}
          >
            {/* Icon List */}
            <div style={{ overflow: 'hidden' }}>
              {filteredOptions.length > 0 ? (
                <List
                  height={Math.min(filteredOptions.length * 36, 240)}
                  itemCount={filteredOptions.length}
                  itemSize={36}
                  width="100%"
                  style={{ overflowX: 'hidden' }}
                >
                  {({ index, style }) => {
                    const option = filteredOptions[index]
                    if (!option) return null

                    const SelectedIcon = lucideIcons[option?.value as keyof typeof lucideIcons] as
                      | React.ElementType
                      | undefined

                    const isSelected = option.value === value

                    return (
                      <div
                        key={option.value}
                        style={{
                          ...style,
                          padding: '8px 14px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          backgroundColor: isSelected ? 'var(--theme-elevation-50)' : 'transparent',
                        }}
                        onClick={() => handleSelect(option.value)}
                      >
                        {SelectedIcon && (
                          <SelectedIcon
                            style={{
                              marginRight: '8px',
                              flexShrink: 0,
                            }}
                            size={20}
                          />
                        )}
                        <span
                          style={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {option.label}
                        </span>
                      </div>
                    )
                  }}
                </List>
              ) : (
                <div
                  style={{
                    padding: '1rem 0.75rem',
                    textAlign: 'center',
                    color: 'var(--theme-elevation-400)',
                    fontSize: '0.875rem',
                  }}
                >
                  No icons found
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default IconSelectField
