export const Photo = ({src, alt, size = 80}) => {
  return (
    <div>
      <img src={src} alt={alt} className={`rounded-[12px] object-cover w-[${size}px] h-[${size}px]`} />
    </div>
  )
}
