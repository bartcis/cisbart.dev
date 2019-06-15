const initialState = {
  menuState: 'false'
};

interface Props {
  action: any,
  status: boolean,
  type: any,
  payload: any
}

const SHOW_MENU = 'SHOW_MENU';

export const showMenu = (status: Props) => ({ type: SHOW_MENU, payload: status });

export default (state = initialState, action: Props) => {
  const { type, payload } = action;
  switch (type) {
    case SHOW_MENU:
      return { ...state, menuState: payload };
    default:
      return state;
  }
};
