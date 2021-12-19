import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Global/Styles/Scalling';
import {black, fontColor, theme, white} from '../../Global/Styles/Theme';
import {fontFamily} from '../../Global/Styles/Fonts';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp(100),
    alignItems: 'center',
    backgroundColor: theme,
  },
  TopHeaderContainer: {
    marginTop: hp(2),
    flexDirection: 'row',
    height: hp(7),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5.33),
    backgroundColor: white,
    borderRadius: 10,
    width: wp(90),
  },
  inputBox: {
    width: wp(70),
    // backgroundColor: 'green',
    color: black,
    fontFamily: fontFamily.UbuntuRegular,
    fontSize: 15,
  },
  mostFrequentButtonContainer: {
    marginTop: hp(2),
    width: wp(90),
  },
  mostFrequentTextHeading: {
    color: white,
    fontFamily: fontFamily.UbuntuBold,
    fontSize: 18,
    alignSelf: 'center',
    marginVertical: hp(1),
  },
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: hp(1),
  },
  mostFrequentButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white,
    width: wp(40),
    height: hp(5),
    borderRadius: 10,
  },
  ButtonText: {
    color: black,
    fontFamily: fontFamily.UbuntuRegular,
    fontSize: 15,
  },
  flatListContainer: {flex: 1},
  templateButton: {
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    alignItems: 'center',
    backgroundColor: white,
    width: wp(90),
    alignSelf: 'center',
    height: hp(6),
    borderRadius: 10,
    marginVertical: hp(1),
    flexDirection: 'row',
  },
  flatListButtonText: {
    color: black,
    fontFamily: fontFamily.UbuntuRegular,
    fontSize: 15,
    textAlign: 'left',
    width: wp(70),
  },
  bottomTabContainer: {
    flex: 1,
  },
  bottomTab: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: hp(7.33),
    width: wp(89.33),
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: hp(2.69),
    backgroundColor: white,
    marginBottom: hp(5),
  },
  tabBarButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 3,
    borderBottomColor: white,
    height: hp(6),
    width: wp(35),
  },
  tabBarButtonText: {
    color: black,
    fontSize: 20,
    fontFamily: fontFamily.UbuntuMedium,
    lineHeight: 24,
  },
});

export default styles;
