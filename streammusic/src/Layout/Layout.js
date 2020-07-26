import React from 'react';

import Navbar from '../components/Navigation/Navbar/Navbar';
import RecipeReviewCard from '../containers/Playlist/RecipeReviewCard';

import './Layout.css';

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
