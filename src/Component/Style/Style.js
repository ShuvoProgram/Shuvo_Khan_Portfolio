import { styled } from '@stitches/react';

export const Wrapper = styled('ul', {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 16px',
    borderRadius: '8px',
    width: 'fit-content',
    gap: '32px',
});

export const Tab = styled('li', {
    position: 'relative',
    listStyle: 'none',
    cursor: 'pointer',
    width: '50px',
    height: '30px',
    outline: 'none',

    span: {
        position: 'absolute',
        left: '4px',
        right: 0,
        top: '6px',
        bottom: 0,
        zIndex: 1,
        userSelect: 'none',
        fontSize: '1rem',
        color: 'c185fc',
    },
});

export const SocialLink = styled('a', {
    // base styles

    variants: {
        color: {
            violet: {
                backgroundColor: 'blueviolet',
                color: 'white',
                '&:hover': {
                    backgroundColor: 'darkviolet',
                },
            },
            gray: {
                backgroundColor: 'gainsboro',
                '&:hover': {
                    backgroundColor: 'lightgray',
                },
            },
        },
    },

    width: '32px',
    height: '32px',
    background: 'rgba(217, 217, 217, 0.1)',
    display: 'inline-flex',
    borderRadius: '50%',
    marginRight: '6px',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: '1',
    border: '1px solid rgba(255, 255, 255, 0.5)',
    cursor: 'pointer',

    '&::before': {
        content: "",
        width: '32px',
        height: '32px',
        position: 'absolute',
        backgroundColor: '',
        borderRadius: "50%",
        transform: 'scale(0)',
        transition: '0.3s ease-in-out'
    },

    '&:hover::before': {
        transform: 'scale(1)'
    },

    'svg':{
        width: '60%',
        zIndex: '1',
        transition: '0.3s ease-in-out'
    },

    '&:hover svg': {
        filter: 'brightness(0) saturate(100%) invert(0%) sepia(7%) saturate(98%) hue-rotate(346deg) brightness(95%) contrast(86%)'
    }
})

export const ButtonLink = styled('button', {
    // base styles

    variants: {
        color: {
            violet: {
                backgroundColor: 'blueviolet',
                color: 'white',
            },
            gray: {
                backgroundColor: 'gainsboro',
            },
        },
    },
    width: '12rem',
    height: '2.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px 5px',
    borderRadius: '10%',
    cursor: 'pointer',

    a: {
        color: "White",
        width: '150px',
        height: '20px'
    }
})