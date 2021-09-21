<template>

  <b-container>

      <b-card-group deck class="py-5">

        <!--INPUT Comands-->

        <b-card header="Input Comands" class="p-3 mb-5 rounded">

          <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show" novalidate>

            <!--Dimensions:-->
              <b-form-group label="Dimensions of the square:">

                <b-form inline class="d-flex justify-content-around">

                  <b-form-group class="position-relative">

                    <b-form-input 
                      size="sm"
                      v-model="$v.iWidth.$model"
                      type="number"
                      min="1"
                      step="1"
                      class="text-center text-capitalize"
                      placeholder="width"
                      :state="$v.iWidth.$dirty ? !$v.iWidth.$invalid : null"
                      ><!--state. dirty?= si ha estat tocat | resposta true/false->activa el invalid-feedback | null no tocat-->
                    </b-form-input>

                    <b-form-invalid-feedback class="position-absolute">
                      {{ widthError }} <!--El error varia: empty/fracción/0 | method:getError()-->
                    </b-form-invalid-feedback> 

                  </b-form-group>

                  x

                  <b-form-group>

                    <b-form-input
                      size="sm"
                      v-model.trim="$v.iHeight.$model"
                      type="number"
                      min="1"
                      step="1"
                      placeholder="height"
                      class="text-center text-capitalize position-relative"
                      :state="$v.iHeight.$dirty ? !$v.iHeight.$invalid : null"
                    >
                    </b-form-input>

                    <b-form-invalid-feedback class="position-absolute">
                      {{ heightError }}
                    </b-form-invalid-feedback> 

                  </b-form-group>

                </b-form>

              </b-form-group>

            <!--Coordinates:-->
              <b-form-group
                label="Initial coordinates:"
                class="mt-4">

                <b-form inline class="d-flex justify-content-around">
                  
                  <b-form-group>

                    <b-form-input
                      size="sm"
                      v-model="$v.iX.$model"
                      type="number"
                      min="0"
                      step="1"
                      placeholder="x"
                      class="text-center text-capitalize"
                      :state="$v.iX.$dirty ? !$v.iX.$invalid : null"
                    ></b-form-input>

                    <b-form-invalid-feedback class="position-absolute">
                      {{ iXError }}
                    </b-form-invalid-feedback> 

                  </b-form-group>

                  x

                  <b-form-group>

                    <b-form-input
                      size="sm"
                      v-model="$v.iY.$model"
                      type="number"
                      min="0"
                      step="1"
                      placeholder="y"
                      class="text-center text-capitalize"
                      :state="$v.iY.$dirty ? !$v.iY.$invalid : null"
                    ></b-form-input>

                    <b-form-invalid-feedback class="position-absolute">
                      {{ iYError }}
                    </b-form-invalid-feedback> 

                  </b-form-group>

                </b-form>

              </b-form-group>

            <!--Orientation-->
              <b-form-group
                label="Initial orientation"
                class="mt-4">
                <b-form-radio-group
                  v-model="$v.iOrientation.$model"
                  :options="orientation"
                  class="d-flex justify-content-around"
                  :state="$v.iOrientation.$dirty ? !$v.iOrientation.$invalid : null"
                  required> 
                </b-form-radio-group>
                <b-form-invalid-feedback class="position-absolute" :force-show="$v.iOrientation.$dirty">
                  {{ iOrientationError }}
                </b-form-invalid-feedback> 

              </b-form-group>

            <!--Comands-->
              <b-form-group 
                label="Comands:"
                class="mt-4"
                >
                <template slot="description">
                  Please enter a set of commands:  <b-icon icon="arrow-counterclockwise"></b-icon>Turn left (L),  <b-icon icon="arrow-up"></b-icon>Advance (A),  <b-icon icon="arrow-clockwise"></b-icon>Turn Right (R).
                </template>

                <b-input-group>

                      <b-input-group-prepend>

                        <b-button variant="outline-secondary" id="turnLeft" @click="agregar(L)" size="sm">
                          <div @mouseover="isHoveredL = true" @mouseleave="isHoveredL = false">
                            <b-icon v-show="isHoveredL" animation="spin-reverse" icon="arrow-counterclockwise"></b-icon>
                            <b-icon v-show="!isHoveredL" icon="arrow-counterclockwise"></b-icon>
                          </div>
                        </b-button>
                        <b-tooltip target="turnLeft" variant="secondary" placement="top">Turn left</b-tooltip>

                        <b-button variant="outline-secondary" id="Advance" @click="agregar(A)" size="sm">
                          <div @mouseover="isHoveredA = true" @mouseleave="isHoveredA = false">
                            <b-icon v-show="isHoveredA" animation="cylon-vertical" icon="arrow-up" ></b-icon>
                            <b-icon v-show="!isHoveredA" icon="arrow-up" ></b-icon>
                          </div>
                        </b-button>
                        <b-tooltip target="Advance" variant="secondary" placement="topleft">Advance</b-tooltip>

                        <b-button variant="outline-secondary" id="turnRight" @click="agregar(R)" size="sm">
                          <div @mouseover="isHoveredR = true" @mouseleave="isHoveredR = false">
                            <b-icon v-show="isHoveredR" animation="spin" icon="arrow-clockwise" ></b-icon>
                            <b-icon v-show="!isHoveredR" icon="arrow-clockwise" ></b-icon>
                          </div>
                        </b-button>
                        <b-tooltip target="turnRight" variant="secondary" placement="topright">Turn Right</b-tooltip>

                      </b-input-group-prepend>

                    <b-form-textarea
                      type="text"
                      v-model="$v.iComandsTexto.$model"
                      required
                      class="bg-light"
                      size="sm"
                      readonly
                      no-resize
                      rows="2"
                      :state="$v.iComandsTexto.$dirty? !$v.iComandsTexto.$invalid : null">
                    </b-form-textarea>

                      <b-input-group-append>
                        <b-button variant="outline-secondary" id="erase" @click="borrarE()" size="sm"><b-icon icon="chevron-left"></b-icon></b-button>
                        <b-tooltip target="erase" variant="secondary" placement="top">Erase</b-tooltip>
                      </b-input-group-append>

                    <b-form-invalid-feedback class="position-absolute mt-5 pt-4">
                      {{ iComandsError }}
                    </b-form-invalid-feedback> 

                </b-input-group>

              </b-form-group>

            <!--buttons-->
              <b-button type="submit" variant="primary" class="mt-4">Submit</b-button>
              <b-button type="reset" variant="danger" class="mt-4">Reset</b-button>

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
                  :state="this.finalCommand2===false? false : null"
                >
                </b-form-input>

                <b-form-invalid-feedback class="animate__animated animate__flash">
                  The Rover is outside of the pre-defined initial limits
                </b-form-invalid-feedback>

              </b-form-group>

              <!--Final Orientation-->
              <b-form-group label="Final Orientation:">
                <b-form-input v-model="finalOr" class="text-center"></b-form-input>
              </b-form-group>

              <!--Final Coordinates-->
              <b-form-group label="Final coordinates:">

                <b-form inline class="d-flex justify-content-around">
                  <b-form-input v-model="finalX" class="text-center" size="sm"></b-form-input>
                  x
                  <b-form-input v-model="finalY" class="text-center" size="sm"></b-form-input>
                </b-form>

              </b-form-group>

            </b-form>

          </b-card-text>

        </b-card>

     </b-card-group>

  </b-container>

