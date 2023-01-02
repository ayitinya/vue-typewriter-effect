import TypeWriter from "./components";

export default {
  install(Vue: { component: (arg0: string, arg1: any) => void }) {
    Vue.component("TypeWriter", TypeWriter);
  },
};
