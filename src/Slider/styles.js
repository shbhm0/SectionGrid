import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
    mainContainer: {
        backgroundColor: '#fff',
        paddingBottom: 40
      },
      image: {
        height:  371,
        width: windowWidth,
      },
      dotBox: {
        width: "100%",
        flexDirection: 'row',
        position: 'absolute',
        bottom:  11,
        alignItems: 'center',
        justifyContent: 'center',
      },
      dot: {
        borderRadius: 10,
        margin: 3,
      },
      text: {
        color: 'white',
        fontSize: 16,
        marginBottom:  20,
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
      },
      description: {
        fontSize: 14,
        alignSelf: 'center',
        marginVertical:  10,
      },
      viewAllBtn: {
        alignSelf: 'center',
        borderWidth: 1,
        paddingVertical:  7,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginVertical:  10,
      }
})