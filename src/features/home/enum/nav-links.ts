export interface LinkItem {
  id: string;
  label: string;
  isLink: boolean;
  url?: string;
  className?: string;
}

export type Link = Record<string, LinkItem>;

export const navLinks: Link = {
  home: {
    id: "home",
    label: "",
    isLink: false,
  },
  about: {
    id: "about",
    label: "About",
    isLink: false,
    className: "text-gray-800",
  },
  technology: {
    id: "technology",
    label: "Technology",
    isLink: false,
  },
  monitoring: {
    id: "monitoring",
    label: "Monitoring Tools",
    isLink: true,
    url: "/login",
    className: "text-zinc-600",
  },
};
