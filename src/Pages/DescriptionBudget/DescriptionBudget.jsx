import React, {useContext} from 'react';
import { OrcamentoContext } from '../../contexts/orcamentosContext';
import { HeaderC, FooterC } from '../../components/indexComponents';
import {
    Content,
    CardsContent,
    Cards,
    CardTitle,
    Title,
    CardDescription,
    PriceTxt,
    FooterContent
} from './DescriptionBudgetStyles'

const DescriptionBudget = () => {

    const { OrcamentoTitle, OrcamentoPrice, OrcamentoItems } = useContext(OrcamentoContext);
    const [orcamentoTitle, setOrcamentoTitle] = OrcamentoTitle;
    const [orcamentoPrice, setOrcamentoPrice] = OrcamentoPrice;
    const [orcamentoItems, setOrcamentoItems] = OrcamentoItems;

  return ( 
    <Content>
        <HeaderC />
        <h1>{orcamentoTitle}</h1>
        <h1>Total a Pagar: {orcamentoPrice}€</h1>
        {console.log(orcamentoItems)}
        <CardsContent>
            {Object.entries(orcamentoItems).map(([id, item]) => (
                <Cards key={id}>
                    <CardTitle>
                        <Title>{item.cable_Name}</Title>
                    </CardTitle>
                    <CardDescription>
                      <PriceTxt>Serie:</PriceTxt><PriceTxt>{item.cable_Serie}</PriceTxt>
                  </CardDescription>
                  <CardDescription>
                      <PriceTxt>Modelo de Cor:</PriceTxt><PriceTxt>{item.cable_primaryColor}</PriceTxt>
                  </CardDescription>
                  <CardDescription>
                      <PriceTxt>Cores Disponiveis:</PriceTxt><PriceTxt>{item.cable_color}</PriceTxt>
                  </CardDescription>
                  <CardDescription>
                      <PriceTxt>Metros/Quantidade:</PriceTxt><PriceTxt>{item.cable_Meters}</PriceTxt>
                  </CardDescription>
                  <CardDescription>
                      <PriceTxt>Material:</PriceTxt><PriceTxt>{item.type_Cable}</PriceTxt>
                  </CardDescription>
                  <CardDescription>
                      <PriceTxt>Preço:</PriceTxt><PriceTxt>{item.cable_Price}€</PriceTxt>
                  </CardDescription>
                </Cards>
            ))}
        </CardsContent>
        <FooterContent>
            <FooterC /> 
        </FooterContent>
    </Content>
  )
}

export default DescriptionBudget;