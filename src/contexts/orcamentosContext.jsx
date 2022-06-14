import React, { useState, createContext } from 'react';

export const OrcamentoContext = createContext();

export const OrcamentoProvider = (props) => {
    const [orcamento, setOrcamento] = useState([]);
    const [totalIncoming, setTotalIncoming] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    return (
        <OrcamentoContext.Provider
            value={{
                orcamentoList: [orcamento, setOrcamento],
                Incoming: [totalIncoming, setTotalIncoming],
                TotalValue: [totalPrice, setTotalPrice]
            }}
            contained="true"
        >
            {props.children}
        </OrcamentoContext.Provider>
    )
}