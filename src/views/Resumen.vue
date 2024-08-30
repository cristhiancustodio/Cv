<script>
import lenguajes_aprendidos from "../assets/Json/lenguajes_aprendidos.json";
import lista_habilidades from "../assets/Json/lista_habilidades_tec.json";
import lista_experiencia from "../assets/Json/experiencia.json"
import ComponenteCartaResumen from "@/components/Resumen/ComponenteCartaResumen.vue";
import { formatTexto } from "@/assets/js/utils";


export default {
    data() {
        return {
            habilidad : null,
            lenguajes : null,
            lista_habilidades: lista_habilidades,
            lista_lenguajes: lenguajes_aprendidos,
            lista_experiencia: lista_experiencia.experiencia,
            lista_educacion: lista_experiencia.educacion,
        }
    },
    components:{
        ComponenteCartaResumen
    },
    methods:{
        formattedDescripcion(texto) {
            return formatTexto(texto);
        },
    }
}
</script>

<template>
    <div class="container px-5 my-5">

        <div id="app">


            <div class="text-center mb-5">
                <h1 class="display-5 fw-bolder mb-0"><span class="text-gradient d-inline">Resumen</span></h1>
            </div>
            <div class="row gx-5 justify-content-center">
                <div class="col-lg-11 col-xl-9 col-xxl-8">
                    <!-- Experience Section-->
                    <section>
                        <div class="d-flex align-items-center justify-content-between mb-4">
                            <h2 class="text-primary fw-bolder mb-0">Experiencia</h2>
                            <!-- Download resume button-->
                            <!-- Note: Set the link href target to a PDF file within your project-->
                            <a class="btn btn-primary px-4 py-3" href="/storage/micv/cv_cristhian_custodio.pdf" download>
                                <div class="d-inline-block bi bi-download me-2"></div>
                                Descargar CV
                            </a>
                        </div>
                        <!-- Experience Card 1-->



                        <div class="card shadow border-0 rounded-4 mb-5" v-for="(item, indice) in lista_experiencia" >
                            <div class="card-body p-5">
                                <div class="row align-items-center gx-5">
                                    <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                        <div class="bg-light p-4 rounded-4">
                                            <div class="text-primary fw-bolder mb-2"> {{ item.empresa }} </div>
                                            <div class="small fw-bolder">{{ item.titulo }}</div>
                                            <div class="small text-muted">{{ item.descripcion }}</div>
                                            <div class="small text-muted">{{ item.lugar }}</div>
                                            <div class="small text-muted">{{ item.anio }}</div>
                                        </div>
                                    </div>
                                    <div class="col-lg-7">
                                        <div v-html="formattedDescripcion(item.detalle_trabajo)"></div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </section>
                    <!-- Education Section-->
                    <section>
                        <h2 class="text-secondary fw-bolder mb-4">Educación</h2>
                        <!-- Education Card 1-->

                        <div class="card shadow border-0 rounded-4 mb-5" v-for="(item, indice) in lista_educacion">
                            <div class="card-body p-5">
                                <div class="row align-items-center gx-5">
                                    <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                        <div class="bg-light p-4 rounded-4">
                                            <div class="text-secondary fw-bolder mb-2">{{ item.institucion }}</div>
                                            <div class="mb-2">
                                                <div class="small fw-bolder">{{ item.titulo }}</div>
                                                <div class="small text-muted">{{ item.lugar }}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-7">
                                        <div v-html="formattedDescripcion(item.descripcion)"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Education Card 2-->

                    </section>
                    <!-- Divider-->
                    <div class="pb-5"></div>
                    <!-- Skills Section-->
                    <section>
                        <!-- Skillset Card-->
                        <div class="card shadow border-0 rounded-4 mb-5">
                            <div class="card-body p-5">
                                <!-- Professional skills list-->

                                <ComponenteCartaResumen 
                                titulo_cartilla="Habilidades profesionales" 
                                :listado="lista_habilidades" 
                                icono_cabecera="bi bi-tools"
                                />
                                <ComponenteCartaResumen 
                                titulo_cartilla="Languajes / Frameworks" 
                                :listado="lista_lenguajes" 
                                icono_cabecera="bi bi-code-slash"
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </div>
    </div>
</template>