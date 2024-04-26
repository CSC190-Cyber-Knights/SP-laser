import {Fragment} from 'react'

const Dot = () => (
  <Fragment>
    <div className="h-3 w-3 rounded-full bg-gray-500"></div>
  </Fragment>
)
const Loading = () => (
  <div className="flex h-full w-full items-center justify-center bg-gray-100 p-5">
    <div className="flex animate-pulse space-x-2">
      <Dot />
    </div>
  </div>
)
export default Loading
