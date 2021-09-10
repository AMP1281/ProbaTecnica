<template>


  <b-container fluid="md">

    <FormInputNumber placeholder="Width" @widthOk="wOk=$event"/>

      <b-card-group deck>

        <b-card header="Input Comands">

          <b-form @submit="onSubmit" @reset="onReset" v-if="show">

            <!--Dimensions:-->
              <b-form-group
                label="Dimensions of the square:"
              >
                <b-form inline class="d-flex justify-content-around">

                  <FormInputNumber placeholder="Width" @widthOk="wOk=$event"/>

                    <b-form-input
                      id="input-1"
                      v-model="form.iWidth"
                      type="number"
                      min="0"
                      step="1"
                      placeholder="Width"
                      class="text-center"
                      ></b-form-input>

                  x

                    <b-form-input
                      id="input-2"
                      v-model="form.iHeight"
                      type="number"
                      min="0"
                      step="1"
                      placeholder="Height"
                      class="text-center"
                    ></b-form-input>

                </b-form>

              </b-form-group>

            <!--Coordinates:-->
              <b-form-group
                id="input-group-2"
                label="Initial coordinates:"
              >
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
                  required
                ></b-form-radio-group>
              </b-form-group>

            <!--Comands-->
              <b-form-group 
                id="input-group-4"
                label="Comands:"
                description="Please enter a set of commands: Advance (A), Turn left (L), Turn Right (R). ">
                <b-input-group>

                      <b-input-group-prepend>

                        <b-button variant="outline-secondary" id="Advance">A</b-button>
                        <b-tooltip target="Advance" variant="secondary" placement="topleft">Advance</b-tooltip>

                        <b-button variant="outline-secondary" id="turnLeft">L</b-button>
                        <b-tooltip target="turnLeft" variant="secondary" placement="top">Turn left</b-tooltip>

                        <b-button variant="outline-secondary" id="turnRight">R</b-button>
                        <b-tooltip target="turnRight" variant="secondary" placement="topright">Turn Right</b-tooltip>

                      </b-input-group-prepend>

                    <b-form-input
                      id="input-6"
                      v-model="form.iComands"
                      type="text"
                      required
                      readonly
                    ></b-form-input>

                </b-input-group>

              </b-form-group>

            <!--buttons-->
              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>

          </b-form>

        </b-card>

        <b-card>
          <p>test</p>
        </b-card>


     </b-card-group>
  </b-container>
</template>

<script>

import FormInputNumber from './FormInputNumber.vue'

export default {
  name: 'Form',

  components:{
    FormInputNumber
  },

  data() {
      return {

        form: {
          iWidth: '',
          iHeight: '',
          iX:'',
          iY:'',
          iOrientation: null,
          iComands:''
        },

        orientation: [
          { text: 'North', value: 'N'},
          { text: 'South', value: 'S'},
          { text: 'East', value: 'E'},
          { text: 'West', value: 'W'},
          ],
        show: true
      }
    },

    methods: {
      onSubmit(event) {
        event.preventDefault()
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

