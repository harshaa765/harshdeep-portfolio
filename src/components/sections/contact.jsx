'use client';

import { useState } from 'react';

import SectionHeader from '../elements/sectionHeader';
import Socials from '../../data/socials.json';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(0);

  const submitData = async () => {
    setIsLoading(true);
    let response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({ name, email, message }),
      headers: { 'Content-type': 'application/json' }
    });

    response = await response.json();

    setIsSuccess(response.status === 'ok' ? 1 : 2);

    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setIsSuccess(0);
      setIsLoading(false);
    }, 5000);
  };

  const isDisabled = isLoading || isSuccess !== 0 || !name || !email || !message;

  return (
    <section id='contact' className='py-12 bg-base-100 dark:bg-base-300 transition-colors duration-500'>
      <SectionHeader header='contact' />
      <div className='mx-auto my-10 max-w-screen-2xl place-content-center px-2 py-4 text-center md:px-4 lg:px-16'>
        <div className='flex flex-col justify-around gap-8 lg:flex-row'>
          <div className='card w-full rounded-xl shadow-lg bg-base-200 dark:bg-base-100 transition-colors lg:w-1/2'>
            <div className='gap-6 p-6'>
              <p className='text-lg font-semibold'>
                If you'd like to reach out, feel free to use the form or any of the social links below.
              </p>
              <div className='mt-6 flex justify-center gap-6'>
                {Socials.map(({ name, url, icon }) => (
                  <a
                    href={url}
                    className='text-gray-500 hover:text-primary transition'
                    key={name}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={name}
                  >
                    <svg
                      className='h-8 w-8'
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

          <div className='divider lg:divider-horizontal'>OR</div>

          <div className='card w-full rounded-xl shadow-lg bg-base-200 dark:bg-base-100 transition-colors lg:w-1/2'>
            <div className='gap-6 p-6'>
              <input
                type='text'
                placeholder='Name'
                className='input input-bordered mb-3 w-full'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type='email'
                placeholder='Email'
                className='input input-bordered mb-3 w-full'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                placeholder='Your Message'
                className='textarea textarea-bordered textarea-md mb-3 w-full'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button
                className={`btn btn-primary btn-wide ${isDisabled ? 'btn-disabled' : ''}`}
                disabled={isDisabled}
                onClick={submitData}
                role='button'
                aria-disabled={isDisabled}
              >
                {isLoading ? 'Sending...' : 'Send'}
              </button>
            </div>
          </div>
        </div>

        {(isSuccess === 1 || isSuccess === 2) && (
          <div className='toast toast-center mt-6'>
            <div className={`alert ${isSuccess === 1 ? 'alert-success' : 'alert-error'}`}>
              <span>
                {isSuccess === 1
                  ? 'Message sent successfully! I will get back to you soon.'
                  : 'Failed to send your message. Please try again later.'}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
