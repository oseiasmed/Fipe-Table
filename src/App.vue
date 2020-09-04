<template>
  <div id="app">
    <div>
      <b-nav class="shadow bg-color">
        <b-nav-item class="ml-3 activated">Navita</b-nav-item>
      </b-nav>
    </div>
    <h3 class="mt-3 mb-3 ml-4">Veículos</h3>
    <b-card-group class="new-container">
      <b-card class="shadow colorize" header="Marcas" header-tag="header">
        <table id="fip" class="mt-3">
          <tr>
            <th class="gray-color">Marca</th>
            <th></th>
          </tr>
          <tr v-for="marca in marcas" :key="marca.nome">
            <td class="gray-color" style="width:50%">
              {{ marca.nome }}
            </td>
            <td>
              <a
                :href="`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marca.codigo}/modelos`"
                @click.prevent="changeTable()"
                >Ver modelos</a
              >
            </td>
          </tr>
        </table>
      </b-card>
    </b-card-group>
    <b-card-group class="new-container mt-5" v-if="showTable">
      <b-card class="shadow colorize" header="Modelos" header-tag="header">
        <table id="fip" class="mt-3">
          <tr>
            <th class="gray-color">Modelo</th>
            <th></th>
          </tr>
          <tr v-for="modelo in modelos" :key="modelo.nome">
            <td class="gray-color">
              {{ modelo.nome }}
            </td>
          </tr>
        </table>
      </b-card>
    </b-card-group>
    <div class="footer pt-4 bg-color text-center">
      <p>Copyright @ Navita 2020</p>
    </div>
  </div>
</template>
<script>
import Marcas from "./services/fipTable";
import Modelos from "./services/fipTable";

export default {
  data() {
    return {
      marcas: [],
      modelos: [],
      showTable: false,
      codigo:''
    };
  },

  methods: {
    changeTable() {
      this.showTable = true;
      console.log(this.modelos);
    },
  },
  mounted() {
    Marcas.listarMarcas("/marcas").then((res) => {
      this.marcas = res.data;
    });
    Modelos.listarModelos(`/modelos`).then((res) => {
      this.modelos = res.data
    });
  },
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}
.new-container {
  width: 96%;
  margin-right: 2%;
  margin-left: 2%;
}
a:active {
  color: #1cc88a !important;
}

.card-header {
  background-color: #f8f9fc !important;
}

#app h1 {
  text-align: center;
  margin: 50px;
}

#fip {
  border-collapse: collapse;
  width: 100%;
}

#fip td,
#fip th {
  border-bottom: 1px solid #e3e6f0;
  padding: 8px;
  font-weight: lighter;
}

#fip th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  border-top: 1px solid #e3e6f0;
}
.footer p {
  font-size: 1rem;
}
.bg-color {
  background-color: #ffffff;
  color: #5a5c69;
}
.shadow {
  box-shadow: rgba(58, 59, 69, 0.15);
}
body {
  background-color: #f7f8fb !important;
}
.colorize {
  color: #4e73df;
  font-weight: 700;
}
.gray-color {
  color: #5a5c69;
}
.nav-link {
  color: #1cc88a !important;
}
</style>
