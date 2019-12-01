import React from 'react';
import NavBarSignUp from '../components/Navigation/Navbar/NavBarSignUp';
import './Layout.css';
import RecipeReviewCard from '../containers/Playlist/RecipeReviewCard';

const LayoutSignUp = () => {
  return (
    <>
      <NavBarSignUp />
      <div className="MainWrapper">
        <RecipeReviewCard />
      </div>
    </>
  );
}

export default LayoutSignUp;