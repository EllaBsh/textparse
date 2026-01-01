import { Box, Typography } from '@mui/material';
import List from './List/List';
import sxStyles from './sxStyles';

const Lists = () => {
    return (
        <Box sx={sxStyles.listsContainer}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={sxStyles.title}>Lists</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                        <List listName={'Pre band'} />
                        <List listName={'Band I Words'} />
                        <List listName={'Band II Words'} />
                        <List listName={'Band III Words'} />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginLeft: '1rem',
                        }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <List listName={'List A'} />
                            <List listName={'List B'} />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <List listName={'List C'} />
                            <List listName={'List D'} />
                        </Box>
                        <Box sx={{ }}>
                            <List listName={'check all'} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Lists;
