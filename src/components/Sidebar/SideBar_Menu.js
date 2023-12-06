import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import QuizIcon from '@mui/icons-material/Quiz';
import HandshakeIcon from '@mui/icons-material/Handshake';
import PeopleIcon from '@mui/icons-material/People';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';


export const SideBar_Menu = [
    {
        title: "Dashboard",
        icon:  <HomeIcon />
    },

    {
        title: "Knowledge Assessment",
        icon:  <QuizIcon />
    },

    {
        title: "Succession Planner",
        icon:  <HandshakeIcon />
    },

    {
        title: "People Management",
        icon:  <PeopleIcon />
    },

    {
        title: "Training Management",
        icon:  <ContentPasteIcon />
    },

    {
        title: "Competency Management",
        icon:  <AssessmentIcon />
    },

    {
        title: "System Administration",
        icon:  <SettingsIcon />
    },
]