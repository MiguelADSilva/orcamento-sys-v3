import React, {useEffect, useState} from 'react'

import { FooterC, HeaderC } from '../../components/indexComponents'

import { 
  Content, 
  SearchContent, 
  Search, 
  SearchIcon,
  CardsContent,
  Cards,
  CardTitle,
  Title,
  CardDescription,
  PriceTxt,
  TotalItemsTxt,
  ContentBtn,
  Button } from './watchbudgetstyles'

import { useGetOrcamentosQuery } from '../../services/orcamentoAPI'

const Watchbudget = () => {

  const { data: budgetList, isFetching } = useGetOrcamentosQuery('orcamento');
  const [budgetAppList, setBudgetAppList] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log(budgetList?.orcamento, isFetching);
    const filteredData = budgetList?.orcamento.filter((budget) => budget.orcamentoName.toLowerCase().includes(search.toLowerCase()));
    setBudgetAppList(filteredData);
  }, [budgetList, search]);

  if(isFetching) return 'Loading...';

  return (
    <Content className="testing">
        <HeaderC />
        <SearchContent>
            <SearchIcon />
            <Search placeholder='Search...' onChange={(e) => setSearch(e.target.value)} />
        </SearchContent>
        <CardsContent>
          {
            budgetAppList?.map((budget, id) => (
              <>
                <Cards key={id}>
                  <CardTitle>
                    <Title>{budget.orcamentoName}</Title>
                  </CardTitle>
                  <CardDescription>
                      <PriceTxt>Total a Pagar:</PriceTxt><PriceTxt>{budget.totalPrice}</PriceTxt>
                  </CardDescription>
                  <CardDescription>
                    <TotalItemsTxt>Total de items:</TotalItemsTxt><TotalItemsTxt>{budget?.items?.length}</TotalItemsTxt>
                  </CardDescription>
                  <ContentBtn>
                    <Button>Ver</Button>
                    <Button>Enviar</Button>
                    <Button>Eliminar</Button>
                  </ContentBtn>
                </Cards>
                </>
              ))
          }
          </CardsContent>
        <FooterC />
    </Content>
  )
}

export default Watchbudget

/*budgetAppList?.map((budget, id) => (
  <Cards key={id} Name={budget.orcamentoName} Price={budget.totalPrice}/> */