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
                        <p class="lead fw-light mb-4">
                            Mi nombre es Cristhian Custodio, nací en Lima - Perú en el año 2000.
                            <br>
                            Inicie en esto de la programación porque me gusta resolver problemas, crear nuevas cosas y
                            me siento muy bien cuando logro desarrollar nuevas funcionalidades.
                            <br>
                            Culmine mis estudios en el año 2023 de la carrera Técnico en Ingenieria de
                            Software,especializandome en el lado del servidor.
                            <br>
                            Tambien estoy aprendiendo por mi cuenta tecnologías para Frontend porque mi objetivo es ser
                            FullStack.
                        </p>
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