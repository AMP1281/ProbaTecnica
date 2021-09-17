<template>

  <b-container>

      <b-card-group deck class="py-5">

        <!--INPUT Comands-->

        <b-card header="Input Comands" class="shadow p-3 mb-5 bg-white rounded">

          <p>Fill in the data below:</p>

          <b-form @submit="onSubmit" @reset="onReset" v-if="show" novalidate>

            <!--Dimensions:-->
              <b-form-group label="Dimensions of the square:">

                <b-form inline class="d-flex justify-content-around">
                    
                    <b-form-input 
                      id="input-1"
                      v-model="$v.iWidth.$model"
                      type="number"
                      min="0"
                      step="1"
                      class="text-center text-capitalize"
                      placeholder="width"
                     >
                    </b-form-input>

                  x

                    <b-form-input
                      id="input-2"
                      v-model="$v.iHeight.$model"
                      type="number"
                      min="0"
                      step="1"
                      placeholder="height"
                      class="text-center text-capitalize"
                    >
                    </b-form-input>

                </b-form>

              </b-form-group>

            <!--Coordinates:-->
              <b-form-group
                id="input-group-2"
                label="Initial coordinates:">

                <b-form inline class="d-flex justify-content-around">

                    <b-form-input
                      id="input-3"
                      v-model="$v.iX.$model"
                      type="number"
                      min="0"
                      step="1"
                      placeholder="x"
                      class="text-center text-capitalize"
                    ></b-form-input>

                  x

                    <b-form-input
                      id="input-4"
                      v-model="$v.iY.$model"
                      type="number"
                      min="0"
                      step="1"
                      placeholder="y"
                      class="text-center text-capitalize"
                    ></b-form-input>

                </b-form>

              </b-form-group>

            <!--Orientation-->
              <b-form-group
                id="input-group-3"
                label="Initial orientation">
                <b-form-radio-group
                  id="input-5"
                  v-model="$v.iOrientation.$model"
                  :options="orientation"
                  class="d-flex justify-content-around"
                  required>
                </b-form-radio-group>
              </b-form-group>

            <!--Comands-->
              <b-form-group 
                id="input-group-4"
                label="Comands:"
                description="Please enter a set of commands: Advance (A), Turn left (L), Turn Right (R). ">
                <b-input-group>

                      <b-input-group-prepend>

                        <b-button variant="outline-secondary" id="Advance" @click="agregarA()">A</b-button>
                        <b-tooltip target="Advance" variant="secondary" placement="topleft">Advance</b-tooltip>

                        <b-button variant="outline-secondary" id="turnLeft" @click="agregarL()">L</b-button>
                        <b-tooltip target="turnLeft" variant="secondary" placement="top">Turn left</b-tooltip>

                        <b-button variant="outline-secondary" id="turnRight" @click="agregarR()">R</b-button>
                        <b-tooltip target="turnRight" variant="secondary" placement="topright">Turn Right</b-tooltip>

                      </b-input-group-prepend>

                    <b-form-input
                      id="input-6"
                      v-model="$v.iComands.$model"
                      type="text"
                      required
                      class="bg-light"
                      readonly>
                      {{iComands}}
                    </b-form-input>

                </b-input-group>

              </b-form-group>

            <!--buttons-->
              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>

          </b-form>

        </b-card>

        <!----------OUTPUT---------->

        <b-card header="Output Comands" class="shadow p-3 mb-5 bg-white rounded">

          <b-card-text>

            <b-form novalidate>

              <!--Final Comands: True/False-->
              <b-form-group label="Command validity:">
                <b-form-input
                  v-model="finalCommand2"
                  class="text-center text-capitalize"
                  :class="{'is-invalid':!finalCommand2,'text-danger':!finalCommand2}"
                  >
                </b-form-input>
                <b-form-invalid-feedback>The Rover is outside of the pre-defined initial limits</b-form-invalid-feedback>
              </b-form-group>

              <!--Final Orientation-->
              <b-form-group label="Final Orientation:">
                <b-form-input v-model="finalOr" class="text-center"></b-form-input>
              </b-form-group>

              <!--Final Coordinates-->
              <b-form-group label="Final Coordinates:">

                <b-form inline class="d-flex justify-content-around">
                  <b-form-input v-model="finalX" class="text-center"></b-form-input>
                  x
                  <b-form-input v-model="finalY" class="text-center"></b-form-input>
                </b-form>

              </b-form-group>

            </b-form>

          </b-card-text>

        </b-card>

     </b-card-group>

  </b-container>

