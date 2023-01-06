import { createStore } from './store';
import { actionType, currentTile } from './type';

export const initialStore = {
  currentTitle: '',
};

function reducer(state: currentTile, action: actionType<string>) {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return { currentTitle: (state.currentTile = action.data) };

    default:
      throw new Error();
  }
}

export const AppStore = createStore(initialStore, reducer);
export const useAppStore = AppStore.useStore;
