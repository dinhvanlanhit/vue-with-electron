<template>
  <q-layout>
    <q-page-container>
      <q-page
          class="window-height window-width row justify-center items-center"
          style="background: linear-gradient(135deg,  #EA5C54  0%,#bb6dec 100%);"
      >
        <div class="column">
          <div class="row">
            <q-form class="q-gutter-md" @submit.prevent="onSubmit">
              <q-card square dark class="q-pa-md q-ma-none no-shadow bg-grey-10" style="width:350px;">
              <q-card-section>
                <div class="q-gutter-md">
                  <q-input dark dense square filled clearable v-model="email" type="email" label="Email">
                    <template v-slot:prepend>
                      <q-icon name="email" />
                    </template>
                  </q-input>
                  <q-input dark dense square filled clearable v-model="password" type="password" label="Password">
                    <template v-slot:prepend>
                      <q-icon name="lock" />
                    </template>
                  </q-input>
                </div>
              </q-card-section>
              <q-card-actions>
                <div class="row full-width items-center">
                  <div class="col-6">
                    <q-btn outline rounded size="md" color="red-4" type="submit" class="full-width text-white" label="Sign In" />
                  </div>
                  <div class="col-6">
                    <p class="text-no-wrap text-grey text-caption text-right">Forgot password?</p>
                  </div>
                </div>
              </q-card-actions>
            </q-card>
            </q-form>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit() {
      console.log('onSubmit');
      this.$router.push('/dashboard');
    }
    // onRegister:() => {}
  }
}
</script>