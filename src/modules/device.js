
const isMobile = () => {
  const windowWidth = window.innerWidth // get window's width
  let isMobile;
  if (windowWidth < 900) {
    isMobile = true;
  } else {
    isMobile = false;
  }
  return isMobile;
};

export default isMobile();
