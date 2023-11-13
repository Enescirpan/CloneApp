import React from "react";
import { View, Text, Image, Dimensions, TouchableOpacity, TouchableOpacityComponent } from "react-native";
import { Product } from "../../models";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/cartActions";

const { width, height } = Dimensions.get("window");

type CartItemProps = {
  product: Product;
  quantity: number;
  removeFromCart: (product: Product) => void;
};

function index({ product, quantity, removeFromCart}: CartItemProps) {
  return (
    <View style={{ width: "100%", backgroundColor: "white" }}>
      <View
        style={{
          borderBottomWidth: 0.6,
          width: width * 0.92,
          marginHorizontal: width * 0.04,
          borderBottomColor: "lightgrey",
          height: height * 0.13,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: width * 0.045,
          backgroundColor: "white",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              borderWidth: 0.04,
              borderRadius: 8,
              padding: 4,
              borderColor: "lightgrey",
            }}
          >
            <Image
              style={{ width: width * 0.2, height: height * 0.09 }}
              source={{ uri: product.image }}
            />
          </View>
          <View style={{ marginLeft: 8 }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "600",
                maxWidth: width * 0.44,
              }}
            >
              {product.name}{" "}
            </Text>
            <Text
              style={{
                color: "#848897",
                fontWeight: "600",
                marginTop: 3,
                fontSize: 12,
                maxWidth: width * 0.44,

              }}
            >
              {product.miktar}{" "}
            </Text>
            <Text
              style={{
                color: "#5D3EBD",
                fontWeight: "bold",
                marginTop: 6,
                fontSize: 15,
                maxWidth: width * 0.44,

              }}
            >
              <Text>{"\u20BA"}</Text>
              {product.fiyat}
            </Text>
          </View>
        </View>
        <View
          style={{
            shadowColor: "red",
            shadowOpacity: 50,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            width: width * 0.21,
            borderColor: "ligtgray",
            borderWidth: 0.5,
            height: height * 0.037,
            borderRadius: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => removeFromCart(product)}
            style={{ flex: 1, alignItems: "center" }}
          >
            <Text>-</Text>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#5D3EBD",
              height: height * 0.037,
              justifyContent: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", color: "white", fontSize: 12 }}>
              {quantity}
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text>+</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (product: Product) =>
      dispatch(actions.removeFromCart(product)),
  };
  
};

export default connect(null, mapDispatchToProps)(index);

//shadow özellikleri çalışmıyor.
