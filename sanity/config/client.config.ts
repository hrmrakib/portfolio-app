import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const client = {
  projectId: "18g0ukic",
  dataset: "production",
  apiVersion: "2023-07-07",
  useCdn: true,
};

const builder = imageUrlBuilder(client);
export const urlFor = (source: SanityImageSource) => builder.image(source);

export default client;
 