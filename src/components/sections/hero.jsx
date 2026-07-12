import Link from 'next/link';
import Image from 'next/image';

import profilePic from '../../../public/img/harshdeep_profile_photo.jpg';
import socials from '../../data/socials.json';

export default function Hero() {
  return (
    <section id='home' className='hero bg-base-100 min-h-screen'>
      <div className='hero-content max-w-screen-2xl flex-col gap-10 px-4 lg:flex-row-reverse lg:gap-16'>
        <Image
          src={profilePic}
          alt='Portrait of Harshdeep Sharma'
          priority
          className='ring-base-300 w-full max-w-xs rounded-2xl shadow-2xl ring-1 md:max-w-sm lg:w-1/2 lg:max-w-md'
        />
        <div className='flex w-full flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left'>
          <p className='text-primary text-sm font-semibold tracking-widest uppercase'>
            PhD Researcher · Computational Mechanics
          </p>
          <h1 className='mt-4 text-3xl leading-tight font-bold md:text-4xl xl:text-5xl'>
            Building next-generation models for{' '}
            <span className='text-primary'>fracture &amp; fatigue</span> in
            composites.
          </h1>
          <p className='mt-5 max-w-xl text-lg opacity-80'>
            I develop phase-field and cohesive-zone methods, custom Abaqus
            UEL/UMAT solvers, and physics-informed machine learning for material
            modeling — building scalable simulation pipelines in Python, Fortran
            and C++.
          </p>

          <div className='mt-8 flex flex-wrap justify-center gap-3 lg:justify-start'>
            <Link href='/#contact' role='button' className='btn btn-primary'>
              Get in touch
            </Link>
            <Link
              href='/harshdeep_sharma_cv.pdf'
              target='_blank'
              rel='noopener noreferrer'
              role='button'
              className='btn btn-outline btn-primary'
            >
              Download CV
            </Link>
          </div>

          <div className='mt-8 flex gap-5'>
            {socials.map(({ name, url, icon }) => (
              <a
                key={name}
                href={url}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={name}
                className='hover:text-primary opacity-70 transition hover:opacity-100'
              >
                <svg
                  className='h-6 w-6'
                  fill='currentColor'
                  role='img'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <title>{name}</title>
                  <path d={icon} fillRule='evenodd' clipRule='evenodd' />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
