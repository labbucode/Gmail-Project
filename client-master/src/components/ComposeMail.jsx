import { Dialog, Typography, Box, styled, InputBase, TextField, Button } from '@mui/material'
import { Close, DeleteOutline } from '@mui/icons-material'
import React, { useState } from 'react'

const dialogStyle = {
    width: '80%',
    height: '90%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    borderRadius: '10px 10px 0 0' 
}

const Header = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px',
    background: '#f2f6fc',
    '& > p': {
        fontSize: 14,
        fontWeight: 500
    }   
})

const RecipientsWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    padding: '0 15px',
    '& > div': {
        fontSize: 14,
        borderBottom: '1px solid #F5F5F5',
        marginTop: 10
    }
})

const Footer  = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px',
    alignItems: 'center'
})

const SendButton = styled(Button)({
    background: '#0B57D0',
    color: '#fff',
    fontWeight: 500,
    textTransform: 'none',
    borderRadius: 18,
    width: 100
})

export default function ComposeMail({ openDiolog, setOpenDialog }) {

    const config = {
        Host : "smtp.elasticemail.com",
        Username : "doremon123@yopmail.com",
        Password : "99D59E29AE725B3E9A17CBAA1F09E562A3E7",
        Port: 2525,
    }

    const closeComposeMail = (e) => {
        e.preventDefault();
        setOpenDialog(false);
    }

    const sendMail = (e) => {
        e.preventDefault();
        if(window.Email){

            window.Email.send({
                ...config,
                To : 'sydlrb24@gmail.com',
                From : "sydlrb24@gmail.com",
                Subject : "This is the subject",
                Body : "And this is the body"
            }).then(
                message => alert(message)
                );
            }
                setOpenDialog(false);
    }
   
  return (
    <Dialog open={openDiolog} PaperProps={{ sx: dialogStyle}}>
        <Header>
            <Typography>New Message</Typography>
            <Close fontSize='small' onClick={(e) => closeComposeMail(e)} />
        </Header>
        <RecipientsWrapper>
            <InputBase placeholder='Recipients' />
            <InputBase placeholder='Subject' />
        </RecipientsWrapper>
        <TextField
        multiline rows={16} sx={{ '& .MuiOutlinedInput-notchedOutline': {border: 'none'}}}
        />
        <Footer>
            <SendButton onClick={(e) => sendMail(e)}>Send</SendButton>
            <DeleteOutline onClick={() => setOpenDialog(false)} />
        </Footer>
    </Dialog>
  )
}
