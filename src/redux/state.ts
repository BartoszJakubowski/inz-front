import deck, {
  initialState as deckInitialState,
  State as DeckState,
} from '#redux/modules/deck/reducer';

import cards, {
  initialState as cardsInitialState,
  State as CardsState,
} from '#redux/modules/cards/reducer';

export type State = {
  deck: DeckState;
  cards: CardsState;
};

export const initialState = {
  deck: deckInitialState,
  cards: cardsInitialState,
};

export default {
  deck,
  cards,
};
