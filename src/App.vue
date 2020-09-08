<template>
  <div id="app">
    <div>
      <b-nav class="shadow bg-color">
        <b-nav-item class="ml-3 activated">Navita</b-nav-item>
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
  components: {
    MarkTable,
    TemplateTable,
    Footer,
  },
};
</script>
<style>
</style>
