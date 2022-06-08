import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { OrcamentoProvider } from './contexts/orcamentosContext';
import { HomePage, CreatePage, AddMaterialPage } from './Pages/indexPages';

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
          </Routes>
        </ThemeProvider>
      </OrcamentoProvider>
    </>
  )
}

export default App
