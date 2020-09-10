<template>
 <b-card-group class="new-container">
      <b-card class="shadow colorize" header="Modelos" header-tag="header"  v-if="showTable">
        <table id="fip" class="mt-3">
          <tr>
            <th class="gray-color">Modelo</th>
            <th></th>
          </tr>
          <tr v-for="modelo in modelos" :key="modelo.nome">
           <td class="gray-color"> {{ modelo.nome }}</td>
            <td class="td-size"></td>
          </tr>
        </table>
      </b-card>
  </b-card-group>
</template>
<script>
import axios from "axios";
import bus from "../services/bus";
export default {
  name: "TemplateTable",
  data() {
    return {
      modelos: [],
      showTable: false,
    };
  },
  created() {
    bus.$on('open', function() {
      this.showTable = true;
    });
  },
  mounted() {
    this.getModels();
  },

  methods: {
    getModels: function() {
      // var id = this.$route.params.id;
      axios
        .get(`https://parallelum.com.br/fipe/api/v1/carros/marcas/21/modelos`)
        .then((res) => {
          this.modelos = res.data;
        });
    },
  },
};
</script>
