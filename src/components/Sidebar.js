import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SearchIcon from '@material-ui/icons/Search';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import Button from '@material-ui/core/Button';
import SidebarOption from './SidebarOption';


function Sidebar() {
    return (
        <div className="sidebar">

            <TwitterIcon className="twitter__icon" />

            <SidebarOption active Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={SearchIcon} text="Explore" />
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
            <SidebarOption Icon={MailOutlineIcon} text="Messages" />
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
            <SidebarOption Icon={AssignmentOutlinedIcon} text="Lists" />
            <SidebarOption Icon={PersonOutlineIcon} text="Profile" />
            <SidebarOption Icon={MoreHorizRoundedIcon} text="More" />

            <Button className="sidebarBtn__tweet" variant="outlined" fullWidth >Tweet</Button>
        </div>
    )
}

export default Sidebar;
