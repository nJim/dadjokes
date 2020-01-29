import React from 'react';
import { Row, Col } from 'antd';
import SectionHeading from '../../01-atoms/SectionHeading';
import Card from '../../02-molecules/Card';
import CardData from '../../../types';

type Props = {
  heading?: string,
  cards: CardData[]
}

const Cards = ({heading, cards}: Props) => {
  return (
    <div>
      {heading && (
        <SectionHeading>
          {heading}
        </SectionHeading>
      )}
      <Row gutter={[16, 16]}>
        { cards.map((card: CardData) => (
          <Col span={8}>
            <Card 
              id={card.id}
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
