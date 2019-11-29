import React from 'react';
import Navbar from '../components/Navigation/Navbar/Navbar';
import './Layout.css';
import RecipeReviewCard from '../containers/Playlist/RecipeReviewCard';
const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="MainWrapper">
        <RecipeReviewCard />
      </div>
    </>
  );
}

export default Layout;
