import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import { Box, IconButton, TextField, Tooltip, Typography } from '@mui/material';
import sxStyles from './sxStyles';

const Links = () => {
    return (
        <Box sx={sxStyles.linksComponent}>
            <Typography sx={sxStyles.componentTitle}>
                Words Found in Text / Links
            </Typography>
            <TextField
                rows={5}
                multiline
                disabled
                InputProps={{
                    endAdornment: (
                        <Tooltip title='Copied!'>
                            <IconButton>
                                <ContentCopyOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                    ),
                }}
                sx={sxStyles.textField}
            />
        </Box>
    );
};
export default Links;
