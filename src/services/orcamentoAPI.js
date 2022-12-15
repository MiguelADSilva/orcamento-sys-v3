import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const createRequest = (url) => ({ url, mode: "cors", Headers: { "Content-Type": "application/json" }});

export const orcamentoAPI = createApi({ 
    reducerPath: 'orcamentoAPI',
    baseQuery: fetchBaseQuery({baseUrl: "https://ele-sys-api.onrender.com"}),
    endpoints: (builder) => ({
        getOrcamentos: builder.query({
            query: () => "/orcamento/getOrcamento/"
        }),
        getMaterials: builder.query({ 
            query: () => "/material/getMaterials/"
        }),
        addMaterials: builder.mutation({
            query: (materials) => ({
                url: `/material/createMaterial/`,
                method: "POST",
                body: materials
            })
        }),
        addOrcamento: builder.mutation({ 
            query: (orcamento) => ({ 
                url: `/orcamento/saveOrcamento/`,
                method: "POST",
                body: orcamento
             })
        }),
        deleteMaterial: builder.mutation({
            query: (cableName) => ({ 
               url: `/material/deleteMaterial/${cableName}`,
               method: "DELETE", 
            }),
        }),
        deleteOrcamento: builder.mutation({
            query: (orcamentoName) => ({ 
               url: `/orcamento/deleteOrcamento/${orcamentoName}`,
               method: "DELETE", 
            }),
        })
    })
});

export const {
    useGetOrcamentosQuery,
    useGetMaterialsQuery,
    useAddMaterialsMutation,
    useAddOrcamentoMutation,
    useDeleteMaterialMutation,
    useDeleteOrcamentoMutation
} = orcamentoAPI;

// createRequest(`orcamento/getOrcamento/`)