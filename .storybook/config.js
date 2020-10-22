import { configure, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import PropTable from "./PropTable";

addDecorator(
  withInfo({
    inline: true,
    source: false,
    TableComponent: PropTable,
    styles: {
      infoBody: {
        backgroundColor: "#FAFAFA",
        marginTop: 0
      },
      infoStory: {
        padding: 32
      }
    }
  })
);
// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
