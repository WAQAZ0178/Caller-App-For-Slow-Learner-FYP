import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Heart from '../../Assets/Svgs/black_heart.svg';
import Star from '../../Assets/Svgs/star.svg';
import Timer from '../../Assets/Svgs/timer.svg';
import Cart from '../../Assets/Svgs/cart.svg';
import Header from '../../Components/Header/Header';
import SearchBar from '../../Components/SearchBar/SearchBar';

import {hp, wp} from '../../Global/Styles/Scalling';
import {theme, theme2} from '../../Global/Styles/Theme';
import styles from './Wishlist-styles';
const WishList = () => {
  const data = [
    {
      img: require('../../Assets/Images/jeans_2.jpg'),
    },
    {
      img: require('../../Assets/Images/shirt_3.jpg'),
    },

    {
      img: require('../../Assets/Images/shirt_1.png'),
    },
    {
      img: require('../../Assets/Images/shoes_3.jpg'),
    },
  ];
  const renderItem = item => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Product_Detail_Page')}
        style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.likeButton}>
            <Heart />
          </TouchableOpacity>
          <Image style={styles.image} source={item.img} />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.rattingContainer}>
            <Text style={styles.itemLabel}>Item</Text>
            <View style={styles.ratting}>
              <Star />
              <Text style={styles.ratingValue}>4.6</Text>
            </View>
          </View>

          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>Origial Price </Text>
            <Text style={styles.priceLabel}> $30</Text>
          </View>
          <View style={styles.cart_ticketContainer}>
            <LinearGradient
              style={styles.ticketContainer}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 0}}
              colors={['#3A4385', '#11163A']}>
              <Text style={styles.ticketLabel}>Ticket $5</Text>
            </LinearGradient>

            <View style={styles.cartContainer}>
              <Cart />
            </View>
          </View>
          <View style={styles.timerContainer}>
            <Timer />
            <Text style={styles.timeLabel}>30:18:02</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={theme2} />
      <Header />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>WishList</Text>
      </View>
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => renderItem(item)}
        contentContainerStyle={{marginBottom: hp(5)}}
      />
    </View>
  );
};

export default WishList;
