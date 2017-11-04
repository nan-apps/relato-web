<template>
  <div id="app">
    
    <column v-fullpage="fullpageOptions" >

      <section-page class="active" :type="'column'" :clientHeight="clientHeight" >
          <the-title>pisadas</the-title>
          <subtitle>Un cuento web y de terror</subtitle>
          <txt class="align-bottom" >
            Tomás estaba durmiendo cómodamente en su cama, entre sus sabanas y frazadas. Al no estar su hermano en la casa esa noche podía relajarse aún más, sin tener que soportar sus ronquidos.
          </txt>
          <subtitle class="muted" >Scrollea &#8595;</subtitle>
      </section-page>

      

      <!-- v-observe-visibility="(isVisible, entry) => toggleSection(isVisible, entry, 'img-1')"  -->

      <section-page class="color-inverse"
                    :type="'row'" 
                    :clientHeight="clientHeight" >
        <txt class="row2 align-middle" >
          Su habitación era la más tranquila de la casa, ya que se encontraba al final del pasillo, alejada del resto de esta. Debía compartirla con su molesto hermano mayor quien afortunadamente salía a menudo con sus amigos por las noches, dejándolo tranquilo hasta el amanecer.  Al principio Tomás disfrutaba al máximo tener la habitación solo para él, pero poco a poco se fue dando cuenta que la oscuridad y la soledad atraían a su cuarto todo tipo de criaturas...
        </txt>
        <pic class="align-middle"
             :clientHeight="clientHeight/2"
             :name="'1'" 
             :ext="'png'"> 
        </pic>
      </section-page>

      <section-page :type="'column'" 
                    :clientHeight="clientHeight" >
          <txt :clientHeight="clientHeight*0.2" 
                class="align-middle" >
              Brujas que rasguñaban su ventana, rugidos de leones, gritos de fantasmas y duendes en el patio.
          </txt>
          <pic section-id="img-2"
               :clientHeight="clientHeight*0.5"
               :active-section-id="activeSectionId"
               :name="'2'" 
               :ext="'png'">
          </pic>
          <txt :clientHeight="clientHeight*0.3" 
                class="align-middle" >
             Su pequeña luz de noche roja, no le ayudó a superar sus temores, ya que con esta todos sus juguetes se volvían macabros, y sentía sus miradas sobre él, esperando a que se durmiera para saltarle encima. Tomás sabía que todo en esa casa era peligroso y el ruido de su pulso acelerado por las noches se lo confirmaba. 
          </txt>
        
      </section-page>
      
      <section-page :type="'column'" :clientHeight="clientHeight" >
        <txt :clientHeight="clientHeight*0.4" >
           Su sufrimiento a la hora de dormir fue terminando con el paso del tiempo ya que, mientras más grande se hacía, más sabía del mundo. Supo que las brujas de su ventana solo eran árboles que se movían con el viento, que los leones eran lejanos truenos, los fantasmas viento que se colaba por las rendijas y los duendes gatos correteando en el patio. 
        </txt>
        <pic :clientHeight="clientHeight*0.6"
             :name="'3'" 
             :ext="'png'"> 
        </pic>        
      </section-page>  
       
      <section-page :type="'column'" :clientHeight="clientHeight" >         
        <txt :clientHeight="clientHeight*0.4" >
          Tomás fue creciendo y dejaron de preocuparle los monstruos y fantasmas que él creía que habitaban su casa. Hasta de su luz de noche se deshizo. Su hermano se volvió menos molesto y sus padres más tranquilos. Todo cambiaba con el tiempo, menos la casa. Tal vez no le daban miedo los ruidos y las sombras, pero eso no significaba que no estuvieran ahí. Y cuando Tomás creyó haber acabado con todos sus miedos, ocurrió lo peor.
        </txt>
        <txt :clientHeight="clientHeight*0.4" >
           Una noche, despertó agitado y sudado por una pesadilla. Tardó un poco en darse cuenta que estaba tapado completamente con sus sabanas, sin poder ver su cuarto. Se dispuso a destaparse e ir al baño cuando sintió el crujir del piso del pasillo. Supuso que sería su hermano volviendo de alguna salida, pero tuvo el presentimiento de que no debía salir todavía de su cama. Se quedó muy quieto en esta, con las sabanas pegadas a su cuerpo por el sudor, conteniendo su respiración para escuchar mejor.
        </txt>
        <txt :clientHeight="clientHeight*0.2" >
           Su corazón pego un vuelco cuando escucho un paso en el pasillo, pero lo que más le asustó fue que este paso venia seguido por el tintinear de una cadena al arrastrarse por el piso.
        </txt>
      </section-page>

      <section-page :type="'column'" :clientHeight="clientHeight" > 
        <txt :clientHeight="clientHeight*0.4" >
           No podía comprender por qué su hermano llevaría cadenas a su casa o porque había vuelto tan temprano, hasta que su corazón se detuvo y sus ojos se abrieron hasta casi salir de sus cuencas cuando recordó que su hermano no volvería hasta dos días después por estar de viaje con sus amigos.
        </txt>
        <txt :clientHeight="clientHeight*0.6" >
            Saltó en la cama al escuchar otro paso y otro más junto con las cadenas que cada vez estaban más cerca. En menos de un segundo ya había descartado todas las explicaciones lógicas. Su madre siempre lleva pantuflas, y esos pasos sonaban demasiado duros, su padre nunca se levantaba en la noche, y si lo hiciera, no sería para arrastrar cadenas por el pasillo. Pero entonces ¿Quién era? ¿Qué quería? ¿Por qué sus padres no despertaban con el ruido?
        </txt>        
      </section-page>

      <section-page :clientHeight="clientHeight" class="color-inverse" >
        <txt :clientHeight="clientHeight*0.4" >
           El pecho del pobre Tomás se inundó de desesperación sin saber qué hacer. Quería llorar, correr, gritar, pero estaba paralizado. Vencido por el terror y con todas sus extremidades agarrotadas por la tensión, escuchó como, uno tras otro, los pasos se hacían más fuertes, y cuando pensó que su cabeza explotaría, se hizo el silencio. Pero lejos de tranquilizarlo, le aterraba, debido a que esa persona se había detenido justo frente a su puerta
        </txt>
        <pic :clientHeight="clientHeight*0.6"
             :name="'4'" 
             :ext="'png'"> 
        </pic>
      </section-page>

      <section-page :type="'column'" :clientHeight="clientHeight" > 
        <txt :clientHeight="clientHeight/3" >
             Ya estaba empezando a planear como escapar en caso de que entrara y quisiera hacerle daño hasta que el rechinar de la puerta al abrirse le dejo la mente completamente en blanco.
        </txt>
        <txt :clientHeight="clientHeight/3" >
            Su corazón desbocado era lo único que le aseguraba que seguía con vida ya que no movió ni un musculo cuando empezó a sentir en su nuca el peso de su mirada. Todos sus vellos se erizaron y supo que estaba más cerca. Esa cosa quería tocarlo.
        </txt>
        <txt :clientHeight="clientHeight/3" >
            El miedo muto en valentía e ira cuando unas garras se apoyaron sobre su hombro y rápidamente se sentó destapándose por completo. Respirando con dificultad y con su corazón a punto de explotar se enfrentó a la oscuridad de su pieza. Busco desde su cama alguna figura alta con garras, pero no encontró nada.
        </txt>
      </section-page>
      
      <section-page :clientHeight="clientHeight" >
        <txt :clientHeight="clientHeight*0.4" >
              Se dijo que seguramente fue una pesadilla, y como cualquier niño asustado, se fue corriendo al cuarto de sus padres. A tientas bajo de la cama, y empezó a correr hacia el marco de la puerta, cuando a medio camino tropezó con algo pesado y frio. El descuido lo envió directamente al suelo. Dolorosamente, se arrastró hasta el interruptor de la luz, y una vez encendida, descubrió que en el suelo había una montaña de largas, pesadas y oxidadas cadenas.
        </txt>
        <pic :clientHeight="clientHeight*0.3"
             :name="'5'" 
             :ext="'png'"> 
        </pic>
        <the-title>fin.</the-title>
      </section-page>
      
    </column>

  </div>
