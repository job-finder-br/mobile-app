import React from 'react';

import { Container, Logo, Form } from './styles';

import Input from '../../components/Input';

function AddVacancy() {
  return (
    <Container>
      <Logo>JobFinder - Anunciar</Logo>
      <Form contentContainerStyle={{ alignItems: 'center' }}>
        <Input
          placeholder="Titulo"
          icon="address-card"
          returnKeyType="next"
          keyboardType="default"
          autoCorrect={false}
        />
        <Input
          placeholder="Descrição"
          icon="file"
          returnKeyType="next"
          keyboardType="default"
          autoCorrect={false}
        />
        <Input
          placeholder="E-mail"
          icon="user"
          returnKeyType="next"
          keyboardType="default"
          autoCorrect={false}
        />
        <Input
          placeholder="Telefone"
          icon="phone"
          returnKeyType="next"
          keyboardType="number-pad"
          autoCorrect={false}
        />
        <Input
          placeholder="Remuneração"
          icon="money"
          returnKeyType="next"
          keyboardType="number-pad"
          autoCorrect={false}
        />
        <Input
          placeholder="Estado"
          icon="globe"
          returnKeyType="next"
          keyboardType="default"
          autoCorrect={false}
        />
        <Input
          placeholder="Cidade"
          icon="location-arrow"
          returnKeyType="next"
          keyboardType="default"
          autoCorrect={false}
        />
        <Input
          placeholder="Tipo"
          icon="filter"
          returnKeyType="done"
          keyboardType="default"
          autoCorrect={false}
        />
      </Form>
    </Container>
  );
}

export default AddVacancy;
