import LinearGradient from "react-native-linear-gradient";
import { View, StyleSheet } from "react-native";

const CustomHeader = props => {
  return (
    <LinearGradient
      colors={props.colors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: -2 }}
      style={props.style}
    >
      <View style={style.container}>
        <View style={style.left}>
          {props.left}
        </View>
        <View style={style.center}>
          {props.center}
        </View>
        <View style={style.right}>
          {props.right}
        </View>
      </View>
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignltems: "center",
    width: "100%",
    height: "100%"
  },
  left: {
    width: 70,
    height: "100%",
    justifyContent: "center",
    paddingLeft: 8
  },
  center: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignltems: "center"
  },
  right: {
    width: 70,
    height: "100%",
    paddingRight: 8,
    alignltems: "flex-end",
    justifyContent: "center "
  }
});
export default CustomHeader;
