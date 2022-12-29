import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CustomSelect = props => {
    const openContext = (navigation) => {
        console.log("open menu:", navigation)
    }

  return (
    <TouchableOpacity style={styles.container} onPress={()=> openContext(props.navigation)}>
      <View style={styles.inputLike}>
        <View style={styles.right}>
          <Text style={styles.rightText}>
            {props.text}
          </Text>
          <Icon name={props.icon} size={26} color={"#585956"} />
        </View>
        {props.isDisplayOnly
          ? <View style={styles.left}>
              <FontAwesomeIcon
                icon={faChevronLeft}
                size={18}
                color={"#a6a6a6"}
              />
              <Text style={styles.leftText}>
                {props.value}
              </Text>
            </View>
          : null}
      </View>
    </TouchableOpacity>
  );
};

export default CustomSelect;

const styles = StyleSheet.create({
  container: {
width: "100%"
  },
    inputLike: {
    width: "100%",
    padding: 10,
    backgroundColor: "#fff",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    marginBottom: 15
  },
  left: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  leftText: {
    color: "#a6a6a6",
    fontSize: 16,
    marginLeft: 10
  },
  right: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  rightText: {
    color: "#585956",
    fontSize: 18,
    marginRight: 10
  }
});
