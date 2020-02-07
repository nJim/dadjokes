import React from 'react';

interface Props {};

const PageHeading: React.FC<Props> = ({children}) => 
  <h1>{children}</h1>;

export default PageHeading;
