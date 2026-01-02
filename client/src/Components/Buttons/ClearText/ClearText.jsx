import { Button } from '@mui/material';
import sxStyles from './sxStyles';

const ClearText = ({ setText }) => {
    return (
        <Button
            onClick={() => setText('')}
            sx={sxStyles.button}
            disableRipple
            disableTouchRipple>
            Clear Text
        </Button>
    );
};

export default ClearText;
