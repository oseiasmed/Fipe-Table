<template>
<div>
 <h3 class="mt-3 mb-3 ml-4">Veículos</h3>
    <b-card-group class="new-container">
      <b-card class="shadow colorize" header="Marcas" header-tag="header">
        <table id="fip" class="mt-3">
          <tr>
            <th class="gray-color">Marca</th>
            <th></th>
          </tr>
          <tr v-for="marca in marcas" :key="marca.nome">
            <td class="gray-color" style="width:50%"> {{ marca.nome }}</td>
            <td style="width:50%">
            <router-link :to="{name:'models', params:{id:$route.params.id}}">Ver modelos</router-link>
            </td>
            </tr>
        </table>
      </b-card>
    </b-card-group>
</div>
</template>
<script>
import axios from "axios";
export default {
  name: "MarkTable",
  data() {
    return {
      marcas: [],
      showTable: false,
    };
  },
  mounted() {
    this.getMarks();
  },
  methods: {
    getMarks: function() {
      axios
        .get(`https://parallelum.com.br/fipe/api/v1/carros/marcas`)
        .then((res) => {
          this.marcas = res.data;
        });
    },
  },
};
</script>
