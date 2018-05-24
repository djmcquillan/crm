import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import Login from './Login';
import Loader from './Loader';
import Navigation from './Navigation';
import reducers from '../reducers/PeopleReducer';
import Thunk from 'redux-thunk';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(Thunk));
type Props = {};
export default class App extends Component<Props> {
  state = {  
    loggedIn: null
  };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAkgCMRF3zJ890rymakXhKuf2rz5aBlgVM",
      authDomain: "crmnative.firebaseapp.com",
      databaseURL: "https://crmnative.firebaseio.com",
      projectId: "crmnative",
      storageBucket: "",
      messagingSenderId: "223472173299"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    })
  }

  renderInitialView() {
    switch (this.state.loggedIn){
      case true:
        return <Navigation />;
      case false:
        return <Login />
      default: 
        return <Loader size='large' />;
    }
  }

  render() {
    return (
      <Provider store={store}>
          <View style={styles.container}>
            {this.renderInitialView()}
          </View>
      </Provider>
    );
  }
}
