import './home.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className='home__container'>
        <Navbar />
        <div className='home__widgets'>
          <Widget type='user' />
          <Widget type='order' />
          <Widget type='earning' />
          <Widget type='balance' />
        </div>
      </div>
    </div>
  );
};

export default Home;
