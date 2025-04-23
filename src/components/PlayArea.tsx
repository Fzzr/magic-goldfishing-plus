import 'react';

import type { GameState } from '@/types/gamestate';
import CardRow from '@/components/CardRow';

type PlayAreaProps = {
  gameState: GameState
}

const PlayArea = ({ gameState }: PlayAreaProps) =>
  <div>
    <CardRow cards={gameState.lands} />
    <hr />
    <CardRow cards={gameState.otherPermanents} />
    <hr />
    <CardRow cards={gameState.creatures} />
  </div>;

export default PlayArea;
