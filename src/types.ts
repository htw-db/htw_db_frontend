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

// General types
export interface InstanceInterface {
  id: number;
  name: string;
  personId: number;
  prefix?: string;
  status?: InstanceStatus;
}

export enum InstanceStatus {
  RUNNING = 'Running',
  LOADING = 'Loading',
  DELETING = 'Deleting',
  FAILED = 'Failed',
}

export type AddInstanceInterface = Pick<InstanceInterface, 'name' | 'prefix'>;

export interface ProfileInterface {
  username: string;
}

// Authentification
export interface LdapCredentialsInterface {
  username: string;
  password: string;
}
