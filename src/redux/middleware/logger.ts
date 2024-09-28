const Logger = (state) => (next) => (action) => {
  console.log(state);
  console.log(next);
  console.log(action);
  next(action);
};

export default Logger;
