import SectionHeader from '../elements/sectionHeader';

import TimelineData from '../../data/timeline.json';

export default function About() {
  return (
    <div id='about' className='py-4 text-justify'>
      <SectionHeader header='about' />
      <article className='prose mx-auto mt-8 max-w-screen-2xl place-content-center px-2 text-center lg:prose-xl md:px-4 lg:px-16'>
<blockquote>
  <p>
    I’m <strong>Harshdeep Sharma</strong>, a final-year PhD researcher in Computational Mechanics at <strong>IIT Patna</strong>. 
    My research focuses on developing cutting-edge numerical models for simulating fatigue and fracture behavior 
    in fiber-reinforced composites. I work extensively with <strong>phase-field</strong> and <strong>cohesive zone methods</strong>, 
    and I specialize in implementing <strong>custom user elements (UELs)</strong> in Abaqus.
  </p>
  <p>
    My broader vision is to bridge the gap between traditional physics-based modeling and emerging AI techniques 
    to build next-generation material modeling tools. I'm passionate about high-performance computing, automation, 
    and open-source scientific development.
  </p>
</blockquote>
      </article>
      <div className='mx-auto max-w-screen-2xl px-2 md:px-4 lg:px-16'>
        <ul className='timeline timeline-vertical timeline-snap-icon my-10 max-md:timeline-compact'>
          {TimelineData.map((data, index) => (
            <li key={data.year}>
              <div className='timeline-middle'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='h-5 w-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div
                className={
                  index % 2 === 0
                    ? 'timeline-start mb-10 md:text-end'
                    : 'timeline-end mb-10'
                }
              >
                <time className='font-mono italic'>{data.year}</time>
                <div className='text-lg font-black'>{data.title}</div>
                <div className='pb-2 text-sm font-bold'>{data.subTitle}</div>
                {data.text}
              </div>
              <hr
                className={
                  index !== TimelineData.length - 1 ? 'bg-neutral' : ''
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
