import { MenuItemInterface } from '../types';

export const menuItems: MenuItemInterface[] = [
  {
    id: 'databases',
    icon: 'iconsminds-data-cloud',
    label: 'Database',
    to: '/app/databases',
    subs: [
      {
        id: 'postgres',
        icon: 'simple-icon-doc',
        label: 'PostgreSQL',
        to: '/app/databases/postgres',
      },
      {
        id: 'mongodb',
        icon: 'simple-icon-docs',
        label: 'MongoDB',
        to: '/app/databases/mongodb',
      },
    ],
  },
  {
    id: 'docs',
    icon: 'iconsminds-library',
    label: 'Docs',
    to: '/app/docs',
    subs: [
      {
        id: 'faq',
        icon: 'simple-icon-bubble',
        label: 'FAQ',
        to: '/app/docs/faq',
      },
      {
        id: 'changelog',
        icon: 'simple-icon-shuffle',
        label: 'Changelog',
        to: '/app/docs/changelog',
      },
    ],
  },
];
