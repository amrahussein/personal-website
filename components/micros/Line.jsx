
export default function Line({color= 'border-secondary', mt='10'}) {
  return (
    <hr className={`border mx-5 opacity-30 ${color} mt-${mt}`} />
  )
}
