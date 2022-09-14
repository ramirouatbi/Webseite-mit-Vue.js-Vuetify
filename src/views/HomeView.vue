<template>
  <v-app :style="{background: $vuetify.theme.themes.dark.background}">
   <v-main>
     <Navbar2/> <!-- Die Komponente Navbar wird Aufgerufen -->

   <!-- Die Komponente Carousel wird eine Transition haben. 
   Sie wird mit einer For-Schleife angezeigt, 
   indem sie alle Infornationen von dem Array slider durchläuft -->

     <Transition name="fade" appear>
    <v-card class="elevation-23 animate__animated animate__lightSpeedInRight">
      <v-carousel cycle height="800" class="my-carousel">
        <v-carousel-item v-for="item in slides" :key="item.id" :src="item.src" :transition="fade-translation"> 
          <v-container fill-height>
          <v-row>
            <v-col align="center">
              <v-text class="className"><strong>{{item.description}}</strong></v-text>
            </v-col>
          </v-row>
          </v-container>
        </v-carousel-item>
      </v-carousel>
    </v-card>
    </Transition>

    <!-- Externes Plugin zur Imitation einer Tippmaschine -->

   </v-main>
      <v-row>
          <v-col align="center" class="animate__animated animate__flip mt-16 hidden-md-and-down"><h1 class="text1 display-4"><vue-typer :type-delay='200' text='SELECT YOUR STYLE'></vue-typer> </h1></v-col>
      </v-row>
      <v-row>
          <v-col align="center" class="animate__animated animate__flip mt-16 hidden-lg-and-up hidden-xs-only"><h1 class="text1 display-2"><vue-typer :type-delay='200' text='SELECT YOUR STYLE'></vue-typer> </h1></v-col>
      </v-row>
      <v-row>
          <v-col align="center" class="animate__animated animate__flip mt-16 hidden-sm-and-up"><h1 class="text1 display-1"><vue-typer :type-delay='200' text='SELECT YOUR STYLE'></vue-typer> </h1></v-col>
      </v-row>
      <v-row>
          <v-col align="center" class="animate__animated animate__flip mb-14"><h1 class="text2 display-2"><vue-typer :type-delay='200' text='OUR PRODUCTS'></vue-typer> </h1></v-col>
      </v-row>

      <!-- Die For-Schleife wird das Array produkte durchlaufen, um alle Produkte anzuzeigen.
      Wenn Sie mit der Maus über ein Produkt gehen, wird ein Button angezeigt, 
      der Sie zur entsprechenden Produktseite weiterleitet -->

   <v-container class="cont mr-auto mb-16">
    <v-layout row wrap>
      <v-row justify="center">
        <v-flex xs3 xl2 class="essai " v-for="item in produkte" :key="item.title" data-aos="flip-left" data-aos-duration="2000">
          <v-hover>
              <v-img slot-scope="{hover}" :src="item.url" :aspect-ratio="9/16">
                  <v-expand-transition>
                    <div v-if="hover" class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text" style="height: 100%;">
                      <v-btn v-if="hover" href="/Produkte" class="" outlined>{{item.title}}</v-btn>
                    </div> 
                  </v-expand-transition>
              </v-img>
          </v-hover>
        </v-flex>
    </v-row>
    </v-layout>

   <!--  Ein Block zur Beschreibung des Unternehmens mit dem Konzept der Mission, Vision und Werte 
    mit einem Foto einer Tür auf der rechten Seite. 
    Das Ganze mit Scroll-Animationen -->

   </v-container>
    <section id="about" class="my-16">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="9">
          <v-row align="center" justify="center">
            <v-col cols="12" md="7">
              <v-row class="ml-16 metrage" xs="2">
                <v-col cols="12" xs="2" class="d-flex align-center">
                  <v-img data-aos="fade-right" data-aos-duration="3000" src="@/assets/mission.png" max-width="60px" class="ml-13 mb-9"/>                  
                  <p data-aos="fade-left" data-aos-duration="3000" class="text-justify paragraphe">
                    Our mission is to continue to provide our customers with the best in materials and a 
                    wide variety of cutting edge choices through our continual search for the next new innovation.
                  </p>
                  
                </v-col>
               <v-col cols="12" xs="2" class="d-flex align-center">
                  <v-img data-aos="fade-right" data-aos-delay="200" data-aos-duration="3000" src="@/assets/vision.png" max-width="60px" class="ml-13 mb-9"/>
                  <p data-aos="fade-left" data-aos-delay="200"  data-aos-duration="3000" class="text-justify paragraphe">
                    Our vision is to continue to grow as a first class distribution company that offers excellent
                     products incorporating value added service and expertise to ensure customer satisfaction.
                  </p>
                </v-col>
                <v-col cols="12" xs="2" class="d-flex align-center">
                  <v-img data-aos="fade-right" data-aos-delay="400" data-aos-duration="3000" src="@/assets/values.png" max-width="60px" class="ml-13 mb-9"/>
                  <p data-aos="fade-left" data-aos-delay="400" data-aos-duration="3000" class="text-justify paragraphe">
                    Chihaoui operates by the following guiding principles:  
                    Honesty, Integrity, Customer Service,
                    Quality, Diversity, and Innovation.
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="5" class="d-none d-md-flex">
              
              <v-img src="@/assets/melamine.png" class="d-block ml-auto mr-auto essaiimg" :class="hover ? 'zoom' : ''" max-width="450px" data-aos="fade-up-left" data-aos-duration="3000" />
            
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    </section>
    <Clients/> <!-- Die Komponente Clients wird Aufgerufen -->
    <GuideYou/> <!-- Die Komponente GuideYou wird Aufgerufen -->
    <Formular/> <!-- Die Komponente Formular wird Aufgerufen -->
    <Footer/> <!-- Die Komponente Footer wird Aufgerufen -->
  </v-app>
