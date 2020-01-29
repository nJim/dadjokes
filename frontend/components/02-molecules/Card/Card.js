import React from 'react';
import { Card as AntCard } from 'antd';

const { Meta } = AntCard;

const Card = ({title, description}) => {
  const defaultImageAlt = "To Do"
  const defaultImageSrc = "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
  return (
    <AntCard
      cover={
        <img 
          alt={defaultImageAlt} 
          src={defaultImageSrc} 
        />
      }
    >
      <Meta 
        title={title} 
        description={description} 
      />
    </AntCard>
  )
}

export default Card;
