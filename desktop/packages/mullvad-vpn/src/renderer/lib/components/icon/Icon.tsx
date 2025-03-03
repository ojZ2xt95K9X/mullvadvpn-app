import styled from 'styled-components';

import { colors } from '../../foundations';
import { icons } from './types';

export type IconProps = {
  icon: keyof typeof icons;
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'big';
  color?: keyof (typeof colors)['icon'];
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const StyledIcon = styled.div<{ $color: string; $size: number; $src: string }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  mask: url(${({ $src }) => $src}) no-repeat center;
  mask-size: contain;
  background-color: ${({ $color }) => $color || 'currentColor'};
`;

export const iconSizes = {
  tiny: 14,
  small: 18,
  medium: 24,
  large: 32,
  big: 48,
};

const PATH_PREFIX = process.env.NODE_ENV === 'development' ? '../' : '';

export const Icon = ({
  icon: iconProp,
  size = 'medium',
  color: colorProp = 'primary',
  ...props
}: IconProps) => {
  const icon = icons[iconProp];
  const src = iconProp.startsWith('data:') ? iconProp : `${PATH_PREFIX}assets/icons/${icon}.svg`;
  const color = colors.icon[colorProp];
  return <StyledIcon $src={src} $size={iconSizes[size]} $color={color} role="img" {...props} />;
};
