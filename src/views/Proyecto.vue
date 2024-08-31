<script>
import { markRaw } from 'vue';
import sistema_geolocalizacion from '@/views/Proyectos/sistema_geolocalizacion.vue'
import reclutamiento_personal from '@/views/Proyectos/reclutamiento_personal.vue'
import clone_cinestar from '@/views/Proyectos/clone_cinestar.vue'

export default {
    data(){
        return{
            lista_enlaces_proyectos: {
                "1":  markRaw(sistema_geolocalizacion),
                "2":  markRaw(reclutamiento_personal),
                "3":  markRaw(clone_cinestar),
            }
        }
    },
    mounted() {
        
    },
    computed: {
        componenteActual(){
            return this.lista_enlaces_proyectos[this.id_proyecto];
        },
    },
    methods: {
        
    },
    props: {
        id_proyecto: { type: String, required: true }
    },
}
</script>


<template>
     <component :is="componenteActual"></component>
</template>