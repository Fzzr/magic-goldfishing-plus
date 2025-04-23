import type { Card } from '@/types/card';

const island: Card = {
  displayName: 'Island',
  manacost: '',
  typeline: 'Basic Land — Island',
  textbox: '',
  powerToughness: '',
};

const circleOfProtectionWhite: Card = {
  displayName: 'Circle of Protection: White',
  manacost: '{1}{W}',
  typeline: 'Enchantment',
  textbox: '{1}: The next time a white source of your choice would deal damage to you this turn, prevent that damage.',
  powerToughness: '',
};

const serraAngel: Card = {
  displayName: 'Serra Angel',
  manacost: '{3}{W}{W}',
  typeline: 'Creature — Angel',
  textbox: 'Flying, vigilance',
  powerToughness: '4/4',
};

export {
  island,
  circleOfProtectionWhite,
  serraAngel,
};
