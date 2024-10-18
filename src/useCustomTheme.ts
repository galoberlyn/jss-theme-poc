import { useBrandingClient } from "./useBrandingClient"
import { client1Theme } from "./client1Theme";
import { client2Theme } from "./client2Theme";


export const useCustomTheme = () => {

  const brand = useBrandingClient();

  const getTheme = () => {
    if (brand === "Client2") {
      return client1Theme
    }

    // sparrow etc
    if (brand === "Client1") {
      return client2Theme
    }

  }

  return {
    brand,
    customTheme: getTheme()
  }
}
