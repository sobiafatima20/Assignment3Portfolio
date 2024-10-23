import React from "react";
import Image from "next/image";
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

const About = () => {
  return (
    <>
    <Header/>
      <div className="flex flex-col justify-center min-h-screen bg-gradient-to-r from-pink-300 via-red-100 to-pink-200">
        <p className="font-semibold text-rose-600 text-5xl mt-16 self-center">
          About Me
        </p>
        <div className="flex justify-center mt-8">
          <Image
            className="rounded-full border-rose-500 border-4"
            src="/profilepic.jpg"
            alt="profile-pic"
            width={90}
            height={90} 
          />
        </div>
        <p className="ml-3 mt-4 mr-3 text-justify">
          <b>Assalam O Aleikum</b>, my name is <b>Sobia Fatima</b>. I am a
          detail-oriented professional with a background in computer science and
          a passion for programming. I'm a front-end developer with experience
          in technologies like React, .NET, MVC, and databases. You have been
          working on a range of projects, from creating responsive user
          interfaces to building interactive features in applications. I'm
          recently been exploring TypeScript and React for various assignments
          and quizzes, focusing on mastering key concepts and improving your
          skills. I'm worked on several interesting projects, such as an
          image gallery using HTML, CSS, and JavaScript, and a To-Do list
          application using React and Redux. Additionally, I'm actively
          improving UI components in a chat application and working on
          implementing responsive designs across devices. Currently, you are
          exploring Next.js and learning its directory structure, while also
          building a 3-page website. I'm been continuously refining your CSS
          skills, particularly in making your designs responsive and
          user-friendly. Your dedication to learning, problem-solving, and
          enhancing your front-end skills is evident, and I'm commitment to
          personal growth and development in tech is impressive!
        </p>
      </div>
      <Footer/>
    </>
  );
};

export default About;
