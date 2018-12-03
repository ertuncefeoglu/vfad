import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let app= '';

const config = {
    apiKey: "AIzaSyBVDQpoOzKJsT8_GKWqd6fLzVd8btAa7og",
    authDomain: "vfad-a51a5.firebaseapp.com",
    databaseURL: "https://vfad-a51a5.firebaseio.com",
    projectId: "vfad-a51a5",
    storageBucket: "",
    messagingSenderId: "756318378575"
  };
  firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() =>  {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
});

