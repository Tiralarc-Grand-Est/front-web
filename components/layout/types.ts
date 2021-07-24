export interface NavItemData {
  href: string;
  activeHrefPrefix?: string;
  name: string;
}

export interface NavItemLayoutData extends NavItemData {
  header: boolean;
  footer: boolean;
}
