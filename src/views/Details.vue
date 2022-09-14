<template>
<v-app :style="{background: $vuetify.theme.themes.dark.background}">
   <v-main>
     <Navbar2/>

     <!-- Diese Seite enthält die Details des Produkts. 
     Sie erbt alle Produkt Props, die hier wieder verwendet werden, 
     vor allem um das two-way databinding anzuwenden. 
     Ein "v-tabs" wird dann erstellt, um Informationen 
     über das Holz am Ende der Fotos, in denen dieses Produkt verwendet wurde, anzuzeigen. -->

    <v-img src="@/assets/conta2.jpg" height="600" width="auto">
            <v-container fill-height>
                <v-row>
                    <v-col  align="center">
                        <div> 
                            <div class="className">Details</div> 
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-img>
   </v-main>  
   
    <v-container class="my-16">
      <div class="row">
        <div class="col-md-5 col-sm-5 col-xs-12">
          <v-carousel>
            <v-carousel-item v-for="item in slides" :key="item.id" :src="item.url">
            </v-carousel-item>
          </v-carousel>
        </div>
        <div class="col-md-7 col-sm-7 col-xs-12">
          <v-breadcrumbs class="pb-0" :items="breadcrums"></v-breadcrumbs>
          <div class="pl-6">
            <p class="display-1 mb-0 mt-3">{{name}}</p>
            <v-card-actions class="pa-0">
              <p class="headline font-weight-light pt-3">€{{Price}}/m²</p>
              <v-spacer></v-spacer>
              <v-rating v-model="rating" class="" background-color="warning lighten-3"
                        color="warning" dense readonly></v-rating>
              <span class="body-2	font-weight-thin"> 25 REVIEWS</span>
            </v-card-actions>
            <p class="subtitle-1 font-weight-thin">
              {{Descripton}}
            </p>
            <v-row>
              <v-col xl="2">
                <p class="title">m²</p>
              </v-col>
              <v-col>
                  <p class="title">Total Price</p>
                </v-col>
            </v-row>
            <v-row>
                  <v-col xl="2">
                    <v-text-field outlined style="width:100px" :value="1" v-model="totPrice" dense></v-text-field>
                  </v-col>
                  <v-col>
                     €{{totPrice*Price}}
                  </v-col>
            </v-row>
            
            <v-btn class="primary white--text mt-6" to="/Request" outlined tile dense><v-icon>mdi-cart</v-icon> MAKE A REQUEST</v-btn>

          </div>

        </div>
      </div>

      <div class="row">
        <div class="col-sm-12 col-xs-12 col-md-12">
          <v-tabs>
            <v-tab >ADVANTAGES</v-tab>
            <v-tab >USAGE</v-tab>
            <v-tab-item>
              <p class="pt-10 subtitle-1 font-weight-thin">
               The use of melamine wood panels provides countless advantages. First, you can choose the color of your choice for your melamine wood panel. Moreover, wood panels for furniture are marketed in different aspects and finishes: glossy, structured wood, soft, frosted, super matte, satin, etc. The ease of maintenance is also a great advantage acquired with the use of melamine wood panels. They do not require any particular treatment unlike other materials.

If you wish to renovate your interior and are looking for a material that can combine technical and aesthetic constraints, a decorating professional will direct you towards melamine wood panels. In addition to being hygienic, melamine wood panels are recognized for their rot-proof character as well as their resistance to humidity, chemical products and shocks.

