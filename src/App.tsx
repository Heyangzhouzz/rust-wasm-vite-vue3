import { defineComponent, onMounted, ref } from "vue";
import init,{Universe} from 'rustmain'
import './app.styl'

export default defineComponent({
  name: 'App',
  setup() {
    const pre = ref<HTMLElement>()
    let universe:Universe;
    const renderLoop = () => {
      if (!pre.value) {
        return
      }
      pre.value.textContent = universe.render();
      universe.tick();
    
      requestAnimationFrame(renderLoop);
    };
    onMounted(() => {
      init().then(() => {
        // universe = Universe.new()  
        // requestAnimationFrame(renderLoop)
      })
    })
    return () => (
      // <pre ref={pre}></pre>
      <canvas id="canvas"></canvas>
    )
  }
})