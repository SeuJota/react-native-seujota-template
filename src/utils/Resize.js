import {Dimensions} from 'react-native';
import {LARGER_VIEW_WIDTH} from '@config';

class Resize {
  static to_width(w) {
    return Resize.to_size(w, 0).width;
  }

  static to_height(h) {
    return Resize.to_size(0, h).height;
  }

  static to_size(w, h) {
    let window = Dimensions.get('window');

    return {
      height: (h / LARGER_VIEW_WIDTH) * Math.floor(window.width),
      width: (w / LARGER_VIEW_WIDTH) * Math.floor(window.width)
    };
  }
}

export default Resize;
