<template> 

        <!--OUTPUT Comands-->
        
        <b-card header="Output Comands" class="shadow p-3 mb-5 bg-white rounded h-100 w-100 pt-4">

          <b-card-text>

            <b-form novalidate>

              <!--Final Comands: True/False-->
              <b-form-group label="Command validity:">

                <b-form-input
                  v-model="finalCommand2"
                  class="text-center text-capitalize"
                  style="background-color: #FFFFFF !important;"
                  :state=" this.finalCommand2===false? false
                         : this.finalCommand2===true? true
                         : null"
                  readonly
                >
                </b-form-input>

                <b-form-invalid-feedback class="animate__animated animate__flash position-absolute">
                  The Rover is outside of the pre-defined initial limits
                </b-form-invalid-feedback>

                <b-form-valid-feedback class="animate__animated animate__pulse position-absolute">
                  The Rover is inside of the pre-defined initial limits
                </b-form-valid-feedback>

              </b-form-group>

              <!--Final Orientation-->
              <b-form-group label="Final Orientation:" class="mt-4">
                <b-form-input
                v-model="finalOr"
                class="text-center"
                style="background-color: #FFFFFF !important;"
                readonly></b-form-input>
              </b-form-group>

              <!--Final Coordinates-->
              <b-form-group label="Final coordinates:" class="mt-4">

                <b-form inline class="d-flex justify-content-around">
                  <b-form-input 
                  v-model="finalX" 
                  class="text-center"
                  style="background-color: #FFFFFF !important;"
                  size="sm" 
                  readonly></b-form-input>
                  x
                  <b-form-input 
                  v-model="finalY" 
                  class="text-center"
                  style="background-color: #FFFFFF !important;"
                  size="sm" 
                  readonly></b-form-input>
                </b-form>

              </b-form-group>

              <b-form-group class="pt-5 d-flex justify-content-center">

                <div v-if="this.finalCommand2===true">

                  <img src= "../../src/assets/moon-rover2.png" class="d-inline-block align-top ml-3 mr-3 animate__animated animate__pulse" alt="Icon">

                </div>

                <div v-if="this.finalCommand2===false">

                  <img src= "../../src/assets/moon-roverRed.png" class="d-inline-block align-top ml-3 mr-3 animate__animated animate__pulse" alt="Icon">

                </div>

              </b-form-group>

            </b-form>

          </b-card-text>

        </b-card>

</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Output',

  computed:{
    ...mapState(['finalCommand2','finalOr','finalX','finalY'])
  }

}
</script>

<style scoped>
.card-header{
  color:white;
   background-image: linear-gradient(55deg, rgba(85,63,48,1) 20%, rgba(99,60,38,1) 51%, rgba(165,130,90,1) 100%);
}
</style>
