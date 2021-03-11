<template>
   <div>
       <v-container>
           <v-row >
               <v-col cols='2'>
                   <v-card>
                       <v-card-title>Joule's Law</v-card-title>
                       <v-card-subtitle>
                           Verification of Joule's Law (Heat produced is proportional to current squared)
                       </v-card-subtitle>
                       <v-card-actions>
                           <v-btn text color="primary" to="./physics/jouleslaw">Go To</v-btn>
                       </v-card-actions>
                   </v-card>
               </v-col>
                <v-col cols='2'>
                   <v-card>
                       <v-card-title>Ohm's Law</v-card-title>
                       <v-card-subtitle>
                           Ohm's law states that the current through a conductor between two points is directly proportional to the voltage across the two points.
                       </v-card-subtitle>
                       <v-card-actions>
                           <v-btn text color="primary" to="./physics/ohmslaw">Go To</v-btn>
                       </v-card-actions>
                   </v-card>
               </v-col>
           </v-row>
       </v-container>
   </div> 
</template>