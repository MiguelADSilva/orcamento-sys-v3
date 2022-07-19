import React, {useState} from 'react'
import { useAddMaterialsMutation } from '../../services/orcamentoAPI';
import { ToastContainer, toast } from "react-toastify";
import { HeaderC, FooterC } from '../../components/indexComponents'

import "react-toastify/dist/ReactToastify.css";

import { 
  Content, 
  Input, 
  FooterContent, 
  DropDownContent, 
  DropDownStyled, 
  TextFieldStyled, 
  ContentPrice,
  BtnStyle } from './AddMaterialStyles';

const AddMaterial = () => {
  const [nameMaterial, setNameMaterial] = useState('');
  const [arts, setArts] = useState('');
  const [serie, setSerie] = useState('');
  const [primaryColor, setPrimaryColor] = useState('');
  const [type, setType] = useState('');
  const [secondaryColor, setSecondaryColor] = useState('');
  const [metrosQtd, setMetrosQtd] = useState('');
  const [price, setPrice] = useState('');
  const [material, setMaterial] = useState({});
  const [ addMaterials, result ] = useAddMaterialsMutation();

  function alertError() {
    toast.error("💩 Por favor, envie o material de novo", {
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
    toast.success("❤️ Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const updateArts = (event, values) => {
    setArts(values.title);
  };
  const updateType = (event, values) => {
    setType(values.title);
  };
  const updateSerie = (event, values) => {
    setSerie(values.title);
  };
  const updatePrimaryColor = (event, values) => {
    setPrimaryColor(values.title);
  };

  const saveValues = async () => { 
    console.log(arts, serie, primaryColor, type);

    const add = {
      cableName: nameMaterial,
      type: arts,
      cableType: type,
      meters: metrosQtd,
      price: price,
      serie: serie,
      primaryColor: primaryColor,
      color: secondaryColor,
      imageUR: ''
    }
    await addMaterials(add);
  }

  if(result.isSuccess === true) {
    window.location.reload();
    alertSuccess();
  } else if(result.isError === true) { 
    alertError();
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
      <HeaderC />
      <Content>
        <Input placeholder="Nome do Material" onChange={(e) => setNameMaterial(e.target.value)}/>
          <DropDownContent>
            <DropDownStyled 
              id="combo-box-demo"
              options={artsAtConstruction} 
              size="medium"
              getOptionLabel={(option) => option.title} 
              onChange={updateArts} 
              renderInput={(params) => <TextFieldStyled {...params} label="Selecione a Arte" variant="outlined" />}  
            /> 
          </DropDownContent>
          <DropDownContent>
            <DropDownStyled 
              id="combo-box-demo"
              options={serieOptions} 
              size="medium"
              getOptionLabel={(option) => option.title} 
              onChange={updateSerie} 
              renderInput={(params) => <TextFieldStyled {...params} label="Selecione a Serie" variant="outlined" />}  
            /> 
          </DropDownContent>
          <DropDownContent>
            <DropDownStyled 
              id="combo-box-demo"
              options={primaryColorOptions} 
              size="medium"
              getOptionLabel={(option) => option.title} 
              onChange={updatePrimaryColor} 
              renderInput={(params) => <TextFieldStyled {...params} label="Selecione a Cor Primaria" variant="outlined" />}  
            /> 
          </DropDownContent>
          <DropDownContent>
            <DropDownStyled 
              id="combo-box-demo"
              options={typeOptions} 
              size="medium"
              getOptionLabel={(option) => option.title} 
              onChange={updateType} 
              renderInput={(params) => <TextFieldStyled {...params} label="Selecione o Tipo de Material" variant="outlined" />}  
            /> 
          </DropDownContent>
        <Input placeholder="Metros/Quantidade" onChange={(e) => setMetrosQtd(e.target.value)} />
        <Input placeholder="Cor Material" onChange={(e) => setSecondaryColor(e.target.value)} />
        <Input placeholder="Preço" onChange={(e) => setPrice(e.target.value)}/>
        <BtnStyle onClick={saveValues}>Adicionar</BtnStyle>
      </Content>
      <FooterContent>
        <FooterC /> 
      </FooterContent>
    </div>
  )
}

export default AddMaterial


const artsAtConstruction = [
  { title: "Eletricista" },
  { title: "Pedreiro" },
  { title: "Serralheiro" },
  { title: "Picheleiro" },
];

const serieOptions = [
  { title: "" },
  { title: "Mec21" },
  { title: "Logus90" },
  { title: "Sirius70" },
  { title: "Apolo 5000" },
  { title: "Quadro45" },
  { title: "Jazz" },
  { title: "2600" },
  { title: "3700" },
  { title: "Estanque48" },
  { title: "47" },
  { title: "Burótica" },
  { title: "Iluminação" }
];

const primaryColorOptions = [
  { title: "" },
  { title: "Base (Logus90)" },
  { title: "Aquarella (Logus90)" },
  { title: "Animato (Logus90)" },
  { title: "Crystal (Logus90)" },
  { title: "Metallo (Logus90)" },
  { title: "Arbore (Logus90)" },
  { title: "Petra (Logus90)" },
  { title: "Standard (Apolo 5000)" },
  { title: "Mate (Apolo 5000)" },
  { title: "Metalizada (Apolo 5000)" },
  { title: "Classic (Sirius70)" },
  { title: "Ambiente (Sirius70)" },
  { title: "Metalizada (Sirius70)" },
  { title: "MAdeira (Sirius70)" },
  { title: "Siza Vieira (Quadro45)" },
  { title: "Quadro45 (Quadro45)" },
];

const typeOptions = [
  { title: "Livres Halogenio" },
  { title: "Cabos Cobre" },
  { title: "Cabos Alarme" },
  { title: "Dados e Voz" },
  { title: "Cabos Coxiais" },
  { title: "Aros" },
  { title: "Tomadas"},
  { title: "Interruptores"},
  { title: "Comutadores"},
  { title: "Teclas"},
  { title: "Centros"},
  { title: "Inversores"},
  { title: "Botões"},
  { title: "Termostato"},
  { title: "Detetores"},
  { title: "Comandos"},
  { title: "Reguladores"},
  { title: "Conectores"},
  { title: "Acoplador"},
  { title: "Roseta"},
  { title: "Sinalizador"},
  { title: "Suporte"},
  { title: "Besouro"},
  { title: "Caixa"},
  { title: "Relé"},
  { title: "Emissor"},
  { title: "Tubos Rigidos"},
  { title: "Tubos Flexíveis"},
  { title: "Calhas"},
  { title: "Transformadores"},
  { title: "Iluminação"},
  { title: "Tampa"}
];