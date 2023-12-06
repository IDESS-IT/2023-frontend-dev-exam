import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import QuizIcon from '@mui/icons-material/Quiz';
import HandshakeIcon from '@mui/icons-material/Handshake';
import PeopleIcon from '@mui/icons-material/People';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export const SideBar_Menu = [
    {
        title: "Dashboard",
        icon:  <HomeIcon />,
        icon2: <KeyboardArrowDownIcon />
    },

    {
        title: "Knowledge Assessment",
        icon:  <QuizIcon />,
        icon2: <KeyboardArrowDownIcon />
    },

    {
        title: "Succession Planner",
        icon:  <HandshakeIcon />,
        icon2: <KeyboardArrowDownIcon />
    },

    {
        title: "People Management",
        icon:  <PeopleIcon />,
        icon2: <KeyboardArrowDownIcon />
    },

    {
        title: "Training Management",
        icon:  <ContentPasteIcon />,
        icon2: <KeyboardArrowDownIcon />
    },

    {
        title: "Competency Management",
        icon:  <AssessmentIcon />,
        icon2: <KeyboardArrowDownIcon />
    },

    {
        title: "System Administration",
        icon:  <SettingsIcon />,
        icon2: <KeyboardArrowDownIcon />
    },
]