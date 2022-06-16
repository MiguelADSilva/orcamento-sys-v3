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
  SpanContent,
  StyledLink } from './CreateBudgetStyles'


const CreateBudget = () => {

  const {orcamentoList, Incoming, TotalValue} = useContext(OrcamentoContext)

  const [orcamento, setOrcamento] = orcamentoList;
  const [totalIncoming, setTotalIncoming] = Incoming;
  const [totalPrice, setTotalPrice] = TotalValue;
  const [search, setSearch] = useState('');
  const [materials, setMaterials] = useState([]);
  const [qtd, setQtd] = useState(1);

  const { data: materialsList, isFetching } = useGetMaterialsQuery();

  useEffect(() => { 
    const filteredData = materialsList?.material.filter((result) => 
    result.cableName.toLowerCase().includes(search.toLowerCase()));
    setMaterials(filteredData);
  }, [materialsList, search])

  const handleSaveMaterialToOrcamento = (id, materialName, qtd, price, materialType, type, serie ,color, secondColor) => {
    setQtd(1);
    setOrcamento([...orcamento, {
      cable_id: id,
      cable_Name: materialName,
      cable_Price: price,
      type_Cable: materialType,
      cable_Type: type,
      cable_Meters: qtd,
      cable_Serie: serie,
      cable_PrimaryColor: color,
      cable_Color: secondColor
    }])
    setTotalIncoming([...totalIncoming, qtd * price])
    console.log(totalIncoming)
  }

  const handleClickToCalculate = () => {
    let soma = 0;
    for (let i = 0; i < totalIncoming.length; i++){
      soma += parseInt(totalIncoming[i])
      setTotalPrice(soma);
    }
  }

  return (
    <div>
      <ContentBudget>
      <HeaderC />
        <ShopListContent>
          <SpanContent>
            <Span>{orcamento.length}</Span>
          </SpanContent>
          <StyledLink to="/detailBudget">
            <Button>Lista de Compras</Button>
          </StyledLink>
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
                <Button 
                  onClick={() => handleSaveMaterialToOrcamento(material._id, material.cableName, qtd, material.price, material.cableType, material.type, material.serie ,material.primaryColor, material.color)}>
                    Adicionar
                </Button>
                <Button onClick={handleClickToCalculate()}>Apagar Item</Button>
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