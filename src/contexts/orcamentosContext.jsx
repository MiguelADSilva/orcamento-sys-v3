import React, { useState, createContext } from 'react';

export const OrcamentoContext = createContext();

export const OrcamentoProvider = (props) => {
    const [orcamento, setOrcamento] = useState([]);
    const [totalIncoming, setTotalIncoming] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [orcamentoTitle, setOrcamentoTitle] = useState('');
    const [orcamentoPrice, setOrcamentoPrice] = useState(0);
    const [orcamentoItems, setOrcamentoItems] = useState({});

    return (
        <OrcamentoContext.Provider
            value={{
                orcamentoList: [orcamento, setOrcamento],
                Incoming: [totalIncoming, setTotalIncoming],
                TotalValue: [totalPrice, setTotalPrice],
                OrcamentoTitle: [orcamentoTitle, setOrcamentoTitle],
                OrcamentoPrice: [orcamentoPrice, setOrcamentoPrice],
                OrcamentoItems: [orcamentoItems, setOrcamentoItems]

            }}
            contained="true"
        >
            {props.children}
        </OrcamentoContext.Provider>
    )
}