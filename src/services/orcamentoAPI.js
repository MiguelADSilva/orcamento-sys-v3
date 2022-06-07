import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const createRequest = (url) => ({ url, mode: "cors", Headers: { "Content-Type": "application/json" }});

export const orcamentoAPI = createApi({ 
    reducerPath: 'orcamentoAPI',
    baseQuery: fetchBaseQuery({baseUrl: "https://ele-sys.herokuapp.com"}),
    endpoints: (builder) => ({
        getOrcamentos: builder.query({
            query: () => "/orcamento/getOrcamento/"
        }),
        addMaterials: builder.mutation({
            query: (materials) => ({
                url: `/material/createMaterial/`,
                method: "POST",
                body: materials
            })
        })
    })
});

export const {
    useGetOrcamentosQuery,
    useAddMaterialsMutation
} = orcamentoAPI;

// createRequest(`orcamento/getOrcamento/`)