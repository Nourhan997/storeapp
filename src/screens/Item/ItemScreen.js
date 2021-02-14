import React from "react";
import {
  ScrollView,
  Text,
  Image,
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Switch,
  TextInput,
  View,
  FlatList,
  TouchableHighlight,
} from "react-native";
import { Cell, Section, TableView } from "react-native-tableview-simple";
import styles from "./styles";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { getCategoryName, getCategoryById } from "../../core/data/apis-list";
import BackButton from "../../components/BackButton/BackButton";

const { width: viewportWidth } = Dimensions.get("window");

export default class ItemScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTransparent: "true",
      headerLeft: (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      isDisabled: false,
    };
  }

  renderImage = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item }} />
      </View>
    </TouchableHighlight>
  );

  deleteItem = () => {
    this.setState({ isDisabled: !isDisabled });
    console.log("disabled")
  };

  render() {
    const { activeSlide } = this.state;
    const { navigation } = this.props;
    const item = navigation.getParam("item");
    const category = getCategoryById(item.categoryId);
    const title = getCategoryName(category.id);
  
    return (
      <ScrollView contentContainerStyle={styles.stage}>
        <View style={styles.carouselContainer}>
          <View style={styles.carousel}>
            <Carousel
              ref={(c) => {
                this.slider1Ref = c;
              }}
              data={item.photosArray}
              renderItem={this.renderImage}
              sliderWidth={viewportWidth}
              itemWidth={viewportWidth}
              inactiveSlideScale={1}
              inactiveSlideOpacity={1}
              firstItem={0}
              loop={false}
              autoplay={false}
              autoplayDelay={500}
              autoplayInterval={3000}
              onSnapToItem={(index) => this.setState({ activeSlide: index })}
            />
            <Pagination
              dotsLength={item.photosArray.length}
              activeDotIndex={activeSlide}
              containerStyle={styles.paginationContainer}
              dotColor="rgba(255, 255, 255, 0.92)"
              dotStyle={styles.paginationDot}
              inactiveDotColor="white"
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              carouselRef={this.slider1Ref}
              tappableDots={!!this.slider1Ref}
            />
          </View>
        </View>
        <TableView>
          <Section header={item.title} style={styles.infoItem}>
            <Cell
              cellStyle="RightDetail"
              title="Name"
              isDisabled={this.state.isDisabled}
              detail={item.title}
            />
            <Cell
              cellStyle="RightDetail"
              title="Model"
              isDisabled={this.state.isDisabled}
              detail={item.model}
            />
            <Cell
              cellStyle="RightDetail"
              title="Storage"
              isDisabled={this.state.isDisabled}
              detail={item.storage}
            />
            <Cell
              cellStyle="RightDetail"
              title="Material"
              isDisabled={this.state.isDisabled}
              detail={item.bodymaterial}
            />
            <Cell
              cellStyle="RightDetail"
              title="Availability"
              isDisabled={this.state.isDisabled}
              detail={item.Availability}
            />{" "}
            <Cell
              cellStyle="RightDetail"
              title="ItemCode"
              isDisabled={this.state.isDisabled}
              detail={item.ItemCode}
            />
            <Cell
              cellStyle="RightDetail"
              title="Brand"
              isDisabled={this.state.isDisabled}
              detail={item.Brand}
            />
            <Cell
              cellStyle="RightDetail"
              title="Price"
              isDisabled={this.state.isDisabled}
              detail={item.price}
            />
            <Cell
              cellStyle="Basic"
              title="Disable"
              accessory="DisclosureIndicator"
              onPress={() => this.deleteItem}
            />
          </Section>
        </TableView>
      </ScrollView>
    );
  }
}
