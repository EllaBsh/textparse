import { Button } from '@mui/material';
import sxStyles from './sxStyles';

const ClearText = ({ setText, setActiveWordLists, setLists }) => {
    return (
        <Button
            onClick={() => {
                setText('');
                if (setActiveWordLists) {
                    setActiveWordLists({ manual: [] });
                }
                if (setLists) {
                    setLists((prev) =>
                        Object.fromEntries(
                            Object.entries(prev).map(([key, obj]) => [
                                key,
                                { ...obj, checked: false },
                            ])
                        )
                    );
                }
            }}
            sx={sxStyles.button}
            disableRipple
            disableTouchRipple>
            Clear Text
        </Button>
    );
};

export default ClearText;
