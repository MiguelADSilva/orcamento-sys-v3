import React, { useState, useContext } from 'react'
import { HeaderC } from '../../components/indexComponents'
import { useGetOrcamentosQuery } from '../../services/orcamentoAPI'

import { Content, HeaderContent ,Input } from './SendBudgetStyle'

const SendBudgetPage = () => {

    const { data: budgetList, isFetching } = useGetOrcamentosQuery();
    const [moreToPay, setMoreToPay] = useState(0)

    if(isFetching) return 'Loading...';

  return (
    <Content>
        <HeaderC />
        <HeaderContent>
            <h3>Preço da Mão de Obra + Alimentação + Transporte</h3><Input placeholder="Preço da Mão de Obra + Alimentação + Transporte" onChange={(e) => setMoreToPay(e.target.value)} />
        </HeaderContent>
        <table>
            <thead>
                <tr>
                    <td>Nome do Item</td>
                    <td>Qtd/Metros</td>
                    <td>Preço</td>
                </tr>
            </thead>
            {Object.entries(budgetList).map(([id, item]) => {
                <div key={id}>
                    <p>{item.totalPrice}</p>
                </div>
            })}
        </table>
    </Content>
  )
}

export default SendBudgetPage