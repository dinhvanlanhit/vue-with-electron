<template>
  <q-page padding>
    <q-card class="q-mx-auto" style="max-width: 400px;">
      <q-card-section>
        <q-form @submit="onSubmit">
          <q-input v-model="username" label="Username" />
          <q-input v-model="password" label="Password" type="password" />

          <q-card-actions align="right">
            <q-btn label="Login" type="submit" color="primary" />
          </q-card-actions>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    onSubmit() {
      // Xử lý đăng nhập ở đây
      console.log('Username:', this.username);
      console.log('Password:', this.password);
    }
  }
};
</script>
