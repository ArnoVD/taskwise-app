<template>
  <div>
    <h1>Create an Account</h1>
    <p><input type='text' placeholder='Email' v-model='email'/></p>
    <p><input type='password' placeholder='Password' v-model='password'/></p>
    <p><button @click='register'>Submit</button></p>
    <p><button @click='signInWithGoogle'>Sign In With Google</button></p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import router from '@/router'

const email = ref("");
const password = ref("");

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Successfully registered!", data);
      router.push("/feed"); // redirect to the feed
    })
};

const signInWithGoogle = () => {

};
</script>