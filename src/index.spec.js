import { allProps, allRN2CSSProps } from "./index";

it("should have a flat array of all known React Native props", () => {
  expect(allProps).toMatchSnapshot();
});

it("should have a flat array of all known css-to-react-native props", () => {
  expect(allRN2CSSProps).toMatchSnapshot();
});