The wood panel as a material for facade decoration is an ecological product. This material is very popular for cladding a wood-frame building. Those who prefer authenticity and originality often opt for a wood panel façade. Depending on their tastes, customers can generally choose between several types of wood. Although it is more fragile than laminated wood panels, melamine wood panels are a first choice alternative because of the advantages they provide to the user.

              </p>
            </v-tab-item>
            <v-tab-item>
              <p class="pt-10 subtitle-1 font-weight-thin">
                - Home furniture, both bodies and facades  <br>
                - Bathroom and kitchen furniture <br> 
                - Integrated furniture<br>
                - Private and public interior design<br>
                - Hotel and boat interior design<br>
                - Interior design of caravans<br>
                - Store and living room furnishings<br>
                - Sports halls and festival halls<br>
                - Hotels and restaurants<br>
                - Health care centers<br>
                - Clinics and medical practices<br>
              </p>
            </v-tab-item>
            <v-tab-item>
              <v-list
                three-line="true"
                avatar="true"
              >
                <v-list-item-group v-model="item" color="primary">
                  <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    inactive="true"
                  >
                    <v-list-item-avatar>
                      <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title v-html="item.title"></v-list-item-title><v-rating v-model="rating" class="" background-color="warning lighten-3"
                                                                                           color="warning" dense></v-rating>
                      <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-tab-item>
          </v-tabs>
          <v-card-text
            class="pa-0 pt-4"
            tile
            outlined
          >
            <p class="headline font-weight-light pt-3 text-center mt-16"><strong>PROJECT WHERE {{name}} WAS USED</strong></p>
            <v-divider></v-divider>
            <div class="row text-center">
              <div class="col-md-2 col-sm-4 col-xs-12 text-center" >
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img class="white--text align-end" height="200px" src="projet6.jpg">
                      <v-card-title>Büro </v-card-title>
                    </v-img>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-12 text-center" >
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img class="white--text align-end" height="200px" src="projet1.jpg">
                      <v-card-title>Table </v-card-title>
                    </v-img>
                  </v-card>
                </v-hover>
              </div>
             <div class="col-md-2 col-sm-4 col-xs-12 text-center" >
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img class="white--text align-end" height="200px" src="projet3.jpg">
                      <v-card-title>Wall </v-card-title>
                    </v-img>
                  </v-card>
                </v-hover>
              </div>
             <div class="col-md-2 col-sm-4 col-xs-12 text-center" >
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img class="white--text align-end" height="200px" src="projet2.jpg">
                      <v-card-title>Furnitures </v-card-title>
                    </v-img>
                  </v-card>
                </v-hover>
              </div>
               <div class="col-md-2 col-sm-4 col-xs-12 text-center" >
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img class="white--text align-end" height="200px" src="project4.jpg">
                      <v-card-title>Küche </v-card-title>
                    </v-img>
                  </v-card>
                </v-hover>
              </div>
               <div class="col-md-2 col-sm-4 col-xs-12 text-center" >
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img class="white--text align-end" height="200px" src="projet5.jpg">
                      <v-card-title>Badezimmer </v-card-title>
                    </v-img>
                  </v-card>
                </v-hover>
              </div>
            </div>
          </v-card-text>
        </div>
      </div>
    </v-container>





   
    <Footer/>
    </v-app>
</template>

<script>

import Navbar2 from '../components/Navbar2'
import Footer from '../components/Footer'
import Formular from '../components/Formular'

export default {
    name: 'Details',
    components: {
      Navbar2,
      Footer,
      Formular
      },
  data () {
    return {
        rating:4.5,
        name:'PM-8546',
        Price: 13.80,
        totPrice:0,
        Descripton: 'A melamine wood panel is a wood-based material. It is coated under heat and pressure with a decorative paper sheet impregnated with melamine resin. It is often referred to by its short name: melamine.',
            breadcrums: [
                {
                    text: 'Home',
                    disabled: false,
                    href: '/home',
                },
                {
                    text: 'Panneaux Mélaminé',
                    disabled: false,
                    href: '/Products',
                },
                {
                    text: 'PM-8546',
                    disabled: true,
                    href: 'Details',
                },
            ],
            item: 5,
            items: [
                { avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    title: 'Lorem ipsum dolor?',
                    subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Tincidunt arcu non sodales neque sodales ut etiam. Lectus arcu bibendum at varius vel pharetra. Morbi tristique senectus et netus et malesuada.\n" +
                        "\n",
                },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                    title: 'Lorem ipsum dolor <span class="grey--text text--lighten-1">4</span>',
                    subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
                },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                    title: 'Lorem ipsum dolor',
                    subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                    title: 'Lorem ipsum dolor',
                    subtitle: ""
                },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
                    title: 'Lorem ipsum dolor',
                    subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                },
            ],

           slides:[
          {id:1,url:"prod1.jpeg"},
          {id:2,url:"prod1.jpeg"},
          {id:3,url:"prod1.jpeg"},
          {id:4,url:"prod1.jpeg"},
          {id:5,url:"prod1.jpeg"},
        ],
    }    
  }
};
</script>



<style>



</style>