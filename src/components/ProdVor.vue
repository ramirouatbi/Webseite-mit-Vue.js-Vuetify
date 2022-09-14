<template>

<!-- Diese Komponente (ProdVor.vue) dient als Vorlage für die Produkte.
    Das bedeutet, dass der Code unten nur eine Karte oder 
    ein Produkt anzeigen wird. Dies wird dann als Komponente in 
    dem Bereich aufgerufen, in dem sie angezeigt werden soll, 
    und dabei werden die Props weitergegeben. 
    In dem Teil von JavaScript werden 
    alle Informationen oder Variablen deklariert in Props, 
    die an die Komponente übergeben werden. -->

    <v-col cols="10" xs="12" sm="6" md="3" lg="3" xl="2">
        <v-card class="mx-auto mx-xl-0" max-width="300"  color="" flat outlined elevation="8">
            <div align="center" justify="center" class="zoomIn">
                <v-img max-height="400" max-width="300" :src="logo" class="prodPhoto"></v-img>
            </div>
            <v-container fill-height>
                <v-row >
                    <v-col justify="center" align="center">
                        <v-text class="prodTitle"><b>{{titlee }}</b></v-text>
                            <v-row class="mt-2">
                                <v-col justify="center" align="center">
                                    <v-text class="pt-10 prodPrice">{{ pricee }}</v-text>
                                        <v-row class="mt-1">
                                            <v-col justify="center" align="center">
                                                 <v-btn class="mx-2 mt-2" href="/Details" fab dark small color="#0B0B61">
                                                        <v-icon dark> visibility </v-icon>
                                                </v-btn>
                                                <v-btn href="/Request" class="mx-2 mt-2" fab dark small color="#0B0B61">
                                                    <v-icon dark> local_mall </v-icon>
                                                </v-btn>
                                            </v-col>
                                        </v-row>
                                </v-col>
                            </v-row>
                        </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-col>
           
            </template>
<script>


export default {
    name: 'ProdVor',
    props: {
    titlee:String, 
    pricee:String,
    logo:String,
    },
  data () {
    return {
        
    }
  },
  
};
</script>



<style>


</style>