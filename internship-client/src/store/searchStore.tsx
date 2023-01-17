import { createStore } from './store';
import { actionType, currentTile, searchJob } from './type';

export const initialStore = {
  addressProvinceId: '',
  addressDistrictId: '',
  searchItem: '',
  specializeCompanyId: '',
};

function reducer(state: searchJob, action: actionType<searchJob>) {
  switch (action.type) {
    case 'SEARCH_JOB':
      
      return { ...action.data };

    default:
      throw new Error();
  }
}

export const SearchAppStore = createStore(initialStore, reducer);
export const useSearchAppStore = SearchAppStore.useStore;
