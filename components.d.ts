interface LinkComponent {
  children: React.ReactNode | string;
  className?: string;
  role?: string;
  activeClassName?: string;
  partiallyActive?: boolean;
  to?: string;
  href?: string;
}