<script setup>
import Base from './base.vue';

const lista_imagenes =  [
    "/img/Cinestar/cinestar_1.png",
    "/img/Cinestar/cinestar_2.png",
    "/img/Cinestar/cinestar_3.png",
    "/img/Cinestar/cinestar_4.png",
    "/img/Cinestar/cinestar_5.png",
];
const img_tec_usadas = [
    {img:"/img/iconos_svg/laravel.svg",descripcion:''},
    {img:"/img/iconos_svg/flask.svg",descripcion:''},
    {img:"/img/iconos_svg/nodejs.svg",descripcion:''},
    {img:"/img/iconos_svg/express.svg",descripcion:''},
    {img:"/img/iconos_svg/api.svg",descripcion:''},
    {img:"/img/iconos_svg/html.svg",descripcion:''},
    {img:"/img/iconos_svg/css.svg",descripcion:''},
    

];
const descripcion = "Se uso esta plantilla como practica para desplegar en distintas tecnologías web y asi poder conocer mas sobre los Frameworks backend y usar APIS";

</script>

<template>


    <Base 
    titulo="Clon de cinestar"
    :descripcion="descripcion"
    :lista_imagenes="lista_imagenes"
    :img_tec_usadas="img_tec_usadas"
    ></Base>


    
</template>