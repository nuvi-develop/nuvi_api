export const wrapperAsync = fn => {
  return function(req, res, next) {
    fn(req, res, next).catch(next);
  };
};
