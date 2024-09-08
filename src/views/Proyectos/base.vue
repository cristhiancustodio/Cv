<script setup>

import { defineProps } from 'vue';

import Carrusel from '@/components/Carrusel.vue';
import Contruyamos from "@/components/Contruyamos.vue";

const props = defineProps({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true,
    },
    lista_imagenes:{
        type: Array,
    },
    img_tec_usadas:{
        type: Array,
        
    }
});


</script>

<template>
    <section class="py-5">
        <div class="container px-5 mb-5">
            <div class="text-center mb-5">
                <h1 class="display-5 fw-bolder mb-0">
                    <span class="text-gradient d-inline">{{ titulo }}</span>
                </h1>
            </div>
            <div class="row">
                <div class="col-12 col-lg-6">
                    <h3 class="text-gradient">Descripción</h3>
                </div>
                <div class="col-12 col-lg-6">
                    <p class="lead fw-light mb-4" v-html="descripcion"> </p>
                </div>
            </div>
            <div class="row">
                <div class="col-12  col-lg-6">
                    <h3 class="">
                        <span class="text-gradient d-inline">Tecnologías usadas</span>
                    </h3>
                </div>
                <div class="col-12 col-lg-6 row">
                    <div class="col-6 col-sm-4 col-lg-4" v-for="svg in img_tec_usadas">
                        <div class="p-3">
                            <div class="row text-center">
                                <div class="col-12"><img :src="svg.img" alt="" height="50">
                                </div>
                                <div class="col-12">{{ svg.descripcion }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-5 mb-5">
                <div class="col-12 text-center fw-bolder">Imagenes referenciales</div>
            </div>
            <div class="row">
                <Carrusel :lista_imagenes="lista_imagenes" />
            </div>

        </div>
    </section>

    <Contruyamos></Contruyamos>


</template>