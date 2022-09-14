<template>

  <!-- Ein Grid wird mit v-row und v-col erstellt 
  um die Karten der Kunden anzuzeigen. 
  Die Karte in sich hat noch Komponente um mehr Informationen 
  anzuzeigen wie zum Beispiel "v-list-item-avatar" um kreisige Foto hinzuzufügen
  oder v-list-item-title für den Title. 
  Alle Informationen werden von dem Array mit der Direktive v-for angezeigt. -->

  <v-row class="my-16" align="center" justify="center">
    <v-col cols="12" xs="12" sm="6"  md="4" xl="2" v-for="(client, i) in clients" :key="i">
      <v-card class="elevation-16 mx-auto" width="300" height="370" :data-aos="client.animation" data-aos-duration="3000">
        <v-list subheader two-line>
          <v-list-item>
            <v-list-item-avatar>
              <v-img :src="client.img"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ client.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ client.subtitle }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-card-text>
          <div class="mt-n7">
            <v-rating v-model="client.rating" color="yellow darken-3" background-color="grey darken-1" empty-icon="$ratingFull" half-increments small readonly></v-rating>
          </div>
          {{ client.bio }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
    name: 'Clients',
  data: () => ({

  /* Array client mit alle Informationen der Kunden. 
  Jede hat auch seine eigene Animation die :data-aos zugewiesen wird */
  
    clients: [
      {
        img: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Anas Ben Hmida",
        subtitle: "Client 1",
        bio: "Chihaoui offers designers a wide range of high quality finishes. The shapes and colors enliven the exhibition space and immediately bring inspiration. Customer satisfaction at the time of installation is immediately apparent. The company is a very successful representative of an internationally renowned brand. I highly recommend these products to anyone entering the construction industry, whether professional or individual.",
        rating:4.5,
        animation:"flip-up",
      },
      {
        img: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: "Wajdi Laroussi",
        subtitle: "Client 2",
        bio: "Of course,  at Chihaoui you can find most of the products you need in the construction sector, such as plumbing, covers, kitchen appliances and garden furniture. But what you see across the team is, above all, great collaboration and responsiveness. And this is the only way we can meet our customers' expectations",
        rating:5,
        animation:"flip-down",
      },
      {
        img: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Imen Takelsi",
        subtitle: "Client 3",
        bio: "For architects, various finishing materials such as coatings, fittings, sanitary ware and woodworking are important factors in the design and final realization of  harmonious architectural projects. With this in mind, we have chosen to work with CNTs since 2008. It offers a wide range of high quality products that perfectly match the architectural vision and customer expectations. In addition, the professionalism and seriousness of the entire team.",
        rating:5,
        animation:"flip-up",
      },
      {
        img: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: "Wajdi Laroussi",
        subtitle: "Client 2",
        bio: "Of course,  at Chihaoui you can find most of the products you need in the construction sector, such as plumbing, covers, kitchen appliances and garden furniture. But what you see across the team is, above all, great collaboration and responsiveness. And this is the only way we can meet our customers' expectations",
        rating:4.5,
        animation:"flip-down",
      },
    ],
  }),
};
</script>

<style>


</style>