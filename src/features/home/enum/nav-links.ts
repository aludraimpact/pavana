export interface LinkItem {
  id: string;
  label: string;
  isLink: boolean;
  url?: string;
  className?: string;
}

export type Link = Record<string, LinkItem>;

export const navLinks: Link = {
  about: {
    id: "about",
    label: "About",
    isLink: false,
  },
  technology: {
    id: "technology",
    label: "Technology",
    isLink: false,
    className: "text-zinc-600",
  },
  monitoring: {
    id: "monitoring",
    label: "Monitoring Tools",
    isLink: true,
    url: "/login",
    className: "text-zinc-600",
  },
};
