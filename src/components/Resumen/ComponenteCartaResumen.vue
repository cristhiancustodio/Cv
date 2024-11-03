
<script>
export default {
    data(){
        return{

        }
    },
    props: {
        titulo_cartilla:{ type: String, required: true },
        listado: { type: Array, required: true },
        icono_cabecera: { type: String, required: false }
    }
}
</script>
<template>
    <div class="mb-5">
        <div class="d-flex align-items-center mb-4">
            <div
                class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                <i :class="icono_cabecera"></i>
            </div>
            <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">{{ titulo_cartilla }}</span></h3>
        </div>
        <div class="row">
            <div class="col-md-3 mt-4" v-for="(item, indice) in listado" :key="indice">
                <div class="bg-light rounded-4 p-3">
                    <div class="row text-center">
                        <div class="col-12">
                            <img :src="'/img/iconos_svg/' + item.icono" alt="" height="50" :title="item._titulo || item._titulo">
                        </div>
                        <div class="col-12" v-if="item.estudiando == true">
                            <span class="text-danger fs-4" title="Actualmente estudiando">*</span>
                        </div>
                        <div class="col-12">
                            {{ item.titulo }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
