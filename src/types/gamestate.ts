import type { Card } from '@/types/card';

type GameState = {
  lands: Array<Card>
  otherPermanents: Array<Card>
  creatures: Array<Card>
  turnCounter: number
  opponentLife: number
  playerLife: number
}

export type { GameState }
