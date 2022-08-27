import MoreVertIcon from '@mui/icons-material/MoreVert';
import './feature.scss';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowDown';

const Feature = () => {
  return (
    <div className='feature'>
      <div className='feature__top'>
        <h1 className='feature__top-title'>Total Revenew</h1>
        <MoreVertIcon fontSize='14px' />
      </div>
      <div className='feature__bottom'>
        <div className='feature__bottom-chart'>
          <CircularProgressbar value={70} text='70%' strokeWidth={1} />
        </div>
        <p className='title'>Total Sales Made Today</p>
        <p className='amount'>$420</p>
        <p className='desc'>
          Previous transactions processing. Last payments may not be included
        </p>
        <div className='summary'>
          <div className='summary__item'>
            <div className='item-title'>Target</div>
            <div className='item-result negative'>
              <KeyboardArrowDownOutlinedIcon fontSize='small' />
              <div className='item-result-amount'>$12.4k</div>
            </div>
          </div>

          <div className='summary__item'>
            <div className='item-title'>Last Week</div>
            <div className='item-result negative'>
              <KeyboardArrowDownOutlinedIcon fontSize='small' />
              <div className='item-result-amount'>$12.4k</div>
            </div>
          </div>

          <div className='summary__item'>
            <div className='item-title'>Last Month</div>
            <div className='item-result positive'>
              <KeyboardArrowUpOutlinedIcon fontSize='small' />
              <div className='item-result-amount'>$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
