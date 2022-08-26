import React from 'react'
import styled from 'styled-components'
import Tube from '../img/logo.png'
import HomeIcon from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import HdRoundedIcon from '@mui/icons-material/HdRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import ReportGmailerrorredRoundedIcon from '@mui/icons-material/ReportGmailerrorredRounded';
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";


const Container = styled.div`
flex:1;
background-color:${({ theme }) => theme.bgLighter};
height:%;
color:${({ theme }) => theme.text};
position:sticky;
top:0px;
`

const Wrapper = styled.div`
  padding: 18px 26px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap:5px;
  font-weight: bold;
  margin-bottom: 25px;
  cursor:pointer;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size:12px;
  cursor:pointer;
  padding: 3.5px 0px;
  &:hover{
    background-color:${({ theme }) => theme.soft}
  }
`
const Hr = styled.hr`
margin:15px 0px;
border: 0.5px solid ${({ theme }) => theme.soft};;
`

const Login = styled.div`
font-size:12px;
`
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;

`





const Menu = ({ darkMode, setDarkMode }) => {

  const { currentUser } = useSelector((state) => state.user);

  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={Tube} />
            VideoDEX
          </Logo>
        </Link>
        <Item>
          <HomeIcon /> Home
        </Item>
        <Link to='trends' style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <TravelExploreIcon /> Explore
          </Item>
        </Link>
        <Link to='subscriptions' style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <SubscriptionsRoundedIcon /> Subscriptions
          </Item>
        </Link>
        <Hr />
        <Item>
          <VideoLibraryIcon /> Library
        </Item>
        <Item>
          <SettingsBackupRestoreIcon /> History
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <LightModeRoundedIcon /> {darkMode ? "Light" : "Dark"} Mode
        </Item>
        <Hr />

       {!currentUser && <> <Login>
          Sign in to like videos ans Subscribe
          <Link to='signin' style={{ textDecoration: "none" }}>
            <Button><AccountCircleOutlinedIcon />SIGN IN</Button>
          </Link>
        </Login>
        <Hr /></>}



        <Item>
          <LibraryMusicOutlinedIcon /> Music
        </Item>

        <Item>
          <SportsEsportsRoundedIcon /> Gaming
        </Item>
        <Item>
          <HdRoundedIcon /> Movies
        </Item>

        <Item>
          <LiveTvRoundedIcon /> Live
        </Item>
        <Hr />
        <Item>
          <SettingsRoundedIcon /> Setting
        </Item>
        <Item>
          <ReportGmailerrorredRoundedIcon /> Report
        </Item>
        <Item>
          <QuestionMarkRoundedIcon /> Help
        </Item>



      </Wrapper>
    </Container>
  )
}

export default Menu
