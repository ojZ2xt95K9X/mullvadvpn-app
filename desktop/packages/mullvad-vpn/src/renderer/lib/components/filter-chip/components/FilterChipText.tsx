import styled from 'styled-components';

import { DeprecatedColors } from '../../../foundations';
import { BodySmallSemiBoldProps, LabelTiny } from '../../typography';
import { useFilterChipContext } from '../FilterChipContext';

export type FilterChipTextProps = Omit<BodySmallSemiBoldProps, 'color'>;

export const StyledText = styled(LabelTiny)``;

export const FilterChipText = (props: FilterChipTextProps) => {
  const { disabled } = useFilterChipContext();
  return (
    <StyledText color={disabled ? DeprecatedColors.white40 : DeprecatedColors.white} {...props} />
  );
};
