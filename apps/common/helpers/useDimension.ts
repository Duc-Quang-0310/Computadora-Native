export default function getDimensions(Dimensions: any) {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return { windowWidth, windowHeight };
}
