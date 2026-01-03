import { Box, TextField } from '@mui/material';
import ClearText from '../Buttons/ClearText/ClearText';
import CopyText from '../Buttons/CopyText/CopyText';
import DownloadFile from '../Buttons/FileActions/DownloadFile';
import UploadFile from '../Buttons/FileActions/UploadFile';
import sxStyles from './sxStyles';

const UnseenTextField = ({ isInput, unseenText, setUnseenText }) => {
    return (
        <Box>
            <TextField
                rows={8}
                multiline
                placeholder={isInput ? 'Paste your text here...' : ''}
                disabled={!isInput && unseenText === ''}
                value={unseenText}
                onChange={(event) => {
                    setUnseenText(event.target.value);
                }}
                sx={sxStyles.textField}
            />
            <Box sx={sxStyles.actionButtonsContainer}>
                {isInput ? (
                    <ClearText setText={setUnseenText} />
                ) : (
                    <CopyText text={unseenText} />
                )}
                {isInput ? (
                    <UploadFile setUnseenText={setUnseenText} />
                ) : (
                    <DownloadFile />
                )}
            </Box>
        </Box>
    );
};

export default UnseenTextField;
