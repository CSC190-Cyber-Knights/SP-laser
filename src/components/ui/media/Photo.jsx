import {Fragment} from 'react'

export const Photo = ({src, alt, size = 50}) => {
  return (
    <Fragment>
      <div className={'aspect-square overflow-hidden'}>
        <img src={src} alt={alt} className={`h-full w-full  rounded-[12px] object-cover`} />
      </div>
    </Fragment>
  )
}
