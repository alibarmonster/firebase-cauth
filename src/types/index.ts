import { MouseEventHandler, ReactNode } from 'react';

export const NAV_LINKS = [
  { href: '/', key: 'Firebase ', label: 'Firebase ' },
  { href: '/', key: 'Indonesia', label: 'Indonesia' },
  { href: '/', key: 'Medium', label: 'Medium' },
  { href: '/', key: 'Technology', label: 'Technology' },
  { href: '/', key: 'About', label: 'About' },
];

export type ButtonProps = {
  type: 'button' | 'submit' | 'reset' | undefined;
  title: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: ReactNode;
};
