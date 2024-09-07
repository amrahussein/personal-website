'use client';

/**
 * extracts and returns unique project highlights
 * @param {Array} projects - An array of projects to extract highlights from
 * @returns {Object} `uniqueHighlights`: projects array containing unique highlight names with their corresponding icons
 */

export default function useProjectHighlights(projects) {
  const highlights = projects
    // flattens the projects array into a single array of all highlights
    ?.flatMap((project) => project.highlights);

  const uniqueHighlights = highlights?.reduce((acc, { names, icons }) => {
    names.map((name, i) => {
      if (!acc.find(({ name: hName }) => hName === name)) {
        acc.push({ name, icon: icons[i] });
      }
    });
    return acc;
  }, []);

  return { uniqueHighlights };
}
