import { allProps, allCSS2RNProps } from "./index";

it("should have a flat array of all known React Native props", () => {
  expect(allProps).toMatchSnapshot();
});

it("should have a flat array of all known css-to-react-native props", () => {
  expect(allCSS2RNProps).toMatchSnapshot();
});
