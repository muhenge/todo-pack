const Sort = (x, y) => {
  const indexX = x.index;
  const indexY = y.index;

  let comp = 0;
  if (indexX > indexY) {
    comp = 1;
  } else if (indexX < indexY) {
    comp = -1;
  }
  return comp;
};

export default Sort;
