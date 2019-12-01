import React from 'react';
import './Layout.css';
import RecipeReviewCard from '../containers/Playlist/RecipeReviewCard';
import NavbarSignIn from '../components/Navigation/Navbar/NavbarSignIn';

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
