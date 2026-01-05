import { Box, FormControl, FormGroup, Typography } from '@mui/material';
import { LISTS_DATA } from '../../../utils/wordListUtils';
import List from './List/List';
import sxStyles from './sxStyles';

const Lists = ({
    setActiveWordLists,
    setWordListTextValue,
    lists,
    setLists,
}) => {
    return (
        <Box sx={sxStyles.listsComponent}>
            <Typography sx={sxStyles.componentTitle}>Lists</Typography>
            <Box sx={sxStyles.listsContainer}>
                <FormControl>
                    <FormGroup row>
                        <FormGroup>
                            <List
                                listName={'preBand'}
                                label={'Pre Band'}
                                setLists={setLists}
                                setActiveWordLists={setActiveWordLists}
                                checked={lists.preBand.checked}
                                color={LISTS_DATA.preBand?.color}
                                setWordListTextValue={setWordListTextValue}
                            />
                            <List
                                listName={'bandI'}
                                label={'Band I Words'}
                                setLists={setLists}
                                setActiveWordLists={setActiveWordLists}
                                checked={lists.bandI?.checked}
                                color={LISTS_DATA.bandI?.color}
                                setWordListTextValue={setWordListTextValue}
                            />
                            <List
                                listName={'bandII'}
                                label={'Band II Words'}
                                setLists={setLists}
                                setActiveWordLists={setActiveWordLists}
                                checked={lists.bandII?.checked}
                                color={LISTS_DATA.bandII?.color}
                                setWordListTextValue={setWordListTextValue}
                            />
                            <List
                                listName={'bandIII'}
                                label={'Band III Words'}
                                setLists={setLists}
                                setActiveWordLists={setActiveWordLists}
                                checked={lists.bandIII?.checked}
                                color={LISTS_DATA.bandIII?.color}
                                setWordListTextValue={setWordListTextValue}
                            />
                        </FormGroup>
                        <FormGroup sx={sxStyles.secondRowContainer}>
                            <FormGroup row>
                                <List
                                    listName={'listA'}
                                    label={'List A'}
                                    setLists={setLists}
                                    setActiveWordLists={setActiveWordLists}
                                    checked={lists.listA?.checked}
                                    color={LISTS_DATA.listA?.color}
                                    setWordListTextValue={setWordListTextValue}
                                />
                                <List
                                    listName={'listB'}
                                    label={'List B'}
                                    setLists={setLists}
                                    setActiveWordLists={setActiveWordLists}
                                    checked={lists.listB?.checked}
                                    color={LISTS_DATA.listB?.color}
                                    setWordListTextValue={setWordListTextValue}
                                />
                            </FormGroup>
                            <FormGroup row>
                                <List
                                    listName={'listC'}
                                    label={'List C'}
                                    setLists={setLists}
                                    setActiveWordLists={setActiveWordLists}
                                    checked={lists.listC?.checked}
                                    color={LISTS_DATA.listC?.color}
                                    setWordListTextValue={setWordListTextValue}
                                />
                                <List
                                    listName={'listD'}
                                    label={'List D'}
                                    setLists={setLists}
                                    setActiveWordLists={setActiveWordLists}
                                    checked={lists.listD?.checked}
                                    color={LISTS_DATA.listD?.color}
                                    setWordListTextValue={setWordListTextValue}
                                />
                            </FormGroup>
                        </FormGroup>
                    </FormGroup>
                </FormControl>
            </Box>
        </Box>
    );
};

export default Lists;
