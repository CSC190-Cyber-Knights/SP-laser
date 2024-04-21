export default function GridGallery({images}) {
  return (
    <div className="grid grid-cols-2 content-center gap-1">
      {images &&
        images.map((imgUrl, index) => (
          <div className={'relative'}>
            <div className={'absolute inset-0 z-10 flex'}>
              <div className={'o absolute inset-0 bg-black opacity-70'}></div>
              <div className={'z-10 m-auto self-center uppercase'}>hello</div>
            </div>
            <img key={index} src={imgUrl} alt={imgUrl} className={'h-full w-full object-cover'} />
          </div>
        ))}
    </div>
  )
}
