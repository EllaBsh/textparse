import { Button } from '@mui/material';
import sxStyles from './sxStyles';

const CopyText = ({ text }) => {
    return (
        <Button
            onClick={() => {
                navigator.clipboard.writeText(text);
            }}
            sx={sxStyles.button}
            disableRipple
            disableTouchRipple>
            Copy Text
        </Button>
    );
};

export default CopyText;
