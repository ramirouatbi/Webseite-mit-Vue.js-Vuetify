<template>
  <v-app id="inspire">
    <v-container fill height >
      <v-row align="center" justify="center">
        <v-col xl="10">
          <v-timeline>
            <v-timeline-item v-for="(year, i) in years" :key="i" :color="year.color" small>
              <template v-slot:opposite>
                <span :class="`headline font-weight-bold ${year.color}--text`" v-text="year.year"></span>
              </template>
              <div class="py-4">
                <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
                  {{year.title}}
                </h2>
                <div>
                    {{year.description}}
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>

export default {
    name: 'Timeline',
  data () {
    return {
          years: [
      {
        color: 'indigo', /* cyan */
        year: '1982',
        title:"Creation",
        description:"Mr. Chihaoui Hatem who inherits this job from his family creates the Company, and starts with a small workshop in the capital Tunis. The catalog contains not more than 18 different articles.",
      },
      {
        color: 'light-blue', /* green */
        year: '1995',
        title:"Exportation",
        description:"Beginning of the export and moving to Hay Tadhamen and beginning of the marketing of wood-based panels ",
      },
      {
        color: 'teal', /* pink */
        year: '2002',
        title: "Business Development",
        description:"Expansion of the company to include the distribution of decorative melamine panels, placage, digital and polylac, with the number of employees increasing from 8 to 35."
      },
      {
        color: 'lime', /* amber */
        year: '2011',
        title:"New Fillales",
        description:"Opening of two new branches in Ariana and Sousse"
      },
      {
        color: 'orange', /* orange */
        year: '2015',
        title:"Enlargement",
        description:"Not only does the company have 45 employees, but also 5 branches with the 2 new ones in Tunis and Mahdia which have been added to the old ones.."
      },
    ],
    }
  }
};
</script>

<style scoped>

</style>