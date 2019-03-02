import Rebase from "re-base";
import firebase from "firebase";




const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCXwV2wrbAHv25yKsi-Febrta40npUahOk",
  authDomain: "sea-food-restaurant.firebaseapp.com",
  databaseURL: "https://sea-food-restaurant.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;