import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "cyyapdra",
  dataset: "production",
  useCdn: true,
});