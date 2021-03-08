<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card>
                    <canvas style=" border:2px solid grey; background-color:#9999ff" id="theCanvas" width="800" height="600">
		Canvas not supported; please update your browser.
		</canvas>
        <v-card-actions>
            <p style="width:210px; background-color:#808000;">
	<input type="range" style = "width:200px !important;" id="Slider1" min="0" max="48" step="0.5" value="0"
		onchange ="resistance()" oninput="resistance()">
	<!--	R(ohms): <span  id="R">12</span> --> </p> 
	<span style="width:30%; float: left;">
		<v-btn type="button" class="" color="red" value="Close Circuit" onclick="powerOn();">Close Circuit</v-btn>
		<v-btn type="button" value="Open Circuit" color="green" onclick="powerOff();">Open Circuit</v-btn>
		<v-btn type="button" value="Reset" color="yellow" onclick="reset();">Reset</v-btn>
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