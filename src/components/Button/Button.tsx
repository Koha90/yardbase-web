import type { PropsWithChildren } from "react";

import styles from './Button.module.scss';

type ButtonVariant = 'primary' | 'secondary' | 'surface';
type ButtonSize = 'medium' | 'small';

interface ButtonProps extends PropsWithChildren {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'medium',
}: ButtonProps) {
  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
  ].join(' ');

  return (
    <a className={classNames} href={href}>
      {children}
    </a>
  );
}
