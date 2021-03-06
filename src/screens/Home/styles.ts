import styled, { css } from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FontAwesome } from '@expo/vector-icons';
import { FlatList } from 'react-native';
import { JobsProps } from './index';

import { color, font } from '../../constants';

interface NavigationProps {
  navigation: string;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${color.background};
  align-items: center;
  margin-top: ${getStatusBarHeight()}px;
`;
export const Logo = styled.Text`
  font-family: ${font.bold};
  font-size: ${wp(6)}px;
  color: ${color.primary};
  text-align: center;
`;
export const SearchContainer = styled.View`
  margin: ${hp(1)}px 0px;
  background-color: ${color.input};
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 90%;
  border-radius: ${hp(1)}px;
  padding: 0px ${wp(4)}px;
`;
export const Search = styled.TextInput`
  flex: 1;
  height: ${hp(7)}px;
  padding-right: ${wp(3)}px;
  font-family: ${font.regular};
  color: ${color.text.secondary};
`;
export const Icon = styled(FontAwesome)``;
export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;
export const NavigateContainer = styled.View`
  flex-direction: row;
  width: 95%;
  justify-content: space-evenly;
  margin: ${hp(1)}px 0px;
`;
export const ButtonNavigate = styled.TouchableOpacity`
  border-radius: ${hp(1)}px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: ${hp(7)}px;
`;
export const TextMap = styled.Text<NavigationProps>`
  margin-left: ${wp(2)}px;
  font-family: ${font.regular};
  ${props =>
    props.navigation === 'recolocation'
      ? css`
          color: ${color.background};
        `
      : css`
          color: ${color.text.secondary};
        `}
`;
export const TextList = styled.Text<NavigationProps>`
  margin-left: ${wp(2)}px;
  font-family: ${font.regular};
  ${props =>
    props.navigation === 'list'
      ? css`
          color: ${color.background};
        `
      : css`
          color: ${color.text.secondary};
        `}
`;
export const ShadowMap = styled.View<NavigationProps>`
  border-radius: ${hp(1)}px;
  flex-direction: row;
  flex: 0.45;
  height: 100%;
  align-items: center;
  justify-content: center;
  shadow-color: ${color.text.secondary};
  shadow-offset: 0 1px;
  shadow-radius: 1.41px;
  elevation: 4;
  ${props =>
    props.navigation === 'recolocation' &&
    css`
      background-color: ${color.primary};
    `}
`;
export const ShadowList = styled.View<NavigationProps>`
  border-radius: ${hp(1)}px;
  flex-direction: row;
  flex: 0.45;
  height: 100%;
  align-items: center;
  justify-content: center;
  shadow-color: ${color.text.secondary};
  shadow-offset: 0 1px;
  shadow-radius: 1.41px;
  elevation: 4;
  ${props =>
    props.navigation === 'list' &&
    css`
      background-color: ${color.primary};
    `}
`;
export const List = styled(FlatList)``;
export const Separator = styled.View`
  height: ${hp(0.8)}px;
`;
export const Loading = styled.ActivityIndicator`
  height: ${hp(8)}px;
`;
export const Interest = styled.Text`
  font-family: ${font.bold};
  font-size: ${wp(5)}px;
  color: ${color.primary};
  align-self: flex-start;
  margin: ${hp(0)}px ${wp(5)}px ${hp(1)}px;
`;

export const CardListInterest = styled(
  FlatList as new () => FlatList<JobsProps>,
)`
  width: 100%;
  height: ${hp(30)}px;
`;
export const CardInterest = styled.TouchableOpacity`
  margin: 0px ${wp(2)}px 0px ${wp(5)}px;
  width: ${wp(50)}px;
  flex: 1;
  background-color: ${color.primary};
  align-items: center;
  justify-content: space-around;
  border-radius: ${hp(2)}px;
`;
export const Info = styled.View`
  align-items: center;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  margin-top: ${hp(1)}px;
`;
export const TextCard = styled.Text`
  padding: 0px ${wp(4)}px;
  font-family: ${font.medium};
  font-size: ${wp(4.5)}px;
  color: ${color.background};
  align-self: flex-start;
`;
export const InfoCompany = styled.Text`
  color: ${color.background};
  font-family: ${font.bold};
  font-size: ${hp(2)}px;
`;
export const InfoWage = styled.Text`
  color: ${color.background};
  font-family: ${font.bold};
  font-size: ${wp(3)}px;
`;
export const InfoCompanyContainer = styled.View`
  background-color: ${color.text.secondary};
  align-items: center;
  justify-content: center;
  width: 38%;
  height: ${hp(7)}px;
  border-radius: ${hp(1)}px;
`;
export const InfoWageContainer = styled.View`
  background-color: ${color.text.secondary};
  align-items: center;
  justify-content: center;
  width: 38%;
  height: ${hp(5)}px;
  border-radius: ${hp(1)}px;
`;
export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${color.background};
  margin-top: ${getStatusBarHeight()}px;
`;

export const NotFoundContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: ${hp(20)}px;
  /* margin-top: ${hp(40)}px; */
`;

export const LoadingContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: ${hp(43)}px;
  /* margin-top: ${hp(40)}px; */
`;
export const Recolocation = styled.Text`
  font-family: ${font.regular};
  font-size: ${wp(5)}px;
  color: ${color.text.secondary};
`;
export const CardImage = styled.Image`
  height: ${hp(6)}px;
  width: ${hp(6)}px;
  border-radius: ${hp(6)}px;
  align-self: flex-start;
  margin-left: ${wp(3)}px;
`;
