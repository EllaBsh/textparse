const sxStyles = {
    inputPanel: {
        backgroundColor: 'white',
        width: 'fit-content',
        height: 'fit-content',
        borderRadius: '1rem',
        padding: '1.2rem',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 0 .2rem #cbcacaff',
    },
    yourTextContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    yourTextTitleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '.8rem',
    },
    componentTitle: {
        fontFamily: 'Inter',
        fontWeight: '600',
        fontSize: '1.2rem',
        color: '#333C47',
    },
    tooltipText: {
        fontFamily: 'Inter',
        fontSize: '.8rem',
        textAlign: 'center',
    },
    icon: {
        fontSize: '1.2rem',
        color: '#8d939eff',
    },
    wordListContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '1.5rem',
    },
    wordListTextField: {
        width: '44vw',
        '& .MuiInputBase-root': {
            borderRadius: '.6rem',
            height: '2.5rem',
        },
    },
    actionButtonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '14rem',
        justifyContent: 'space-between',
    },
};

export default sxStyles;
