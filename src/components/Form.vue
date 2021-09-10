<template>
  <b-container fluid="md">
      <b-card-group deck>

        <b-card header="Input Comands">

          <b-form @submit="onSubmit" @reset="onReset" v-if="show">

            <!--Dimensions of the square:-->
              <b-form-group
                id="input-group-1"
                label="Dimensions of the square:"
                label-for="input-1"
              >
                <b-form inline class="d-flex justify-content-between">
                    <b-form-input
                      id="input-1"
                      v-model="form.iWidth"
                      type="number"
                      min="0"
                      step="1"
                      placeholder="width"
                      class="text-center"
                      required 
                      ></b-form-input>
                  x
                    <b-form-input
                      id="input-2"
                      v-model="form.iHeight"
                      type="number"
                      min="0"
                      step="1"
                      placeholder="height"
                      class="text-center"
                      required
                    ></b-form-input>
                </b-form>
              </b-form-group>

            <!--Initial coordinates::-->
              <b-form-group
                id="input-group-2"
                label="Initial coordinates:"
                label-for="input-2"
              >
                <b-form inline class="d-flex justify-content-between">
                    <b-form-input
                      id="input-3"
                      v-model="form.iX"
                      type="number"
                      min="0"
                      step="1"
                      placeholder="X"
                      class="text-center"
                      required
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
                      required
                    ></b-form-input>
                </b-form>
              </b-form-group>

            <!--Orientation-->
              <b-form-group id="input-group-3" label="Initial orientation" label-for="input-3">
                <b-form-select
                  id="input-5"
                  v-model="form.iOrientation"
                  type="text"
                  :options="orientation"
                  required
                ></b-form-select>
              </b-form-group>

            <!--Comands-->
              <b-form-group id="input-group-4" label="Comands:" label-for="input-4"
              description="Please enter a set of commands: Advance (A), Turn left (L), Turn Right (R). ">
                <b-input-group>
                  <b-input-group-prepend>
                    <b-button type="button" variant="outline-secondary" v-b-tooltip.hover title="Advance">A</b-button>
                    <b-button type="button" variant="outline-secondary" v-b-tooltip.hover title="Turn left">L</b-button>
                    <b-button type="button" variant="outline-secondary" v-b-tooltip.hover title="Turn Right">R</b-button>
                  </b-input-group-prepend>
                <b-form-input
                  id="input-6"
                  v-model="form.iComands"
                  required
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
export default {
  name: 'Form',
  data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        orientation: [
          { text: '-- Please select an option --', value: null }, 'N', 'S', 'E', 'W'
          ],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
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

