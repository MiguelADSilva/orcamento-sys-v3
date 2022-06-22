import React, {useEffect, useState, useContext} from 'react'

import { FooterC, HeaderC } from '../../components/indexComponents'
import { OrcamentoContext } from '../../contexts/orcamentosContext'
import { deleteOrcamento } from '../../services/api'

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
import { jssPreset } from '@material-ui/core'

const Watchbudget = () => {

  const {OrcamentoPrice, OrcamentoTitle, OrcamentoItems} = useContext(OrcamentoContext)

  const { data: budgetList, isFetching } = useGetOrcamentosQuery();
  const [orcamentoTitle, setOrcamentoTitle] = OrcamentoTitle;
  const [orcamentoPrice, setOrcamentoPrice] = OrcamentoPrice;
  const [orcamentoItems, setOrcamentoItems] = OrcamentoItems;
  const [budgetAppList, setBudgetAppList] = useState([]);
  const [search, setSearch] = useState('');
  const [helpMoney, setHelpMoney] = useState(0);
  const [email, setEmail] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [values, setValues] = useState([])
  const [send, setSend] = useState([]);

  useEffect(() => {
    const filteredData = budgetList?.orcamento.filter((budget) => budget.orcamentoName.toLowerCase().includes(search.toLowerCase()));
    setBudgetAppList(filteredData);
  }, [budgetList, search]);

  function showMore(name, items, price) {
    setOrcamentoTitle(name);
    setOrcamentoPrice(price);
    setOrcamentoItems(items);
  }

  function onHandleClickToRemoveItem(name) {
    let isExecute = confirm(`Deseja mesmo remover este item ${name}`)
    if (isExecute === true ) {
      deleteOrcamento(name);
    }
  }

  function onHandleClickToSend(materials, price) {
    let add = prompt('Adiciona o valor para mão de obra, transporte e alimantação: ' )
    setSend([])
    if(add == null || add == '') {
      setHelpMoney(0)
    } else {
      setTotalPrice(parseInt(price) + parseInt(add))
      let email = prompt('Introduza o email da pessoa: ')
      if (email == null || email == '') {
        setEmail('')
      } else {
        setEmail(email)
       // values.push(materials, totalPrice)
          setValues({
            materials
          })
          Object.entries(values).map((item, id) => {
            setSend({
            "Valor Total": totalPrice,
            "Materiais": item
            })
          })
          console.log(send)
         window.location.href=`mailto:${email}?subject= Orçamento&body=` + encodeURIComponent(JSON.stringify(send))
      }
    }
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
                      <Button onClick={ () => onHandleClickToSend(budget.items, budget.totalPrice)}>Enviar</Button>
                    <Button onClick={() => onHandleClickToRemoveItem(budget.orcamentoName)}>Eliminar</Button>
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