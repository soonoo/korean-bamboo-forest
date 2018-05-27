import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { connect } from 'react-redux';

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
          <View style={styles.container}>
              <Text>{this.props.petitions}</Text>
          </View>
      )
  }

  componentDidMount() {
      setTimeout(this.props.getValue, 3000);
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

const mapStateToProps = state => ({
    petitions: state.petitions,
});

const mapDispatchToProps = dispatch => ({
    getValue: () => dispatch({type:'INIT_WAITING_PETITIONS', petitions: 1}),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container);