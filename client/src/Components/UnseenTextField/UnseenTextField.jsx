import { Box, TextField } from '@mui/material';
import ClearText from '../Buttons/ClearText/ClearText';
import DownloadFile from '../Buttons/DownloadFile/DownloadFile';
import UploadFile from '../Buttons/UploadFile/UploadFile';
import CopyText from '../Buttons/CopyText/CopyText';
import sxStyles from './sxStyles';

const UnseenTextField = ({ isInput }) => {
    return (
        <Box>
            <TextField
                rows={8}
                multiline
                placeholder={isInput ? 'Paste your text here...' : ''}
                disabled={!isInput}
                sx={sxStyles.textField}
            />
            <Box
                sx={sxStyles.actionButtonsContainer}>
                {isInput ? <ClearText /> : <CopyText />}
                {isInput ? <UploadFile /> : <DownloadFile />}
            </Box>
        </Box>
    );
};

export default UnseenTextField;
