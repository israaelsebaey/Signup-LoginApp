const Validation=(values)=>{
    const errors={};
    const emailPattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})([^\s]+$)/

    if(values.name===''){
        errors.name='username is required';
    }
    else if(values.name.length<3){
        errors.name ='username min length is 3'
    }
    if(values.email===''){
        errors.email='email is required';
    }
    else if(!emailPattern.test(values.email)){
       errors.email ='email should be user@gmail.com'
    }
    if(values.password===''){
        errors.password='password is required'
    }
    else if(!passwordPattern.test(values.password)){
        errors.password=`enter upper & lower case characters, numbers,special characters & 
        min length is 8
        `;
    }
    if(values.cpassword===''){
        errors.cpassword='confirm password is required'
    }
    else if(values.password!==values.cpassword){
        errors.cpassword=`confirm password doesn't match`
    }
    return errors;
}

export default Validation;