<template>
<v-app :style="{background: $vuetify.theme.themes.dark.background}">
   <v-main>
     <Navbar2/>
    <v-img src="@/assets/contact3.jpg" height="600" width="auto">
            <v-container fill-height>
                <v-row>
                    <v-col  align="center">
                        <div> 
                            <div class="className">Contact</div> 
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-img>
   </v-main>  


   <v-layout row wrap>
    <v-container class="my-15">
        <v-row justify="center">
            <v-col lg="6" sm="9" xs="12">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.3043434740703!2d10.10161221555789!3d36.835186573428636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd338be26c9da3%3A0xbf97a01dcaa99ba9!2sHay%20ettadhamen!5e0!3m2!1sde!2stn!4v1654521671525!5m2!1sde!2stn" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </v-col>
            <v-col lg="6" sm="9" xs="12"> 
              <Liste/>
              <v-form ref="form">
                <v-text-field v-model="contactInfo.name" :counter="10" class="filname" label="Name" required></v-text-field>
                <v-text-field v-model="contactInfo.email" label="E-mail" class="filname" required></v-text-field>
                <v-textarea label="Message" class="filname" v-model="contactInfo.massage">
                </v-textarea>
                <v-btn color="#436fa3" class="mr-4 white--text">
                  Send
                </v-btn>

                <v-btn color="#dd2c00" class="mr-4 white--text" @click="reset">
                  Reset Form
                </v-btn>
              </v-form>
            </v-col>
        </v-row>
      </v-container>
    </v-layout>
    <Footer/>
    </v-app>
</template>

<script>

import Navbar2 from '../components/Navbar2'
import Footer from '../components/Footer'
import Liste from '../components/Liste'
import Listee from '../components/Listee'
import Formular from '../components/Formular'

export default {
    name: 'Contact',
    components: {
      Navbar2,
      Footer,
      Liste,
      Listee,
      Formular
      },
  data () {
    return {
        contactInfo:{

        },
        filiales:[
          {id:1,fil:'Tunis', num:'+21671787279' ,name:'Agence Tunis',mail:'chihaoui.tunis@chihaoui.tn' ,url:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6389.9573978012295!2d10.180014577340941!3d36.79506111128252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd340b5de63443%3A0x51d1c69b782b84b6!2sSidi%20Boumendil%20Market!5e0!3m2!1sde!2stn!4v1654620318931!5m2!1sde!2stn'},
          {id:2,fil:'Hay Ettadhamen', num:'+21671787278' ,name:'Agence Ettadhamen', mail:'chihaoui.ettadhamen@chihaoui.tn',url:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.3043434740703!2d10.10161221555789!3d36.835186573428636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd338be26c9da3%3A0xbf97a01dcaa99ba9!2sHay%20ettadhamen!5e0!3m2!1sde!2stn!4v1654521671525!5m2!1sde!2stn'},
          {id:3,fil:'Mehdia', num:'+21671787277' ,name:'Agence Mehdia', mail:'chihaoui.mehdia@chihaoui.tn', url:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.864000172022!2d11.053610415531622!3d35.50764094707947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1302234c8acbeb7f%3A0x172aed4c77b29af6!2sMahdia%20highlights%20design%20and%20decoration!5e0!3m2!1sde!2stn!4v1654620384964!5m2!1sde!2stn'},
          {id:4,fil:'Sousse', num:'+21671787276' ,name:'Agence Sousse', mail:'chihaoui.sousse@chihaoui.tn', url:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51757.441357219905!2d10.583034991216737!3d35.82839906113715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8ae1c2071907%3A0xfba69050f00325c3!2sAig%20L12!5e0!3m2!1sde!2stn!4v1654620466303!5m2!1sde!2stn'},
          {id:5,fil:'Ariana', num:'+21671787275' ,name:'Agence Ariana', mail:'chihaoui.ariana@chihaoui.tn' ,url:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25535.173684859627!2d10.152850318913442!3d36.86889109875586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb4b76f280ff%3A0xa8141427be368423!2sMG%20Maxi%20Ariana!5e0!3m2!1sde!2stn!4v1654620644718!5m2!1sde!2stn'},
        ],
    }
  },

   methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>



<style>

/* .infoo{
  font-family: 'Courgette', cursive;
} */

.filname{
  font-family: 'Hind', sans-serif;
  font-weight: 700;
}

.time{
  color:blue;
}

.day{
   color:blue;
}

/* .listee{
  color:Red;
  z-index: +2;
} */

.className{
    font-family: Montserrat, sans-serif;
    color:white;
    font-size:60px;
    text-shadow: 0 0 10px rgb(0 0 0 / 30%);
    font-weight:700;
 ;
}

</style>