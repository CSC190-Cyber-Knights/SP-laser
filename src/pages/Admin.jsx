import {UploadForm} from '../components/ui/UploadForm.jsx'
import {Title} from '../components/layout/Title.jsx'
import {FaCloud} from 'react-icons/fa'

export const Admin = () => {
  return (
    <div className={'flex h-screen w-full flex-col items-center bg-rich_black'}>
      <FaCloud className={'text-9xl text-white'} />
      <div className="w-fit flex-col space-y-4 rounded-lg">
        <Title hero={'Admin Page'} subHero={'Choose a Category'} />
        <UploadForm />
      </div>
    </div>
  )
}
