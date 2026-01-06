import { Box, TextField } from '@mui/material';
import ClearText from '../Buttons/ClearText/ClearText';
import UploadFile from '../Buttons/FileActions/UploadFile';
import sxStyles from './sxStyles';

const UnseenTextField = ({ unseenText, setUnseenText }) => {
    return (
        <Box>
            <TextField
                rows={8}
                multiline
                placeholder={'Paste your text here...'}
                value={unseenText}
                onChange={(event) => {
                    setUnseenText(event.target.value);
                }}
                sx={sxStyles.textField}
            />
            <Box sx={sxStyles.actionButtonsContainer}>
                <ClearText setText={setUnseenText} />
                <UploadFile setUnseenText={setUnseenText} />
            </Box>
        </Box>
    );
};

export default UnseenTextField;
