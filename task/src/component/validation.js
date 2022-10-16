const validation = (value) =>{
    let errors = {}

    if(!value.email){
        errors.email = "Email Required!"
    }


    if(!value.password){
        errors.password = "Password Required!"
    }

    else if (value.password.length < 9){
        errors.password = "Password must be more than 9 character"
    }

    return errors;
}

export default validation