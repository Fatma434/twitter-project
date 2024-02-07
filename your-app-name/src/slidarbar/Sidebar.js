import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Button } from '@mui/material';



function Sidebar(){
return(
    <div className='sidbar'>
        {/* twitter icon */}
<TwitterIcon className='sidebar__twitterIcon'/>
<SidebarOption  active Icon={HomeIcon} text ="Home"/>
<SidebarOption Icon={SearchIcon} text ="Explore"/>
<SidebarOption Icon={NotificationsNoneIcon} text ="Notification"/>
<SidebarOption Icon={MailOutlineIcon} text ="message"/>
<SidebarOption Icon={BookmarkBorderIcon} text ="Bookmark"/>
<SidebarOption Icon={ListAltIcon} text ="Lists"/>
<SidebarOption Icon={PermIdentityIcon} text ="Profile"/>
<SidebarOption Icon={MoreHorizIcon} text ="More"/>
    
    {/* Button -> Tweet */}
    <Button varient="outlined" className='sidebar__tweet' fullWidth>Tweet</Button>
    </div>

);
}


export default Sidebar;
