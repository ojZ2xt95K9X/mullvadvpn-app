import { messages } from '../../../../../../shared/gettext';
import { Button } from '../../../../../lib/components';
import { useDisabled, useHandleClick } from './hooks';

export function ManualDownloadButton() {
  const disabled = useDisabled();
  const handleClick = useHandleClick();

  return (
    <Button disabled={disabled} onClick={handleClick}>
      <Button.Text>
        {
          // TRANSLATORS: Button text to manually download the update
          messages.pgettext('app-upgrade-view', 'Manual download')
        }
      </Button.Text>
      {/* TODO: ADD EXTERNAL ICON */}
    </Button>
  );
}
