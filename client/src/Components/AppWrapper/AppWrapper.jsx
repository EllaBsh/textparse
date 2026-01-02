import SearchIcon from '@mui/icons-material/Search';
import { Box, Typography } from '@mui/material';
import FindInText from '../Buttons/FindInText/FindInText';
import InputPanel from '../InputPanel/InputPanel';
import OutputPanel from '../OutputPanel/OutputPanel';
import sxStyles from './sxStyles';

const AppWrapper = () => {
    return (
        <Box sx={sxStyles.wrapper}>
            <Box sx={sxStyles.titleContainer}>
                <Box sx={sxStyles.iconContainer}>
                    <SearchIcon sx={sxStyles.icon} />
                </Box>
                <Typography sx={sxStyles.title}>Find Words in Text</Typography>
            </Box>
            <Box sx={sxStyles.panelsContainer}>
                <Box sx={sxStyles.inputPanelContainer}>
                    <InputPanel />
                    <FindInText />
                </Box>
                <OutputPanel />
            </Box>
        </Box>
    );
};

export default AppWrapper;
