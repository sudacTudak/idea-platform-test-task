import { HTMLAttributes } from 'react';
import { ReactSVGIcon } from '../../types/svg.types';

export interface HeadingWithIconProps
  extends HTMLAttributes<HTMLHeadingElement> {
  icon: ReactSVGIcon;
}
