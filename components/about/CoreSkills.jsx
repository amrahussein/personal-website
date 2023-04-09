import { useState } from 'react';
import AppHeading from '../micros/typography/AppHeading';
import AppLink from '../micros/typography/AppLink';
import SkillsVisualized from './SkillsVisualized';

export default function CoreSkills() {
  const [visualizedSkillsExpanded, setVisualizedSkillsExpanded] =
    useState(false);

  return (
    <section className='space-y-4'>
      <AppHeading>My Core Skills...</AppHeading>

      <SkillsVisualized
        open={visualizedSkillsExpanded}
        setOpen={setVisualizedSkillsExpanded}
      />

      <p className='pt-4 text-secondary'>
        <em>
          my latest projects at my{' '}
          <AppLink href='https://github.com/amromoorie' rel='github' styles=''>
            GitHub account
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
