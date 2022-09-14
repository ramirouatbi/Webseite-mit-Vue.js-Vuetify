<template>
<v-app :style="{background: $vuetify.theme.themes.dark.background}">
   <v-main>
     <Navbar2/>
    <v-img src="@/assets/request1.jpg" height="600" width="auto">
            <v-container fill-height>
                <v-row>
                    <v-col  align="center">
                        <div> 
                            <div class="className">Request</div> 
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-img>
   </v-main>  
   
    <Formular/>
    <Footer/>
    </v-app>
</template>

<script>

import Navbar2 from '../components/Navbar2'
import Footer from '../components/Footer'
import Formular from '../components/Formular'

export default {
    name: 'Request',
    components: {
      Navbar2,
      Footer,
      Formular
      },
  data () {
    return { 
    }
  }
};
</script>



<style>


</style>