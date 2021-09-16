<template>        
        
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

</template>

<script>
export default {
  name: 'Output',

}
</script>
