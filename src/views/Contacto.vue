
<script>
import axios from 'axios'
export default {
    data(){
        return{
           form : {
            nombre: null,
            correo: null,
            telefono: null,
            mensaje : null
           }
        }
    },
    methods: {
        async enviarFormulario(){
            try {
                console.log(this.form);
                
                const response = await axios.post("", this.form)

                console.log(response);
                
            } catch (error) {
                
                console.log(error);
            }
        }
    },
    computed: {
        
    },
    props:{

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
                        <!-- * * * * * * * * * * * * * * *-->
                        <!-- * * SB Forms Contact Form * *-->
                        <!-- * * * * * * * * * * * * * * *-->
                        <!-- This form is pre-integrated with SB Forms.-->
                        <!-- To make this form functional, sign up at-->
                        <!-- https://startbootstrap.com/solution/contact-forms-->
                        <!-- to get an API token!-->
                        <form @submit.prevent="enviarFormulario">

                            <!-- Name input-->
                            <div class="form-floating mb-3">
                                <input class="form-control" id="name" name="nombre" type="text" v-model="form.nombre"
                                    placeholder="Enter your name..." data-sb-validations="required" />
                                <label for="name">Nombre completo</label>
                                <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            <!-- Email address input-->
                            <div class="form-floating mb-3">
                                <input class="form-control" id="email" type="email" name="email" v-model="form.correo"
                                    placeholder="name@example.com" data-sb-validations="required,email" />
                                <label for="email">Correo electrónico</label>
                                <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.
                                </div>
                                <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                            <!-- Phone number input-->
                            <div class="form-floating mb-3">
                                <input class="form-control" id="phone" name="telefono" type="tel" v-model="form.telefono"
                                    placeholder="(123) 456-7890" data-sb-validations="required" />
                                <label for="phone">Número telefónico</label>
                                <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is
                                    required.</div>
                            </div>
                            <!-- Message input-->
                            <div class="form-floating mb-3">
                                <textarea class="form-control" id="message" name="mensaje" type="text" v-model="form.mensaje"
                                    placeholder="Enter your message here..." style="height: 10rem"
                                    data-sb-validations="required"></textarea>
                                <label for="message">Mensaje</label>
                                <div class="invalid-feedback" data-sb-feedback="message:required">Enviar</div>
                            </div>
                            <!-- Submit success message-->
                            <!---->
                            <!-- This is what your users will see when the form-->
                            <!-- has successfully submitted-->
                            <div class="d-none" id="submitSuccessMessage">
                                <div class="text-center mb-3">
                                    <div class="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a
                                        href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
                            <!-- Submit error message-->
                            <!---->
                            <!-- This is what your users will see when there is-->
                            <!-- an error submitting the form-->
                            <div class="d-none" id="submitErrorMessage">
                                <div class="text-center text-danger mb-3">Error al enviar el mensaje!</div>
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
