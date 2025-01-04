import { HTMLAttributes } from 'react';

export interface HeadingWithIconProps
  extends HTMLAttributes<HTMLHeadingElement> {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
