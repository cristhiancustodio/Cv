<script >
import Carrusel from '@/components/Carrusel.vue';

export default {
    data(){
        return{
            lista_imagenes : [
                "/img/asistencia1.png",
                "/img/asistencia2.png",
            ],
            img_tec_usadas :[
                {img:"/img/iconos_svg/codeigniter.svg",descripcion:'Codeigniter 4'},
                {img:"/img/iconos_svg/mysql.svg",descripcion:'MySql'},
                {img:"/img/iconos_svg/bootstrap.svg",descripcion:'Bootstrap'},
                {img:"/img/iconos_svg/php.svg",descripcion:'PHP'},
                {img:"/img/iconos_svg/vue.svg",descripcion:'Vue 3'},

            ]
        }
    },
    mounted() {
        
    },
    methods: {
        
    },
    props: {

    },
    components:{
        Carrusel
    }
}

</script>

<template>
    <section class="py-5">
        <div class="container px-5 mb-5">
            <div class="text-center mb-5">
                <h1 class="display-5 fw-bolder mb-0">
                    <span class="text-gradient d-inline">Sistema de asistencias con geolocalización</span>
                </h1>
            </div>
            <div class="row">
                <div class="col-12 col-lg-6">
                    <h3 class="text-gradient">Descripción</h3>
                </div>
                <div class="col-12 col-lg-6">
                    <p class="lead fw-light mb-4">Este sistema tuvo la finalidad de registrar la ubicacion de una persona y marcar su asistencia en el lugar que se le habia asignado, si la persona no estaba dentro del rango cerca a la ubicación, este no podia marcar.
                    <br>
                    Asi que se hizo una vista donde se muestra los dias asisticos, la hora entrada, salida y cuanto tiempo de tardanza ha tenido la persona responsable.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-lg-6">
                    <h3 class="">
                        <span class="text-gradient d-inline">Tecnologías usadas</span>
                    </h3>
                </div>
                <div class="col-12 col-lg-6 row">
                    <div class="col-4 col-lg-4" v-for="svg in img_tec_usadas">
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
            <div class="row m-5">
                <div class="col text-center fw-bolder">Imagenes referenciales</div>
            </div>
            <div class="row mb-5 shadow">
                <Carrusel :lista_imagenes="lista_imagenes"/>
            </div>

        </div>
    </section>
</template>