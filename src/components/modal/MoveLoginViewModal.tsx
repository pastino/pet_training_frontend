import React, {SFC} from 'react';
import Modal from 'react-native-modal';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import constant from '../../../constant';
import cStyles from '../../../cStyles';

interface IProps {
  navigation?: any;
  isVisible: boolean;
  setIsVisible: any;
}

const MoveLoginViewModal: SFC<IProps> = ({
  isVisible,
  setIsVisible,
  navigation,
}) => {
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.modal}>
        <View style={styles.fullScreenModal}>
          <View style={styles.wrapperModal}>
            <View style={styles.wrapperText}>
              <Text style={{textAlign: 'center'}}>
                로그인이 필요한 페이지 입니다.
              </Text>
              <Text style={{textAlign: 'center', marginTop: 5}}>
                로그인 페이지로 이동하시겠습니까?
              </Text>
            </View>
            <View style={styles.wrapperButton}>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('Home');
                  setIsVisible(!isVisible);
                }}>
                <View style={styles.confirmNoButton}>
                  <Text>아니오</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('AuthNavigation')}>
                <View style={styles.confirmYesButton}>
                  <Text>예</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  fullScreenModal: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperModal: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: constant.width / 1.3,
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperText: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  wrapperButton: {
    width: constant.width / 1.3,
    flexDirection: 'row',
  },
  confirmNoButton: {
    width: constant.width / 1.3 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderTopColor: cStyles.BorderLightGrayColor,
    borderRightWidth: 1,
    borderRightColor: cStyles.BorderLightGrayColor,
  },
  confirmYesButton: {
    width: constant.width / 1.3 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderTopColor: cStyles.BorderLightGrayColor,
  },
});

export default MoveLoginViewModal;
