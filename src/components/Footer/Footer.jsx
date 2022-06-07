import React from 'react'

import { Content, Links, LinkMenu, ContentLink, StyledLink } from './FooterStyles'

const FooterC = () => {
  return (
    <Content>
      <Links>
        <LinkMenu to="/create">Criar Orç</LinkMenu>
        <ContentLink>
          <StyledLink to="/">Ver Orç</StyledLink>
        </ContentLink>
        <LinkMenu to="/addMaterial">Add Mat</LinkMenu>
      </Links>
    </Content>
  )
}

export default FooterC