import styled from 'styled-components';

import { DeprecatedColors } from '../../../foundations';
import { LabelTiny, LabelTinyProps } from '../../typography';
import { useProgress } from '../ProgressContext';

export type ProgressPercentProps = Omit<LabelTinyProps, 'children'>;

const StyledText = styled(LabelTiny)`
  min-width: 26px;
`;

export const ProgressPercent = (props: ProgressPercentProps) => {
  const { percent, disabled } = useProgress();
  return (
    <StyledText color={disabled ? DeprecatedColors.white40 : DeprecatedColors.white} {...props}>
      {`${Math.round(percent)}%`}
    </StyledText>
  );
};
