import {StyleSheet} from 'react-native';
import {black, gray, theme, white} from '../../Global/Styles/Theme';
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
    height: hp(8.12),
    // borderColor: white,
    // borderWidth: 1,
    paddingHorizontal: wp(5.33),
    marginBottom: hp(1.35),
    marginLeft: wp(3),
  },
  dpContainer: {
    // borderColor: white,
    // borderWidth: 1,
    height: wp(12.5),
    width: wp(12.5),
    alignSelf: 'center',
    marginRight: wp(5.33),
    borderRadius: wp(6.25),
  },
  imageView: {
    height: wp(13),
    width: wp(13),
    resizeMode: 'cover',
    borderRadius: wp(2),
  },
  infoContainer: {
    // borderColor: white,
    // borderWidth: 1,
    width: wp(69.53),
    justifyContent: 'space-evenly',
  },
  Name: {
    fontFamily: fontFamily.UbuntuRegular,
    fontSize: 18,
    lineHeight: 21,
    color: white,
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
  contactSearchBarcontainer: {
    marginTop: hp(2),
    height: hp(6),

    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContactListBox: {
    height: hp(6),
    width: wp(90),
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: white,
    fontSize: 15,
    fontFamily: fontFamily.UbuntuRegular,
    paddingLeft: wp(5),
  },
  contactListHeadingText: {
    fontSize: 18,
    fontFamily: fontFamily.UbuntuBold,

    color: white,
    marginTop: hp(3),
    alignSelf: 'center',
  },
});
export default styles;
