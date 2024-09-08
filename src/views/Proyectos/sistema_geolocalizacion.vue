<script setup>
import Base from './base.vue';

const lista_imagenes =  [
    "/img/Asistencia/asistencia_1.png","/img/Asistencia/asistencia_2.png","/img/Asistencia/asistencia_3_2.png","/img/Asistencia/asistencia_3.png","/img/Asistencia/asistencia_4.png",
    "/img/Asistencia/asistencia_5.png","/img/Asistencia/asistencia_6.png","/img/Asistencia/asistencia_7.png",
    "/img/Asistencia/asistencia_8.png","/img/Asistencia/asistencia_9.png","/img/Asistencia/asistencia_10.png",
    "/img/Asistencia/asistencia_11.png","/img/Asistencia/asistencia_12.png","/img/Asistencia/asistencia_13.png","/img/Asistencia/asistencia_14.png","/img/Asistencia/asistencia_15.png","/img/Asistencia/asistencia_17_2.png","/img/Asistencia/asistencia_17.png",
];
const img_tec_usadas = [
    {img:"/img/iconos_svg/codeigniter.svg",descripcion:'Codeigniter 4'},
    {img:"/img/iconos_svg/mysql.svg",descripcion:'MySql'},
    {img:"/img/iconos_svg/bootstrap.svg",descripcion:'Bootstrap'},
    {img:"/img/iconos_svg/php.svg",descripcion:'PHP'},
    {img:"/img/iconos_svg/vue.svg",descripcion:'Vue 3'},
    {img:"/img/iconos_svg/axios.svg",descripcion:'Axios'},
    {img:"https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png",descripcion:'Puppeter'},
    {img:"https://www.chartjs.org/img/chartjs-logo.svg",descripcion:'Chart JS'},
    {img:"https://avatars.githubusercontent.com/u/3959702?s=48&v=4",descripcion:'PHPMailer'},
    {img:"https://i.ytimg.com/vi/pPAvL21kZQ0/maxresdefault.jpg",descripcion:'Geolocation API'},
    {img:"https://products.fileformat.com/spreadsheet/php/phpspreadsheet/header-image.png",descripcion:'Php Spreadsheet'},
];
const descripcion = "Este sistema tuvo la finalidad de registrar la ubicación de una persona y marcar su asistencia en el lugar que se le había asignado, si la persona no estaba dentro del rango cerca a la ubicación, este no podía marcar. <br> Así que se hizo una vista donde se muestra los días asistidos, la de hora entrada, salida y cuanto tiempo de tardanza ha tenido la persona responsable.";

</script>

<template>


    <Base 
    titulo="Sistema de asistencia con geolocalización"
    :descripcion="descripcion"
    :lista_imagenes="lista_imagenes"
    :img_tec_usadas="img_tec_usadas"
    ></Base>


    
</template>