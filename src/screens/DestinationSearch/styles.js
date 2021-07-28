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
    marginLeft: 20,
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
  line: {
    width: 1,
    height: 40,
    backgroundColor: '#919191',
    position: 'absolute',
    top: 35,
    left: 14,
  },
  square: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 80,
    left: 12,
  },
  circle: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 25,
    left: 12,
    borderRadius: 5,
  },
});

export default styles;
