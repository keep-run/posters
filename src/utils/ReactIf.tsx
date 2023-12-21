export default ({ condition, children }:any) => {
  if (condition) {
    return children;
  }
  return null;
};
