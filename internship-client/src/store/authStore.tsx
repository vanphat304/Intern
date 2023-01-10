import { createStore } from './store';
import { actionType, user as userType } from './type';

const tempUser = localStorage.getItem('tempUser');
const user = {
  userLogin: null,
};
if (tempUser) {
  try {
    user.userLogin = JSON.parse(localStorage.getItem('tempUser') as string);
  } catch {}
}

function reducer(state: any, action: actionType<string>) {
  console.log({action})
  switch (action.type) {
    case 'LOGOUT':
      localStorage.removeItem('tempUser');
      return { userLogin: (state.user = action.data) };
    default:
      throw new Error();
  }
}

export const AuthAppStore = createStore(user, reducer);

export const useAuthStore = AuthAppStore.useStore;
