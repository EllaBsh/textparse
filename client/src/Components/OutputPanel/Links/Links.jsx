import { Box, Typography } from '@mui/material';
import sxStyles from './sxStyles';

const Links = ({ wordsFound }) => {
    const link = (word, isLastWord) => {
        return (
            <a
                key={word}
                href={`https://www.morfix.co.il/${word}`}
                target='_blank'
                rel='noreferrer'
                style={{
                    textDecoration: 'none',
                    ':hover': { color: 'black' },
                }}>
                {isLastWord ? word : `${word}, `}
            </a>
        );
    };
    return (
        <Box sx={sxStyles.linksComponent}>
            <Typography sx={sxStyles.componentTitle}>
                Words Found in Text / Links
            </Typography>
            <Box sx={sxStyles.textField}>
                <Box sx={{ padding: '16.5px 14px' }}>
                    {wordsFound.map((word, index) => {
                        return link(word, index + 1 > wordsFound.length);
                    })}
                </Box>
            </Box>
        </Box>
    );
};
export default Links;
