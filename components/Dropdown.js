import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import ActionSheet from 'react-native-actionsheet';

const Dropdown = props => {
  const [labelName, setLabelName] = useState(props.Default_Value);
  const [currentId, setCurrentId] = useState(1);

  var namedata = props.data;

  const showActionSheet = () => {
    namedata.show();
  };

  var Level_3_Dropdown_Child_1 = props.data;
  var Level_3_Dropdown_Child_2 = 2;
  var Level_2_Dropdown_Child_1 = props.data;

  const Level_3_Dropdown_Child_1_Function = () => {
    Level_3_Dropdown_Child_1.show();
  };
  const Level_3_Dropdown_Child_2_Function = (index) => {
    
    Level_3_Dropdown_Child_2.show();
    Level_3_Dropdown_Child_2 = index + 1;
  };
  const Level_2_Dropdown_Child_1_Function = () => {
    Level_2_Dropdown_Child_1.show();
  };

  const Level_3_Dropdown_Child_1_Fetch = data => {
    var clone = [];

    data.map(data => {
      if (data.Custom_Type == '3 Level Dropdown_Child_1') {
        data.Value.map(item => {
          if (item.Level1Id == currentId) {
            clone.push(item.Name);
          }
        });
      }
    });

    return clone;
  };
  const Level_3_Dropdown_Child_2_Fetch = data => {
    var clone = [];

    data.map(data => {
      if (data.Custom_Type == '3 Level Dropdown_Child_2') {
        data.Value.map(item => {
          if (item.Level2Id == 1) {
            clone.push(item.Name);
          }
        });
      }
    });

    return clone;
  };
  const Level_2_Dropdown_Child_1_Fetch = data => {
    var clone = [];

    data.map(data => {
      if (data.Custom_Type == '2 Level Dropdown_Child_1') {
        data.Value.map(item => {
          if (item.Level1Id == currentId) {
            clone.push(item.Name);
          }
        });
      }
    });

    return clone;
  };

  const displayItem = data => {
    var clone = [];

    data.map(data => {
      clone.push(data.Name);
    });
    clone.push('cancel');
    return clone;
  };

  const clickMainDropdown = (data, index) => {
    var clone = [];
    data.map(data => {
      clone.push(data.Name);
    });

    if (props.Custom_Type == '3 Level Dropdown') {
      props.AllData.map(data => {
        if (data.Custom_Type == '3 Level Dropdown_Child_1') {
          Level_3_Dropdown_Child_1_Function();
          setCurrentId(1 + index);
        }
      });
    } else if (props.Custom_Type == '2 Level Dropdown') {
      Level_2_Dropdown_Child_1_Function();

      setCurrentId(1 + index);
    } else {
      console.log('clone[index] : ',clone[index]);
      setLabelName(clone[index] == undefined ? props.LabelName : clone[index]);
    }

    return clone[index];
  };

  const setDataLevel_3_Dropdown_Child_2 = (data, index) => {
    var clone = [];

    data.map(data => {
      if (data.Custom_Type == '3 Level Dropdown_Child_2') {
        data.Value.map(item => {
          if (item.Level2Id == index + 1) {
            setLabelName(item.Name);
          }
        });
      }
    });
  };
  const setDataLevel_2_Dropdown_Child_1 = (data, index) => {
    var clone = [];

    data.map(data => {
      if (data.Custom_Type == '2 Level Dropdown_Child_1') {
        data.Value.map(item => {
          if (item.Level1Id == index + 1) {
            setLabelName(item.Name);
          }
        });
      }
    });
  };

  return props.Display == 'True' ? (
    <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>{props.LabelName}</Text>
    <TouchableOpacity
      style={{
        height: 40,
        //marginHorizontal: 20,
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.3,
        borderRadius: 10,
      }}
      onPress={() => props.ReadOnly == 'False' ? 
      showActionSheet()
       : null}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <Text style={styles.textStyle1}>{labelName}</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-end',
          marginRight: 10,
        }}>
        <Image
          source={{
            uri: 'data:image/png;base64,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',
          }}
          style={{height: 22, width: 22}}
        />
      </View>
      <ActionSheet
        ref={o => (namedata = o)}
        title={'title'}
        //styles={{backgroundColor: 'red', height: 200}}
        options={displayItem(props.Value)}
        //destructiveButtonIndex={1}
        onPress={index => clickMainDropdown(props.Value, index)}
      />

      <ActionSheet
        ref={o => (Level_3_Dropdown_Child_1 = o)}
        title={'title'}
        //styles={{backgroundColor: 'red', height: 200}}
        options={Level_3_Dropdown_Child_1_Fetch(props.AllData)}
        //options={['first', 'second', 'third']}
        //destructiveButtonIndex={1}
        onPress={index => {
          Level_3_Dropdown_Child_2_Function(index);
        }}
      />
      <ActionSheet
        ref={o => (Level_3_Dropdown_Child_2 = o)}
        title={'title'}
        //styles={{backgroundColor: 'red', height: 200}}
        options={Level_3_Dropdown_Child_2_Fetch(props.AllData)}
        //options={['first', 'second', 'third']}
        //destructiveButtonIndex={1}
        onPress={index => {
          setDataLevel_3_Dropdown_Child_2(props.AllData, index);
        }}
      />
      <ActionSheet
        ref={o => (Level_2_Dropdown_Child_1 = o)}
        title={'title'}
        //styles={{backgroundColor: 'red', height: 200}}
        options={Level_2_Dropdown_Child_1_Fetch(props.AllData)}
        //options={['first', 'second', 'third']}
        //destructiveButtonIndex={1}
        onPress={index => {
          setDataLevel_2_Dropdown_Child_1(props.AllData, index);
        }}
      />
    </TouchableOpacity>
  </View>
    
  ) : null;
};

const styles = StyleSheet.create({
  viewStyle: {height: 60, marginHorizontal: 20, marginTop: 20},
  innerView: {
    height: 30,
    flexDirection: 'row',
  },
  textStyle: {
    fontSize: 16,
    color: 'black',
    paddingHorizontal: 0,
    //marginLeft: 10,
  },
  textStyle1: {
    fontSize: 16,
    color: 'black',
    paddingHorizontal: 0,
    marginLeft: 10,
  },
});

export default Dropdown;
