import { Box, Typography } from '@mui/material';
import List from './List/List';
import sxStyles from './sxStyles';

const Lists = () => {
    return (
        <Box sx={sxStyles.listsComponent}>
            <Typography sx={sxStyles.componentTitle}>Lists</Typography>
            <Box sx={sxStyles.listsContainer}>
                <Box sx={sxStyles.leftSideContainer}>
                    <List listName={'Pre band'} />
                    <List listName={'Band I Words'} />
                    <List listName={'Band II Words'} />
                    <List listName={'Band III Words'} />
                </Box>
                <Box sx={sxStyles.rightSideContainer}>
                    <Box sx={sxStyles.listsContainer}>
                        <List listName={'List A'} />
                        <List listName={'List B'} />
                    </Box>
                    <Box sx={sxStyles.listsContainer}>
                        <List listName={'List C'} />
                        <List listName={'List D'} />
                    </Box>
                    <Box>
                        <List listName={'check all'} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Lists;
