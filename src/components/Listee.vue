<template>
    <div>
        <!-- <v-layout > -->
          <v-container class="formm">
            <v-row align="center" justify="center">
              <v-col cols="2">
                <div class="block">
                  <v-container>
                    <h2 class="titlega text-center">Make a Request</h2>
                  </v-container>
                </div>
              </v-col>
            </v-row>
            <v-row align="center" justify="center" class="mx-9">
              <v-col cols="5">
                <p class="prep"><strong>Full Name</strong></p>
                <v-text-field title="Full Nameee" id="fullName" prepend-icon="message"></v-text-field>
              </v-col>
              <v-col cols="5">
                <p class="prep"><strong>Phone</strong></p>
                <v-text-field title="Phone" id="phone" prepend-icon="phone"></v-text-field>
              </v-col>
            </v-row >
              <v-row align="center" justify="center" class="mx-9"> 
                  <v-col cols="10">
                    <p class="prep"><strong>E-Mail Adress</strong></p>
                    <v-text-field title="E-Mail Adress" id="mail" prepend-icon="mail" type="mail"></v-text-field>
                  </v-col>
              </v-row>
              <v-row align="center" justify="center" class="mx-9">
                <v-col cols="10">
                  <p class="prep"><strong>Message</strong></p>
                  <v-textarea title="Message" prepend-icon="message"></v-textarea>
                </v-col>
              </v-row>
              <v-row align="center" justify="center">
                  <v-btn class="ma-2 mb-14 mt-9 white--text" :loading="loading" :disabled="loading" color="indigo lighten-1" @click="loader = 'loading';if(checkMail()) alertmail=true;if(checkPhone()) alertphone=true ;if(checkFullName()) alertname=true">
                      SEND
                  </v-btn>
                </v-row>
                <v-alert :value="alertmail" type="error" transition="slide-y-transition" class="mt-1">
                    Your E-mail is invalid.               
                </v-alert>
                <v-alert :value="alertphone" type="error" transition="slide-y-transition" class="mt-1">
                    Your Phone Number is invalid.               
                </v-alert>
                <v-alert :value="alertname" type="error" transition="slide-y-transition" class="mt-1">
                    Your Full Name is invalid.               
                </v-alert>
          </v-container>
        <!-- </v-layout> -->
    </div>
</template>

<script>

  export default {
    name: 'Listee',
    data () {
      return {
        loader: null,
        loading: false,
        loading2: false,
        loading3: false,
        loading4: false,
        loading5: false,
        name:"rami",
        alertmail: false,
        alertname:false,
        alertphone:false,
      }
    },
     watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    },
  },

  methods:{
    onClicked(){
      console.log(this.name)
    },

    checkPhone(){
      var phone = document.getElementById("phone").value
      var phonePattern = /^\+?[0-9]{7,14}$/;
      if(!phone.match(phonePattern))
     {
        console.log("Phone pas correct")
        return true;
     }
      console.log("PHONE REUSSI")
    },

  
    checkMail(){
      const mai = document.getElementById("mail").value
      var mailPattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/
      if (!mai.match(mailPattern))
      {
          console.log("Mail pas correct")
          return true;
      }
      console.log("Mail REUSSI")
    },

    checkFullName(){
      const full = document.getElementById("fullName").value
      var fullNamePattern = /(^[A-Za-z]{2,20})([ ]{1})([A-Za-z]{2,20})$/
      if(!full.match(fullNamePattern))
     {
          console.log("Full Name pas correct")
          return true
      }
      console.log("Full Name REUSSI")
      console.log(full)
    }
  },
}
</script>

<style scoped>

input:focus{
    background-color:blueviolet;
}


input {
  box-shadow: 0px -5px 10px 0px rgba(0, 0, 0, 0.5)
}

.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}

.formm{
  /* margin-left: 11%;
  margin-right: 3%; */
  margin-bottom: 10%;
  margin-top:2%;
  background-size: cover;
  

}




@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

h1,
.h1,
h2,
.h2,
h3,
.h3,
h4,
.h4,
h5,
.h5,
h6,
.h6 {
  font-family: headings-font-family;
  font-weight: 500;
  margin: 0 0 0.5em;
  color: headings-color;
}

h2,
.h2 {
  font-size: 20px;
}


.block {
  padding: 60px 0;
  border-bottom: 1px solid darken(white, 10%);

  @media only screen and (max-width: 599px) {
    padding: 20px 0;
  }}

.titlega{
    font-size: 30px;
    padding: 0 0 10px;
    margin: 0 0 40px;
    position: relative;
  

    @media only screen and (max-width: 599px) {
      font-size: 24px;
      padding: 0 0 5px;
      margin: 0 0 25px;
    }
    }

    .titlega::after {
      content: '';
      background: black;
      width: 60px;
      height: 1px;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);

      @media only screen and (max-width: 599px) {
        width: 30px;
      }
    }

    .prep{
      font-weight: 600;
      
    }
</style>