import {StyleSheet} from 'react-native';
import {fontFamily} from '../../Global/Styles/Fonts';
import {wp, hp} from '../../Global/Styles/Scalling';
import {black, darkGray, gray, white} from '../../Global/Styles/Theme';
const styles = StyleSheet.create({
  picker: {
    width: wp(68),
    height: hp(4.67),
    backgroundColor: '#F4F4F4',
    color: black,
    alignSelf: 'center',
  },

  categoryText: {
    fontFamily: fontFamily.UbuntuRegular,
    fontSize: 18,
    lineHeight: 20,
    color: white,
    marginBottom: hp(2),
    textAlign: 'left',
  },
  modalView: {
    height: hp(25),
    backgroundColor: '#fff',
    width: wp(70),
    alignSelf: 'center',
    borderRadius: 3,
    zIndex: 100,
  },
  firstContainer: {
    alignSelf: 'center',
    height: hp(35),
    backgroundColor: 'transparent',
    width: wp(70),
  },
  itemButton: {
    height: hp(5),
    // backgroundColor: 'red',
    width: wp(70),
    marginTop: hp(1),
    justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: wp(2),
    // borderBottomWidth: 0.5,
    // borderBottomColor: black,
  },
  label: {
    fontFamily: fontFamily.UbuntuRegular,
    fontSize: 18,
    lineHeight: 20,
    color: black,
    textAlign: 'left',
    paddingLeft: wp(3),
    textAlignVertical: 'center',
  },
});
export default styles;