</template>

<script>

import { required, integer, minValue } from 'vuelidate/lib/validators'//Importando validadores Vuelidate

export default {

  name: 'Form',
 
  data() {
      return {

        iWidth: '',
        iHeight: '',

        iX: '',
        iY: '',

        iOrientation: '',
        iComands:[],

        orientation: [
          { text: 'North', value: 'N'},
          { text: 'South', value: 'S'},
          { text: 'East', value: 'E'},
          { text: 'West', value: 'W'}
          ],

        show: true,

        finalCommand2: null,

        finalOr:'',
        finalX:'',
        finalY:'',

        isHoveredL: false,
        isHoveredA: false,
        isHoveredR: false,

        submitStatus: null,

        L: "L",
        A: "A",
        R: "R"

      }

    },

    validations: {
      iWidth: { required, integer, minValue: minValue(1) },
      iHeight: { required, integer, minValue: minValue(1) },

      iX: { required, integer },
      iY: { required, integer },

      iOrientation: { required },
      iComandsTexto: { required },

    },

    errorMessages:{
      required:'*Required',
      integer:'*Fraction not valid',
      minValue:'*Minimum value 1'
    },

    computed: {

      iComandsTexto(){
        return this.iComands.join(' ');
      },

      widthError(){
        return this.getError(this.$v.iWidth.$error,this.$v.iWidth.$params,this.$v.iWidth);
      },
      heightError(){
        return this.getError(this.$v.iHeight.$error,this.$v.iHeight.$params,this.$v.iHeight);
      },
      iXError(){
        return this.getError(this.$v.iX.$error,this.$v.iX.$params,this.$v.iX);
      },
      iYError(){
        return this.getError(this.$v.iY.$error,this.$v.iY.$params,this.$v.iY);
      },
      iOrientationError(){
        return this.getError(this.$v.iOrientation.$error,this.$v.iOrientation.$params,this.$v.iOrientation);
      },
      iComandsError(){
        return this.getError(this.$v.iComandsTexto.$error,this.$v.iComandsTexto.$params,this.$v.iComandsTexto);
      },

      // iWidthS:{
      //   get () {return this.$store.state.iWidthStore},
      //   set (iWidth) {this.$store.commit('updateiWidth', iWidth)},
      // },
      // iHeightS:{
      //   get () {return this.$store.state.iHeightStore},
      //   set (iHeight) {this.$store.commit('updateiHeight', iHeight)},
      // },
      // iXS:{
      //   get () {return this.$store.state.iXStore},
      //   set (iX) {this.$store.commit('updateiX', iX)},
      // },
      // iYS:{
      //   get () {return this.$store.state.iYStore},
      //   set (iY) {this.$store.commit('updateiY', iY)},
      // },
      // iOrientationS:{
      //   get () {return this.$store.state.iOrientationStore},
      //   set (iOrientation) {this.$store.commit('updateiOrientation', iOrientation)},
      // },
    },

    methods: {

      getError(X,Y,Z){
        if(X){
          for(let key in Y){
            if(Z[key]===false){
              return this.$options.errorMessages[key]
            }
          }
        }
        return null
      },

      agregar(x){
        this.iComands.push(x)
      },

      borrarE(){
        this.iComands.pop()
      },

      finalCommand(){
          if(this.finalX > this.iWidth || this.finalY > this.iHeight || this.finalX < 0 || this.finalY < 0){
          return false;
        } else {
          return true;
        }
      },

      onSubmit(event) {

        this.$v.$touch();

        if(this.$v.$invalid){
          this.submitStatus = 'ERROR'
        }

        else{

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
        }
      },

      onReset(event) {
        event.preventDefault()
        // Reset our form values
          this.iWidth= '',
          this.iHeight= '',
          this.iX='',
          this.iY='',
          this.iOrientation= null,
          this.iComandsTexto=''
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