</template>

<script>  
  
  import Vue from 'vue';
  import Vuex from 'vuex';
  import Column from './components/Column.vue';
  import Pic from './components/Pic.vue';
  import TheTitle from './components/TheTitle.vue';
  import Subtitle from './components/Subtitle.vue';
  import Txt from './components/Txt.vue';
  import SectionPage from './components/SectionPage.vue';
  import $ from "jquery";
  import fullpage from "fullpage.js"

  Vue.directive('fullpage', function(el, binding) {
    $(el).fullpage(binding.value)
  })

  export default {
    name: 'app',
    components:{ Column, Pic, TheTitle, Subtitle, Txt, SectionPage },
    data () {
      return {
        fullpageOptions: {
          
        }
      }
    },
    mounted: function(){
      this.$store.dispatch('SET_CLIENT_HEIGHT', document.documentElement.clientHeight);
    },
    computed: Object.assign(
      Vuex.mapState({
          activeSectionId: state => state.activeSectionId,
          clientHeight: state => state.clientHeight,
      })
    ),
    methods:{
      toggleSection (isVisible, entry, sectionId) {
        console.log( sectionId );
        this.$store.dispatch('ACTIVE_SECTION', (isVisible ? sectionId : null));
      }
    }
  }
</script>

<style lang="scss">
  
  @import "./assets/sass/variables.scss";
  @import "./assets/sass/style.scss";

</style>
