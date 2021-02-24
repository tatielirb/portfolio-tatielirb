interface MenuItem {
  path: string;
  title: string;
}

interface RootMenuItem {
  [key: string]: { path: string; title: string; subMenus: MenuItem[] };
}

export type Menu = RootMenuItem;
