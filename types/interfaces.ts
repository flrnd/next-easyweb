export interface INavigationListItem {
  name: string;
  href: string;
}

export interface IServiceListItem {
  title: string;
  description: string;
  icon: JSX.Element;
  href?: string;
}
