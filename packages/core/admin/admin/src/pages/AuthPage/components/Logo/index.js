import React from 'react';
import { useConfigurations } from '../../../../hooks';
import {Img, ImgWrapper} from './Img';

const Logo = () => {
  const { authLogo } = useConfigurations();

  return (
    <ImgWrapper>
      <Img src={authLogo} alt="strapi" />
    </ImgWrapper>
  );
};

export default Logo;
