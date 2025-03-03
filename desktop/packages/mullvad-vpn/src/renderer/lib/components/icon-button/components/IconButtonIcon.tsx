import styled from 'styled-components';

import { colors } from '../../../foundations';
import { Icon, IconProps } from '../../icon/Icon';
import { useIconButtonContext } from '../IconButtonContext';
export type IconButtonIconProps = IconProps;

const variants = {
  primary: {
    background: 'primary',
    hover: 'primaryHover',
    disabled: 'disabled',
  },
  secondary: {
    background: 'secondary',
    hover: 'secondaryHover',
    disabled: 'disabled',
  },
} as const;

const StyledIcon = styled(Icon)<IconButtonIconProps & { $hoverColor: string; $disabled?: boolean }>(
  ({ $hoverColor, $disabled }) => ({
    ...(!$disabled && {
      '&&:hover': {
        backgroundColor: $hoverColor,
      },
    }),
  }),
);

export const IconButtonIcon = (props: IconButtonIconProps) => {
  const { variant = 'primary', size, disabled } = useIconButtonContext();
  const styles = variants[variant];
  const hoverColor = colors.icon[styles.hover];
  return (
    <StyledIcon
      size={size}
      color={disabled ? styles.disabled : styles.background}
      $hoverColor={hoverColor}
      $disabled={disabled}
      {...props}
    />
  );
};
