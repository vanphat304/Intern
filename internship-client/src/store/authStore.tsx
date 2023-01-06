import { createStore } from './store';
import { actionType, user as userType } from './type';

const tempUser = localStorage.getItem('tempUser');
let user = null;
if (tempUser) {
  try {
    user = JSON.parse(localStorage.getItem('tempUser') as string);
  } catch {}
}

function reducer(state: userType, action: actionType<object>) {
  switch (action.type) {
    default:
      throw new Error();
  }
}

export const AuthAppStore = createStore(user, reducer);

export const useAuthStore = AuthAppStore.useStore;
