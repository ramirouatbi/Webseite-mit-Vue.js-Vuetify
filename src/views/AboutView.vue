<template>
  <v-app :style="{background: $vuetify.theme.themes.dark.background}">
   <v-main>
     <Navbar2/>

     <!-- Diese Komponente enthält alle wichtigen Informationen 
    über das Unternehmen mit einem Container am Anfang, 
    der Fotos und Paraphernalia enthält, und einem weiteren 
    mit einem festen Foto im Hintergrund, das die Anzahl der Filialen, Mitarbeiter usw.
    Dann werden die Komponente Timeline und Team, die ich erstellt habe, aufgerufen. -->


    <v-img src="@/assets/aboutt4.jpg" height="600" width="auto">
            <v-container fill-height>
                <v-row>
                    <v-col  align="center">
                        <div> 
                            <div class="className">About Us</div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-img>
   </v-main>  




<v-container class="formm" align="center" justify="center" fill height>
            <v-row align="center" justify="center">
              <v-col cols="12" xl="10">
                <div class="blockk">
                  <v-container>
                    <h2 class="titlega text-center my-16">Chihaoui</h2>
                    <v-content class="mt-16">
                      <v-row  xl="12" lg="12" sm="8">
                        <v-col cols="12" sm="8" xl="6" lg="6" md="6" align="center">
                          <p align="justify" class="aboutPOne">Our primary objective is to satisfy our customers by providing them with products of impeccable quality at controlled prices. To achieve this primary objective, CHIHAOUI has gathered and trained the best workers in the country and strives to provide them with the best possible working conditions.

The company is always on the lookout for the latest innovations in woodworking and is constantly modernizing both its production tools and its manufacturing processes in order to constantly improve the quality of its production.</p>

<!-- Technological watch, continuous training and rigorous and innovative management are the main means we implement in order to guarantee your satisfaction.</p> -->
                        </v-col>
                        <v-col cols="12" xl="6" lg="6" sm="4" md="6">
                          <v-img src="@/assets/des1.jpeg" class="mb-16 ml-xl-16  ml-lg-16 ml-sm-5 ml-md-16 aboutOne" max-height="370" height="100%" width="100%" max-width="650" align="center" justify="center"></v-img>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" sm="8" xl="6" lg="6" md="6">
                                <p align="justify" class="aboutPTwo">CHIHAOUI is also your privileged advisor in terms of wood thanks to its expertise in the field. Which wood to choose according to the environment and use? How to maintain it so that it lasts over time? How to optimize the storage space in relation to the available surface? 
Our customers are always entitled to a VIP treatment from all our teams and collaborators and will always be welcomed in our premises in a friendly, warm and professional way.</p>
                              </v-col>
                        <v-col cols="12" xl="6" lg="6" sm="4" md="6">
                                <v-img src="@/assets/des3.jpg" max-height="370" height="100%" width="100%" max-width="650" class="mb-16 ml-xl-16  ml-lg-16 ml-sm-5 ml-md-16 aboutTwo" align="center" justify="center"></v-img>
                              </v-col>        
                      </v-row>
                    </v-content>
                  </v-container>
                </div>
              </v-col>
            </v-row>
          </v-container>
          <section id="download">
    <v-container fluid align="center" justify="center"> 
      <v-row>
        <v-col cols="12">
          <v-row align="center" justify="center">
            <v-col cols="12" xl="2" lg="3" sm="6" xs="6" justify="center" align="center">
              <v-icon color="black" size="120" class="my-9"> public</v-icon>
              <v-row>
                <v-col justify="center" align="center">
                <p class="mt-6 anzahl"><b> 5 </b></p>
                <p class="what"> <b>SUBSIDIARIES IN TUNISIA </b></p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" xl="2" lg="3" sm="6" xs="6" justify="center" align="center">
              <v-icon color="black" size="120" class="my-9"> emoji_people</v-icon>
              <v-row>
                <v-col justify="center" align="center">
                <p class="mt-6 anzahl"><b> 70 </b></p>
                <p class="what"> <b> WORKERS AND MANAGERS </b> </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" xl="2" lg="3" sm="6" xs="6" justify="center" align="center">
              <!-- <i class="fa-solid fa-7x fa-cart-shopping"></i> -->
              <v-icon color="black" size="120" class="my-9"> shopping_cart</v-icon>
              <v-row>
                <v-col justify="center" align="center">
                <p class="mt-6 anzahl"><b> 92 </b></p>
                <p class="what"><b> ARTICLES AND PRODUCTS </b></p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" xl="2" lg="3" sm="6" xs="6" justify="center" align="center">
              <v-icon color="black" size="120" class="my-9"> emoji_emotions</v-icon>
              <v-row>
                <v-col justify="center" align="center">
                <p class="mt-6 anzahl"><b> 1267 </b></p>
                <p class="what"><b> SATISFIED CUSTOMERS </b></p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" xl="2" lg="3" sm="6" xs="6" justify="center" align="center">
              <v-icon color="black" size="120" class="my-9"> location_city</v-icon>

              <v-row>
                <v-col justify="center" align="center">
                <p class="mt-6 anzahl"><b> 45 </b></p>
                <p><b> PARTICIPATION PROJECTS </b></p>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
    <Timeline/>
    <Team/>
    <Footer/>
    </v-app>
</template>

<script>

import Navbar2 from '../components/Navbar2'
import Footer from '../components/Footer'
import Timeline from '../components/Timeline'
import Team from '../components/Team'

export default {
    name: 'Contact',
    components: {
      Navbar2,
      Footer,
      Timeline,
      Team,
      },
  data () {
    return {
      
  }
  }
};
</script>

<style>

@import url('http://fonts.cdnfonts.com/css/brain-wants');


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
  /* font-family: headings-font-family; */
  font-family: 'Brain Wants', sans-serif;
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
    font-size: 35px;
    padding: 0 0 10px;
    margin: 0 0 40px;
    position: relative;
    font-family: 'Brain Wants', sans-serif;
  

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
  
    p{
      font-family: Montserrat, sans-serif;
      font-size:18px;
      line-height: 3rem;

       @media only screen and (max-width: 1904px) {
      line-height: 0rem;
      font-family : BrainWants;
      color:Red;
    }

    }

  #download {
  background-image: url("@/assets/berg4.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
  margin-top: 5%;
  margin-bottom: 5%;
  }

  @media (max-width:1264px){
      #download{
        height:1000px;

    }
  }

  @media (max-width:2000px){
      #download{
        height:1000px;
    }
  }

  @media (max-width:600px){
      #download{
        height:2000px;
        width:100%;
    }
  }


#download .container,
#download .row {
  height: 100%;
}


.anzahl{
  color:#426ea1;
  font-size:48px;
  font-family: Montserrat, sans-serif;
}

.what{
  font-family: Montserrat, sans-serif;
}

i{
  max-height:20px;
}

.aboutOne{
  max-height:370px; 
  max-width:650px;
}

.aboutTwo{
  max-height:370px; 
  max-width:650px;
}

@media (max-width:1264px){
      .aboutPTwo{
        font-size:18px;
        line-height: 2rem;
    }
}

@media (max-width:1264px){
      .aboutPOne{
        font-size:18px;
        line-height: 2rem;
    }
}

.className{
    font-family: Montserrat, sans-serif;
    color:white;
    font-size:60px;
    text-shadow: 0 0 10px rgb(0 0 0 / 30%);
    font-weight:700;
 ;
}


</style>
