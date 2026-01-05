import { Box, FormControl, FormGroup, Typography } from '@mui/material';
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
                                setWordListTextValue={setWordListTextValue}
                            />
                            <List
                                listName={'bandI'}
                                label={'Band I Words'}
                                setLists={setLists}
                                setActiveWordLists={setActiveWordLists}
                                checked={lists.bandI?.checked}
                                setWordListTextValue={setWordListTextValue}
                            />
                            <List
                                listName={'bandII'}
                                label={'Band II Words'}
                                setLists={setLists}
                                setActiveWordLists={setActiveWordLists}
                                checked={lists.bandII?.checked}
                                setWordListTextValue={setWordListTextValue}
                            />
                            <List
                                listName={'bandIII'}
                                label={'Band III Words'}
                                setLists={setLists}
                                setActiveWordLists={setActiveWordLists}
                                checked={lists.bandIII?.checked}
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
                                    setWordListTextValue={setWordListTextValue}
                                />
                                <List
                                    listName={'listB'}
                                    label={'List B'}
                                    setLists={setLists}
                                    setActiveWordLists={setActiveWordLists}
                                    checked={lists.listB?.checked}
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
                                    setWordListTextValue={setWordListTextValue}
                                />
                                <List
                                    listName={'listD'}
                                    label={'List D'}
                                    setLists={setLists}
                                    setActiveWordLists={setActiveWordLists}
                                    checked={lists.listD?.checked}
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
