// 1. this function takes an array of files imported by webpack.
// 2. for each file It will run and store that image with particular name in the images array.
// 3. you can access It like array["filename_without_extension"].default, check data folder to have better idea 💡
// Stackoverflow Link: /questions/42118296/ this is the mixture of accepted and 3rd answer.
// Happy coding fella 😉

function importAll(r: any) {
  let images: any = {};
  r.keys().forEach((item: any, index: number): void => {
    images[
      item
        ?.split("./")
        ?.pop()
        ?.substring(0, item.length - 6)
        ?.replace(".", "")!
    ] = r(item);
  });
  return images;
}

export const bannersImages = importAll(require.context("../assets/images/top-banner"));
