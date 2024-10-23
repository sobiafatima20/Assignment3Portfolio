import React from 'react';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

const Contact = () => {
  return (
    <>
    <Header/>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-300 to-red-200 p-4">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold mb-6 text-center text-rose-400">Contact Us</h1>
          <form className="flex flex-col space-y-4">
            <label htmlFor="name" className="font-semibold">Username</label>
            <input
              type="text"
              name="name"
              placeholder='Username'
              required
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
            <label htmlFor="email" className="font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
            <label htmlFor="message" className="font-semibold">Message</label>
            <textarea
              name="message"
              placeholder="Message"
              required
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
              rows="4"
            />
            <button type="submit" className="bg-rose-300 hover:bg-rose-500 text-white p-2 rounded-md transition-colors duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
