function flatten(arr) {
  return arr.reduce(function(flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
    );
  }, []);
}

export const flexboxProps = [
  "alignItems",
  "alignSelf",
  "flex",
  "flexDirection",
  "flexWrap",
  "justifyContent"
];

export const borderProps = [
  "borderWidth",
  "borderBottomWidth",
  "borderLeftWidth",
  "borderRightWidth",
  "borderTopWidth",
  "borderRadius",
  "borderBottomLeftRadius",
  "borderBottomRightRadius",
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderColor",
  "borderLeftColor",
  "borderRightColor",
  "borderTopColor",
  "borderBottomColor",
  "borderStyle"
];

export const positioningProps = [
  "position",
  "bottom",
  "left",
  "right",
  "top",
  "zIndex"
];

export const boxModelProps = [
  "height",
  "minHeight",
  "maxHeight",
  "width",
  "minWidth",
  "maxWidth",
  "overflow"
];

export const marginProps = [
  "margin",
  "marginBottom",
  "marginLeft",
  "marginRight",
  "marginTop"
];

export const paddingProps = [
  "padding",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "paddingTop"
];

export const transformProps = ["transform", "backfaceVisibility"];

export const backgroundProps = ["background", "backgroundColor"];

export const colorProps = ["color", "opacity"];

export const fontProps = [
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontWeight",
  "fontVariant",
  "lineHeight",
  "textAlign",
  "textDecorationLine",
  "textDecorationColor",
  "textDecorationStyle",
  "letterSpacing"
];

export const reactNativeProps = [
  "elevation",
  "textAlignVertical",
  "textShadowColor",
  "textShadowOffset",
  "textShadowRadius",
  "shadowColor",
  "shadowOffset",
  "shadowOpacity",
  "shadowRadius",
  "marginHorizontal",
  "marginVertical",
  "paddingHorizontal",
  "paddingVertical",
  "decomposedMatrix",
  "transformMatrix",
  "resizeMode",
  "tintColor",
  "overlayColor",
  "writingDirection"
];

export const CSS2RNProps = [
  "border",
  "boxShadow",
  "flexFlow",
  "font",
  "textDecoration",
  "textShadow"
];

export const allProps = flatten([
  flexboxProps,
  borderProps,
  positioningProps,
  boxModelProps,
  marginProps,
  paddingProps,
  transformProps,
  backgroundProps,
  colorProps,
  fontProps,
  reactNativeProps
]);

export const allCSS2RNProps = flatten([allProps, CSS2RNProps]);
