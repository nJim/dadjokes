import React from 'react';
import { Row, Col } from 'antd';
import Card from '../../02-molecules/Card';

const Cards = ({cards}) => {
  return (
    <Row gutter={[16, 16]}>
      { cards.map(card => (
        <Col span={8}>
          <Card 
            title={card.title}
            description={card.description}
          />
        </Col>
      ))}
    </Row>
  );
}

export default Cards;
