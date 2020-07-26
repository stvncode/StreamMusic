import React from 'react';

import NavbarSignUp from '../../components/Navigation/Navbar/NavBarSignUp';
import RecipeReviewCard from '../../containers/Playlist/RecipeReviewCard';

import './Sign.css';

const SignUp = () => {
  return (
    <>
      <NavbarSignUp />
      <div className="MainWrapper">
        <RecipeReviewCard />
      </div>
    </>
  );
}

export default SignUp;