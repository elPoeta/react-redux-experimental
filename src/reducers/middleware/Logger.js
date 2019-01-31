const Logger = store => next => action => {
  console.group("Action");
  console.debug(
    "Current State :: Store",
    store,
    " getState::",
    store.getState()
  );
  console.debug("Action :: ", action.type);
  console.time("Duration");
  next(action);
  console.timeEnd("Duration");
  console.groupEnd("Action");
};

export default Logger;
