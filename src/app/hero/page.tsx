import React from 'react';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

const Hero = () => {
  return (
    <>
      <Header />
      <div
        id="hero"
        className="relative min-h-screen bg-no-repeat bg-left lg:bg-[15%] bg-cover"
        style={{
          backgroundImage: "url(/portfolio.png)",
          backgroundSize: "30%",
          backgroundPosition: "left 100px top 100px",
        }}
      >
        
        <div className="absolute inset-0 bg-gradient-to-r from-rose-200 to-red-300 opacity-50" />

       
        <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)] relative z-10">
          <div className="hidden lg:block"></div>
          <div className="text-[50px] sm:text-[50px] font-bold leading-tight flex justify-center items-center">
            <div>
              <p>Hi! I'm Sobia Fatima</p>
              <p>And I'm Frontend Developer</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hero;
