export const headerGlobalData = {
  uk: {
    navItems: [
      {
        link: {
          type: 'custom' as const,
          label: 'Про нас',
          url: '/about',
        },
        icon: 'LuInfo',
        submenu: [
          {
            icon: 'LuBuilding',
            description: 'Історія компанії та наші досягнення',
            link: {
              type: 'custom' as const,
              label: 'Наша історія',
              url: '/about#history',
            },
          },
          {
            icon: 'LuUsers',
            description: 'Знайомство з нашою командою',
            link: {
              type: 'custom' as const,
              label: 'Команда',
              url: '/about#team',
            },
          },
          {
            icon: 'LuTarget',
            description: 'Місія, бачення та цінності компанії',
            link: {
              type: 'custom' as const,
              label: 'Місія і цінності',
              url: '/about#mission',
            },
          },
          {
            icon: 'LuTrophy',
            description: 'Наші нагороди та сертифікати',
            link: {
              type: 'custom' as const,
              label: 'Досягнення',
              url: '/about#achievements',
            },
          },
        ],
      },
      {
        link: {
          type: 'custom' as const,
          label: 'Продукти',
          url: '/products',
        },
        icon: 'LuBox',
        submenu: [
          {
            icon: 'LuWheat',
            description: 'Преміум зернова кукурудза',
            link: {
              type: 'custom' as const,
              label: 'Преміум зернова кукурудза',
              url: '/products/premium-grain-corn',
            },
          },
          {
            icon: 'LuPackage',
            description: 'Високоенергетична кормова кукурудза',
            link: {
              type: 'custom' as const,
              label: 'Кормова кукурудза',
              url: '/products/high-energy-feed-corn',
            },
          },
          {
            icon: 'LuLeaf',
            description: 'Сертифікована органічна кукурудза',
            link: {
              type: 'custom' as const,
              label: 'Органічна кукурудза',
              url: '/products/certified-organic-corn',
            },
          },
          {
            icon: 'LuGlobe',
            description: 'Спеціальна попкорн кукурудза',
            link: {
              type: 'custom' as const,
              label: 'Попкорн кукурудза',
              url: '/products/specialty-popcorn-corn',
            },
          },
        ],
      },
      {
        link: {
          type: 'custom' as const,
          label: 'Якість',
          url: '/quality',
        },
        icon: 'LuAward',
      },
      {
        link: {
          type: 'custom' as const,
          label: 'Логістика',
          url: '/logistics',
        },
        icon: 'LuTruck',
      },
      {
        link: {
          type: 'custom' as const,
          label: 'Новини',
          url: '/posts',
        },
        icon: 'LuNewspaper',
        submenu: [
          {
            icon: 'LuCog',
            description: 'Сучасні технології в кукурудзництві',
            link: {
              type: 'custom' as const,
              label: 'Сучасні технології',
              url: '/posts/modern-corn-technologies',
            },
          },
          {
            icon: 'LuTrendingUp',
            description: 'Експортні ринки для кукурудзи',
            link: {
              type: 'custom' as const,
              label: 'Експортні ринки',
              url: '/posts/corn-export-markets',
            },
          },
          {
            icon: 'LuSeedling',
            description: 'Практики сталого сільського господарства',
            link: {
              type: 'custom' as const,
              label: 'Сталі практики',
              url: '/posts/sustainable-agriculture-practices',
            },
          },
          {
            icon: 'LuTractor',
            description: 'Сезон збору врожаю 2024',
            link: {
              type: 'custom' as const,
              label: 'Врожай 2024',
              url: '/posts/harvest-season-2024',
            },
          },
        ],
      },
      {
        link: {
          type: 'custom' as const,
          label: 'Контакти',
          url: '/contact',
        },
        icon: 'LuPhone',
      },
    ],
  },
  en: {
    navItems: [
      {
        link: {
          type: 'custom' as const,
          label: 'About Us',
          url: '/about',
        },
        icon: 'LuInfo',
        submenu: [
          {
            icon: 'LuBuilding',
            description: 'Company history and our achievements',
            link: {
              type: 'custom' as const,
              label: 'Our History',
              url: '/about#history',
            },
          },
          {
            icon: 'LuUsers',
            description: 'Meet our team',
            link: {
              type: 'custom' as const,
              label: 'Team',
              url: '/about#team',
            },
          },
          {
            icon: 'LuTarget',
            description: 'Company mission, vision and values',
            link: {
              type: 'custom' as const,
              label: 'Mission & Values',
              url: '/about#mission',
            },
          },
          {
            icon: 'LuTrophy',
            description: 'Our awards and certifications',
            link: {
              type: 'custom' as const,
              label: 'Achievements',
              url: '/about#achievements',
            },
          },
        ],
      },
      {
        link: {
          type: 'custom' as const,
          label: 'Products',
          url: '/products',
        },
        icon: 'LuBox',
        submenu: [
          {
            icon: 'LuWheat',
            description: 'Premium grain corn',
            link: {
              type: 'custom' as const,
              label: 'Premium Grain Corn',
              url: '/products/premium-grain-corn',
            },
          },
          {
            icon: 'LuPackage',
            description: 'High-energy feed corn',
            link: {
              type: 'custom' as const,
              label: 'Feed Corn',
              url: '/products/high-energy-feed-corn',
            },
          },
          {
            icon: 'LuLeaf',
            description: 'Certified organic corn',
            link: {
              type: 'custom' as const,
              label: 'Organic Corn',
              url: '/products/certified-organic-corn',
            },
          },
          {
            icon: 'LuGlobe',
            description: 'Specialty popcorn corn',
            link: {
              type: 'custom' as const,
              label: 'Popcorn Corn',
              url: '/products/specialty-popcorn-corn',
            },
          },
        ],
      },
      {
        link: {
          type: 'custom' as const,
          label: 'Quality',
          url: '/quality',
        },
        icon: 'LuAward',
      },
      {
        link: {
          type: 'custom' as const,
          label: 'Logistics',
          url: '/logistics',
        },
        icon: 'LuTruck',
      },
      {
        link: {
          type: 'custom' as const,
          label: 'News',
          url: '/posts',
        },
        icon: 'LuNewspaper',
        submenu: [
          {
            icon: 'LuCog',
            description: 'Modern corn technologies',
            link: {
              type: 'custom' as const,
              label: 'Modern Technologies',
              url: '/posts/modern-corn-technologies',
            },
          },
          {
            icon: 'LuTrendingUp',
            description: 'Corn export markets',
            link: {
              type: 'custom' as const,
              label: 'Export Markets',
              url: '/posts/corn-export-markets',
            },
          },
          {
            icon: 'LuSeedling',
            description: 'Sustainable agriculture practices',
            link: {
              type: 'custom' as const,
              label: 'Sustainable Practices',
              url: '/posts/sustainable-agriculture-practices',
            },
          },
          {
            icon: 'LuTractor',
            description: 'Harvest season 2024',
            link: {
              type: 'custom' as const,
              label: 'Harvest 2024',
              url: '/posts/harvest-season-2024',
            },
          },
        ],
      },
      {
        link: {
          type: 'custom' as const,
          label: 'Contact',
          url: '/contact',
        },
        icon: 'LuPhone',
      },
    ],
  },
};
