import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Textbox from '../components/Textbox';
import Button from '../components/Button';
import { Instagram, Linkedin, Facebook, Globe } from 'lucide-react';

const Login = () => {
  const { user } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleLogin = () => {
    // Add authentication 
    navigate("/dashboard");
  };

  const submitHandler = async (data) => {
    console.log("submit");
  };

  useEffect(() => {
    /*user && navigate("/dashboard");*/
  }, [user]);
  

  return (
    <div className='w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#f3f4f6]'>
      <div className='w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center'>
        {/* left side */}
        <div className='h-full w-full lg:w-2/3 flex flex-col items-center justify-center'>
          <div className='w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20'>
            <span className='flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base bordergray-300 text-gray-600'>
              Manage all your task in one place!
            </span>
            <p className='flex flex-col gap-0 md:gap-4 text-4xl md:text-6xl 2xl:text-7xl font-black text-center text-blue-700'>
              <span>eQuest Solutions</span>
              <span>Task Management</span>
            </p>

            
          </div>
        </div>

        {/* Right side (Form) */}
        <div className='w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center'>
        <form
            onSubmit={handleSubmit(submitHandler)}
            className='form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-white px-10 pt-14 pb-14'
          >
            <div className=''>
              <p className='text-blue-600 text-3xl font-bold text-center'>
                Welcome back!
              </p>
              <p className='text-center text-base text-gray-700 '>
                Keep all your credential safge.
              </p>
            </div>

            <div className='flex flex-col gap-y-5'>
              <Textbox
                placeholder='email@example.com'
                type='email'
                name='email'
                label='Email Address'
                className='w-full rounded-full'
                register={register("email", {
                  required: "Email Address is required!",
                })}
                error={errors.email ? errors.email.message : ""}
              />
              <Textbox
                placeholder='your password'
                type='password'
                name='password'
                label='Password'
                className='w-full rounded-full'
                register={register("password", {
                  required: "Password is required!",
                })}
                error={errors.password ? errors.password.message : ""}
              />

              <span className='text-sm text-gray-500 hover:text-blue-600 hover:underline cursor-pointer'>
                Forget Password?
              </span>

              <Button  onClick={handleLogin} text="Go to Dashboard" 
                type='submit'
                label='Submit'
                className='w-full h-10 bg-blue-700 text-yellow-50 rounded-full'
              />
            </div>
            {/* Social Icons */}
            <div className='flex justify-center gap-6 mt-6'>
              <a href='https://in.linkedin.com/company/equest-solutions-india' target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:text-blue-700'>
                <Linkedin size={24} />
              </a>
              <a href='https://www.instagram.com/explore/locations/475766973/equest-solutions/?hl=en' target='_blank' rel='noopener noreferrer' className='text-purple-500 hover:text-pink-600'>
                <Instagram size={24} />
              </a>
              <a href='https://www.facebook.com/equestsolutions/' target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:text-blue-600'>
                <Facebook size={24} />
              </a>
              <a href='https://equestsolutions.net/' target='_blank' rel='noopener noreferrer' className='text-gray-500 hover:text-green-600'>
                <Globe size={24} />
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
