import 'react';

import type { GameState } from '@/types/gamestate';
import CardRow from '@/components/CardRow';

type PlayAreaProps = {
  gameState: GameState
}

const PlayArea = ({ gameState }: PlayAreaProps) =>
  <div>
    <CardRow cards={gameState.lands} />
    <CardRow cards={gameState.otherPermanents} />
    <CardRow cards={gameState.creatures} />
  </div>;

export default PlayArea;
