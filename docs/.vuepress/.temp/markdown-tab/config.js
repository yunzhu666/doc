import { CodeTabs } from "C:/Users/zhang/Desktop/doc/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_75789512056da4726c39775942fb7941/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "C:/Users/zhang/Desktop/doc/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_75789512056da4726c39775942fb7941/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "C:/Users/zhang/Desktop/doc/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_75789512056da4726c39775942fb7941/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
