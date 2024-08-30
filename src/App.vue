<script setup>
import Footer from './views/layouts/Footer.vue';
import Navegador from './views/layouts/Navegador.vue';
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
	<!-- LA LISTA DE LOS NAVEGADORES -->
	<Navegador />
	<!-- AQUI SE VERAN LAS RUTAS -->
	<RouterView />
	<!-- EL PIE DE PAGINA -->
	<Footer />
</template>
