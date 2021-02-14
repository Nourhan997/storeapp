import React from "react";
import { FlatList, Text, View, TouchableHighlight, Image } from "react-native";
import styles from "./styles";
import { getItems, getCategoryName } from "../../core/data/apis-list";

export default class CateogryListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title"),
    };
  };

  constructor(props) {
    super(props);
  }

  onPressItem = (item) => {
    this.props.navigation.navigate("Item", { item });
  };

  renderItems = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,1,0.9)"
      onPress={() => this.onPressItem(item)}
    >
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam("category");
    const itemsArray = getItems(item.id);
    return (
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={itemsArray}
          renderItem={this.renderItems}
          keyExtractor={(item) => `${item.categoryId}`}
        />
      </View>
    );
  }
}
