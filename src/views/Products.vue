<template>
<v-app :style="{background: $vuetify.theme.themes.dark.background}">
   <v-main>
     <Navbar2/>

     <!-- Diese Komponente enthält alle verfügbaren Kategorien und Produkte. 
     Die Kategorien werden mit "v-item-group" angezeigt, die Karten enthalten. 
     Abhängig von der Aktivität der Klasse (ob sie aktiv ist oder nicht) 
     ändert die Karte ihre Farbe. Dazu wird die von uns erstellte Komponente 
     "ProdVor" aufgerufen und die Props übergeben. -->


    <v-img src="@/assets/products1.jpg" height="600" width="auto">
            <v-container fill-height>
                <v-row>
                    <v-col  align="center">
                        <div class="Path1"> 
                            <div class="className">Products</div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-img>
   </v-main>  
  <v-item-group mandatory class="mt-16 mb-16">
    <v-container>
      <v-row justify="center" class="space">
        <v-col cols="12" xs="12" sm="4" md="2" v-for="(cetegory, i) in categories" :key="i">
          <v-item v-slot="{ active, toggle }">
            <v-card :color="active ? '#EDEEEC' : 'white'" class="d-flex align-center" dark height="180" @click="toggle"
              elevation="22"
            >
              <v-row>
                <v-col cols="12" sm="12"> 
                  <v-list-item three-line class="text-center">
                    <v-list-item-content>
                      <div align="center" justify="center">
                        <i max-height="80" max-width="80" contain><v-icon color="black" size="40"> {{cetegory.icon2}} </v-icon></i>
                      </div>
                      <v-text :class="active ? 'black--text font-weight-bold text-decoration-underline' : 'black--text'" class="caption mt-4"
                        >{{ cetegory.title }}</v-text>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>


  <v-container>
    <v-row justify="center" class="text-decoration-underlin">
            <ProdVor titlee="PM-8546" pricee="13,40 €/m²" logo="prod1.jpeg" />
            <ProdVor titlee="PM-8546" pricee="13,40 €/m²" logo="prod2.jpeg" />
            <ProdVor titlee="PM-8546" pricee="13,40 €/m²" logo="prod3.jpeg" />
            <ProdVor titlee="PM-8546" pricee="13,40 €/m²" logo="prod4.jpg" />
            <ProdVor titlee="PM-8546" pricee="13,40 €/m²" logo="prod5.jpeg" />
            <ProdVor titlee="PM-8546" pricee="13,40 €/m²" logo="prod6.jpeg" />
            <ProdVor titlee="PM-8546" pricee="13,40 €/m²" logo="prod1.jpeg" />
            <ProdVor titlee="PM-8546" pricee="13,40 €/m²" logo="prod2.jpeg" />
            <ProdVor titlee="PM-8546" pricee="13,40 €/m²" logo="prod3.jpeg" />
            <ProdVor titlee="PM-8546" pricee="13,40 €/m²" logo="prod4.jpg" />
            <ProdVor titlee="PM-8546" pricee="13,40 €/m²" logo="prod5.jpeg" />
        </v-row>
  </v-container>
  <Formular/>
  <Footer/> 
</v-app>
</template>

<script>

    import Navbar2 from '../components/Navbar2'
    import Footer from '../components/Footer'
    import Formular from '../components/Formular'
    import ProdVor from   '../components/ProdVor'
    // import logo from '@/assets/contact.jpg'

   export default {
    name: 'Products',
    components: {
      Navbar2,
      Footer,
      Formular,
      ProdVor,
      },
  data () {
      return {
        // logoObject: logo,
    products: [
      { img: "prod1.jpeg", title: "PM-8546", price: "13,40 €/m²" },
      { img: "prod2.jpeg", title: "PM-8546",  price: "13,40 €/m²" },
      { img: "prod3.jpeg", title: "PM-8546", price: "13,40 €/m²" },
      { img: "prod4.jpg", title: "PM-8546", price: "13,40 €/m²" },
      { img: "prod5.jpeg", title: "PM-8546", price: "13,40 €/m²" },
      { img: "prod6.jpeg", title: "PM-8546",  price: "13,40 €/m²" },
      { img: "prod6.jpeg", title: "PM-8546",  price: "13,40 €/m²" },
      { img: "prod6.jpeg", title: "PM-8546",  price: "13,40 €/m²" },
      { img: "prod6.jpeg", title: "PM-8546",  price: "13,40 €/m²" },
      { img: "prod6.jpeg", title: "PM-8546",  price: "13,40 €/m²" },
      { img: "prod6.jpeg", title: "PM-8546",  price: "13,40 €/m²" },
    ],
    categories: [
      { title: "All Products" , icon:"fa-solid fa-3x fa-plus", iconn:"mdi-map-marker", icon2:"layers"},
      { title: "Panneaux Mélaminé" ,icon:"fa-solid fa-3x fa-house", iconn:"mdi-map-marker", icon2:"king_bed"},
      { title: "Panneaux High Gloss",icon:"fa-solid fa-3x fa-toilet", iconn:"mdi-map-marker", icon2:"countertops" },
      { title: "Panneaux Placage",icon:"fa-solid fa-3x fa-store" , iconn:"mdi-map-marker", icon2:"apartment"},
      { title: "Panneaux Digital Polylac" ,icon:"fa-solid fa-3x fa-tree", iconn:"mdi-map-marker", icon2:"table_restaurant"},
      { title: "Panneaux Polylac" ,icon:"fa-solid fa-3x fa-tree", iconn:"mdi-map-marker", icon2:"shower"},

    ],

     methods: {
        topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    },
    }
    }
}
</script>

<style scoped>


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
    }}

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

    .cont{
        flex-wrap: wrap;
    }

  .bords{
    margin-left: 10%;
    margin-right: 10%;
  }

  .flip-card {
  background-color: transparent;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-back {
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
}

.essai{
  margin-bottom: 60%;
  margin-top:44%;
}

i{
  color: black;
}

.prodTitle{
    font-family: Montserrat, sans-serif;
    font-size:18px;
}


.prodPrice{
    font-family: Montserrat, sans-serif;
    font-size:15px;
}


.prodPhoto:hover {
  transform: scale(1.1); 
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