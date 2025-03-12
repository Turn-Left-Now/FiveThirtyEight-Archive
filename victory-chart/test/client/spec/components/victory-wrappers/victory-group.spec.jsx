/**
 * Client tests
 */
/*eslint-disable max-nested-callbacks */

import React from "react";
import { shallow } from "enzyme";
import VictoryGroup from "src/components/victory-group/victory-group";
import VictoryBar from "src/components/victory-bar/victory-bar";

describe("components/victory-group", () => {
  describe("default component rendering", () => {
    it("renders an svg with the correct width and height", () => {
      const wrapper = shallow(
        <VictoryGroup>
          <VictoryBar/>
          <VictoryBar/>
        </VictoryGroup>
      );
      const svg = wrapper.find("svg");
      expect(svg.prop("style").width).to.equal(VictoryGroup.defaultProps.width);
      expect(svg.prop("style").height).to.equal(VictoryGroup.defaultProps.height);
    });
  });
});
