export const Title = ({hero, subHero, subText}) => {
  return (
    <div className={'m-auto grid grid-cols-1 grid-rows-2 p-3 pt-5 text-center'}>
      <h1 className={'text-4xl leading-tight'}>{hero}</h1>
      {subHero && <h2>{subHero}</h2>}
      {subText && <p>{subText}</p>}
    </div>
  )
}
export default Title
