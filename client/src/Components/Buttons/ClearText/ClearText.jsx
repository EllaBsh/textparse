import sxStyles from './sxStyles';
import { Button } from '@mui/material';

const ClearText = () => {
    return (
        <Button sx={sxStyles.button} disableRipple disableTouchRipple>
            Clear Text
        </Button>
    );
};

export default ClearText;
