<template>

  <b-container>



        <div class="row mt-5">
    
          <div class="col-lg-6">
            <Form/>
          </div>

          <div class="col-lg-6">
            <Output/>
          </div>

        </div>


  </b-container>

</template>

<script>

import Form from '@/components/Form.vue'
import Output from '@/components/Output.vue'

export default {
  name: 'Home',
  components: {
    Form,
    Output,
  }
}
</script>
