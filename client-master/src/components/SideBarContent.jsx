import { Box, Button, styled, List, ListItem } from '@mui/material'
import { CreateOutlined } from '@mui/icons-material'
import { SIDEBAR_DATA } from '../config/sidebar.config'
import React, { useState } from 'react'
import ComposeMail from './ComposeMail'

const ComposeButton = styled(Button)({
   background: '#c2e7ff',
   color: '#001d35',
   padding: 15,
   borderRadius: 16,
   minWidth: 140,
   textTransform: 'none'
})

const Container = styled(Box)({
  padding: 8,
  '& ul' :{
    padding: '10px 0 0 5px',
    fontSize: 14,
    fontWeight: 500,
    cursor: 'pointer'
    },
    '& > ul > li > svg' : {
      marginRight : 20
}
})

export default function SideBarContent() {
  const [openDiolog, setOpenDialog] = useState(false);

  const onComposeClick = () =>{
    setOpenDialog(true);
  }
  return (
    <Container>
            <ComposeButton onClick={() => onComposeClick()}>
            <CreateOutlined /> Compose
              </ComposeButton >
        <List>
          {
            SIDEBAR_DATA.map(data => (
              <ListItem>
                <data.icon fontSize='small' />{data.title}
              </ListItem>
            ))
          }
        </List>
        <ComposeMail openDiolog={openDiolog} setOpenDialog={setOpenDialog} />
    </Container>
  )
}