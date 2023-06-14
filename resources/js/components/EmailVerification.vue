
<template>
  <div><h1>i am from verify email</h1></div>
</template>

<script>
import axios from "axios";
export default {
    data() {
    return {
      decodedUrl: '',
    };
  },
  
    mounted() {
    const encodedURL = window.location.href;
const decodedURL = decodeURIComponent(encodedURL);
console.log(decodedURL);



// Find the index of the start of the desired part
const startIndex = decodedURL.indexOf("url=") + 4;

// Extract the substring starting from the desired part
const desiredPart = decodedURL.substring(startIndex);

console.log(desiredPart);;
axios.get(`${desiredPart}`).then(response=>{
 console.log("request gese");
})


  }
  ,
  methods: {
   
    decodeUrl() {
      // Access the current route's path from Vue Router
      const encodedUrl = "http://127.0.0.1:8000/test/verify-email?url=http%3A%2F%2F127.0.0.1%3A8000%2Femail%2Fverify%2F30%2F7fa1613cd69894605bd57828e03a6458460f6e4c%3Fexpires%3D1686428510%26signature%3D9b9a3987eefd571b747cda79205a4f2a5cc0215a13145f3358a93f1904f0bd5a";

      // Decode the URL using decodeURIComponent
      this.decodedUrl = decodeURIComponent(encodedUrl);
      console.log(this.decodedUrl)
    },
  },
};
</script>
