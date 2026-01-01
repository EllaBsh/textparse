import { Box, Typography } from '@mui/material';
import UnseenTextField from '../UnseenTextField/UnseenTextField';
import Links from './Links/Links';
import Lists from './Lists/Lists';
import sxStyles from './sxStyles';

const OutputPanel = () => {
    return (
        <Box>
            <Box sx={sxStyles.outputPanel}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={sxStyles.unseenTextBoxTitle}>
                        Highlighted Words in Text
                    </Typography>
                    <UnseenTextField isInput={false} />
                </Box>
            </Box>
            <Box
                sx={{
                    marginTop: '1rem',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                <Lists />
                <Links />
            </Box>
        </Box>
    );
};

export default OutputPanel;
