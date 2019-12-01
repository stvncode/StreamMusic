import React from 'react';

import NavbarSignIn from '../components/Navigation/Navbar/NavbarSignIn';
import RecipeReviewCard from '../containers/Playlist/RecipeReviewCard';

import './Layout.css';

const LayoutSignIn = () => {
  return (
    <>
      <NavbarSignIn />
      <div className="MainWrapper">
        <RecipeReviewCard />
      </div>
    </>
  );
}

export default LayoutSignIn;
