export default function Line({ color = 'border-secondary', mt = '10' }) {
  return <hr className={`mx-5 border opacity-30 ${color} mt-${mt}`} />;
}
