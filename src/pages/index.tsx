import PlayArea from '@/components/PlayArea';

import { GameState } from '@/types/gamestate';

import { island, circleOfProtectionWhite, serraAngel } from '@/constants/cards';

const gameState: GameState = {
  lands: [island],
  otherPermanents: [circleOfProtectionWhite],
  creatures: [serraAngel],
  turnCounter: 0,
  opponentLife: 20,
  playerLife: 20,
};

export default function Home() {
  return (
    <div>
      <main>
        <PlayArea
          gameState={gameState}
        />
      </main>
    </div>
  );
}
