import React from 'react'
import { Button } from '@mui/material'
import {ButtonGroup} from '@mui/material'
import "../../style/cart/cartStyle.css"

const GroupedButton= () => {
  return (
    <ButtonGroup className='buttonGroup'>
      <Button size='small'>-</Button>
      <Button disabled size='small'>1</Button>
      <Button size='small'>+</Button>
    </ButtonGroup>
  )
}

export default GroupedButton;
