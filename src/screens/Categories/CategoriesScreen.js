import React from "react";
import { FlatList, Text, View, Image, TouchableHighlight } from "react-native";
import styles from "./styles";
import { categories } from "../../core/data/mock-data";
import { getCategoryName, getNumberOfItems } from "../../core/data/apis-list";

export default class CategoriesScreen extends React.Component {
  static navigationOptions = {
    title: "Categories",
  };

  constructor(props) {
    super(props);
  }

  //Route to CategoryListScreen
  onPressCategory = (item) => {
    const title = item.name;
    const category = item;
    this.props.navigation.navigate("List", { category, title });
  };


  renderCategory = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,1,0.9)"
      onPress={() => this.onPressCategory(item)}
    >
      <View style={styles.categoriesItemContainer}>
        <Image
          style={styles.categoriesPhoto}
          source={{ uri: item.photo_url }}
        />
        <Text style={styles.category}>{getCategoryName(item.id)}</Text>
        <Text style={styles.categoriesInfo}>{getNumberOfItems(item.id)}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <View>
        <FlatList
          data={categories}
          renderItem={this.renderCategory}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
    );
  }
}
