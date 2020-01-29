import React from 'react';
import { Row, Col } from 'antd';
import SectionHeading from '../../01-atoms/SectionHeading';
import Card from '../../02-molecules/Card';

const Cards = ({heading, cards}) => {
  return (
    <div>
      {heading && (
        <SectionHeading>
          {heading}
        </SectionHeading>
      )}
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
    </div>
  );
}

export default Cards;
