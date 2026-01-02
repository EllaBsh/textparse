import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { Button } from '@mui/material';
import sxStyles from './sxStyles';

const UploadFile = () => {
    return (
        <Button sx={sxStyles.button} disableRipple disableFocusRipple>
            <FileUploadOutlinedIcon sx={sxStyles.icon} />
            Upload Text File
        </Button>
    );
};

export default UploadFile;
