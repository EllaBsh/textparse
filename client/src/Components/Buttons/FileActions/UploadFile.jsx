import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { Button } from '@mui/material';
import mammoth from 'mammoth';
import { useRef } from 'react';
import sxStyles from './sxStyles';

const UploadFile = ({ setUnseenText }) => {
    const fileInputRef = useRef();
    const handleChange = async (event) => {
        const file = event.target.files[0];
        const fileType = file.name.split('.').pop().toLowerCase();
        try {
            if (fileType === 'txt') {
                setUnseenText(file.text());
            } else if (fileType === 'docx') {
                const arrayBuffer = await file.arrayBuffer();
                const result = await mammoth.extractRawText({ arrayBuffer });
                setUnseenText(result.value);
            }
        } catch (err) {
            setUnseenText('Failed to read file. Is it a valid DOCX?');
        }
    };

    return (
        <>
            <Button
                sx={sxStyles.button}
                onClick={() => fileInputRef.current.click()}
                disableRipple
                disableFocusRipple>
                <FileUploadOutlinedIcon sx={sxStyles.icon} />
                Upload Text File
            </Button>
            <input
                onChange={handleChange}
                multiple={false}
                ref={fileInputRef}
                type='file'
                accept='.txt, .docx'
                hidden
            />
        </>
    );
};

export default UploadFile;
