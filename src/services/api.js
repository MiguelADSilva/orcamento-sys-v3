import axios from 'axios';

const baseUrl = "https://ele-sys.herokuapp.com"

export const deleteMaterial = async (cableName) => {
    try {
        const res = await axios.delete(`${baseUrl}/material/deleteMaterial/${cableName}`)
        return res.message;
    } catch (error) {
        return error;
    }
}

export const deleteOrcamento = async (orcamentoName) => {
    try {
        const res = await axios.delete(`${baseUrl}/orcamento/deleteOrcamento/${orcamentoName}`);
        return res.message;
    } catch (error) {
        return error;
    }
}