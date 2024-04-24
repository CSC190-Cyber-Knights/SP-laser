import {ButtonLink} from '../components/ui/ButtonLink.jsx'

const ErrorPage = () => {
  return (
    <div style={{backgroundColor: '#003153', textAlign: 'center'}}>
      {/* Title */}
      <div>
        <h1 className="py-8 text-3xl font-semibold text-neutral-200">404 - PAGE NOT FOUND</h1>
      </div>

      {/* Rest of the content */}
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}></div>
    </div>
  )
}

export default ErrorPage
