import {Dimensions, PixelRatio} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const normalizeModerately = (size: number, factor = 0.5) => {
  return PixelRatio.roundToNearestPixel(moderateScale(size, factor));
};

export const normalizeWidth = (size: number): number => {
  return PixelRatio.roundToNearestPixel(scale(size));
};

export const normalizeHeight = (size: number): number => {
  return PixelRatio.roundToNearestPixel(verticalScale(size));
};
export const widthPercentage = (size: number): number => {
  return wp(size);
};

export const heightPercentage = (size: number): number => {
  return hp(size);
};

export const screenWidth: number = Dimensions.get('window').width;

export const screenHeight: number = Dimensions.get('window').height;
