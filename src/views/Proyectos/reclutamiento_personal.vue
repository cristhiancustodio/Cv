<script setup>
import Base from './base.vue';

const lista_imagenes =  [
    "/img/Reclutamiento/reclutamiento_1.png",
    "/img/Reclutamiento/reclutamiento_2.png",
    "/img/Reclutamiento/reclutamiento_3.png",
    "/img/Reclutamiento/reclutamiento_4.png",
    "/img/Reclutamiento/reclutamiento_5.png",
];
const img_tec_usadas = [
    {img:"/img/iconos_svg/codeigniter.svg",descripcion:''},
    {img:"/img/iconos_svg/mysql.svg",descripcion:''},
    {img:"/img/iconos_svg/bootstrap.svg",descripcion:''},
    {img:"/img/iconos_svg/php.svg",descripcion:''},
    {img:"/img/iconos_svg/js.svg",descripcion:''},
    {img:"/img/iconos_svg/jquery.svg",descripcion:''},
    {img:"/img/iconos_svg/axios.svg",descripcion:'Axios'},
    
    {img:"https://avatars.githubusercontent.com/u/3959702?s=48&v=4",descripcion:'PHPMailer'},
    {img:"https://products.fileformat.com/spreadsheet/php/phpspreadsheet/header-image.png",descripcion:'Php Spreadsheet'},
];
const descripcion = "Fue creado con la finalidad de registrar a las personas que hayan postulado a una empresa, se le toma sus datos y de acuerdo a eso se pasan a diferentes filtros, el usuario que maneja este sistema puede saber que postulantes han pasado a una siguiente etapa, quienes no han pasado el primer filtro y además, si el usuario fue elegido, se le enviara un correo electrónico.<br> El sistema muestra el CV previamente subido para poder tener sus datos de inmediato.<br> También se puede descargar la lista de postulantes en un Excel.";

</script>

<template>


    <Base 
    titulo="Reclutamiento de personal"
    :descripcion="descripcion"
    :lista_imagenes="lista_imagenes"
    :img_tec_usadas="img_tec_usadas"
    ></Base>


    
</template>