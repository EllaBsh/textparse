import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Button } from '@mui/material';
import sxStyles from './sxStyles';

const DownloadFile = () => {
    return (
        <Button sx={sxStyles.button} disableRipple disableFocusRipple>
            <FileDownloadOutlinedIcon sx={sxStyles.icon} />
            Download as PDF/docx
        </Button>
    );
};

export default DownloadFile;
