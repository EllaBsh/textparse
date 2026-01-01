import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';
import sxStyles from './sxStyles';

const Lists = () => {
    return (
        <Box sx={sxStyles.inputPanel}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={sxStyles.textboxTitle}>Lists</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                        <FormControlLabel
                            control={<Checkbox checked={false} />}
                            label='Pre band'
                        />
                        <FormControlLabel
                            control={<Checkbox checked={false} />}
                            label='Band I Words'
                        />
                        <FormControlLabel
                            control={<Checkbox checked={false} />}
                            label='Band II Words'
                        />
                        <FormControlLabel
                            control={<Checkbox checked={false} />}
                            label='Band III Words'
                        />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <FormControlLabel
                            control={<Checkbox checked={false} />}
                            label='List A'
                        />
                        <FormControlLabel
                            control={<Checkbox checked={false} />}
                            label='List B'
                        />
                        <FormControlLabel
                            control={<Checkbox checked={false} />}
                            label='List C'
                        />
                        <FormControlLabel
                            control={<Checkbox checked={false} />}
                            label='List D'
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Lists;
