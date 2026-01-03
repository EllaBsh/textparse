import { Box, FormControl, FormGroup, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import List from './List/List';
import sxStyles from './sxStyles';

const Lists = ({ activeWordLists, setactiveWordLists }) => {
    const [lists, setLists] = useState([
        { listName: 'preBand', checked: false, color: 'red' },
        { listName: 'bandI', checked: false, color: 'orange' },
        { listName: 'bandII', checked: false, color: 'yellow' },
        { listName: 'bandIII', checked: false, color: 'green' },
        { listName: 'listA', checked: false, color: 'light blue' },
        { listName: 'listB', checked: false, color: 'blue' },
        { listName: 'listC', checked: false, color: 'purple' },
        { listName: 'listD', checked: false, color: 'pink' },
    ]);

    const listMap = useMemo(() => {
        return lists.reduce((acc, list) => {
            acc[list.listName] = list;
            return acc;
        }, {});
    }, [lists]);

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
                                setactiveWordLists={setactiveWordLists}
                                checked={listMap.preBand?.checked}
                                color={listMap.preBand?.color}
                            />
                            <List
                                listName={'bandI'}
                                label={'Band I Words'}
                                setLists={setLists}
                                setactiveWordLists={setactiveWordLists}
                                checked={listMap.bandI?.checked}
                                color={listMap.bandI?.color}
                            />
                            <List
                                listName={'bandII'}
                                label={'Band II Words'}
                                setLists={setLists}
                                setactiveWordLists={setactiveWordLists}
                                checked={listMap.bandII?.checked}
                                color={listMap.bandII?.color}
                            />
                            <List
                                listName={'bandIII'}
                                label={'Band III Words'}
                                setLists={setLists}
                                setactiveWordLists={setactiveWordLists}
                                checked={listMap.bandIII?.checked}
                                color={listMap.bandIII?.color}
                            />
                        </FormGroup>
                        <FormGroup sx={sxStyles.secondRowContainer}>
                            <FormGroup row>
                                <List
                                    listName={'listA'}
                                    label={'List A'}
                                    setLists={setLists}
                                    setactiveWordLists={setactiveWordLists}
                                    checked={listMap.listA?.checked}
                                    color={listMap.listA?.color}
                                />
                                <List
                                    listName={'listB'}
                                    label={'List B'}
                                    setLists={setLists}
                                    setactiveWordLists={setactiveWordLists}
                                    checked={listMap.listB?.checked}
                                    color={listMap.listB?.color}
                                />
                            </FormGroup>
                            <FormGroup row>
                                <List
                                    listName={'listC'}
                                    label={'List C'}
                                    setLists={setLists}
                                    setactiveWordLists={setactiveWordLists}
                                    checked={listMap.listC?.checked}
                                    color={listMap.listC?.color}
                                />
                                <List
                                    listName={'listD'}
                                    label={'List D'}
                                    setLists={setLists}
                                    setactiveWordLists={setactiveWordLists}
                                    checked={listMap.listD?.checked}
                                    color={listMap.listD?.color}
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
