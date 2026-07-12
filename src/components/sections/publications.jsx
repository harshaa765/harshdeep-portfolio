import SectionHeader from '../elements/sectionHeader';
import publications from '../../data/publications.json';

const STATUS = {
  published: { label: 'Published', badge: 'badge-success' },
  review: { label: 'Under Review', badge: 'badge-warning' },
  preparation: { label: 'In Preparation', badge: 'badge-ghost' },
};

function PublicationItem({ pub }) {
  const status = STATUS[pub.status] ?? STATUS.published;

  return (
    <li className='rounded-box border-base-300 bg-base-100 border p-5 shadow-sm transition-shadow hover:shadow-md'>
      <div className='mb-2 flex flex-wrap items-center gap-2'>
        <span className={`badge badge-sm ${status.badge}`}>{status.label}</span>
        <span className='text-sm font-medium opacity-70'>{pub.year}</span>
      </div>
      <h3 className='text-base leading-snug font-bold md:text-lg'>
        {pub.title}
      </h3>
      <p className='mt-1 text-sm italic opacity-80'>{pub.authors}</p>
      <p className='text-sm opacity-70'>{pub.venue}</p>
      {pub.doi && (
        <a
          href={`https://doi.org/${pub.doi}`}
          className='btn btn-outline btn-primary btn-xs mt-3'
          target='_blank'
          rel='noopener noreferrer'
        >
          View DOI
        </a>
      )}
    </li>
  );
}

export default function Publications() {
  const published = publications.filter((p) => p.status === 'published');
  const inProgress = publications.filter((p) => p.status !== 'published');

  return (
    <section id='publications' className='py-6'>
      <SectionHeader header='publications' />
      <div className='mx-auto mt-8 max-w-screen-2xl px-2 md:px-4 lg:px-16'>
        <ul className='grid gap-4 md:grid-cols-2'>
          {published.map((pub) => (
            <PublicationItem key={pub.title} pub={pub} />
          ))}
        </ul>

        {inProgress.length > 0 && (
          <>
            <h3 className='mt-10 mb-4 text-center text-xl font-semibold opacity-80'>
              Manuscripts Under Review &amp; In Preparation
            </h3>
            <ul className='grid gap-4 md:grid-cols-2'>
              {inProgress.map((pub) => (
                <PublicationItem key={pub.title} pub={pub} />
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
}
