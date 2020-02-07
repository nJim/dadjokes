import React from 'react';
import {Row, Col} from 'antd';
import {SectionHeading} from '../../01-atoms/Headings';
import Card from '../../02-molecules/Card';
import {CardData} from '../../../lib/types';

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
      <Row gutter={[16, 16]} type="flex">
        { cards.map((card: CardData) => (
          <Col sm={{span: 12}} md={{span: 8}} key={card.id}>
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
