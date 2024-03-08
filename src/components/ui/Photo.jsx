import {useState} from 'react'

export default function PhotoObj(props) {
  const {url} = props
  const color = 'green'

  return (
    <div className={'flex w-1/4 flex-col bg-slate-500'}>
      <div>
        <img src={url} alt="product description" className={'w-fit'} />
      </div>
    </div>
  )
}
