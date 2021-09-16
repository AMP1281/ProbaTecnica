
<template>
<div>

    <b-form-input v-model="value" type="number" min="0" step="1" placeholder="Width" class="text-center" :number="true" @blur="inline">
    </b-form-input>

    <div class="container position-relative col-md-12" style="height: 0.9em !important;">
        <div class="position-absolute">
            <li class="text-danger list-inline-item" v-for="(errorn, i) in lerrores" :key="i"><small> {{ errorn }} </small></li>
        </div>
    </div>

</div>
</template>

<script>

export default {
    props:  ['placeholder'],

    data(){
        return{

            value:'',

            lerrores:[],

            isActive: true,
            verde: false,
            rojo: false,

            eobligatori:"* Requerit. ",
        }
    },
    methods:{
        inline(){
            this.lerrores=[];

            //Nom
            if(this.placeholder == 'Width'){
                //Validacio
                this.obligatori(this.value);
                this.$emit('nombreOk',{arrayNombre:this.lerrores, valorNombre:this.value});//Envio errors i valor del camp al pare per activar boto Enviar
                !this.lerrores.length? ((this.isActive=false), (this.verde=true), (this.rojo=false)) : ((this.isActive=false),(this.verde=false),(this.rojo=true));//Activo class de Bootstrap invalid o valid depenent si hi han errors en el array
            }
        },

        //Validar camps obligatoris
        obligatori(campo){
            if(!campo){
                this.lerrores.push(this.eobligatori);
            } 
        }

        }
    }


</script>