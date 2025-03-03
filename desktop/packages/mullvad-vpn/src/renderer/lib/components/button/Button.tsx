import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';

import { toCssVariablesString } from '../../css-utils';
import { colors, Radius, Spacings } from '../../foundations';
import { buttonResetString } from '../../styles';
import { Flex } from '../flex';
import { ButtonIcon, ButtonProvider, ButtonText, StyledIcon, StyledText } from './components';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'success' | 'destructive';
  size?: 'auto' | 'full' | '1/2';
}

const variants = {
  primary: {
    background: colors.surface.primary,
    hover: colors.surface.secondary,
    disabled: colors.surface.primaryDisabled,
  },
  success: {
    background: colors.surface.positive,
    hover: colors.surface.positiveHighlight,
    disabled: colors.surface.positiveDisabled,
  },
  destructive: {
    background: colors.surface.negative,
    hover: colors.surface.negativeHighlight,
    disabled: colors.surface.negativeDisabled,
  },
} as const;

const sizes = {
  auto: 'auto',
  full: '100%',
  '1/2': '50%',
};

const variables = {
  radius: Radius.radius4,
};

const StyledButton = styled.button<ButtonProps>`
  ${({ size: sizeProp = 'full', variant: variantProp = 'primary' }) => {
    const variant = variants[variantProp];
    const size = sizes[sizeProp];
    return css`
      ${buttonResetString}
      ${toCssVariablesString({ ...variables, ...variant, size })};

      min-height: 32px;
      min-width: 60px;
      border-radius: var(--radius);
      width: var(--size);
      background: var(--background);

      &:not(:disabled):hover {
        background: var(--hover);
      }

      &:disabled {
        background: var(--disabled);
      }

      &:focus-visible {
        outline: 2px solid ${colors.surface.white};
        outline-offset: 2px;
      }
    `;
  }}
`;

const StyledFlex = styled(Flex)`
  justify-content: space-between;
  &&:has(${StyledText}:only-child) {
    justify-content: center;
  }
  &&:has(${StyledText} + ${StyledIcon}) {
    &::before {
      content: ' ';
      display: inline-block;
      width: 24px;
    }
  }
  &&:has(${StyledIcon} + ${StyledText}) {
    &::after {
      content: ' ';
      display: inline-block;
      width: 24px;
    }
  }
  &&:has(${StyledIcon} + ${StyledText} + ${StyledIcon}) {
    &::before {
      display: none;
    }
    &::after {
      display: none;
    }
  }
`;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, children, disabled = false, style, ...props }, ref) => {
    return (
      <ButtonProvider disabled={disabled}>
        <StyledButton ref={ref} size={size} variant={variant} disabled={disabled} {...props}>
          <StyledFlex
            $flex={1}
            $gap={Spacings.spacing3}
            $alignItems="center"
            $padding={{
              horizontal: Spacings.spacing3,
            }}>
            {children}
          </StyledFlex>
        </StyledButton>
      </ButtonProvider>
    );
  },
);

Button.displayName = 'Button';

const ButtonNamespace = Object.assign(Button, {
  Text: ButtonText,
  Icon: ButtonIcon,
});

export { ButtonNamespace as Button };
