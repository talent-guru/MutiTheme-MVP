export const ACTIVE_THEME = process.env.NEXT_PUBLIC_THEME || "modern";

let themeData: any;

themeData = {
  name: "Modern",
  components: require(`./themes/${ACTIVE_THEME}/components`),
  modules: require(`./themes/${ACTIVE_THEME}/modules`),
};

export const THEME = themeData;