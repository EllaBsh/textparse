import { Button } from '@mui/material';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

const UploadFile = () => {
    return (
        <Button
            sx={{
                textTransform: 'none',
                color: '#5113b5ff',
                fontSize: '1rem',
                fontFamily: 'Inter',
            }}>
            <FileUploadOutlinedIcon sx={{ fontSize: '1.2rem' }} />
            Upload Text File
        </Button>
    );
};

export default UploadFile;
