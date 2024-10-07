<script>
export default{
    data() {
        return {
            nombre_funcion:null,
            final:null,
            lista_parametros :[],
            parametro:{
                text:null,
                tipo:'',
            },
            html:'',
        }
    },
    methods: {
        agregarParametro(){
            this.lista_parametros.push(
                {
                    text: this.parametro.text.trim(),
                    tipo: this.parametro.tipo.trim(),
                }
            );
            this.parametro.text = '';
            this.parametro.tipo = '';
        }
    },
    mounted(){
        let codigo = '<h1>Hola como estas</h1>'
        this.html = codigo;
        
    }
}
</script>

<template>
    <div class="container px-5 my-5">
        <div class="row">
            <div class="col p-0">
                <h1>Creacion de funciones en postgres</h1>
                <div class="w-50">
                    <label for="">Nombre de la funcion</label>
                    <input class="form-control" type="text" id="" v-model="nombre_funcion">
                </div>
                <div class="row">
                    <div class="col-12">Parametros</div>
                    <div class="col-6">
                        <input type="text" v-model="parametro.text" class="form-control" @keyup.enter="agregarParametro" placeholder="Parametro">
                    </div>
                    <div class="col-6">
                        <select name="" id="" v-model="parametro.tipo" class="form-select">
                            <option value="" disabled>SELECCIONE</option>
                            <option value="NUMERIC">NUMERIC</option>
                            <option value="VARCHAR">VARCHAR</option>
                            <option value="DATE">DATE</option>
                            <option value="BOOLEAN">BOOLEAN</option>
                        </select>
                    </div>
                    <div class="col-12">
                        Lista parametros
                        <div class="row" v-for="item in lista_parametros">
                            <div class="col-6">{{ item.text }}</div>
                            <div class="col-6">{{ item.tipo }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col p-0">
                <pre>

                    CREATE OR REPLACE FUNCTION {{ this.nombre_funcion }}(
                    <br>
                    &nbsp;&nbsp;&nbsp;{{ (lista_parametros.map(item=> item.tipo)).join(', ') }}
                    <br>
                    )
                    RETURNS VOID AS 
                    <br>
                    $$
                    <br>
                    DECLARE
                    <br>
                    {{ (lista_parametros.map((item, index) => `_${item.text} AS FOR $${index + 1}`)).join('; ') }}
                    {{ (lista_parametros != []) ? ';' : '' }}
                    &nbsp;&nbsp;&nbsp;
                    <br>
                    BEGIN
                    <br>
                    END;
                    <br>
                    $$ LANGUAGE plpgsql;
                        
                </pre>
            </div>
        </div>
    
    </div>
</template>