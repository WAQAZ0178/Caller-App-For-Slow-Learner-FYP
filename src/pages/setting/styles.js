import {StyleSheet} from 'react-native';
import {black, gray, theme, theme2, white} from '../../Global/Styles/Theme';
import {wp, hp} from '../../Global/Styles/Scalling';
import {fontFamily, fontSize} from '../../Global/Styles/Fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme,
    alignItems: 'center',
  },
  text: {
    fontFamily: fontFamily.UbuntuRegular,
    fontSize: 18,
    lineHeight: 21,
    color: white,
    width: wp(75),
    paddingLeft: wp(2),
  },
  profileContainer: {
    marginTop: hp(20),
    // borderWidth: 1,
    // borderColor: 'red',
    alignItems: 'center',
  },

  syncContainer: {
    marginTop: hp(2),
    height: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  syncButton: {
    height: hp(6),
    backgroundColor: white,
    width: wp(90),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },
  phoneNumberContainer: {
    paddingTop: hp(3),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  phoneNumberText: {
    color: white,
    fontSize: 18,
    lineHeight: 26,
    fontFamily: fontFamily.UbuntuRegular,
    paddingLeft: wp(3),
  },
  SyncText: {
    color: black,
    fontSize: 22,
    lineHeight: 26,
    fontFamily: fontFamily.UbuntuRegular,
  },
  profileImage: {
    width: wp(20),
    height: wp(20),
    borderRadius: wp(10),
    resizeMode: 'cover',
  },
  buttonsContainer: {
    marginTop: hp(30),
  },
});
export default styles;
