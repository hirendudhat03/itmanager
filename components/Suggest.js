import * as React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Searchbar, List} from 'react-native-paper';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';

const Suggest = props => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [suggestData, setSuggestData] = React.useState(props.Value);
  const [listVisible, setListVisible] = React.useState(false);

  React.useEffect(() => {}, []);

  const onChangeSearch = query => {
    if (query == '') {
      setListVisible(false);
    } else {
      setListVisible(true);
    }

    setSearchQuery(query);
    var filterData = props.Value.filter(item => {
      return item.Name.toLowerCase().indexOf(query.toLowerCase()) > -1;
    });
    setSuggestData(filterData);

    // console.log('filterData : ',suggestData);
  };

  //console.log('props.Value : ', props.Value);

  return props.Display == 'True' ? (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.LabelName}</Text>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        icon={{uri: 'https://img.icons8.com/search'}}
        accessibilityHint={'Abc'}
        editable={props.ReadOnly == 'True' ? true : false}
      />
      {listVisible == true ? (
        <FlatList
          data={suggestData}
          renderItem={item => {
            console.log('item => ', item);
            return (
              <List.Item
                title={item.item.Name}
                //description="Item description"
                // left={props => <List.Icon {...props} icon="folder" />}
              />
            );
          }}
        />
      ) : null}
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  viewStyle: {marginHorizontal: 20, marginTop: 20},
  textStyle: {fontSize: 16, color: 'black', paddingHorizontal: 0, height: 30},
  textInputStyle: {
    fontSize: 16,
    borderWidth: 0.2,
    height: 30,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});

export default Suggest;
