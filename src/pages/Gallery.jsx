import {Link} from 'react-router-dom'

const GalleryPage = () => {
  const thumbnails = [
    {url: 'src/assets/firearms_thumbnail.jpg', alt: 'weapon engraving', link: './gallery/firearms', title: 'firearms'},
    {
      url: 'src/assets/thermos_thumbnail.jpeg',
      alt: 'thermos & cups engraving',
      link: './gallery/thermos',
      title: 'Thermoses',
    },
    {url: 'src/assets/other_thumbnail.jpeg', alt: 'other engraving', link: './gallery/other', title: 'Other'},
  ]

  return (
    <section className={'flex min-h-screen w-full items-center justify-center pb-8 font-sans'}>
      <div className={'grid grid-rows-4 gap-4 p-4 md:grid-cols-2 md:grid-rows-2 md:pt-8'}>
        <div className={'flex h-full w-full text-center'}>
          <h2 className={'h-full w-full content-center font-sans text-7xl text-imposter_red'}>Gallery</h2>
        </div>
        {thumbnails.map((thumbnail, index) => (
          <Link to={`/gallery/${thumbnail.title}`} key={index} className={'relative block h-80 w-80 overflow-hidden'}>
            <img
              src={thumbnail.url}
              alt={thumbnail.alt}
              className={'h-full w-full rounded-[12px] object-cover hover:opacity-40'}
            />
            <div
              className={`absolute inset-0 flex items-center justify-center rounded-[12px] bg-black bg-opacity-50 opacity-0 transition duration-300 ease-in-out hover:opacity-100`}
            >
              <span className={'text-xl font-bold text-white'}>{thumbnail.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default GalleryPage
