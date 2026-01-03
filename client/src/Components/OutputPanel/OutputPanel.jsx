import { Box, Typography } from '@mui/material';
import UnseenTextField from '../UnseenTextField/UnseenTextField';
import Links from './Links/Links';
import Lists from './Lists/Lists';
import sxStyles from './sxStyles';

const OutputPanel = ({
    highlightedText,
    setHighlightedText,
    activeWordLists,
    setactiveWordLists,
}) => {
    return (
        <Box>
            <Box sx={sxStyles.outputPanel}>
                <Box sx={sxStyles.componentTitleContainer}>
                    <Typography sx={sxStyles.componentTitle}>
                        Highlighted Words in Text
                    </Typography>
                    <UnseenTextField
                        isInput={false}
                        unseenText={highlightedText}
                        setUnseenText={setHighlightedText}
                    />
                </Box>
            </Box>
            <Box sx={sxStyles.bottomPanelsContainer}>
                <Lists
                    activeWordLists={activeWordLists}
                    setactiveWordLists={setactiveWordLists}
                />
                <Links />
            </Box>
        </Box>
    );
};

export default OutputPanel;
