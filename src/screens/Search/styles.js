import { StyleSheet } from 'react-native';
import { ItemCard } from '../../AppStyles';

const styles = StyleSheet.create({
  container: ItemCard.container,
  photo: ItemCard.photo,
  title: ItemCard.title,
  category: ItemCard.category,
  btnIcon: {
    height: 14,
    width: 14
  }
});

export default styles;
