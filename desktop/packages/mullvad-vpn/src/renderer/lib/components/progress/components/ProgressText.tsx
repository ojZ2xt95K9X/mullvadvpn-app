import { DeprecatedColors } from '../../../foundations';
import { LabelTiny, LabelTinyProps } from '../../typography';
import { useProgress } from '../ProgressContext';

export type ProgressTextProps = LabelTinyProps;

export const ProgressText = ({ children, ...props }: ProgressTextProps) => {
  const { disabled } = useProgress();
  return (
    <LabelTiny color={disabled ? DeprecatedColors.white40 : DeprecatedColors.white60} {...props}>
      {children}
    </LabelTiny>
  );
};
