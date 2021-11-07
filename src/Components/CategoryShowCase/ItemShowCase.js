import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Logo from '../../Assets/Images/logo.png';
import Mobile from '../../Assets/Svgs/mobile.svg';
import Jeans from '../../Assets/Svgs/jeans.svg';
import Jackets from '../../Assets/Svgs/jacket.svg';
import Shoes from '../../Assets/Svgs/shoes.svg';
import styles from './ItemShowCase-styles';
import {NavigationContainer} from '@react-navigation/native';
const ItemShowCase = ({
  onpress,
  title = 'Popular Catagories',
  seeAll = 'See All',
  item1 = 'Sneakers',
  item2 = 'Jeans',
  item3 = 'Jackets',
  item4 = 'Mobile',
  navigation,
}) => {
  return (
    <View style={styles.showCaseContainer}>
      <View style={styles.titleContainer}>
        <TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onpress}>
          <Text style={styles.seeAll}>{seeAll}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.itemContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Product_Page')}
          style={styles.itembuttonContainer}>
          <View style={styles.item}>
            <Shoes />
          </View>
          <Text style={styles.itemName}> {item1}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Product_Page')}
          style={styles.itembuttonContainer}>
          <View style={styles.item}>
            <Jeans />
          </View>
          <Text style={styles.itemName}> {item2}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Product_Page')}
          style={styles.itembuttonContainer}>
          <View style={styles.item}>
            <Jackets />
          </View>
          <Text style={styles.itemName}> {item3}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Product_Page')}
          style={styles.itembuttonContainer}>
          <View style={styles.item}>
            <Mobile />
          </View>
          <Text style={styles.itemName}> {item4}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ItemShowCase;
