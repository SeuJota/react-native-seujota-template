import {Dimensions, Platform, StatusBar} from 'react-native';
import Resize from './Resize';

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const {height: W_HEIGHT, width: W_WIDTH} = Dimensions.get('window');

class ScreenSize {
  static heigth_with_header_and_navigator_bar() {
    return Platform.select({
      ios:
        W_HEIGHT -
        Resize.to_height(ScreenSize.is_iphone_x() ? 270 : 240) -
        ScreenSize.status_bar_heigth(),
      android: W_HEIGHT - Resize.to_height(240) - StatusBar.currentHeight,
    });
  }

  static heigth_with_one_of_header_and_navigator_bar() {
    return Platform.select({
      ios: W_HEIGHT - Resize.to_height(120) - ScreenSize.status_bar_heigth(),
      android: W_HEIGHT - Resize.to_height(120) - StatusBar.currentHeight,
    });
  }

  static discountAndroidVirtualButtons(heigth){
    return heigth - (Dimensions.get('screen').height - Dimensions.get('window').height)
  }

  static heigth_screen() {
    return Platform.select({
      ios: W_HEIGHT - ScreenSize.status_bar_heigth(),
      android: W_HEIGHT - StatusBar.currentHeight
    });
  }

  static status_bar_heigth() {
    return Platform.select({
      ios: ScreenSize.is_iphone_x() ? 44 : 20,
      android: 0
    });
  }

  static is_iphone_x() {
    let isIPhoneX = false;

    if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS) {
      isIPhoneX =
        (W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT) ||
        (W_WIDTH === XSMAX_WIDTH && W_HEIGHT === XSMAX_HEIGHT);
    }

    return isIPhoneX;
  }
}

export default ScreenSize;