</template>


<script>
  import Navbar2 from '../components/Navbar2'
  import Footer from '../components/Footer'
  import Clients from '../components/Clients'
  import GuideYou from '../components/GuideYou.vue'
  import Formular from '../components/Formular.vue'

  import {ref} from 'vue'

  export default {
    name: 'Home',
    components: {
      Navbar2,
      Footer,
      Clients,
      GuideYou,
      Formular,
    },
    
    data(){
      return{
        drawer: null,
        isXs: false,
        // Array mit allem Slides Informationen
         slides:[
          {id:1,num:'first', src:'s1.jpg',description:'First Wood Supplier in Tunisia'},
          {id:2,num:'second',src:'s2.jpg',description:'Oldest Company'},
          {id:3,num:'third', src:'s3.jpg',description:'Best Quality'},
          {id:4,num:'fourth',src:'s4.jpg',description:'Lowest price'},
          {id:5,num:'funfth',src:'s5.jpg',description:'7/7 Customer Service'},
        ],
        // Array mit allem Produkte Informationen
        produkte: [
        { title: 'PANNEAUX POLYLAC', url: 'Polylac.jpg' },
        { title: 'PANNEAUX DIGITAL POLYLAX', url:'Digital.jpeg' },
        { title: 'PANNEAUX MATT', url:'Matt.jpg' },
        { title: 'PANNEAUX MELAMINE', url:'Melamine.jpg' },
        { title: 'PANNEAUX PLACAGE', url:'Placage.jpg' },
        	],
    }}
  }
</script>

<style scoped>

.paragraphe{
  margin-left:10%;
}

.titlepre{
  font-family:'Copperplate Gothic Light';
}

.vue-typer {
  font-family: Copperplate, 'Copperplate Gothic Light', fantasy;
}
.vue-typer .custom.caret.selecting {
  display: inline-block;
  background-color: #E91E63;
}

.metrage{
  margin-left:20%;
}

#about p{
  margin-right: 50px;
}

.title1{
  /* font-family: "Avenir Next", sans-serif; */
   font-family: "Oswald";
  font-weight: 900;
  font-size: 64px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color:#014270;
  margin-bottom: -20px;
}

.title2{
   color:#014270;
  font-family: "Oswald";
  font-size: 2rem;
  margin-bottom:5%;
}
  .v-card--reveal{
    align-items:center;
    bottom:0;
    justify-content:center;
    opacity:0.5;
    position: absolute;
    width:100%;
    color : white;
  }

  .essaiimg:hover {
  transform: translate3D(0,-1px,0) scale(1.29);
}

  .text1{
    color :#014270;
  }

  .child{
      display:inline-block;
      padding: 2rem 1rem;
      vertical-align: middle;
      text-align: left;
      margin-right: 8px;
  }

#about {
  /* background-color: #f4f7f5; */
  background-color: #EDEEEC;
}
  .bgColor1{
    background-color: #0B0B61;
  }

  .child1{
    display:inline-block;
    padding : 2rem 1rem;
    vertical-align: middle;
    margin-right: 5px;
    width : 240px;
  }

  .child2{
    display: inline-block;
    width : 240px;
    vertical-align: middle;
  }

  .mRight{
    margin-right: 8px;
  }


  .block1{
    width : 70%;
    margin-top : 200px;
    background-color: #D8D8D8;
    margin-bottom: 200px;
    height:auto;
  }

  .photo2{
    right:-20%;
    top:-40%;
    }

  .title{
    color : #014270;
    padding-left:30%;
  }

  .descr{
    color:gray;
    padding-left:30%;
    font-size:500px;
  }

  @media (max-width:882px){
      .descr{
        padding-left:10%;
    }
  }

  .textblock{
    margin-left:20px;
  }

  .button1{
    opacity: 1;
    position:absolute;
    bottom:40%;
    left:30%;
    right:30%;
  }


  @media (max-width:870px){
      .block1{
        height: 1500px;
    }
  }

  .descrip{
    font-size: 0.8em;
  }


.className{
    font-family: Montserrat, sans-serif;
    color:white;
    font-size:60px;
    text-shadow: 0 0 10px rgb(0 0 0 / 30%);
    font-weight:700;
 ;
}

 .before-enter {
    opacity: 0;
    transform: translateY(100px);
    transition: all 2s ease-out;
  }

 .enter {
    opacity: 1;
    transform: translateY(0px);
  }

  /* .fade-enter-from{
    opacity:0;
  }

  .fade-enter-active{
    transition:opacity 3s ease;
  }

   .fade-leave-to{
    opacity:0;
  }

  .fade-leave-active{
    transition:opacity 3s ease;
  } */

</style>
