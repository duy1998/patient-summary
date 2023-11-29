import useTheme from "@material-ui/core/styles/useTheme";

export enum ScreenType {
  MOBILE,
  TABLET,
  DESKTOP,
  LARGE_DESKTOP,
}

export function useScreenType() {
  const theme = useTheme();

  let screenType;
  if (theme.breakpoints.down("sm")) {
    screenType = ScreenType.MOBILE;
  } else if (theme.breakpoints.between("sm", "md")) {
    screenType = ScreenType.TABLET;
  } else if (theme.breakpoints.between("md", "lg")) {
    screenType = ScreenType.DESKTOP;
  } else if (theme.breakpoints.up("lg")) {
    screenType = ScreenType.LARGE_DESKTOP;
  } else {
    screenType = ScreenType.DESKTOP;
  }

  return { screenType };
}
