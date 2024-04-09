import {useParams} from 'react-router-dom'
// the type of product shown will be a result of the passed prop itemID
// this is where the pagination will happen
export const GalleryItem = () => {
  const {itemId} = useParams()
  return (
    <div className={'flex h-full w-full'}>
      <section className={''}>
        <h1 className={'text-center text-5xl text-imposter_red'}>{itemId}</h1>
      </section>
    </div>
  )
}
export default GalleryItem
