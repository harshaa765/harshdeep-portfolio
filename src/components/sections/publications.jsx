'use client';

import SectionHeader from '../elements/sectionHeader';

const publications = [
  {
    title:
      'Combined phase-field and cohesive zone modeling for mixed-mode fracture in polymer composites',
    authors: 'H. Sharma, A. Singh',
    journal: 'Engineering with Computers, 2025',
    doi: 'https://doi.org/10.1007/s00366-025-02134-y'
  },
  {
    title:
      'Numerical implementation of a modified cohesive zone model for HCF behavior of adhesively bonded composite laminates under mixed mode loading',
    authors: 'H. Sharma, A. Singh',
    journal: 'International Journal of Fatigue, 2024',
    doi: 'https://doi.org/10.1016/j.ijfatigue.2023.108128'
  },
  {
    title:
      'An efficient phase field solver for modelling of elastic–plastic fracture in bimaterials',
    authors: 'H. Sharma, A. Singh',
    journal: 'International Journal of Mechanics and Materials in Design, 2024',
    doi: 'https://doi.org/10.1007/s10999-023-09665-6'
  },
  {
    title:
      'A degradation-informed load accumulation framework for phase-field modeling of high-cycle fatigue in composites',
    authors: 'H. Sharma, A. Singh',
    journal: 'Submitted to Composites Science and Technology (Under Review)',
    doi: ''
  },
  {
    title:
      'Physics-Informed Neural Networks with Fourth-Order Phase-Field Modeling for Fracture of Functionally Graded Materials',
    authors: 'H. Sharma, S. Ahmad, S. Singh, A. Singh',
    journal: 'To be submitted to Structures',
    doi: ''
  }
];

export default function Publications() {
  return (
    <div id='publications' className='py-6 text-justify'>
      <SectionHeader header='publications' />
      <div className='mx-auto mt-8 max-w-screen-2xl px-2 md:px-4 lg:px-16'>
        <ul className='list-disc space-y-6 pl-6'>
          {publications.map((pub, idx) => (
            <li key={idx} className='prose lg:prose-xl'>
              <p>
                <strong>{pub.title}</strong>
                <br />
                <span className='text-sm italic'>{pub.authors}</span>
                <br />
                <span className='text-sm'>{pub.journal}</span>
                {pub.doi && (
                  <>
                    <br />
                    <a
                      href={pub.doi}
                      className='text-blue-600 underline'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      [DOI]
                    </a>
                  </>
                )}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
