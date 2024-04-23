import {UploadForm} from '../components/ui/UploadForm.jsx'
import {Title} from '../components/layout/Title.jsx'
import {FaCloud} from 'react-icons/fa'

export const Admin = () => {
  return (
    <div className={'flex h-screen w-full flex-col items-center bg-rich_black'}>
      <div className="rounded-lg w-fit flex-col space-y-4">
        <Title hero={'Admin Page'} subHero={'Choose a Category'} icon={<FaCloud />} />
        <UploadForm />
      </div>
    </div>
  )
}
