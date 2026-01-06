import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Box, Button, MenuItem, Select } from '@mui/material';
import sxStyles from './sxStyles';
import { useState } from 'react';
import { downloadAsDOCX, downloadAsPDF } from '../../../utils/downloadUtils';

const DownloadFile = ({ highlightedText }) => {
    const [format, setFormat] = useState('pdf');

    return (
        <Box sx={sxStyles.container}>
            <Button
                onClick={() => {
                    format === 'pdf'
                        ? downloadAsPDF(highlightedText)
                        : downloadAsDOCX(highlightedText);
                }}
                sx={sxStyles.button}
                disableRipple
                disableFocusRipple
                disabled={!highlightedText}>
                <FileDownloadOutlinedIcon sx={sxStyles.icon} />
                Download as
            </Button>
            <Select
                value={format}
                onChange={(e) => setFormat(e.target.value)}
                variant='standard'
                sx={sxStyles.select}
                disabled={!highlightedText}>
                <MenuItem value={'pdf'}>PDF</MenuItem>
                <MenuItem value={'docx'}>Docx</MenuItem>
            </Select>
        </Box>
    );
};

export default DownloadFile;
