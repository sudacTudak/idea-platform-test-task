import { ReactNode } from 'react';
import { ReactSVGIcon } from '../../types/svg.types';

export interface ColumnProps {
  columnTitle: string;
  columnIcon: ReactSVGIcon;
  columnActions?: ReactNode;
  children?: ReactNode;
  className?: string;
}
