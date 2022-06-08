import React, { useState, useEffect, useContext } from 'react'
import { HeaderC, FooterC } from '../../components/indexComponents'
import { useGetMaterialsQuery } from '../../services/orcamentoAPI'
import { OrcamentoContext } from '../../contexts/orcamentosContext'

import { 
  ContentBudget, 
  SearchContent, 
  Search, 
  SearchIcon,
  CardsContent,
  Cards,
  CardTitle,
  Title,
  CardDescription,
  DescriptionTxt,
  ContentBtn,
  Button,
  HR,
  FooterContent } from './CreateBudgetStyles'


const CreateBudget = () => {

  const {orcamentoList} = useContext(OrcamentoContext)

  const [orcamento, setOrcamento] = orcamentoList;
  const [search, setSearch] = useState('');
  const [materials, setMaterials] = useState([]);
  const { data: materialsList, isFetching } = useGetMaterialsQuery();

  useEffect(() => { 
    const filteredData = materialsList?.material.filter((result) => 
    result.cableName.toLowerCase().includes(search.toLowerCase()));
    setMaterials(filteredData);
  }, [materialsList, search])

  return (
    <div>
      <ContentBudget>
      <HeaderC />
        <SearchContent>
          <SearchIcon />
          <Search placeholder='Search...' onChange={(e) => setSearch(e.target.value)} />
        </SearchContent>
        <CardsContent>
        {
          materials?.map((material, id) => (
            <Cards key={id}>
              <CardTitle>
                <Title>{material.cableName}</Title>
              </CardTitle>
              <CardDescription>
                <DescriptionTxt><b>Tipo de Material:</b></DescriptionTxt><DescriptionTxt><b>{material.cableType}</b></DescriptionTxt>
              </CardDescription>
              <CardDescription>
                <DescriptionTxt><b>Metros/Quatidade:</b></DescriptionTxt><DescriptionTxt><b>{material.meters}</b></DescriptionTxt>
              </CardDescription>
              <CardDescription>
                <DescriptionTxt><b>Preço:</b></DescriptionTxt><DescriptionTxt><b>{material.price}€</b></DescriptionTxt>
              </CardDescription>
              <CardDescription>
                <DescriptionTxt><b>Serie:</b></DescriptionTxt><DescriptionTxt><b>{material.serie}</b></DescriptionTxt>
              </CardDescription>
              <CardDescription>
                <DescriptionTxt><b>Tipo de arte:</b></DescriptionTxt><DescriptionTxt><b>{material.type}</b></DescriptionTxt>
              </CardDescription>
              <ContentBtn>
                <Button>Ver</Button>
                <Button>Enviar</Button>
                <Button>Eliminar</Button>
              </ContentBtn>
            </Cards>
        ))}
        </CardsContent>
        <FooterContent>
          <FooterC />
        </FooterContent>
      </ContentBudget>
    </div>
  )
}

export default CreateBudget