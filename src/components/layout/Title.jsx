import {Fragment} from 'react'

const Title = ({hero, subHero, Icon}) => {
  return (
    <Fragment>
      <div className={'h-18 my-4 flex w-full flex-col items-center gap-3 pt-6 text-center leading-tight'}>
        <div className={'flex w-fit flex-row'}>
          {Icon && <Icon className={'mr-2 text-5xl'} />}
          <h1 className={'h-full w-full text-5xl font-semibold capitalize'}>{hero}</h1>
        </div>
        <h2>{subHero}</h2>
      </div>
    </Fragment>
  )
}
export default Title
