import { PixelRatio } from 'react-native';
import { Dimensions } from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export const wp = (widthPercent) => {
  return PixelRatio.roundToNearestPixel((screenWidth * widthPercent) / 100);
};

export const hp = (heightPercent) => {
  return PixelRatio.roundToNearestPixel((screenHeight * heightPercent) / 100);
};
