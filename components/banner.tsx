import Image from 'next/image'

export function Banner() {
  return (
    <div className="relative h-64 overflow-hidden">
      <Image
        src="/banner.gif"
        alt="Cover"
        fill
        className="object-cover"
      />
  </div>
  )
}