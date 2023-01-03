<script lang="ts">
// @ts-ignore
import Typewriter from "typewriter-effect/dist/core";
import { onMounted, h, defineComponent } from "vue";

export default defineComponent({
  name: "TypeWriter",
  props: {
    element: {
      type: String,
      default: "span",
    },
    strings: {
      type: Array,
      default: () => ["Hello", "World"],
    },
    cursor: {
      type: String,
      default: "|",
    },
    delay: {
      type: [Number, String],
      default: "natural",
    },
    deleteSpeed: {
      type: [Number, String],
      default: "natural",
    },
    loop: {
      type: Boolean,
      default: true,
    },
    autoStart: {
      type: Boolean,
      default: true,
    },
    pauseFor: {
      type: Number,
      default: 1500,
    },
    devMode: {
      type: Boolean,
      default: false,
    },
    skipAddStyles: {
      type: Boolean,
      default: false,
    },
    wrapperClassName: {
      type: String,
      default: "Typewriter__wrapper",
    },
    cursorClassName: {
      type: String,
      default: "Typewriter__cursor",
    },
    stringSplitter: {
      type: Function,
      default: (str: string) => str.split(""),
    },
    onCreateTextNode: {
      type: Function,
      default: null,
    },
    onRemoveNode: {
      type: Function,
      default: null,
    },
  },
  setup(props) {
    onMounted(() => {
      const typewriter = new Typewriter("#typewriter", { ...props });

      typewriter.start();
    });

    return () => h(props.element, { id: "typewriter" }, `${props.strings[0]}`);
  },
});
</script>
