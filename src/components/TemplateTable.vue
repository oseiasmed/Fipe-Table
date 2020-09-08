<template>
 <b-card-group class="new-container mt-5">
      <b-card class="shadow colorize" header="Modelos" header-tag="header">
        <table id="fip" class="mt-3">
          <tr>
            <th class="gray-color">Modelo</th>
            <th></th>
          </tr>
          <tr v-for="modelo in modelos" :key="modelo.nome">
           <td class="gray-color" style="width:50%"> {{ modelo.nome }}</td>
            <td style="width:50%"></td>
          </tr>
        </table>
      </b-card>
  </b-card-group>
</template>
<script>
import axios from "axios";

export default {
  name: "TemplateTable",
  data() {
    return {
      modelos: [],
    
    };
  },
  mounted() {

    this.getModels();
  },

  methods: {
    getModels: function() {

      var id = this.$route.params.id
      axios.get(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${id}/modelos`)
        .then((res) => {
        this.modelos = res.data;
        });
    },
  },
};
</script>
