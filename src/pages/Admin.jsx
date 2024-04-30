import {UploadForm} from '../components/ui/UploadForm.jsx'
import {FaPencil} from 'react-icons/fa6'
import Title from '../components/layout/Title.jsx'

export const Admin = () => {
  return (
    <div className={'bg-egg flex min-h-fit w-full flex-col items-center'}>
      <div className="flex w-full flex-col items-center justify-center">
        <Title hero={'Admin Database'} subHero={'Choose a Category'} Icon={FaPencil} />
        <div className="h-fit w-3/4 py-8">
          <UploadForm />
        </div>
      </div>
    </div>
  )
}
