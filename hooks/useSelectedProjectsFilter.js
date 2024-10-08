'use client';

import { useState } from 'react';
import { chips } from '../data/projects/constants/projects-all-featured';

/**
 * manages project highlights for an array of projects
 * @param {Array} allProjectsSorted - An array of projects to be filtered
 * @returns {Object} An object that keeps track of `userSelection`,`handleSelected`, and`filteredProjects`
 */

export default function useProjectFilter(allProjectsSorted) {
  const [showAll, setShowAll] = useState(false);
  const [isFeatured, setIsFeatured] = useState(true);
  const [highlighted, setHighlighted] = useState('');

  const handleSelected = (filter) => {
    switch (filter) {
      case chips.ALL:
        setShowAll(true);
        setIsFeatured(false);
        setHighlighted('');
        break;
      case chips.FEATURED:
        setShowAll(false);
        setIsFeatured(true);
        setHighlighted('');
        break;
      default:
        setShowAll(false);
        setIsFeatured(false);
        setHighlighted(filter);
        break;
    }
  };

  const filteredProjects = allProjectsSorted?.filter((project) => {
    if (showAll) {
      return true;
    }
    if (isFeatured) {
      return project.isFeatured;
    }
    if (highlighted) {
      return project.highlights.names.includes(highlighted);
    }
  });

  // user's filter selections
  const userSelection = { showAll, isFeatured, highlighted };

  return { userSelection, handleSelected, filteredProjects };
}
