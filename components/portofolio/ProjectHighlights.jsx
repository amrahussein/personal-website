export default function ProjectHighlights({
  projectHighlights,
  highlighted,
  handleSelected,
}) {
  return (
    <ul className='h-24 space-x-4 space-y-2 overflow-auto sm:ml-12 sm:-mb-10'>
      {projectHighlights?.map((highlight, idx) => (
        <li
          key={idx}
          className={`inline-block max-w-[10rem] cursor-pointer rounded-lg px-3 py-1 font-mono font-semibold text-gray-600 ${
            highlighted === highlight.name && 'bg-accent'
          }`}
          onClick={() => handleSelected(highlight.name)}
        >
          <span className=''>
            {highlight.icon && (
              <img
                alt={highlight.name}
                className='inline w-5'
                src={highlight.icon}
              />
            )}
          </span>
          <span className='pl-2'>{highlight.name}</span>
        </li>
      ))}
    </ul>
  );
}
