import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { OrcamentoProvider } from './contexts/orcamentosContext';
import { HomePage, CreatePage, AddMaterialPage, DetailBudgetPage, DescriptionBudgetPage, SendBudgetPage } from './Pages/indexPages';

import theme from './theme/default';
import './theme/MainApp.css'

const  App = () => {
  return (
    <>
      <OrcamentoProvider>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/create' element={<CreatePage />} />
            <Route path='/addMaterial' element={<AddMaterialPage />} />
            <Route path='/detailBudget' element={<DetailBudgetPage />} />
            <Route path='/description' element={<DescriptionBudgetPage />} />
            <Route path='/send' element={<SendBudgetPage />} />
          </Routes>
        </ThemeProvider>
      </OrcamentoProvider>
    </>
  )
}

export default App
