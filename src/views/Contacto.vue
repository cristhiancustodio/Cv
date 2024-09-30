<script>

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY_FIREBASE,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN_FIREBASE,
    projectId: import.meta.env.VITE_PROJECT_ID_FIREBASE,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET_FIREBASE,
    messagingSenderId: "32833905561",
    appId: import.meta.env.VITE_APP_ID_FIREBASE,
    measurementId: "G-SLMXMGPQSV"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default {
    data() {
        return {
            form: {
                nombre: null,
                correo: null,
                telefono: null,
                mensaje: null
            },
            lista_usuarios: [],
            errores: {},
            estado_envio: {
                error: false,
                mensaje: '',
            },
        }
    },
    mounted() {
        this.getDatos();


    },
    methods: {
        async getDatos() {
            this.lista_usuarios = [];
            const querySnapshot = await getDocs(collection(db, "Cv-custodio"));
            querySnapshot.forEach((doc) => {
                this.lista_usuarios.push(doc.data());
            });

        },
        validarFormulario() {
            this.errores = {};
            if (!this.form.nombre) {
                this.errores.nombre = 'El nombre es obligatorio.';
            }
            if (!this.form.correo) {
                this.errores.correo = 'El correo es obligatorio.';
            } else if (!this.validarCorreo(this.form.correo)) {
                this.errores.correo = 'El correo no es válido.';
            }
            if (!this.form.mensaje) {
                this.errores.mensaje = 'El mensaje es obligatorio.';
            }
            if (!this.form.telefono) {
                this.errores.telefono = 'El telefono es obligatorio.';
            }
            return Object.keys(this.errores).length === 0; // Devuelve true si no hay errores
        },
        validarCorreo(correo) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(correo);
        },
        limpiarFormulario() {
            this.form.nombre = '';
            this.form.correo = '';
            this.form.mensaje = '';
            this.form.telefono = '';
        },
        async enviarFormulario() {

            try {
                try {
                    if (this.validarFormulario()) {

                        const docRef = await addDoc(collection(db, "Cv-custodio"), {
                            nombre_completo: this.form.nombre,
                            correo: this.form.correo,
                            mensaje: this.form.mensaje,
                            telefono: this.form.telefono,
                            fecha: new Date()
                        });
                        this.estado_envio.error = false,
                        this.estado_envio.mensaje = 'Enviado correctamente',
                        //this.getDatos();
                        this.limpiarFormulario();
                    }
                } catch (e) {
                    this.estado_envio.error = true;
                    this.estado_envio.mensaje = 'Error al enviar el formulario';
                    console.error("Error al añadir documento: ", e);
                }

            } catch (error) {

                console.log(error);
            }
        },
        verificaCompletado(condicion) {
            return condicion === true ? 'invalid-feedback' : '';
        }
    },
    computed: {

    },
    props: {

    }
}
</script>
<template>
    <!-- Page content-->
    <section class="py-5">
        <div class="container px-5">
            <!-- Contact form-->
            <div class="bg-light rounded-4 py-5 px-4 px-md-5">
                <div class="text-center mb-5">
                    <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3"><i
                            class="bi bi-envelope"></i></div>
                    <h1 class="fw-bolder">Contactame</h1>
                    <p class="lead fw-normal text-muted mb-0">Trabajemos juntos!</p>
                </div>
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-8 col-xl-6">
                        <form @submit.prevent="enviarFormulario">
                            <!-- Name input-->
                            <div class="form-floating mb-3">
                                <input class="form-control" id="name" name="nombre" type="text" v-model="form.nombre"
                                    placeholder="Enter your name..." data-sb-validations="required" />
                                <label for="name">Nombre completo</label>
                                <div :class="verificaCompletado(errores.nombre) + ' text-danger'" data-sb-feedback="">{{ errores.nombre
                                    }}
                                </div>
                            </div>
                            <!-- Email address input-->
                            <div class="form-floating mb-3">
                                <input class="form-control" id="email" type="email" name="email" v-model="form.correo"
                                    placeholder="name@example.com" data-sb-validations="required,email" />
                                <label for="email">Correo electrónico</label>
                                <div :class="verificaCompletado(errores.correo)  + ' text-danger'" data-sb-feedback="">{{ errores.correo
                                    }}
                                </div>
                            </div>
                            <!-- Phone number input-->
                            <div class="form-floating mb-3">
                                <input class="form-control" id="phone" name="telefono" type="tel"
                                    v-model="form.telefono" placeholder="(123) 456-7890" data-sb-validations="required" />
                                <label for="phone">Número telefónico</label>
                                <div :class="verificaCompletado(errores.telefono)  + ' text-danger'" data-sb-feedback="">
                                    {{ errores.telefono }}</div>
                            </div>
                            <!-- Message input-->
                            <div class="form-floating mb-3">
                                <textarea class="form-control" id="message" name="mensaje" type="text"
                                    v-model="form.mensaje" placeholder="Coloca tu mensaje aqui..." style="height: 10rem"
                                    data-sb-validations="required"></textarea>
                                <label for="message">Mensaje</label>
                                <div :class="verificaCompletado(errores.mensaje)  + ' text-danger'" data-sb-feedback="">
                                    {{ errores.mensaje }}</div>
                            </div>
                            <!-- Submit success message-->
                            
                            <div :class="estado_envio.error == false ? '' : 'd-none'" id="submitSuccessMessage">
                                <div class="text-center mb-3">
                                    <div class="fw-bolder text-success">{{ estado_envio.mensaje }}</div>
                                </div>
                            </div>
                            <!-- Submit error message-->
                            <div :class="estado_envio.error == true ? '' : 'd-none'" id="submitErrorMessage">
                                <div class="text-center text-danger mb-3">{{ estado_envio.mensaje }}</div>
                            </div>

                            <!-- Submit Button-->
                            <div class="d-grid"><button class="btn btn-primary btn-lg" id="submitButton" type="submit">Enviar</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </section>

</template>
