import React, { useCallback } from 'react';
import styled from 'styled-components';

import { DeprecatedColors, Radius } from '../../foundations';
import { useHistory } from '../../history';
import { RoutePath } from '../../routes';
import { buttonReset } from '../../styles';
import { Text, TextProps } from './Text';

export interface LinkProps extends TextProps, Omit<React.HtmlHTMLAttributes<'button'>, 'color'> {
  to: RoutePath;
}

const StyledText = styled(Text)<{
  $hoverColor: DeprecatedColors | undefined;
}>((props) => ({
  ...buttonReset,
  background: 'transparent',

  '&:hover': {
    textDecorationLine: 'underline',
    textUnderlineOffset: '2px',
    color: props.$hoverColor,
  },
  '&:focus-visible': {
    borderRadius: Radius.radius4,
    outline: `2px solid ${DeprecatedColors.white}`,
    outlineOffset: '2px',
  },
}));

const getHoverColor = (color: DeprecatedColors | undefined) => {
  switch (color) {
    case DeprecatedColors.white60:
      return DeprecatedColors.white;
    default:
      return undefined;
  }
};

export const Link = ({ to, children, color, onClick, ...props }: LinkProps) => {
  const history = useHistory();
  const navigate = useCallback(
    (e: React.MouseEvent<'button'>) => {
      if (onClick) {
        onClick(e);
      }
      return history.push(to);
    },
    [history, to, onClick],
  );
  return (
    <StyledText
      onClick={navigate}
      as={'button'}
      color={color}
      $hoverColor={getHoverColor(color)}
      {...props}>
      {children}
    </StyledText>
  );
};
