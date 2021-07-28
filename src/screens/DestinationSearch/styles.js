import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
  },
  textInput: {
    padding: 10,
    backgroundColor: '#eee',
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginVertical: 5,
  },
  iconContainer: {
    backgroundColor: '#a2a2a2',
    padding: 5,
    borderRadius: 50,
    marginRight: 15,
  },
  locationText: {},
  listView: {
    position: 'absolute',
    top: 109,
  },
  autoCompleteContainer: {position: 'absolute', top: 55, left: 10, right: 10},
});

export default styles;
