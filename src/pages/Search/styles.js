import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({


  detail: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
  },

  scannerButton: {
    backgroundColor: '#524f56',
    borderRadius: 10,
    height: 50,
    width: SCREEN_WIDTH,
  },

  searchContainer: {
    alignItems: 'center',
  }
});
