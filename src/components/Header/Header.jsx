import React from 'react'

import { Content, Navigation, HeaderS, Title, Links, StyledLink } from './HeaderStyles'


const Header = () => {
  return (
    <Content>
        <Navigation>
            <HeaderS className="test">
                <Title>Orçamento</Title>
            </HeaderS>
            <Links>
                <StyledLink to='/'><h3>Ver Orçamentos</h3></StyledLink>
                <StyledLink to='/create'><h3>Criar Orçamentos</h3></StyledLink>
                <StyledLink to='/addMaterial'><h3>Adicionar Material</h3></StyledLink>
            </Links>
        </Navigation>
    </Content>
  )
};

export default Header    