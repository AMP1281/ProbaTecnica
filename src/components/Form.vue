<template>

  <b-container>

      <b-card-group deck class="py-5">

        <!--INPUT Comands-->

        <b-card header="Input Comands" class="shadow p-3 mb-5 bg-white rounded">

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
                      class="bg-light"
                      readonly>
                    </b-form-input>

                </b-input-group>

              </b-form-group>

            <!--buttons-->
              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>

          </b-form>

        </b-card>

        <!--OUTPUT Comands-->

        <b-card header="Output Comands" class="shadow p-3 mb-5 bg-white rounded">

          <b-card-text>

            <b-form>

              <!--Final Comands: True/False-->
              <b-form-group label="Command validity:">
                <b-form-input 
                  v-model="Command" 
                  class="text-center"
                  >
                </b-form-input>
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

        Command:'',
        finalOr:'',
        finalX:'',
        finalY:'',

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

      InOut(){
        if(this.finalX > this.form.iX || this.finalY > this.form.iY || this.finalX < 0 || this.finalY < 0){
          return this.Command = "False";
        } else {
          return this.Command = "True";
        }
      },

      onSubmit(event) {

        event.preventDefault();

        let self = this;
        let fY = this.form.iY;
        let fX = this.form.iX;

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

        this.form.iComands.forEach(function(element){

             if(element == 'A'){
               if(self.form.iOrientation == 'N'){
                 return fY++;
               }
               if(self.form.iOrientation == 'S'){
                 return fY--;
               }
               if(self.form.iOrientation == 'E'){
                 return fX++;
               }
               if(self.form.iOrientation == 'W'){
                 return fX--;
               }
             }

            if(element == 'L'){
              return self.form.iOrientation = L[self.form.iOrientation]
            }

            if(element == 'R'){
              return self.form.iOrientation = R[self.form.iOrientation]
            }

        });

          this.finalY= fY;
          this.finalX= fX;
          this.finalOr = this.form.iOrientation;

      this.InOut();

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

