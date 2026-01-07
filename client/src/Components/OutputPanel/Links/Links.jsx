import { Box, Link, Typography } from '@mui/material';
import sxStyles from './sxStyles';

const Links = ({ matches }) => {
    const getUniqueWords = () => {
        return [...new Set(Object.values(matches).flat())];
    };

    const link = (word, isLastWord) => {
        return (
            <Link
                key={word}
                href={`https://www.morfix.co.il/${word}`}
                target='_blank'
                rel='noreferrer'
                sx={{
                    textDecoration: 'none',
                    fontFamily: 'Inter',
                    '&:hover': {
                        color: '#2525a9ff',
                    },
                }}>
                {isLastWord ? word : `${word}, `}
            </Link>
        );
    };

    const words = getUniqueWords();

    return (
        <Box sx={sxStyles.linksComponent}>
            <Typography sx={sxStyles.componentTitle}>
                Words Found in Text
            </Typography>
            <Box sx={sxStyles.textField}>
                <Box sx={sxStyles.wordList}>
                    {words.map((word, i) => link(word, i === words.length - 1))}
                </Box>
            </Box>
        </Box>
    );
};
export default Links;
