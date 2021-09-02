import {
  Dimensions,
  PixelRatio,
  Platform,
  useWindowDimensions,
} from 'react-native';
// import ExtraDimensions from 'react-native-extra-dimensions-android';
import DeviceInfo from 'react-native-device-info';

export const DesignWidth = 750;
export const DesignHeight = 1334;

export const IsIOS = Platform.OS === 'ios';
export const DeviceHeight = IsIOS
  ? Dimensions.get('window').height
  : useWindowDimensions().height;
export const DeviceWidth = Dimensions.get('window').width;
const scale = DesignWidth / DeviceWidth;

export function getRealPx(designPx: number) {
  return PixelRatio.roundToNearestPixel(designPx / scale);
}

export function getRealPt(designPt: number) {
  return 2 * getRealPx(designPt);
}

export const iPhoneXTopOffset = getRealPt(44);
export const iPhoneXBottomOffset = getRealPt(34);

const model = DeviceInfo.getModel().toUpperCase();
const deviceId = DeviceInfo.getDeviceId();

// export const AndroidStatusBarHeight = ExtraDimensions.get('STATUS_BAR_HEIGHT');

export const isIphoneX =
  model === 'IPHONE X' ||
  model === 'IPHONE XS' ||
  model === 'IPHONE XR' ||
  model === 'IPHONE XS MAX' ||
  // || deviceId === 'iPhone12,1'
  // ||deviceId === 'iPhone12,3'
  // ||deviceId === 'iPhone12,5'
  deviceId.startsWith('iPhone12') ||
  deviceId.startsWith('iPhone13');

export const testDeviceModel = model;
export const testDeviceId = deviceId;

export function adaptIphoneXBottomSize(normalSize: number) {
  return normalSize + (isIphoneX ? iPhoneXBottomOffset : 0);
}

export function adaptIphoneXTopSize(normalSize: number) {
  return normalSize + (isIphoneX ? iPhoneXTopOffset : 0);
}
