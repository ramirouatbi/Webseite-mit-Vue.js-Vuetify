<template>
    <div>

      <!--  Diese Seite enthält nur die Komponente v-expansion panel, 
      die sich mit einem Klick vergrößert und weitere Daten anzeigen kann. 
      Es war nützlich, um die Informationen der einzelnen Fillalen anzuzeigen. -->
      
        <v-expansion-panels focusable class="mb-16 listee">
      <v-expansion-panel v-for="item in filiales" :key="item.id">
        <v-expansion-panel-header class="listee"><span class="filname"><v-icon class="mx-2">mdi-map-marker</v-icon>{{item.fil}}</span></v-expansion-panel-header>
        <v-expansion-panel-content class="contentt">
          <v-container>
            
            <v-row> 
              <v-col>
            <div><span class="filname">{{item.name}}</span></div>
            <v-divider></v-divider>
            <div><span class="filname">Number : </span><span class="infoo"><i>{{item.num}}</i></span></div>
            <v-divider></v-divider>
             <div><span class="filname">Email : </span><span class="infoo"><i>{{item.mail}}</i></span></div>
             <v-divider></v-divider>
            <div><span class="filname">Opening hours : </span></div>
            <div><i><span>MON : </span><span>8:00AM - 5:00PM</span></i></div>
            <div><i><span>TUE : </span><span >8:00AM - 5:00PM</span></i></div>
            <div><i><span>WED : </span><span>8:00AM - 5:00PM</span></i></div>
            <div><i><span>THU : </span><span>8:00AM - 5:00PM</span></i></div>
            <div><i><span >FRI : </span><span>8:00AM - 5:00PM</span></i></div>
            <div><i><span >SAT : </span><span >8:00AM - 1:00PM</span></i></div>
        
            </v-col>
            <v-col>
            <iframe :src="item.url" width="100%" height="auto" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </v-col>
          </v-row>
          
          </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    </div>
</template>

<script>

export default {
    name: 'Liste',
    components: {

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