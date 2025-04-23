import 'react';

import type { Card as cardType } from '@/types/card';

type CardProps = {
  card: cardType
}

const Card = ({ card }: CardProps) =>
  <div>
    <p>
      {card.displayName} {card.manacost}
    </p>
    <p>
      {card.typeline}
    </p>
    <p>
      {card.textbox}
    </p>
    <p>
      {card.powerToughness}
    </p>
  </div>;

export default Card;
