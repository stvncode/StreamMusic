import React from 'react';

import NavbarSignIn from '../../components/Navigation/Navbar/NavbarSignIn';
import RecipeReviewCard from '../../containers/Playlist/RecipeReviewCard';

import './Sign.css';

const SignIn = ({setLogged}) => {
  return (
    <>
      <NavbarSignIn setLogged={setLogged}/>
      <div className="MainWrapper">
        <RecipeReviewCard />
      </div>
    </>
  );
}

export default SignIn;