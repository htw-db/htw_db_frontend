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
    ],
  },
  {
    id: 'Help',
    icon: 'iconsminds-library',
    label: 'Docs',
    to: '/app/docs',
    subs: [
      {
        id: 'Contact',
        icon: 'simple-icon-bubble',
        label: 'Contact',
        to: '/app/docs/contact',
      },
    ],
  },
];
