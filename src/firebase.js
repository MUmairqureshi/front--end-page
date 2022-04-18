// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// const app = firebase.initializeApp({
//   apiKey: "AIzaSyD2FGV1f456gIktsE-Q27w0V3rbhlgITkg",
//   authDomain: "test-dev-eec50.firebaseapp.com",
//   projectId: "test-dev-eec50",
//   storageBucket: "test-dev-eec50.appspot.com",
//   messagingSenderId: "825626825081",
//   appId: "1:825626825081:web:6a0ee787fbbea3bc3f9fa8"
// })

// export const auth = app.auth()
// export default app










import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import "firebase/auth"
const app = firebase.initializeApp({
  apiKey: "AIzaSyD2FGV1f456gIktsE-Q27w0V3rbhlgITkg",
  authDomain: "test-dev-eec50.firebaseapp.com",
  projectId: "test-dev-eec50",
  storageBucket: "test-dev-eec50.appspot.com",
  messagingSenderId: "825626825081",
  appId: "1:825626825081:web:6a0ee787fbbea3bc3f9fa8"
})

export const auth = app.auth()
export default app