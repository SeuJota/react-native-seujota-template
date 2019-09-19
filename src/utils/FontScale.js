import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;

const Scale = size => (width / guidelineBaseWidth) * size;
const ModerateScale = (size, factor = 0.5) =>
  size + (Scale(size) - size) * factor;

export {ModerateScale};
