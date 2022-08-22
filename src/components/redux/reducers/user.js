const init_state = {
  username: "",
};

export default (state = init_state, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return { ...state, ...action.payload };
    case "USER_LOGOUT":
      return { ...init_state };
    default:
      return { ...state };
  }
};
