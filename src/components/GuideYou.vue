<template>
<section id="download">

  <!-- Grid wird auch erstellt um ein Block zu erstellen. 
  Es geht darum, dass dem Kunde daz Ziel der Firma erklärt wird. -->
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col sm="4" class="hidden-xs-only">
              <v-img src="@/assets/logo2blue.png" class="d-block ml-auto mr-auto" max-width="450px" data-aos="fade-right" data-aos-duration="1000" />
            </v-col>
            <v-col cols="12" sm="8" class="white--text text-left" data-aos="fade-left" data-aos-duration="1000">
              <h1 class="font-weight-light display-2 mb-2">We guide you</h1>
              <h1 class="font-weight-light">
                Are you planning to install shelves, a false ceiling, curtain rods, or a new drawer slide? 
                Don't panic! We are here to help you with all your tasks, big or small, simple or complex 
              </h1>
              <v-row class="mt-2">
              <v-btn rounded outlined href="/contact" target="_blank" large class="mt-4 mr-4 myButtonGuide"> <!-- color="white" -->
                <v-icon class="mr-2">
                  phone
                </v-icon>
                +216 22516179
              </v-btn>
              <v-btn rounded outlined href="" target="_blank" large class="mt-4 myButtonGuide">
                <v-icon class="mr-2">
                  person
                </v-icon>
                CHIHAOUI
              </v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>

  export default {
    name: 'GuideYou',
    data(){

    }
  }
</script>

<style scoped>

  #download {
  background-image: url("@/assets/guide4.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
  margin-top: 5%;
  margin-bottom: 5%;
}

#download .container,
#download .row {
  height: 100%;
}

.myButtonGuide{
  color:white!important;
}

</style>
