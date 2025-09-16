import type { Media } from '@/payload-types';

type FooterGlobalDataArgs = {
  image3Doc: Media;
};

export const footerGlobalData = (args: FooterGlobalDataArgs) => {
  const { image3Doc } = args;

  return {
    uk: {
      theme: 'dark' as const,
      layout: 'v1' as const,
      sbg: {
        variant: 'gradient and image' as const,
        gradientType: 'top and bottom' as const,
        img: image3Doc.id,
      },
      description: 'Український агрохолдинг - провідний виробник кукурудзи високої якості',
      navGroups: [
        {
          title: 'Компанія',
          navItems: [
            {
              link: {
                type: 'custom' as const,
                label: 'Головна',
                url: '/',
              },
            },
            {
              link: {
                type: 'custom' as const,
                label: 'Про нас',
                url: '/about',
              },
            },
            {
              link: {
                type: 'custom' as const,
                label: 'Новини компанії',
                url: '/posts',
              },
            },
          ],
        },
        {
          title: 'Продукція та послуги',
          navItems: [
            {
              link: {
                type: 'custom' as const,
                label: 'Каталог продуктів',
                url: '/products',
              },
            },
            {
              link: {
                type: 'custom' as const,
                label: 'Якість та сертифікація',
                url: '/quality',
              },
            },
            {
              link: {
                type: 'custom' as const,
                label: 'Логістика та доставка',
                url: '/logistics',
              },
            },
          ],
        },
        {
          title: 'Контакти та підтримка',
          navItems: [
            {
              link: {
                type: 'custom' as const,
                label: 'Контакти',
                url: '/contact',
              },
            },
            {
              link: {
                type: 'custom' as const,
                label: 'Панель адміна',
                url: '/admin',
              },
            },
          ],
        },
      ],
      newsletter: {
        enabled: true,
        title: 'Підпишіться на новини',
        description: 'Отримуйте останні новини про нашу продукцію та події',
        buttonText: 'Підписатися',
      },
      copyright: 'Український агрохолдинг',
    },
    en: {
      theme: 'dark' as const,
      layout: 'v1' as const,
      sbg: {
        variant: 'gradient and image' as const,
        gradientType: 'top and bottom' as const,
        img: image3Doc.id,
      },
      description: 'Ukrainian Agricultural Holding - Leading Producer of High-Quality Corn',
      navGroups: [
        {
          title: 'Company',
          navItems: [
            {
              link: {
                type: 'custom' as const,
                label: 'Home',
                url: '/',
              },
            },
            {
              link: {
                type: 'custom' as const,
                label: 'About Us',
                url: '/about',
              },
            },
            {
              link: {
                type: 'custom' as const,
                label: 'Company News',
                url: '/posts',
              },
            },
          ],
        },
        {
          title: 'Products and Services',
          navItems: [
            {
              link: {
                type: 'custom' as const,
                label: 'Product Catalog',
                url: '/products',
              },
            },
            {
              link: {
                type: 'custom' as const,
                label: 'Quality and Certification',
                url: '/quality',
              },
            },
            {
              link: {
                type: 'custom' as const,
                label: 'Logistics and Delivery',
                url: '/logistics',
              },
            },
          ],
        },
        {
          title: 'Contact and Support',
          navItems: [
            {
              link: {
                type: 'custom' as const,
                label: 'Contact',
                url: '/contact',
              },
            },
          ],
        },
      ],
      newsletter: {
        enabled: true,
        title: 'Subscribe to Newsletter',
        description: 'Get the latest news about our products and events',
        buttonText: 'Subscribe',
      },
      copyright: 'Ukrainian Agricultural Holding',
    },
  };
};
