<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        mansion() {

        }
    },
    mounted() {
        

    }
}
</script>

<template>
    <!-- Header-->
    <header class="py-5">
        <div class="container px-5 pb-5">
            <div class="row gx-5 align-items-center">
                <div class="col-xxl-5">
                    <!-- Header text content-->
                    <div class="text-center text-xxl-start">
                        <div class="badge bg-gradient-primary-to-secondary text-white mb-4">
                            <div class="text-uppercase">Programador Backend</div>
                        </div>
                        <div class="fs-3 fw-light text-muted"></div>
                        <h1 class="display-3 fw-bolder mb-5"><span class="text-gradient d-inline">Cristhian Custodio
                                Hinostroza</span></h1>
                        <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                            <RouterLink class="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" to="/resumen">
                                Resumen</RouterLink>
                            <RouterLink class="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" to="/proyectos">
                                Proyectos</RouterLink>
                        </div>
                    </div>
                </div>
                <div class="bg-light col-xxl-7 rounded-4">
                    <div class="text-center my-5">
                        <h2 class="display-5 fw-bolder"><span class="text-gradient d-inline">Acerca de mi</span></h2>
                        <div class="lead fw-light mb-4" style="text-align:justify; line-height: 33px">
                            <p>
                                Técnico en Ingeniería de Software orientado al desarrollo backend, 
                                enfocado en optimizar procesos y mejorar la arquitectura de 
                                software. 
                            </p>
                            <p>
                                Tengo buen dominio en PHP, NodeJS, JavaScript, MySQL - SQL Server y 
                                algunas tecnologías más que constantemente voy estudiando en 
                                mis proyectos de software personales.
                            </p>
                            <p> 
                                Conocimientos en frontend en JavaScript como Vue 3, React, Bootstrap, Tailwind y 
                                CSS nativo, lo que me permite colaborar en proyectos de 
                                desarrollo completo de aplicaciones web.
                            </p>
                            <p>
                                Me considero disciplinado, autodidacta y con muchas ganas de 
                                aprender y aportar con mi trabajo en el lugar donde vaya a 
                                laborar, siempre dando lo mejor de mí
                            </p>
                        </div>
                        <p class="text-muted">

                        </p>
                        <div class="d-flex justify-content-center fs-2 gap-4">
                            <!-- <a class="text-gradient" href="#!"><i class="bi bi-twitter"></i></a> -->
                            <a class="text-gradient" target="_blank"
                                href="https://www.linkedin.com/in/cristhiancustodio/"><i class="bi bi-linkedin"></i></a>
                            <a class="text-gradient" target="_blank" href="https://github.com/cristhiancustodio"><i
                                    class="bi bi-github"></i></a>

                            <a class="text-gradient" target="_blank" href="mailto:cryisthian86@gmail.com"><i
                                    class="bi bi-google"></i>mail</a>
                            <a class="text-gradient" target="_blank" href="mailto:cryisthian_06@hotmail.com"><i
                                    class="bi bi-envelope"></i></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </header>

</template>