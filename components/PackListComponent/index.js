import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  Text,
  View,
} from 'react-native';

import PackRow from './PackRow';

export default class PackListComponent extends React.Component {
  static propTypes = {
    navigator: PropTypes.object,
    packs: PropTypes.array,
    checkState: PropTypes.object,
    setChecked: PropTypes.func,
    renderHeader: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this._renderItem = this.renderItem.bind(this);
    this._keyExtractor = this.keyExtractor.bind(this);
  }

  keyExtractor(item) {
    return item.code;
  }

  renderItem({ item }) {
    const {
      setChecked,
      checkState,
    } = this.props;
    return (
      <PackRow
        navigator={this.props.navigator}
        pack={item}
        setChecked={setChecked}
        checked={checkState && checkState[item.code]}
      />
    );
  }

  render() {
    const {
      packs,
      checkState,
      renderHeader,
    } = this.props;
    if (!packs.length) {
      return (
        <View>
          <Text>Loading</Text>
        </View>
      );
    }
    return (
      <View>
        <FlatList
          ListHeaderComponent={renderHeader}
          data={packs}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          extraData={checkState}
        />
      </View>
    );
  }
}