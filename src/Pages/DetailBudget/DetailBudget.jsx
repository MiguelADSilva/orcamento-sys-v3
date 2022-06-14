import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";

import { OrcamentoContext } from '../../contexts/orcamentosContext'
import { useAddOrcamentoMutation } from '../../services/orcamentoAPI';

import { HeaderC, FooterC } from '../../components/indexComponents';

import {
  HeaderContent,
  TotalPrice,
  ContentBudget,
  CardsContent,
  Cards,
  CardTitle,
  Title,
  CardDescription,
  DescriptionTxt,
  Input,
  FooterContent,
  Button,
  ShopListContent
} from './DetailBudgetStyle'

const DetailBudget = () => {

  const {orcamentoList, TotalValue} = useContext(OrcamentoContext)
  const [orcamento, setOrcamento] = orcamentoList;
  const [totalPrice, setTotalPrice] = TotalValue;
  const [addOrcamento, result] = useAddOrcamentoMutation();

  const [saveOrcamento, setSaveOrcamento] = useState([]);
  const [nameOrcamento, setNameOrcamento] = useState(''); 

  const onHandleClickToSave = async() => {
    if(nameOrcamento === '') {
      toast.error('Preencha o nome do orçamento!')
    }else{ 
      setSaveOrcamento({
        orcamentoName: nameOrcamento,
        totalPrice: totalPrice,
        items: orcamento
      })
      await addOrcamento(saveOrcamento);
    }
  };

  if(result.isSuccess === true) {
    window.location.reload();
    alertSuccess();
  } else if(result.isError === true) { 
    alertError();
  }

  function alertError() {
    toast.error("💩 Algo de Errado não esta certo", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function alertSuccess() {
    toast.success("Orçamento Guardado", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }



  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ContentBudget>
        <HeaderC />
        <HeaderContent>
          <Input placeholder="Nome do Orçamento" onChange={(e) => setNameOrcamento(e.target.value)} />
          <TotalPrice>Preço total: {totalPrice}€</TotalPrice>
        </HeaderContent>
        <ShopListContent>
          <Button onClick={onHandleClickToSave}>Guardar</Button>
        </ShopListContent>
        <CardsContent>
          {
            orcamento.map((item, index) => ( 
              <Cards key={index}>
                <CardTitle>
                  <Title>{item.cable_Name}</Title>
                </CardTitle>
                <CardDescription>
                  <DescriptionTxt>Serie:</DescriptionTxt><DescriptionTxt>{item.cable_Serie}</DescriptionTxt>
                </CardDescription>
                <CardDescription>
                  <DescriptionTxt>Cor:</DescriptionTxt><DescriptionTxt>{item.cable_PrimaryColor}</DescriptionTxt>
                </CardDescription>
                <CardDescription>
                  <DescriptionTxt>Cores Secundarias:</DescriptionTxt><DescriptionTxt>{item.cable_Color}</DescriptionTxt>
                </CardDescription>
                <CardDescription>
                  <DescriptionTxt>Tipo de Material:</DescriptionTxt><DescriptionTxt>{item.type_Cable}</DescriptionTxt>
                </CardDescription>
                <CardDescription>
                  <DescriptionTxt>Metros/Qtd:</DescriptionTxt><DescriptionTxt>{item.cable_Meters}</DescriptionTxt>
                </CardDescription>
                <CardDescription>
                  <DescriptionTxt>Preço:</DescriptionTxt><DescriptionTxt><b>{item.cable_Price}</b></DescriptionTxt>
                </CardDescription>
              </Cards>
            ))
          }
        </CardsContent>
        <FooterContent>
          <FooterC />  
        </FooterContent>
      </ContentBudget>
    </div>
  )
}

export default DetailBudget;