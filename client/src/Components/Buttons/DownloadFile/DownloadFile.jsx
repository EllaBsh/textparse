import { Button } from '@mui/material';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const DownloadFile = () => {
    return (
        <Button
            sx={{
                textTransform: 'none',
                color: '#5113b5ff',
                fontSize: '1rem',
                fontFamily: 'Inter'
            }}>
            <FileDownloadOutlinedIcon sx={{ fontSize: '1.2rem' }} />
            Download as PDF/docx
        </Button>
    );
};

export default DownloadFile;
