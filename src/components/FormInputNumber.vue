<template>

<div>
    <div class="input-group mt-4">

        <span class="input-group-text font-weight-bold alert-primary">{{ label }}</span>
            
        <input v-model="value" type="text" class= 'form-control' @blur="inline" :class="{ active: isActive, 'is-valid':verde , 'is-invalid':rojo}"/>
        
        <div class="container position-relative col-md-12" style="height: 0.9em !important;">

            <div class="position-absolute">

                    <li class="text-danger list-inline-item" v-for="(errorn, i) in lerrores" :key="i"><small> {{ errorn }} </small></li>

            </div>

        </div>

    </div>
</div>
</template>

<script>
export default {

    props:['placeholder'],

    data(){
        return{
            value:'',

            lerrores:[],

            isActive: true,
            verde: false,
            rojo: false,

            eobligatori:"* Requerit. ",
            enumeros:"No pot contenir lletres.",
        }
    },

    methods:{

        inline(){

            this.lerrores=[];

            if(this.placeholder == 'Width:'){
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
        },
    }

}
</script>
