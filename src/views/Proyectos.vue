<script>
import Contruyamos from "@/components/Contruyamos.vue";
import lista_experiencia from "../assets/Json/experiencia.json"
import { formatTexto } from "@/assets/js/utils";

export default {
    data() {
        return {
            lista_proyectos: lista_experiencia.proyectos,
        }
    },
    methods:{
        formattedDescripcion(texto) {
            return formatTexto(texto);
        },
        pasarMinusculaSlash(texto){
             // Normalizar el texto para descomponer caracteres acentuados
            let textoNormalizado = texto.normalize('NFD');
            // Eliminar tildes y caracteres especiales usando una expresión regular
            let textoSinTildes = textoNormalizado.replace(/[\u0300-\u036f]/g, '');
            // Reemplazar caracteres especiales restantes y espacios con guiones
            let textoUrl = textoSinTildes
                .replace(/ñ/g, 'n')       // Reemplazar ñ con n
                .replace(/[^a-zA-Z0-9]+/g, '-') // Reemplazar cualquier carácter no alfanumérico (espacios y signos de puntuación) con guiones
                .toLowerCase()            // Convertir todo a minúsculas
                .replace(/^-+|-+$/g, ''); // Eliminar guiones al inicio y al final
            return textoUrl;
        }
    },
    components: {
        Contruyamos
    }
}
</script>
<template>

    <!-- Projects Section-->
    <section class="py-5">
        <div class="container px-5 mb-5">
            <div class="text-center mb-5">
                <h1 class="display-5 fw-bolder mb-0"><span class="text-gradient d-inline">Proyectos</span></h1>
            </div>
            <div class="row gx-5 justify-content-center">
                <div class="col-lg-11 col-xl-11 col-xxl-11">
                    <!-- Project Card 1-->
                    <div class="card overflow-hidden shadow rounded-4 border-0 mb-5" v-for="(item, indice) in lista_proyectos" :key="indice">
                        <div class="card-body p-0">
                            <div class="row">
                                <div class="col-12 col-lg-6 col-sm-12 col-xs-12 p-5">
                                    <RouterLink :to="'/proyecto/' + (item.id)" class="text-decoration-none">
                                        <h4 class="fw-bolder">{{ item.titulo }}
                                            <i class="bi-link-45deg"></i>
                                        </h4>
                                    </RouterLink> 
                                    <p v-html="formattedDescripcion(item.descripcion)" ></p>
                                </div>
                                <div class="col-12 col-lg-6 col-sm-12 col-xs-12">
                                    <!-- CARRUSEL -->
                                    <div :id="'carouselExample' + indice" class="carousel carousel-dark slide">
                                        <div class="carousel-inner">

                                            <div :class="'carousel-item ' + (key == '' ? 'active' : '')"
                                                v-for="(imagenes, key) in item.imagen" :key="key">
                                                <img :src="imagenes" class="d-block w-100" alt="...">
                                            </div>


                                        </div>
                                        <button class="carousel-control-prev" type="button"
                                            :data-bs-target="'#carouselExample' + indice" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Antes</span>
                                        </button>
                                        <button class="carousel-control-next" type="button"
                                            :data-bs-target="'#carouselExample' + indice" data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Después</span>
                                        </button>
                                    </div>
                                    <!-- FIN CARRUSEL -->
                                </div>
                                <!-- <img class="img-fluid" src="https://dummyimage.com/300x400/343a40/6c757d" alt="..." /> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Call to action section-->
    
    <Contruyamos></Contruyamos>
</template>