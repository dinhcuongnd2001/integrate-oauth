import publicAxios from "@/configs/axios.config";
import { Provider } from "@/constants";

export const handleLoginWithMediaSocial = async (type: Provider) => {
  switch (type) {
    case Provider.FACEBOOK:
      return publicAxios.get("/facebook");
    default:
      break;
  }
};
