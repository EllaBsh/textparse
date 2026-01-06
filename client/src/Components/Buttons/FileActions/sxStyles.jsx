const sxStyles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        textTransform: 'none',
        color: '#5113b5ff',
        fontSize: '1rem',
        fontFamily: 'Inter',
        '&:hover': {
            background: 'none',
            color: '#330d71ff',
        },
    },
    icon: {
        fontSize: '1.2rem',
    },
    select: {
        margin: 1,
        '& .MuiSelect-select': {
            fontFamily: 'Inter',
            color: '#5113b5ff',
            fontWeight: '500',
            width: '3rem',
        },
    },
};

export default sxStyles;
