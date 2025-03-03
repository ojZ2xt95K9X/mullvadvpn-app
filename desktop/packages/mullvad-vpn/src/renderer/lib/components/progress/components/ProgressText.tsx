import { LabelTiny, LabelTinyProps } from '../../typography';
import { useProgress } from '../ProgressContext';

export type ProgressTextProps = LabelTinyProps;

export const ProgressText = ({ children, ...props }: ProgressTextProps) => {
  const { disabled } = useProgress();
  return (
    <LabelTiny color={disabled ? 'disabled' : 'onBackground60'} {...props}>
      {children}
    </LabelTiny>
  );
};
