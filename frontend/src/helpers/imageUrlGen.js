export const generateImageUrl = async (name, tourTitle, apikey) => {
  name = name.replace(/ /g, "%20");
  tourTitle = tourTitle.replace(/ /g, "%20");

  const response = await fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${name}&keyword=${tourTitle}&size=1&apikey=${apikey}`
  );

  if (response.ok) {
    const data = await response.json();
    if (data._embedded.events) {
      const images = data._embedded.events[0].images;

      let imageUrl = images.find((image) => {
        return image.ratio === "3_2";
      });

      imageUrl = imageUrl.url;

      return imageUrl;
    } else {
      throw Error(
        `${name} does not have an event on ticketmaster at the moment`
      );
    }
  }
};
