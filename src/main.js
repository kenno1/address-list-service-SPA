import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyA8CoA8ZhTVXGyrPhuwWnwbGd9QdqPeLxQ",
  authDomain: "myaddress-pj-28355.firebaseapp.com",
  databaseURL: "https://myaddress-pj-28355.firebaseio.com",
  projectId: "myaddress-pj-28355",
  storageBucket: "myaddress-pj-28355.appspot.com",
  messagingSenderId: "280813480944",
  appId: "1:280813480944:web:922344eaa669c3c5d20b35",
  measurementId: "G-FVEL6GKZJG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
