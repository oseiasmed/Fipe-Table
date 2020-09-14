<template>
  <div id="app">
    <div>
      <b-nav class="shadow bg-color">
        <b-nav-item class="ml-3 activated">Fip Table</b-nav-item>
      </b-nav>
    </div>
    <MarkTable />
    <TemplateTable/>
    <Footer/>
    </div>
</template>
<script>
import MarkTable from "./components/MarkTable";
import TemplateTable from "./components/TemplateTable";
import Footer from "./components/Footer";

export default {
  data(){
    return{
    }
  },
 methods: {
    formatPrice(value) {
        let val = (value/1).toFixed(0).replace("-")
        return val.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ",")
    }
},
  components: {
    MarkTable,
    TemplateTable,
    Footer,
  },
};
</script>
<style>
</style>
