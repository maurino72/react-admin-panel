import './navbar.scss';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__wrapper'>
        <div className='navbar__wrapper-search'>
          <input type='text' placeholder='Search..' />
          <SearchOutlinedIcon className='nav-icon' />
        </div>
        <div className='navbar__wrapper-nav-items'>
          <div className='nav-item'>
            <LanguageOutlinedIcon className='nav-icon' />
            English
          </div>
          <div className='nav-item'>
            <DarkModeOutlinedIcon className='nav-icon' />
          </div>
          <div className='nav-item'>
            <FullscreenExitOutlinedIcon className='nav-icon' />
          </div>
          <div className='nav-item'>
            <NotificationAddOutlinedIcon className='nav-icon' />
            <div className='counter'>1</div>
          </div>
          <div className='nav-item'>
            <ChatBubbleOutlineOutlinedIcon className='nav-icon' />
            <div className='counter'>2</div>
          </div>
          <div className='nav-item'>
            <ListOutlinedIcon className='nav-icon' />
          </div>
          <div className='nav-item'>
            <img
              src='https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?cs=srgb&dl=pexels-thibault-trillet-167635.jpg&fm=jpg'
              alt='profile pic'
              className='avatar'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
