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
            <td class="gray-color"> {{ marca.nome }}</td>
            <td class="td-size">
            <router-link :to="{name:'models', params:{id:$route.params.id}}"><a @click="openSecondTable()">Ver modelos</a></router-link>
            </td>
            </tr>
        </table>
      </b-card>
    </b-card-group>
</div>
</template>
<script>
import axios from "axios";
import bus from "../services/bus";
export default {
  data() {
    return {
      marcas: [],
    };
  },
  mounted() {
    this.getMarks();
  },
  methods: {
    openSecondTable() {
      bus.$emit("open");
    },
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
