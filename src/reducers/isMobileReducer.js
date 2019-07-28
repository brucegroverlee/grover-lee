
import isMobile from '../modules/device'

export default (state = isMobile(), action) => {
  switch (action.type) {
    case 'ON_RESIZE':
      return action.isMobile;

    default:
      return state
  }
};