import isMobile from '../modules/device'

const onResize = () => (dispatch) => {
  window.addEventListener('resize', () => {
    // 
    dispatch({
      type: 'ON_RESIZE',
      isMobile: isMobile(),
    });
  });
};

export default onResize;