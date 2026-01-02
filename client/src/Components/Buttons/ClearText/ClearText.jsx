import { Button } from '@mui/material';
import sxStyles from './sxStyles';

const ClearText = () => {
    return (
        <Button sx={sxStyles.button} disableRipple disableTouchRipple>
            Clear Text
        </Button>
    );
};

export default ClearText;
