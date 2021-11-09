import React, { useContext } from 'react';
import { userContext } from '../../../../App';
import './Sidebar.css'
const SidebarMain = () => {
  const [user, setUser] = useContext(userContext);
  const handleDashboardClick = (e) => {
    const newUser = {...user};
    newUser.dashboard = true;
    newUser.guitars = false;
    newUser.useGuitar = false;
    newUser.stock = false;
    newUser.category = false;
    newUser.slider = false;
    newUser.merch = false;
    newUser.artist = false;
    newUser.contract = false;
    newUser.gcare = false;
    newUser.blog = false;
    newUser.learn = false;
    setUser(newUser)
  }
  const handleClickGuitar = (e) => {
    const newUser = {...user};
    newUser.dashboard = false;
    newUser.guitars = true;
    newUser.useGuitar = false;
    newUser.stock = false;
    newUser.category = false;
    newUser.slider = false;
    newUser.merch = false;
    newUser.artist = false;
    newUser.contract = false;
    newUser.gcare = false;
    newUser.blog = false;
    newUser.learn = false;
    setUser(newUser)
  }
  const handleClickStock = (e) => {
    const newUser = {...user};
    newUser.dashboard = false;
    newUser.guitars = false;
    newUser.useGuitar = false;
    newUser.stock = true;
    newUser.category = false;
    newUser.slider = false;
    newUser.merch = false;
    newUser.artist = false;
    newUser.contract = false;
    newUser.gcare = false;
    newUser.blog = false;
    newUser.learn = false;
    setUser(newUser)
  }
  const handleClickcategory = (e) => {
    const newUser = {...user};
    newUser.dashboard = false;
    newUser.guitars = false;
    newUser.useGuitar = false;
    newUser.stock = false;
    newUser.category = true;
    newUser.slider = false;
    newUser.merch = false;
    newUser.artist = false;
    newUser.contract = false;
    newUser.gcare = false;
    newUser.blog = false;
    newUser.learn = false;
    setUser(newUser)
  }
  const handleClickSlider = (e) => {
    const newUser = {...user};
    newUser.dashboard = false;
    newUser.guitars = false;
    newUser.stock = false;
    newUser.useGuitar = false;
    newUser.category = false;
    newUser.slider = true;
    newUser.merch = false;
    newUser.artist = false;
    newUser.contract = false;
    newUser.gcare = false;
    newUser.blog = false;
    newUser.learn = false;
    setUser(newUser)
  }
  const handleClickMerch = (e) => {
    const newUser = {...user};
    newUser.dashboard = false;
    newUser.guitars = false;
    newUser.stock = false;
    newUser.useGuitar = false;
    newUser.category = false;
    newUser.slider = false;
    newUser.merch = true;
    newUser.artist = false;
    newUser.contract = false;
    newUser.gcare = false;
    newUser.blog = false;
    newUser.learn = false;
    setUser(newUser)
  }
  const handleClickArtist = (e) => {
    const newUser = {...user};
    newUser.dashboard = false;
    newUser.guitars = false;
    newUser.stock = false;
    newUser.useGuitar = false;
    newUser.category = false;
    newUser.slider = false;
    newUser.merch = false;
    newUser.artist = true;
    newUser.contract = false;
    newUser.gcare = false;
    newUser.blog = false;
    newUser.learn = false;
    setUser(newUser)
  }
  const handleClickContract = (e) => {
    const newUser = {...user};
    newUser.dashboard = false;
    newUser.guitars = false;
    newUser.stock = false;
    newUser.useGuitar = false;
    newUser.category = false;
    newUser.slider = false;
    newUser.merch = false;
    newUser.artist = false;
    newUser.contract = true;
    newUser.gcare = false;
    newUser.blog = false;
    newUser.learn = false;
    setUser(newUser)
  } 
  const handleClickGcare = (e) => {
    const newUser = {...user};
    newUser.dashboard = false;
    newUser.guitars = false;
    newUser.stock = false;
    newUser.useGuitar = false;
    newUser.category = false;
    newUser.slider = false;
    newUser.merch = false;
    newUser.artist = false;
    newUser.contract = false;
    newUser.gcare = true;
    newUser.blog = false;
    newUser.learn = false;
    setUser(newUser)
  } 
  const handleClickLear = (e) => {
    const newUser = {...user};
    newUser.dashboard = false;
    newUser.guitars = false;
    newUser.stock = false;
    newUser.useGuitar = false;
    newUser.category = false;
    newUser.slider = false;
    newUser.merch = false;
    newUser.artist = false;
    newUser.contract = false;
    newUser.gcare = false;
    newUser.blog = true;
    newUser.learn = false;
    setUser(newUser)
  }
  const handleClickBlog = (e) => {
    const newUser = {...user};
    newUser.dashboard = false;
    newUser.guitars = false;
    newUser.stock = false;
    newUser.useGuitar = false;
    newUser.category = false;
    newUser.slider = false;
    newUser.merch = false;
    newUser.artist = false;
    newUser.contract = false;
    newUser.gcare = false;
    newUser.blog = false;
    newUser.learn = true;
    setUser(newUser)
  }
  const handleClickUsedGuitar = (e) => {
    const newUser = {...user};
    newUser.dashboard = false;
    newUser.guitars = false;
    newUser.stock = false;
    newUser.useGuitar = true;
    newUser.category = false;
    newUser.slider = false;
    newUser.merch = false;
    newUser.artist = false;
    newUser.contract = false;
    newUser.gcare = false;
    newUser.blog = false;
    newUser.learn = false;
    setUser(newUser)
  }
 
    return (
        <body className="bg-dark">
    <input className="stactic" type="checkbox" id="check"/>
    <label className="stactic" for="check">
      <i class="fas fa-bars" id="btn"></i>
      <i class="fas fa-times" id="cancel"></i>
    </label>
    <div class="sidebar">
      
      <a class="aawar" onClick={handleDashboardClick}>
        <i class="fas fa-qrcode"></i>
        <span>Dashboard</span>
      </a>
      <a className="aawar" onClick={handleClickGuitar}>
      <i class="fa-solid fa-guitar"></i>
        <span>Guitars</span>
      </a>
      <a className="aawar" onClick={handleClickUsedGuitar}>
      <i class="fa-solid fa-guitar"></i>
        <span>Used Guitars</span>
      </a>
      <a className="aawar" onClick={handleClickStock}>
         <i class="fas fa-calendar"></i>
        <span>In Stock</span>
      </a>
      <a className="aawar" onClick={handleClickcategory}>
        <i class="far fa-question-circle"></i>
        <span>Category</span>
      </a>
      <a className="aawar" onClick={handleClickSlider}>
        <i class="fas fa-sliders-h"></i>
        <span>Slider</span>
      </a>
      <a  className="aawar" onClick={handleClickMerch}>
        <i class="fas fa-sliders-h"></i>
        <span>Merch</span>
      </a>
      <a  className="aawar" onClick={handleClickArtist}>
        <i class="fas fa-sliders-h"></i>
        <span>Artist</span>
      </a>
      <a  className="aawar" onClick={handleClickContract}>
        <i class="far fa-envelope"></i>
        <span>Contact</span>
      </a>
      <a  className="aawar" onClick={handleClickGcare}>
        <i class="far fa-envelope"></i>
        <span>Gcare</span>
      </a>
      <a  className="aawar" onClick={handleClickLear}>
        <i class="far fa-envelope"></i>
        <span>Learn</span>
      </a>
      <a  className="aawar" onClick={handleClickBlog}>
        <i class="far fa-envelope"></i>
        <span>Blog</span>
      </a>
    </div>
</body>
    );
};

export default SidebarMain;