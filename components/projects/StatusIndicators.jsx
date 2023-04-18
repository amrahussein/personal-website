export default function StatusIndicators({ hasCoreFeatDone }) {
  return (
    <div
      title={`${
        hasCoreFeatDone ? 'Project Core Functionalities has Done' : ''
      }`}
      className='-mb-2 flex items-start justify-end pt-1'
    >
      <div
        className={`h-4 w-4 rounded-full ${
          hasCoreFeatDone ? 'bg-green-500' : 'bg-gray-400'
        }`}
      />
      <div
        title={`${!hasCoreFeatDone ? 'Project is Under Development' : ''}`}
        className={`mx-2 h-4 w-4 rounded-full ${
          !hasCoreFeatDone ? 'animate-pulse bg-yellow-500' : 'bg-gray-400'
        }`}
      />
    </div>
  );
}