</template>

<script>

import { numeric, required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'

export default {

  name: 'Form',

  data() {
      return {
        v$: useVuelidate(),

        iWidth: '',
        iHeight: '',

        iX: '',
        iY: '',

        iOrientation: '',
        iComands2:[],

        orientation: [
          { text: 'North', value: 'N'},
          { text: 'South', value: 'S'},
          { text: 'East', value: 'E'},
          { text: 'West', value: 'W'}
          ],

        show: true,

        finalCommand2:'',
        finalOr:'',
        finalX:'',
        finalY:'',

      }
    },

    validations () {
      return{
        iWidth: {required, numeric},
        iHeight: {required, numeric},
        iX: {required, numeric},
        iY: {required, numeric},
        iOrientation: {required},
        iComands2: {required},
      }
    },

    computed: {

      iWidthS:{
        get () {return this.$store.state.iWidthStore},
        set (iWidth) {this.$store.commit('updateiWidth', iWidth)},
      },
      iHeightS:{
        get () {return this.$store.state.iHeightStore},
        set (iHeight) {this.$store.commit('updateiHeight', iHeight)},
      },
      iXS:{
        get () {return this.$store.state.iXStore},
        set (iX) {this.$store.commit('updateiX', iX)},
      },
      iYS:{
        get () {return this.$store.state.iYStore},
        set (iY) {this.$store.commit('updateiY', iY)},
      },
      iOrientationS:{
        get () {return this.$store.state.iOrientationStore},
        set (iOrientation) {this.$store.commit('updateiOrientation', iOrientation)},
      },
    },

    methods: {

      agregarA() {
        this.iComands2.push("A")
      },

      agregarL(){
        this.iComands2.push("L")
      },

      agregarR(){
        this.iComands2.push("R")
      },

      finalCommand(){
          if(this.finalX > this.iWidth || this.finalY > this.iHeight || this.finalX < 0 || this.finalY < 0){
          return false;
        } else {
          return true;
        }
      },

      onSubmit(event) {



        event.preventDefault();

        let self = this;
        let fY = this.iY;
        let fX = this.iX;

        const L = {
          'N': 'W',
          'S': 'E',
          'E': 'N',
          'W': 'S',
        };

        const R = {
          'N': 'E',
          'S': 'W',
          'E': 'S',
          'W': 'N',
        };

        this.iComands.forEach(function(element){

             if(element == 'A'){
               if(self.iOrientation == 'N'){
                 return fY++;
               }
               if(self.iOrientation == 'S'){
                 return fY--;
               }
               if(self.iOrientation == 'E'){
                 return fX++;
               }
               if(self.iOrientation == 'W'){
                 return fX--;
               }
             }

            if(element == 'L'){
              return self.iOrientation = L[self.iOrientation]
            }

            if(element == 'R'){
              return self.iOrientation = R[self.iOrientation]
            }

        });

          this.finalY= fY;
          this.finalX= fX;
          this.finalOr = this.iOrientation;
          this.finalCommand2 = this.finalCommand();
      },

      onReset(event) {
        event.preventDefault()
        // Reset our form values
          this.iWidth= '',
          this.iHeight= '',
          this.iX='',
          this.iY='',
          this.iOrientation= null,
          this.iComands=''
          this.finalCommand2=''
          this.finalY=''
          this.finalX=''
          this.finalOr=''

        // Trick to reset/clear native browser form validation state
          this.show = false
          this.$nextTick(() => {
            this.show = true
        })
      }
    }

}
</script>

<style scoped>



</style>

