import React, { useState, createContext } from 'react';

export const OrcamentoContext = createContext();

export const OrcamentoProvider = (props) => {
    const [orcamento, setOrcamento] = useState([]);

    return (
        <OrcamentoContext.Provider
            value={{
                orcamentoList: [orcamento, setOrcamento]
            }}
            contained="true"
        >
            {props.children}
        </OrcamentoContext.Provider>
    )
}