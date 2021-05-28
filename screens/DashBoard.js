import React, {Component} from 'react';
import { View, Text, StyleSheet , SafeAreaView} from 'react-native';

class DashBoard extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    console.log("==== VISHAL")
  }
  
  componentDidMount = () => {
  };

  render() {
    
    return (
        <SafeAreaView style={styles.container}>
        <View style={{backgroundColor:'green', flex: 1}}></View>
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: SafeAreaView.marginTop,
    backgroundColor: 'red',
    flexDirection: 'column',
  }
});

export default DashBoard;
