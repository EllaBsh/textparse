import sxStyles from './sxStyles';
import { Button } from '@mui/material';

const CopyText = () => {
    return (
        <Button sx={sxStyles.button} disableRipple disableTouchRipple>
            Copy Text
        </Button>
    );
};

export default CopyText;
