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
      body: JSON.stringify({
        name,
        email,
        message
      }),
      headers: {
        'Content-type': 'application/json'
      }
    });

    response = await response.json();

    if (response.status === 'ok') {
      setIsSuccess(1);
    } else {
      setIsSuccess(2);
    }

    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setIsSuccess(0);
      setIsLoading(false);
    }, 5000);
  };

  const isDisabled =
    isLoading || isSuccess !== 0 || !name || !email || !message;

  return (
    <section id='contact' className='py-6'>
      <SectionHeader header='contact' />
      <div className='mx-auto my-10 max-w-screen-2xl place-content-center px-2 py-4 text-center md:px-4 lg:px-16'>
        <div className='flex flex-col justify-around gap-8 lg:flex-row'>
          {/* Info Card */}
          <div className='card grid w-full place-items-center rounded-box bg-base-200 lg:w-1/2'>
            <div className='gap-6 p-4'>
              <p className='text-lg font-semibold'>
                I’m always open to academic collaborations, research discussions,
                and professional opportunities in computational mechanics,
                AI-assisted simulations, or advanced fatigue/fracture modeling.
              </p>
              <p className='mt-8'>
                Feel free to connect with me directly through the contact form,
                or reach out via my professional networks below.
              </p>
              <p className='mt-8 flex content-center justify-center gap-8 text-center'>
                {Socials.map(({ name, url, icon }) => (
                  <a
                    href={url}
                    className='text-gray-400 hover:text-gray-500'
                    key={name}
                    target='_blank'
                    rel='noopener noreferrer'
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
              </p>
            </div>
          </div>

          <div className='divider place-items-center lg:divider-horizontal'>
            OR
          </div>

          {/* Contact Form */}
          <div className='card grid w-full place-items-center gap-4 rounded-box bg-base-200 lg:w-1/2'>
            <div className='gap-6 p-4'>
              <input
                type='text'
                placeholder='Your Name'
                className='input input-bordered mb-2 w-full'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type='email'
                placeholder='Your Email'
                className='input input-bordered mb-2 w-full'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                placeholder='Your Message'
                className='textarea textarea-bordered textarea-md mb-2 w-full'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button
              className={`btn btn-outline btn-primary btn-wide mb-8 ${isDisabled ? 'btn-disabled' : ''}`}
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

      {/* Toast Message */}
      {(isSuccess === 1 || isSuccess === 2) && (
        <div className='toast toast-center'>
          <div
            className={`alert ${isSuccess === 1 ? 'alert-success' : 'alert-error'}`}
          >
            <span>
              {isSuccess === 1
                ? 'Your message was sent. I will get back to you soon.'
                : 'Failed to send message. Please try again later or use the links above.'}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
