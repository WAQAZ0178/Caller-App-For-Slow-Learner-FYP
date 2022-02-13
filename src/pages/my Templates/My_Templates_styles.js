import {StyleSheet} from 'react-native';
import {black, gray, theme, theme2, white} from '../../Global/Styles/Theme';
import {wp, hp} from '../../Global/Styles/Scalling';
import {fontFamily, fontSize} from '../../Global/Styles/Fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme,
  },
  FlatListContainer: {
    flex: 1,
    marginTop: hp(1.47),
  },
  contactContainer: {
    flexDirection: 'row',
    minHeight: hp(8.12),
    marginVertical: hp(1),
    alignSelf: 'center',
  },

  infoContainer: {
    // borderColor: white,
    // borderWidth: 1,
    flexDirection: 'row',
    width: wp(95),
    justifyContent: 'space-evenly',
    backgroundColor: theme2,
    paddingTop: hp(2),
    borderRadius: 10,
    shadowColor: white,
    shadowOffset: {
      width: 12,
      height: 15,
    },
    shadowOpacity: 1,
    shadowRadius: 16.0,
    elevation: 3,
  },
  text: {
    fontFamily: fontFamily.UbuntuRegular,
    fontSize: 18,
    lineHeight: 21,
    color: white,
    width: wp(75),
    paddingLeft: wp(2),
  },

  headingText: {
    fontFamily: 'SFProDisplay-Bold_1',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '700',
    lineHeight: 27,
    color: '#424242',
    paddingTop: hp(1),
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
  },
  SyncText: {
    color: black,
    fontSize: 22,
    lineHeight: 26,
    fontFamily: fontFamily.UbuntuRegular,
  },
  contactListHeadingText: {
    fontSize: 24,
    fontFamily: fontFamily.UbuntuMedium,
    color: white,
    alignSelf: 'center',
  },
  headerContainer: {
    marginTop: hp(3),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: 'red',
    paddingBottom: hp(1),
  },
  settingButton: {
    position: 'absolute',
    right: wp(5),
  },
});
export default styles;
