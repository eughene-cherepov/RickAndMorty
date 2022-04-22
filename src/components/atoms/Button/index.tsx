import { FC } from 'react';

interface IProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: any;
}

export const Button: FC<IProps> = ({
  onClick,
  disabled,
  className,
  children,
}) => (
  <button className={className} onClick={onClick} disabled={disabled}>
    {children}
  </button>
);
