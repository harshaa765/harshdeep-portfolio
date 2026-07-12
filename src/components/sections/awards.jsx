import SectionHeader from '../elements/sectionHeader';
import awards from '../../data/awards.json';

export default function Awards() {
  return (
    <div id='awards' className='py-6 text-justify'>
      <SectionHeader header='awards' />
      <div className='mx-auto mt-8 max-w-screen-2xl px-2 md:px-4 lg:px-16'>
        <ul className='timeline timeline-vertical timeline-snap-icon max-md:timeline-compact'>
          {awards.map((item, idx) => (
            <li key={idx}>
              <div className='timeline-middle text-xl'>{item.icon}</div>
              <div
                className={
                  idx % 2 === 0
                    ? 'timeline-start mb-10 md:text-end'
                    : 'timeline-end mb-10'
                }
              >
                <time className='font-mono italic'>{item.year}</time>
                <div className='text-lg font-black'>{item.title}</div>
                <div className='text-sm font-medium'>{item.description}</div>
              </div>
              <hr className={idx !== awards.length - 1 ? 'bg-neutral' : ''} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
