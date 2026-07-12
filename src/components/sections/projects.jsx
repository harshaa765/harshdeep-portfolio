import Link from 'next/link';

import SectionHeader from '../elements/sectionHeader';

import { characterLimit } from '../../../src/utils';
import projects from '../../data/projects.json';

export default function Projects() {
  return (
    <section id='projects' className='py-6'>
      <SectionHeader header='Projects' />
      <div className='mx-auto my-10 max-w-screen-2xl place-content-center px-2 md:px-4 lg:px-16'>
        <div className='grid grid-flow-row grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project) => (
            <article
              key={project.id}
              className='card border-base-300 bg-base-100 border shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl'
            >
              <div className='from-primary to-secondary flex h-24 items-center justify-center bg-gradient-to-br text-5xl'>
                <span aria-hidden='true'>{project.icon}</span>
              </div>
              <div className='card-body'>
                <div className='flex items-start justify-between gap-2'>
                  <h2 className='card-title text-lg'>{project.title}</h2>
                  {project.stars > 0 && (
                    <span
                      className='badge badge-ghost shrink-0 gap-1'
                      aria-label={`${project.stars} GitHub stars`}
                    >
                      ★ {project.stars}
                    </span>
                  )}
                </div>

                <p className='min-h-12 text-sm opacity-80'>
                  {characterLimit(project.desc, 130)}
                </p>

                <div className='my-2 flex flex-wrap gap-2'>
                  {project.tech.map((item) => (
                    <span
                      key={`${project.id}-${item}`}
                      className='badge badge-outline badge-sm'
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className='card-actions mt-2 justify-end'>
                  <Link
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-outline btn-primary btn-sm'
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
