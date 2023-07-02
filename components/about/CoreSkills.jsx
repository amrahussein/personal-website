import { useState } from 'react';
import AppLink from '../micros/typography/AppLink';
import ShowTechnicalSkills from './ShowTechnicalSkills';

export default function CoreSkills() {
  const [technicalSkillsExpanded, setTechnicalSkillsExpanded] = useState(false);

  return (
    <section className='space-y-4 pt-4'>
      <ShowTechnicalSkills
        open={technicalSkillsExpanded}
        setOpen={setTechnicalSkillsExpanded}
      />

      <p className='pt-4 text-secondary'>
        <em>
          my latest projects at my{' '}
          <AppLink href='https://github.com/amromoorie' rel='github' styles=''>
            Github account
          </AppLink>
        </em>
      </p>
      <p className='pt-4 text-secondary'>
        <em>
          more info at my{' '}
          <AppLink
            href='https://linkedin.com/in/amromoorie'
            rel='linkedIn'
            styles=''
          >
            LinkedIn Profile
          </AppLink>
        </em>
      </p>
    </section>
  );
}
