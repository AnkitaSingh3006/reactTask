const validation = (value) =>{
    let errors = {}

    if(!value.email){
        errors.email = "Please fill out this field!"
    }


    if(!value.password){
        errors.password = "Please fill out this field!"
    }

    else if (value.password.length < 9){
        errors.password = "Password must be more than 9 character"
    }

    return errors;
}

export default validation