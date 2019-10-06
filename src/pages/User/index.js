import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import api from '../../services/api';

// import { Container } from './styles';
export default class User extends Component {
  /* static navigationOptions = {
    title: 'Título da página',
  }; */
  // transforma o navigationOptions em uma função que retorna um objeto:
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  state = {
    stars: [],
  };

  async componentDidMount() {
    const { navigation } = this.props;
    const user = navigation.getParam('user');
    // console.log(user);

    const response = await api.get(`/users/${user.login}/starred`);
    // console.log(response);

    this.setState({ stars: response.data });
    // console.log(this.state.stars);
  }

  render() {
    const { stars } = this.state;
    return <View />;
  }
}
