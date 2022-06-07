import React from 'react'

import { HeaderC, FooterC } from '../../components/indexComponents'

import { ContentBudget } from './CreateBudgetStyles'

const CreateBudget = () => {
  return (
    <div>
      <HeaderC />
      <ContentBudget>
        <h1>Test</h1>
      </ContentBudget>
      <FooterC />
    </div>
  )
}

export default CreateBudget