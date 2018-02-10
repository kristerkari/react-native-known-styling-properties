# React Native styling properties

List of known React Native specific styling properties.

Sources for supported properties:

* https://github.com/vhpoet/react-native-styling-cheat-sheet
* https://github.com/styled-components/css-to-react-native/tree/master/src/__tests__

## Install

```sh
yarn add react-native-known-styling-properties --dev
```

or

```sh
npm install react-native-known-styling-properties --save-dev
```

## API

To get list of all styling properties supported by React Native:

```js
import { allProps } from "react-native-known-styling-properties";
```

To get list of all styling properties supported by [css-to-react-native](https://github.com/styled-components/css-to-react-native):

```js
import { allRN2CSSProps } from "react-native-known-styling-properties";
```

The result is an array of supported styling properties:

```js
allProps = [
  "alignItems",
  "alignSelf",
  "flex",
  "flexDirection",
  "flexWrap",
  ...
]
```
