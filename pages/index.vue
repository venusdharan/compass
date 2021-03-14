<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
  
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to Compass Intitute 
        </v-card-title>
        <v-card-subtitle>
          Interactive Class
        </v-card-subtitle>
        <v-card-text>
          <p>Compass Institute is primer and prominent teaching institution that aims to deliver the quick and easiest way to our students</p>
          
          
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/physics"
          >
            Select a chapter
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
