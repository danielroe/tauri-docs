export type NavItem = {
  title?: string
  link: string
  // This is a bootstrap icon
  icon?: string
  children?: NavItem[]
}

export const LEADING_NAVIGATION: NavItem[] = [
  {
    title: 'Guides',
    link: '/',
    children: [
      { title: 'Getting Started', link: '/' },
      { title: 'Development', link: '/' },
      { title: 'Debugging', link: '/' },
      { title: 'Testing', link: '/' },
      { title: 'Building', link: '/' },
      { title: 'Distribution', link: '/' },
      { title: 'Features', link: '/' },
    ],
  },
  {
    title: 'References',
    link: '/',
    children: [
      { title: 'Tauri Architecture', link: '/' },
      { title: 'Configuration File', link: '/' },
      { title: 'Tauri CLI', link: '/' },
      { title: 'JavaScript API', link: '/' },
      { title: 'Rust API', link: '/' },
    ],
  },
  {
    title: 'About',
    link: '/',
    children: [
      { title: 'What is Tauri?', link: '/' },
      { title: 'Trademark Guidelines', link: '/' },
      { title: 'Governance', link: '/' },
    ],
  },
]

export const SOCIALS: NavItem[] = [
  {
    link: '/',
    icon: 'bi-github',
  },
  {
    link: '/',
    icon: 'bi-discord',
  },
  {
    link: '/',
    icon: 'bi-twitter',
  },
  {
    link: '/',
    icon: 'bi-mastodon',
  },
]
