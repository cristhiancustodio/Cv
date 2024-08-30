
<template>
<!-- Footer-->
    <footer class="bg-white py-4 mt-auto">
        <div class="container px-5">
            <div class="row align-items-center justify-content-between flex-column flex-sm-row">
                <div class="col-auto"><div class="small m-0">Copyright &copy; Sitio web 2024</div></div>
                <div class="col-auto flex-column">
                    <div class="row">
                        <div v-for="(item, key) in lista_enlaces" class="col-auto" >
                            <a :key="key"  class="large" :href="item.enlace">{{ item.texto }}</a>
                        </div>
                        
                    </div>
                    <!-- <a class="small" href="#!">Terminos</a>
                    <a class="small" href="">Contacto</a> -->
                </div>
            </div>
        </div>
    </footer>
    <!-- Bootstrap core JS
    <script src="{{ asset('js/Bootstrap/bootstrap.bundle.min.js')}}"></script>
    Core theme JS
    <script src="{{ asset('js/scripts.js') }}"></script>
    <script src="{{ asset('js/footer.js') }}"></script> -->
</template>

<script>

export default{
    data(){
        return{
            lista_enlaces: []
        }
    },
    mounted() {
        this.obtenerEnlacesNav();
        
    },
    methods:{
        obtenerEnlacesNav(){
            (document.querySelectorAll(".lista_enlaces")).forEach(element => {
                this.lista_enlaces.push(
                    {
                        "texto":element.textContent,
                        "enlace" : element.getAttribute("href")
                    }
                )
                
            });
            
        }
    }
}
</script>