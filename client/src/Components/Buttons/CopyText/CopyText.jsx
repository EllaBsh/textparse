import { Button } from '@mui/material';
import sxStyles from './sxStyles';

const CopyText = () => {
    return (
        <Button sx={sxStyles.button} disableRipple disableTouchRipple>
            Copy Text
        </Button>
    );
};

export default CopyText;
