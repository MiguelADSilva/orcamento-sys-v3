import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const createRequest = (url) => ({ url, mode: "cors" });

export const orcamentoAPI = createApi({ 
    reducerPath: 'orcamentoAPI',
    baseQuery: fetchBaseQuery({baseUrl: "https://ele-sys.herokuapp.com"}),
    endpoints: (builder) => ({
        getOrcamentos: builder.query({
            query: () => "/orcamento/getOrcamento/"
        })
    })
});

export const {
    useGetOrcamentosQuery,
} = orcamentoAPI;

// createRequest(`orcamento/getOrcamento/`)