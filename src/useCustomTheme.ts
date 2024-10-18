import { useBrandingClient } from "./useBrandingClient"
import { fppmTheme } from "./fppmTheme";
import { sparrowTheme } from "./sparrowTheme";


export const useCustomTheme = () => {

  const brand = useBrandingClient();

  const getTheme = () => {
    if (brand === "FPPM") {
      return fppmTheme
    }

    // sparrow etc
    if (brand === "Sparrow") {
      return sparrowTheme
    }

  }

  return {
    brand,
    customTheme: getTheme()
  }
}
