const defaultLoginInfo = {
  isLogin: false,
  info: {},
};
export default function LoginInfo(prevState = defaultLoginInfo, active) {
  let { type, payload } = active;
  switch (type) {
    case "update":
      prevState = payload;
      return {
        ...prevState,
      };
    default:
      return prevState;
  }
}
