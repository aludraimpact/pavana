"use client";
import React, { useState } from 'react';
import { login_user } from '@/services';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation'


export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const router = useRouter()

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await login_user(formData);
    if (res.success) {
      toast.success(res.message);
      Cookies.set("token", res.token);
      setTimeout(() => {
        router.push('/dashboard')
      }, 1000);
    } else {
      toast.error(res.message);
    }
  };

  return (
    <>
      <section className="text-center text-indigo-600">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-indigo-800 dark:border-indigo-700 shadow-2xl border border-stone-200">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-indigo-600 md:text-2xl dark:text-white">
                Sign in to your Pavana
              </h1>
              <form onSubmit={handleSubmit} className=" space-y-4 md:space-y-6" action="#">
                <div className='text-left'>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Username</label>
                  <input onChange={(e) => setFormData({ ...formData, email: e.target.value })} type="text" name="email" id="email" className="bg-indigo-50 border border-indigo-300 text-indigo-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-indigo-700 dark:border-indigo-600 dark:placeholder-indigo-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter your pavana username" required={true} />
                </div>
                <div className='text-left'>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Password</label>
                  <input onChange={(e) => setFormData({ ...formData, password: e.target.value })} type="password" name="password" id="password" placeholder="••••••••" className="bg-indigo-50 border border-indigo-300 text-indigo-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-indigo-700 dark:border-indigo-600 dark:placeholder-indigo-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                </div>
                <button type="submit" disabled={!formData.email || !formData.password} className="w-full text-white bg-indigo-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  )
}
