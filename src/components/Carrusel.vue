<script>
export default {
    
    data(){
        return{
            id : Math.floor(Math.random() * 256),
        }
    },
    mounted(){
    },
    props: {
        lista_imagenes: {
            type: Array,
            required: false,
        }
    }
}
</script>
<template>
        <div v-for="(img, index) in lista_imagenes" :key="index" class="col-12 shadow mb-5 d-block d-md-none">
            <img :src="img" class="w-100" alt="...">
        </div>
        
        <div :id="'carouselExampleInterval'+id" class="carousel carousel-dark slide d-none d-md-block" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div v-for="(img, index) in lista_imagenes" :key="index" :class="'carousel-item ' + (index==0 ? 'active' : '')">
                    <img :src="img" class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" :data-bs-target="'#carouselExampleInterval'+id" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" :data-bs-target="'#carouselExampleInterval'+id" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
</template>