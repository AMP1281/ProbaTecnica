<template>


  <b-container fluid="md">


      <b-card-group deck>

        <b-card header="Input Comands">

          <b-form @submit="onSubmit" @reset="onReset" v-if="show">

            <!--Dimensions:-->
              <b-form-group label="Dimensions of the square:">

                <b-form inline class="d-flex justify-content-around">

                    <b-form-input
                      id="input-1"
                      v-model="form.iWidth"
                      type="number"
                      min="0"
                      step="1"
                      placeholder="Width"
                      class="text-center">
                    </b-form-input>

                  x

                    <b-form-input
                      id="input-2"
                      v-model="form.iHeight"
                      type="number"
                      min="0"
                      step="1"
                      placeholder="Height"
                      class="text-center">
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
                      v-model="form.iX"
                      type="number"
                      min="0"
                      step="1"
                      placeholder="X"
                      class="text-center"
                    ></b-form-input>

                  x

                    <b-form-input
                      id="input-4"
                      v-model="form.iY"
                      type="number"
                      min="0"
                      step="1"
                      placeholder="Y"
                      class="text-center"
                    ></b-form-input>

                </b-form>

              </b-form-group>

            <!--Orientation-->
              <b-form-group
                id="input-group-3"
                label="Initial orientation">
                <b-form-radio-group
                  id="input-5"
                  v-model="form.iOrientation"
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
                      v-model="form.iComands"
                      type="text"
                      required
                      readonly>
                    </b-form-input>

                </b-input-group>

              </b-form-group>

            <!--buttons-->
              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>

          </b-form>

        </b-card>

        <b-card>
          <p>test</p>
          <p>{{fY}}</p>
        </b-card>

     </b-card-group>

  </b-container>

</template>

<script>

export default {
  name: 'Form',

  data() {
      return {

        form: {
          iWidth: '',
          iHeight: '',

          iX:'',
          iY:'',

          iOrientation: '',
          iComands: [],
        },

        orientation: [
          { text: 'North', value: 'N'},
          { text: 'South', value: 'S'},
          { text: 'East', value: 'E'},
          { text: 'West', value: 'W'}
          ],

        show: true,

      }

    },

    methods: {

      agregarA() {
        this.form.iComands.push("A")
      },

      agregarL(){
        this.form.iComands.push("L")
      },

      agregarR(){
        this.form.iComands.push("R")
      },

      onSubmit(event) {

        event.preventDefault();

        let self = this;
        let fY = this.form.iY;
        let fX = this.form.iX;
        let fO = this.form.iOrientation;

        this.form.iComands.forEach(function(element){

            if(element == 'A' && self.form.iOrientation == 'N'){ 
              return fY++ ;
            }
            if(element == 'A' && self.form.iOrientation == 'S'){
                return fY-- ;
            }
            if(element == 'A' && self.form.iOrientation == 'E'){
                return fX++ ;
            }
            if(element == 'A' && self.form.iOrientation == 'W'){
                return fX-- ;
            }

            if(element == 'L' && self.form.iOrientation == 'N'){
                return fO ='W';
            }
            if(element == 'L' && self.form.iOrientation == 'S'){
                return fO ='E' ;
            }
            if(element == 'L' && self.form.iOrientation == 'E'){
                return fO='N' ;
            }
            if(element == 'L' && self.form.iOrientation == 'W'){
                return fO='S' ;
            }

            if(element == 'R' && self.form.iOrientation == 'N'){
                return fO='E' ;
            }
            if(element == 'R' && self.form.iOrientation == 'S'){
                return fO='W' ;
            }
            if(element == 'R' && self.form.iOrientation == 'E'){
                return fO='S' ;
            }
            if(element == 'R' && self.form.iOrientation == 'W'){
                return fO='N' ;
            }

            console.log(fO);

            inOut();

        });

        function inOut(){
          if(fY>this.iHeight || fX>this.iWidth){
            return "False";
          }else{
            return "True";
          }
        }

      },

      onReset(event) {
        event.preventDefault()
        // Reset our form values
          this.form.iWidth= '',
          this.form.iHeight= '',
          this.form.iX='',
          this.form.iY='',
          this.form.iOrientation= null,
          this.form.iComands=''
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

