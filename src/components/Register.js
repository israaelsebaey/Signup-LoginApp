import React, { Fragment } from 'react';
import { useDispatch} from 'react-redux';
import { addUser } from '../Redux/reducers/UserReducer';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faEnvelope,faKey } from '@fortawesome/free-solid-svg-icons';
import '../css/Form.css';
import bg from '../images/bg.svg';
import wave from '../images/wave.png';
import avater from '../images/avatar.svg';

const Register = () => {
  const dispatch=useDispatch();
  const {register,handleSubmit,formState:{errors},watch,reset}=useForm({
    mode:'onTouched'
  });
  const password=watch('password');
  const navigate=useNavigate();
  const onSubmit=(data)=>{
   dispatch(addUser(data));
   reset();
   setTimeout(()=>{
      navigate('/login')
   },2000) 
  }
  return (
    <Fragment>
        <div className='container form shadow-lg'>
            <div className='row'>
                <div className='col-6 d-lg-block d-none position-relative'>
                   <img src={wave} className='waveImg'/>
                   <img src={bg} className='bgImg position-absolute'/>
                </div>
                <div className='col-lg-6 col-12 my-auto'>
                    <form className='formContent mx-auto' onSubmit={handleSubmit(onSubmit)}>
                        <div className='avatar mb-3'>
                            <img src={avater} className='avatarImg'/>
                            <h2 className='my-3'>WELCOME</h2>
                        </div>
                        <div className="input-data mb-3">
                            <div className='input-group'>
                                <span class="input-group-text" id="basic-addon1">
                                    <FontAwesomeIcon icon={faUser} />
                                </span>
                                <input type="text" className="form-control" placeholder='Username'
                                autoComplete='off' name='name' 
                                {...register('name',{required:'name is required',
                                minLength:{value:3,message:'username min length is 3'}})}
                                />
                            </div>
                            <div className='errors text-start mt-2'>
                              <p>{errors.name && <p style={{color:'red'}}>{errors.name.message}</p>}</p>
                            </div>
                        </div>
                        <div class="input-data mb-3">
                            <div className='input-group'>
                                <span class="input-group-text" id="basic-addon1">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </span>
                                <input type="text" class="form-control" placeholder="Email" 
                                autoComplete='off' name='email'
                                {...register('email',{required:'email is required',
                                pattern:{value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                message:'email should be user@gmail.com'}})}
                               
                                />
                            </div>
                            <div className='errors text-start mt-2'>
                              <p>{errors.email && <p style={{color:'red'}}>{errors.email.message}</p>}</p>
                            </div>
                        </div>
                        <div class="input-data mb-3">
                            <div className='input-group'>
                                <span class="input-group-text" id="basic-addon1">
                                    <FontAwesomeIcon icon={faKey} />
                                </span>
                                <input type="password" class="form-control" placeholder="Password"
                                name='password'
                                {...register('password',{required:'password is required',
                                pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})([^\s]+$)/,
                                message:`enter upper & lower case characters, numbers,special characters & 
                                min length is 8`}})}
                                />
                            </div>
                            <div className='errors text-start mt-2'>
                              <p>{errors.password && <p style={{color:'red'}}>{errors.password.message}</p>}</p>
                            </div>
                        </div>
                        <div class="input-data mb-3">
                            <div className='input-group'>
                                <span class="input-group-text" id="basic-addon1">
                                    <FontAwesomeIcon icon={faKey} />
                                </span>
                                <input type="password" class="form-control" placeholder="Confirm Password"
                                name='cpassword'
                                {...register("cpassword",{required:"Confirm Password is required",
                                validate: (value) => value === password || "Confirm password does not match"})}
                                />
                            </div>
                            <div className='errors text-start mt-2'>
                              <p>{errors.cpassword && <p style={{color:'red'}}>{errors.cpassword.message}</p>}</p>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    </Fragment>
  )
}
export default Register;
