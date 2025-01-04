import { ButtonHTMLAttributes } from 'react';

interface IconButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

interface IconButtonTextProps extends IconButtonBaseProps {
  variant?: 'text';
  appearance?: never;
}

interface IconButtonContainedProps extends IconButtonBaseProps {
  variant?: 'contained';
  appearance?: 'primary' | 'secondary' | 'standard';
}

export type IconButtonProps = IconButtonTextProps | IconButtonContainedProps;
