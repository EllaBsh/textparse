import { Checkbox, FormControlLabel } from '@mui/material';
import { activeListsToText, LISTS_DATA, loadWordsFromUrl } from '../../../../utils/wordListUtils';
import sxStyles from './sxStyles';

const List = ({
    listName,
    label,
    setLists,
    setActiveWordLists,
    checked,
    color,
    setWordListTextValue,
}) => {
    const handleChange = async () => {
        const nextChecked = !checked;
        setLists((prevLists) => ({
            ...prevLists,
            [listName]: {
                ...prevLists[listName],
                checked: nextChecked,
            },
        }));
        setActiveWordLists((prev) => {
            const next = { ...prev };

            if (!nextChecked) {
                delete next[listName];
                next.manual = [];
                setWordListTextValue(activeListsToText(next));
                return next;
            }

            return next;
        });

        if (nextChecked) {
            const words = await loadWordsFromUrl(
                LISTS_DATA[listName].file,
                listName
            );

            setActiveWordLists((prev) => {
                const next = {
                    ...prev,
                    [listName]: words,
                    manual: [],
                };

                setWordListTextValue(activeListsToText(next));
                return next;
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
