import { Box, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const FindInText = () => {
    return (
        <Box sx={{ marginTop: '1rem' }}>
            <Button
                sx={{
                    background: '#3c63e3ff',
                    color: 'white',
                    textTransform: 'none',
                    fontFamily: 'Inter',
                    '&:hover': {
                        background: '#193798ff',
                    },
                }}>
                <SearchIcon />
                Find Words
            </Button>
        </Box>
    );
};

export default FindInText;
