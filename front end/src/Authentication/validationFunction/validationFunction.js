const validationName = (targetValue) => {
    var regex = /^[a-zA-Z]{3,12}$/;
    return regex.test(targetValue) ? {
        validation: true,
        errorMessage: 'Approved'
    } : {
        validation: false,
        errorMessage: 'Invalid Name'
    }

};

const validationEmail = (targetValue) => {
    var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    return regex.test(targetValue) ? {
        validation: true,
        errorMessage: 'Approved'
    } : {
        validation: false,
        errorMessage: 'Invalid Email'
    }
};

const validationPassword = (targetValue) => {
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;
    return regex.test(targetValue) ? {
        validation: true,
        errorMessage: 'Approved'
    } : {
        validation: false,
        errorMessage: 'at least six numbers,one digit,UpperCase,LowerCase'
    }
};

const validationConfirmPassword = (targetValue, password) => {
    return (targetValue == password) ? {
        validation: true,
        errorMessage: 'Approved'
    } : {
        validation: false,
        errorMessage: 'Confirm Password Does Not Match The Password'
    }
};


const validationFunction = (targetValue, nameOfField, password = '') => {
    switch (nameOfField) {
        case 'fName':
        case 'lName':
            return validationName(targetValue);
        case 'email':
            return validationEmail(targetValue);
        case 'password':
            return validationPassword(targetValue);
        case 'confirmPassword':
            return validationConfirmPassword(targetValue,password);
    }
};

export default validationFunction
