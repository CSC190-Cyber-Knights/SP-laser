import {Fragment} from 'react'

/**
 * Title component
 * @param {string} hero - The main title of the page
 * @param {string} subHero - The sub-title of the page
 * @param {Icon} Icon - The icon to be displayed next to the hero title
 * @returns {JSX.Element}
 * @constructor
 * @example
 * <Title hero={'Gallery'} subHero={'See some of my work'} Icon={FaImage} />
 * @example
 * <Title hero={'About Me'} subHero={'Learn more about me'} Icon={FaUser} />
 * @example
 * <Title hero={'Contact'} subHero={'Get in touch with me'} Icon={FaEnvelope} />
 * @example
 * <Title hero={'Services'} subHero={'Learn more about what I offer'} Icon={FaTools} />
 *
 **/
const Title = ({hero, subHero, Icon}) => {
  return (
    // <Fragment> is a React component that doesn't render any HTML. It's used to wrap multiple elements in a single parent element.
    <Fragment>
      <div className={'h-18 my-4 flex w-full flex-col items-center gap-3 pt-6 text-center leading-tight text-zinc-900'}>
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
