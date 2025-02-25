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

  const submitHandler = async (data) => {
    console.log("submit");
  };

  useEffect(() => {
    /*user && navigate("/dashboard");*/
  }, [user]);
  

  return (
    <div className='w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#f3f4f6]'>
      <div className='w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center'>
        
        {/* Left side */}
        <div className='h-full w-full lg:w-2/3 flex flex-col items-center justify-center'>
          <div className='w-full md:max-w-lg flex flex-col items-center justify-center gap-5'>
            <span className='py-1 px-3 border rounded-full text-sm border-gray-300 text-gray-600'>
              Manage all your tasks in one place!
            </span>
            <p className='text-4xl font-black text-center text-blue-700'>
              <span>eQuest Solutions</span><br/>
              <span>Task Management</span>
            </p>
          </div>
        </div>

        {/* Right side (Form) */}
        <div className='w-full md:w-1/3 p-4 flex flex-col justify-center items-center'>
          <form 
            onSubmit={handleSubmit(submitHandler)}
            className='w-full md:w-[400px] bg-white px-10 pt-14 pb-14 rounded-lg shadow-md'
          >
            <p className='text-blue-600 text-3xl font-bold text-center'>Welcome Back!</p>
            <p className='text-center text-base text-gray-700 mb-8'>Keep all your tasks safe</p>

            <Textbox
              placeholder='email@example.com'
              type='email'
              name='email'
              lable='Email Address'
              register={register("email", { required: "Email Address is required!" })}
              error={errors.email?.message}
            />

            <Textbox
              placeholder='your password'
              type='password'
              name='password'
              lable='Password'
              register={register("password", { required: "Password is required!" })}
              error={errors.password?.message}
            />

            <span className='text-sm text-gray-500 hover:text-blue-600 hover:underline cursor-pointer mt-2'>
              Forget Password?
            </span>

            <Button type='submit' lable='Submit' className='w-full h-10 bg-blue-700 text-white rounded-full mt-4' />

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
