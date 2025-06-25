import Link from 'next/link';
import Image from 'next/image';

import profilePic from '../../../public/img/harshdeep_profile_photo.jpg';

export default function Hero() {
  return (
    <section
      id='home'
      className='hero min-h-screen bg-white text-black dark:bg-[#0f172a] dark:text-white transition-colors duration-300'
    >
      <div className='hero-content max-w-screen-2xl flex-col gap-4 px-2 lg:flex-row-reverse lg:px-4'>
        <Image
          src={profilePic}
          alt='Picture of Harshdeep Sharma'
          className='w-full max-w-md rounded-lg shadow-2xl md:max-w-xl lg:w-1/2 lg:max-w-lg xl:max-w-xl'
        />
        <div className='flex w-full flex-col items-center text-justify lg:w-1/2 lg:items-start'>
          <h1 className='py-4 text-start text-2xl font-bold'>
            I’m a PhD researcher in Computational Mechanics, passionate about solving
            real-world problems at the intersection of numerical simulation, software engineering,
            and applied mathematics.
          </h1>
          <p className='py-2 text-xl font-medium'>
            My research focuses on developing fatigue and fracture models for fiber-reinforced
            composites using phase-field methods, finite element modeling, and custom solvers
            through Abaqus UEL/UMAT, Python, FORTRAN, and C++. I also integrate commercial tools
            like Abaqus and COMSOL with open-source libraries like FEniCS, ParaView, and Gmsh to
            create scalable simulation pipelines.
          </p>
          <Link
            href='/#contact'
            role='button'
            className='btn btn-outline btn-primary btn-wide my-6'
          >
            Contact Me
          </Link>
          <Link
            href='/harshdeep_sharma_cv.pdf'
            target='_blank'
            rel='noopener noreferrer'
            role='button'
            className='btn btn-primary btn-wide my-2'
          >
            Download CV
          </Link>
        </div>
      </div>
    </section>
  );
}
