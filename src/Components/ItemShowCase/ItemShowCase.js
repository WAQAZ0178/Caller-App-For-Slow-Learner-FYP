import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Logo from '../../Assets/Images/logo.png';
import LinearGradient from 'react-native-linear-gradient';
import styles from './ItemShowCase-styles';
import Heart from '../../Assets/Svgs/heart.svg';
import Star from '../../Assets/Svgs/star.svg';
import Timer from '../../Assets/Svgs/timer.svg';
import Cart from '../../Assets/Svgs/cart.svg';
const Header = ({
  onpress,
  title = 'Popular Catagories',
  seeAll = 'See All',
  item1 = 'Sneakers',
  item2 = 'Jeans',
  item3 = 'Jackets',
  item4 = 'Mobile',
}) => {
  return (
    <View style={styles.showCaseContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onpress}>
          <Text style={styles.seeAll}>{seeAll}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={onpress} style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <TouchableOpacity style={styles.likeButton}>
              <Heart />
            </TouchableOpacity>
            <Image
              style={styles.image}
              source={require('../../Assets/Images/shirt_1.png')}
            />
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
              <View style={styles.ticketContainer}>
                <LinearGradient
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 0}}
                  colors={['#3A4385', '#11163A']}
                  style={styles.ticketContainer}>
                  <Text style={styles.ticketLabel}>Ticket $5</Text>
                </LinearGradient>
              </View>
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
        <TouchableOpacity onPress={onpress} style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <TouchableOpacity style={styles.likeButton}>
              <Heart />
            </TouchableOpacity>
            <Image
              style={styles.image}
              source={require('../../Assets/Images/shoes_1.jpg')}
              resizeMode="cover"
            />
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
              <View style={styles.ticketContainer}>
                <LinearGradient
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 0}}
                  colors={['#3A4385', '#11163A']}
                  style={styles.ticketContainer}>
                  <Text style={styles.ticketLabel}>Ticket $5</Text>
                </LinearGradient>
              </View>
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
        <TouchableOpacity onPress={onpress} style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <TouchableOpacity style={styles.likeButton}>
              <Heart />
            </TouchableOpacity>
            <Image
              style={styles.image}
              source={require('../../Assets/Images/shoes_2.jpg')}
            />
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
              <View style={styles.ticketContainer}>
                <LinearGradient
                  style={styles.ticketContainer}
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 0}}
                  colors={['#3A4385', '#11163A']}>
                  <Text style={styles.ticketLabel}>Ticket $5</Text>
                </LinearGradient>
              </View>
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
        <TouchableOpacity onPress={onpress} style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <TouchableOpacity style={styles.likeButton}>
              <Heart />
            </TouchableOpacity>
            <Image
              style={styles.image}
              source={require('../../Assets/Images/shirt_2.jpg')}
              resizeMode="cover"
            />
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
              <View style={styles.ticketContainer}>
                <LinearGradient
                  style={styles.ticketContainer}
                  colors={['#3A4385', '#11163A']}
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 0}}>
                  <Text style={styles.ticketLabel}>Ticket $5</Text>
                </LinearGradient>
              </View>
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
      </View>
    </View>
  );
};
export default Header;
