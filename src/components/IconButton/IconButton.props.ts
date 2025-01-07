import { ButtonHTMLAttributes } from 'react';
import { ReactSVGIcon } from '../../types/svg.types';

interface IconButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactSVGIcon;
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
