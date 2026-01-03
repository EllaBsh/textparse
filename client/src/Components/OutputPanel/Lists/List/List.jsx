import { Checkbox, FormControlLabel } from '@mui/material';
import { WORD_FILES, loadWordsFromUrl } from '../../../../utils/getBandWords';
import sxStyles from './sxStyles';

const List = ({
    listName,
    label,
    setLists,
    setactiveWordLists,
    checked,
    color,
}) => {
    const handleChange = async () => {
        const nextChecked = !checked;

        setLists((prevLists) =>
            prevLists.map((list) =>
                list.listName === listName
                    ? { ...list, checked: nextChecked }
                    : list
            )
        );
        if (!WORD_FILES[listName]) return;

        if (nextChecked) {
            const words = await loadWordsFromUrl(
                WORD_FILES[listName],
                listName
            );
            setactiveWordLists((prev) => ({
                ...prev,
                [listName]: words,
            }));
        } else {
            setactiveWordLists((prev) => {
                const copy = { ...prev };
                delete copy[listName];
                return copy;
            });
        }
    };

    return (
        <FormControlLabel
            sx={sxStyles.formControl(color)}
            control={
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    size='small'
                />
            }
            label={label}
        />
    );
};

export default List;
