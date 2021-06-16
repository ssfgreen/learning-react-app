import logo from './assets/logo.svg';
import BannerImage from './components/BannerImage/BannerImage'
import WritingCard from './components/WritingCard/WritingCard'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="left-sidebar">
        <BannerImage title="Illustration / Animation" image={logo}></BannerImage>
        <BannerImage title="UX / Product Design" image={logo}></BannerImage>
      </div>
      <div className="right-sidebar">
        <WritingCard title="visual-verbal hybriditiy" image={logo}></WritingCard>
        <WritingCard title="a narrative archicture" image={logo}></WritingCard>
      </div>
    </div>
  );
}

export default App;