// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'afiresocialnetwork',
    appId: '1:233452489182:web:410b0658385ff0eb20f54f',
    storageBucket: 'afiresocialnetwork.appspot.com',
    locationId: 'us-east1',
    apiKey: 'AIzaSyAwLN_2mBLtY2KCSO9tfcOP51r7mb6JS8Y',
    authDomain: 'afiresocialnetwork.firebaseapp.com',
    messagingSenderId: '233452489182',
    measurementId: 'G-DZRVZFK704',
  },
  production: false
};

export const present: boolean = true;

/* export const API_URL: string = "http://localhost:9015/AfireSocialNetwork"
export const SOCKET_URL: string = "ws://localhost:9015/AfireSocialNetwork/api/chat" */

export const API_URL: string = "http://34.139.12.234:8080/AfireSocialNetwork"
export const SOCKET_URL: string = "ws://34.139.12.234:8080/AfireSocialNetwork/api/chat"