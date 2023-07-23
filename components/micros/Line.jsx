export default function Line({
  color = 'border-secondary dark:border-slate-100',
  mt = '10',
}) {
  return <hr className={`mx-5 border opacity-30 ${color} mt-${mt}`} />;
}
