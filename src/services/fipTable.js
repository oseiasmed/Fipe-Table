import { http } from "./config";

export default {
  listarMarcas: () => {
    return http.get("marcas");
  },

  listarModelos: () => {
    return http.get(`/modelos`);
  },
};
