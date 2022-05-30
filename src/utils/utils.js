export const responseAdapter = (response) => {
  return response.map((entry) => ({
    id: entry.id,
    alt: `Photo by ${entry.author}`,
    src: entry.download_url,
  }));
};

export const getImageIndex = (images, id) => {
  return images.findIndex((image) => image.id === id);
};
