import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import { color, font } from '../../constants';

export const CardContainer = styled.TouchableOpacity`
  width: 90%;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 0px ${wp(2)}px;
`;
export const Image = styled.Image`
  height: ${hp(10)}px;
  width: ${hp(10)}px;
  border-radius: ${hp(10)}px;
  margin: ${hp(1)}px ${wp(2)}px ${hp(1)}px 0px;
`;
export const Info = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: ${hp(1)}px 0px;
`;

export const Title = styled.Text`
  font-family: ${font.medium};
  font-size: ${wp(4)}px;
  color: ${color.primary};
  text-align: justify;
  align-self: flex-start;
`;
export const SubtitleContainer = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;
export const Subtitle = styled.Text`
  font-family: ${font.bold};
  color: ${color.text.tertiary};
  font-size: ${wp(3.5)}px;
  text-transform: uppercase;
  flex: 1;
`;
export const RemunerationContainer = styled.View`
  flex: 0.8;
  align-items: center;
  justify-content: center;
  background-color: ${color.placeholder};
  border-radius: ${hp(1)}px;
  height: ${hp(5)}px;
`;

export const Remuneration = styled.Text`
  font-family: ${font.regular};
  font-size: ${wp(3)}px;
`;
