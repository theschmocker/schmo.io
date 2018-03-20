const getTransitionStyles = timeout => {
    return {
        entering: {
            opacity: 0,
            transform: 'translateY(0.5rem)'
        },
        entered: {
            transition: `opacity ${timeout}ms ease, transform ${timeout}ms ease`,
            opacity: 1,
            transform: 'translateY(0px)'
        },
        exiting: {
            transition: `opacity ${timeout}ms ease, transform ${timeout}ms ease`,
            opacity: 0,
            transform: 'translateY(0.5rem)'
        },
    }
}

const getTransitionStyle = ({ timeout, status }) =>
    getTransitionStyles(timeout)[status]

export default getTransitionStyle
