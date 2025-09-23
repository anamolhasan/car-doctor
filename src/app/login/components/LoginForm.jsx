'use client'
import React from 'react'
import SocialLogin from './SocialLogin'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"


export default function LoginForm() {

  const handleSubmit = async(e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    await signIn('credentials', {email, password})
  }
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-8">
      <label className="form-control w-full">
        <div className="label w-full">
          <span className="label-text  font-bold">Email</span>
        </div>
        <input
          type="text"
          name="email"
          placeholder="Type here"
          className="input input-bordered w-full mb-5"
        />
      </label>
      <label className="form-control w-full mt-5">
        <div className="label w-full">
          <span className="label-text font-bold">Password</span>
        </div>
        <input
          type="password"
          name="password"
          placeholder="Type here"
          className="input input-bordered w-full mb-5"
        />
      </label>
      <button className="w-full h-12 bg-orange-500 text-white font-bold">
        Sign In
      </button>
      <p className="text-center">Or Sign In with</p>
      <SocialLogin />
      <p className="text-center">
        Already have an account?{" "}
        <Link
         href="/register" className="text-orange-500 font-bold">
          Register
        </Link>
      </p>
    </form>
  )
}
