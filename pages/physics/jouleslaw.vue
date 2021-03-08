<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title>Joule's Law</v-card-title>
                       <v-card-subtitle>
                           Verification of Joule's Law (Heat produced is proportional to current squared)
                       </v-card-subtitle>
                       <v-row>
                           <v-col>
                        <canvas style=" border:2px solid grey; background-color:#9999ff" id="theCanvas" width="800" height="600">
                        Canvas not supported; please update your browser.
                        </canvas>
                           </v-col>
                           <v-col>
                               <v-img src="../Joules_Law.jpg"></v-img>
                           </v-col>
                       </v-row>

                        <v-card-actions>
                            <p style="width:210px; ">
                                Ampere
                    <input type="range" style = "width:200px !important;" id="Slider1" min="0" max="48" step="0.5" value="0"
                        onchange ="resistance()" oninput="resistance()">
                    <!--	R(ohms): <span  id="R">12</span> --> </p> 
                    <span style="width:30%; float: left;">
                        <v-btn type="button" class="white--text" color="red" value="Close Circuit" onclick="powerOn();">Close Circuit</v-btn>
                        <v-btn type="button" class="white--text" value="Open Circuit" color="green" onclick="powerOff();">Open Circuit</v-btn>
                        <v-btn type="button" class="white--text" value="Reset" color="purple" onclick="reset();">Reset</v-btn>
                        </span><br>

                        </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
	
  
		

export default {
    mounted() {
        
    },
  
    created(){
        
    },
    methods:{
    },
    head(){
       return{
           title:"Joule's Law",
           script:[{
               hid:"joules",
               src:"../js/joules.js",
               defer: true,
           }]
       } 
    }
    
}
</script>