import 'react';

import type { Card as CardType } from '@/types/card';

import Card from '@/components/Card';

type CardRowProps = {
  cards: Array<CardType>
}

const CardRow = ({cards}: CardRowProps) =>
  <div style={{display: 'flex'}}>
    {cards.map((card, index) =>
      <Card
        key={index}
        card={card}
      />)}
  </div>;

export default CardRow;
