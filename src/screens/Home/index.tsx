import React, { useState } from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import {
  Container,
  Logo,
  Search,
  SearchContainer,
  Icon,
  Button,
  NavigateContainer,
  ShadowList,
  ShadowMap,
  ButtonNavigate,
  TextList,
  TextMap,
  List,
  Separator,
  Loading,
} from './styles';

import { color } from '../../constants';

import VacancyCard from '../../components/Card/vacancy';
import RecolocationCard from '../../components/Card/recolocation';

const data = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
];

function JobVacancies() {
  const [search, setSearch] = useState('');
  const [navigation, setNavigation] = useState('list');
  const [slice, setSlice] = useState(6);

  return (
    <Container>
      <Logo>JobFinder</Logo>
      <SearchContainer>
        <Search
          placeholder="Buscar"
          placeholderTextColor={color.text.tertiary}
          value={search}
          onChangeText={text => setSearch(text)}
        />
        {search?.length > 1 ? (
          <Button onPress={() => setSearch('')}>
            <Icon name="times" size={18} color={color.text.tertiary} />
          </Button>
        ) : (
          <Icon name="search" size={18} color={color.text.tertiary} />
        )}
      </SearchContainer>
      <NavigateContainer>
        <ShadowList navigation={navigation}>
          <ButtonNavigate
            onPress={() => {
              setNavigation('list');
              setSlice(6);
            }}
            activeOpacity={0.8}
          >
            <Icon
              size={20}
              color={
                navigation === 'list' ? color.background : color.text.secondary
              }
              name="list"
            />
            <TextList navigation={navigation}>Vagas</TextList>
          </ButtonNavigate>
        </ShadowList>
        <ShadowMap navigation={navigation}>
          <ButtonNavigate
            onPress={() => {
              setNavigation('recolocation');
              setSlice(6);
            }}
            activeOpacity={0.8}
          >
            <Icon
              size={20}
              color={
                navigation === 'recolocation'
                  ? color.background
                  : color.text.secondary
              }
              name="briefcase"
            />
            <TextMap navigation={navigation}>Recolocação</TextMap>
          </ButtonNavigate>
        </ShadowMap>
      </NavigateContainer>
      <List
        contentContainerStyle={{
          width: wp(100),
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onEndReached={() => {
          if (slice < data.length) {
            setSlice(state => state + 6);
          }
        }}
        onEndReachedThreshold={0.1}
        showsVerticalScrollIndicator={false}
        data={data.slice(0, slice)}
        keyExtractor={item => String(item)}
        renderItem={() => {
          return navigation === 'list' ? <VacancyCard /> : <RecolocationCard />;
        }}
        ItemSeparatorComponent={() => <Separator />}
        ListFooterComponent={
          slice < data.length ? (
            <Loading size="small" color={color.primary} />
          ) : (
            <Separator />
          )
        }
      />
    </Container>
  );
}

export default JobVacancies;