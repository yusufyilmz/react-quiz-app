export const getClassName = (index) => {
    return `element-animation${index} btn btn-lg btn-primary btn-block"`
}

export const getOptionName = (index) => {
    switch (index) {
        case 0:
            return "A";
        case 1:
            return "B";
        case 2:
            return "C";
        case 3:
            return "D";
        default:
            return "";
    }
}


export const getErrorStyle = (detail) => {

    if (detail) {
        return { marginTop: 200 }
    }

    return {}
}


export const getOptionStyle = (itemIndex, answerIndex) => {
    const style = { width: '100%' }

    if (itemIndex === answerIndex) {
        style.borderColor = 'red';
        style.borderWidth = 5;
    }

    return style;
}