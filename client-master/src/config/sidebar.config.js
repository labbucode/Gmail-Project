import {  DeleteOutlined, InsertDriveFileOutlined, MailOutlined, Photo, SendOutlined, StarOutline } from "@mui/icons-material";


export const  SIDEBAR_DATA = [
    {
        name: 'inbox',
        title: 'Inbox',
        icon: Photo
    },
    {
        name: 'starred',
        title: 'starred',
        icon: StarOutline
    },
    {
        name: 'sent',
        title: 'Sent',
        icon: SendOutlined
    },
    {
        name: 'drafts',
        title: 'Drafts',
        icon: InsertDriveFileOutlined
    },
    {
        name: 'bin',
        title: 'Bin',
        icon: DeleteOutlined
    },
    {
        name: 'allmail',
        title: 'All Mail',
        icon: MailOutlined
    }
];