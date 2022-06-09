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
  FooterContent,
  InputQtd,
  ShopListContent,
  Span,
  SpanContent } from './CreateBudgetStyles'


const CreateBudget = () => {

  const {orcamentoList} = useContext(OrcamentoContext)

  const [orcamento, setOrcamento] = orcamentoList;
  const [search, setSearch] = useState('');
  const [materials, setMaterials] = useState([]);
  const [qtd, setQtd] = useState(1);

  const { data: materialsList, isFetching } = useGetMaterialsQuery();

  useEffect(() => { 
    const filteredData = materialsList?.material.filter((result) => 
    result.cableName.toLowerCase().includes(search.toLowerCase()));
    setMaterials(filteredData);
  }, [materialsList, search])

  const handleSaveMaterialToOrcamento = (materialName, qtd) => {
    console.log(materialName, qtd)
    setQtd(1)
  }

  return (
    <div>
      <ContentBudget>
      <HeaderC />
        <ShopListContent>
          <SpanContent>
            <Span>{qtd}</Span>
          </SpanContent>
          <Button>Lista de Compras</Button>
        </ShopListContent>
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
              <CardDescription>
                <DescriptionTxt><b>Cor Primaria:</b></DescriptionTxt><DescriptionTxt><b>{material.primaryColor}</b></DescriptionTxt>
              </CardDescription>
              <CardDescription>
                <DescriptionTxt><b>Cores:</b></DescriptionTxt><DescriptionTxt><b>{material.color}</b></DescriptionTxt>
              </CardDescription>
              <CardDescription>
                <DescriptionTxt><b>Quantidade:</b></DescriptionTxt><DescriptionTxt><InputQtd type="number" id="quantity" value={qtd} name="quantity" min="1" max="9999999" onChange={(e) => setQtd(e.target.value)} /></DescriptionTxt>
              </CardDescription>
              <ContentBtn>
                <Button onClick={() => handleSaveMaterialToOrcamento(material.cableName, qtd)}>Adicionar</Button>
                <Button>Apagar Item</Button>
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