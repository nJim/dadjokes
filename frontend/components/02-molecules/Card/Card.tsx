import React from 'react';
import { Card as AntCard } from 'antd';
import CardData from '../../../types';

const { Meta } = AntCard;

const Card = ({id, title, description}: CardData) => {
  const defaultImageAlt = "To Do"
  const defaultImageSrc = "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
  return (
    <AntCard
      key={id}
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
