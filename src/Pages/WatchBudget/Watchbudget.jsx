import React, {useEffect, useState, useContext} from 'react'

import { FooterC, HeaderC } from '../../components/indexComponents'
import { OrcamentoContext } from '../../contexts/orcamentosContext'

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
  Button,
  FooterContent,
  StyledLink } from './watchbudgetstyles'

import { useGetOrcamentosQuery } from '../../services/orcamentoAPI'

const Watchbudget = () => {

  const {OrcamentoPrice, OrcamentoTitle, OrcamentoItems} = useContext(OrcamentoContext)

  const { data: budgetList, isFetching } = useGetOrcamentosQuery();
  const [orcamentoTitle, setOrcamentoTitle] = OrcamentoTitle;
  const [orcamentoPrice, setOrcamentoPrice] = OrcamentoPrice;
  const [orcamentoItems, setOrcamentoItems] = OrcamentoItems;
  const [budgetAppList, setBudgetAppList] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const filteredData = budgetList?.orcamento.filter((budget) => budget.orcamentoName.toLowerCase().includes(search.toLowerCase()));
    setBudgetAppList(filteredData);
  }, [budgetList, search]);

  function showMore(name, items, price) {
    setOrcamentoTitle(name);
    setOrcamentoPrice(price);
    setOrcamentoItems(items);
  }

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
                    <StyledLink to="/description">
                      <Button onClick={() => showMore(budget.name, budget.items, budget.totalPrice)}>Ver</Button>
                    </StyledLink>
                    <Button>Enviar</Button>
                    <Button>Eliminar</Button>
                  </ContentBtn>
                </Cards>
                </>
              ))
          }
          </CardsContent> 
          <FooterContent>
            <FooterC /> 
          </FooterContent>
    </Content>
  )
}

export default Watchbudget

/*budgetAppList?.map((budget, id) => (
  <Cards key={id} Name={budget.orcamentoName} Price={budget.totalPrice}/> */