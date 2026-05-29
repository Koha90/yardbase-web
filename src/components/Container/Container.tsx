import type { HTMLAttributes, PropsWithChildren } from 'react';

import styles from './Container.module.scss'

type ContainerProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export function Container({
  children,
  className,
  ...props
}: ContainerProps) {
  const classNames = [styles.container, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
}
