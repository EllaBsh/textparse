import { Checkbox, FormControlLabel } from '@mui/material';
import sxStyles from './sxStyles';

const List = ({ listName }) => {
    return (
        <FormControlLabel
            sx={sxStyles.formControl}
            control={<Checkbox checked={false} size='small' />}
            label={listName}
        />
    );
};

export default List;
