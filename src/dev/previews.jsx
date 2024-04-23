import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import {Admin} from '../pages/Admin.jsx'

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/Admin">
        <Admin />
      </ComponentPreview>
    </Previews>
  )
}

export default ComponentPreviews
