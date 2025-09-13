export const fetchCardsData = async () => {
  return await fetch(`${import.meta.env.BASE_URL}/data/cards.json`)
    .then((res) => res.json())
    .then((data) => {
      // simulate fetching delay
      return new Promise<typeof data>((resolve) => {
        setTimeout(() => resolve(data), 300);
      });
    })
    .catch((err) => {
      throw err;
    });
};
