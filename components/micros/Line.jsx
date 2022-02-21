
export default function Line({color= 'border-important', mt='10'}) {
  return (
    <hr className={`border mx-5 opacity-50 ${color} mt-${mt}`} />
  )
}
