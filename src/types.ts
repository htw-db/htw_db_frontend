// Menu
export interface MenuItemInterface {
  id: string;
  icon: string;
  label: string;
  to: string;
  subs: SubMenuItemInterface[];
}

export interface SubMenuItemInterface {
  id: string;
  icon: string;
  label: string;
  to: string;
}

// An instance is a database
export interface InstanceInterface {
  id: number;
  name: string;
  personId: number;
}
