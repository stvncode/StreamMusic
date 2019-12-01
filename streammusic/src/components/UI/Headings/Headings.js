import React from 'react';

import styled, {css} from 'styled-components';

const baseStyle = css`
  color: ${({ color }) =>
  color === 'white' ? 'white' : 'black'};
  font-weight: 100;
  margin-top: 0;
  text-align: center;
`;

const Headingh1 = styled.h1`
  font-size: 2.5rem;
  text-transform: uppercase;
  ${baseStyle}
`;

const Headingh2 = styled.h2`
  font-size: 1.8rem;
  ${baseStyle}
`;

const Headingh3 = styled.h3`
  font-size: 1.5rem;
  ${baseStyle}
`;

const Headingh4 = styled.h4`
  font-size: 1rem;
  ${baseStyle}
`;

const Heading = ({children, color, bold, size}) => {
  if (size === 'h1')
    return (
      <Headingh1 bold={bold} color={color}>
        {children}
      </Headingh1>
    );

  if (size === 'h2')
    return (
      <Headingh2 bold={bold} color={color}>
        {children}
      </Headingh2>
    );

  if (size === 'h3')
    return (
      <Headingh3 bold={bold} color={color}>
        {children}
      </Headingh3>
    );

  if (size === 'h4')
    return (
      <Headingh4 bold={bold} color={color}>
        {children}
      </Headingh4>
    );
};

export default Heading;