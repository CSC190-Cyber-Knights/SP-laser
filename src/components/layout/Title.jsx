import {Fragment} from 'react'

const Title = ({hero, subHero, Icon}) => {
  return (
    <Fragment>
      <div className={'h-18 my-4 flex w-full flex-col items-center gap-3 pt-6 text-center leading-tight'}>
        <div className={'flex w-fit flex-col sm:w-fit sm:flex-row sm:items-center sm:text-center'}>
          {Icon && <Icon className={'mr-2 hidden text-5xl sm:block'} />}
          <h1 className={'h-full w-full text-6xl font-semibold capitalize sm:text-5xl'}>{hero}</h1>
        </div>
        <h2>{subHero}</h2>
      </div>
    </Fragment>
  )
}
export default Title
