import { Box, Typography } from '@mui/material';
import CopyText from '../Buttons/CopyText/CopyText';
import Links from './Links/Links';
import Lists from './Lists/Lists';
import sxStyles from './sxStyles';

const OutputPanel = ({
    highlightedText,
    activeWordLists,
    setactiveWordLists,
    matches,
    wordsFound
}) => {
    return (
        <Box>
            <Box sx={sxStyles.outputPanel}>
                <Box sx={sxStyles.componentTitleContainer}>
                    <Typography sx={sxStyles.componentTitle}>
                        Highlighted Words in Text
                    </Typography>
                    <Box
                        sx={sxStyles.highlightedTextComponent}>
                        <Box sx={sxStyles.textContainer}>
                            {highlightedText}
                        </Box>
                    </Box>
                    <CopyText text={highlightedText} />
                </Box>
            </Box>
            <Box sx={sxStyles.bottomPanelsContainer}>
                <Lists
                    activeWordLists={activeWordLists}
                    setactiveWordLists={setactiveWordLists}
                />
                <Links wordsFound={wordsFound}/>
            </Box>
        </Box>
    );
};

export default OutputPanel;
