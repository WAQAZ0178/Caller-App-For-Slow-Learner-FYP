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
    marginVertical: hp(1),
    alignSelf: 'center',
  },

  infoContainer: {
    // borderColor: white,
    // borderWidth: 1,
    flexDirection: 'row',
    width: wp(95),
    justifyContent: 'space-evenly',
    backgroundColor: white,
    paddingTop: hp(2),
    borderRadius: 10,
  },
  text: {
    fontFamily: fontFamily.UbuntuRegular,
    fontSize: 18,
    lineHeight: 21,
    color: black,

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
