import {Fragment} from 'react'

export const Photo = ({src, alt, size = 50}) => {
  return (
    <Fragment>
      <div className={'aspect-square cursor-pointer overflow-hidden'}>
        <img src={src} alt={alt} className={`h-full w-full rounded-[12px] object-cover`} draggable={false} />
      </div>
    </Fragment>
  )
}
