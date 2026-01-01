import { Checkbox, FormControlLabel } from '@mui/material';

const List = ({ listName }) => {
    return (
        <FormControlLabel
            sx={{
                '& .MuiFormControlLabel-label': {
                    fontFamily: 'Inter',
                    fontSize: '1rem',
                },
                '&.MuiFormControlLabel-root': {},
            }}
            control={<Checkbox checked={false} size='small' />}
            label={listName}
        />
    );
};

export default List;
