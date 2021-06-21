import BannerCard from '../../components/BannerCard/BannerCard'
import WritingCard from '../../components/WritingCard/WritingCard'
import './HomePage.css'
import NavBar from '../../components/NavBar/NavBar'
import imageOne from '../../assets/images/il_six.png';
import imageTwo from '../../assets/images/illustration_two.png';
// import imageThree from '../../assets/images/illustration_three.png';
import writing from '../../data/writing';
import { Link } from 'react-router-dom';
import {
  SubNav
} from "./style";

function HomePage() {

  let writingCards = writing.map((article) => {
    return <WritingCard id={article.id} title={article.title} image={article.src}></WritingCard>
  })


  return (
    <div className="HomePage">
      <NavBar titleOne="JOSH" titleTwo="GREEN"></NavBar>
      <SubNav>
          <Link to="/about">About</Link>
          <Link to="/writing">Writing</Link>
          {/* <Link to="/design">Design</Link> */}
      </SubNav>
      <div className="SectionOne">
        <div className="LeftBar">
          <div className="Row">
          <BannerCard title="Product Design" image={imageOne} link="/about"></BannerCard>
          <BannerCard title="Illustration" image={imageTwo} link="/writing"></BannerCard>
          </div>
          <div className="Row">
          <BannerCard title="Graphic Design" image={imageOne} link="/about"></BannerCard>
          <BannerCard title="Animation" image={imageTwo} link="/about"></BannerCard>
          </div>
        </div>
        <div className="RightBar">
          {writingCards}
        </div>
      </div>
    </div>
  );
}

export default HomePage;