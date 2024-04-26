import {UploadForm} from '../components/ui/UploadForm.jsx'
import {FaPencil} from 'react-icons/fa6'
import Title from '../components/layout/Title.jsx'

export const Admin = () => {
  return (
    <div className={'bg-bg-primary flex h-screen min-h-fit w-full flex-col items-center bg-egg'}>
      <div className="flex w-full flex-col items-center justify-center">
        <Title hero={'Admin Page'} subHero={'Choose a Category'} Icon={FaPencil} />
        <div className="h-fit w-3/4 overflow-hidden">
          <UploadForm />
        </div>
      </div>
    </div>
  )
}
