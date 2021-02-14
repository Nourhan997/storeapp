const React = require("react-native");

const { StyleSheet } = React;

export default {
  containerView: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start", // if you want to fill rows left to right
  },
  item: {
    width: "50%", // is 50% of container width
  },

  ScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 30,
    fontWeight: "500",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  FormView: {
    flex: 1,
  },
  FormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  Button: {
    backgroundColor: "#3897f1",
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    margin:15,
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: "transparent",
  },
};
