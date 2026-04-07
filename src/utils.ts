// TODO: check it out
export const getRandomNumber = (min: number, max: number) => {
  const left = Math.ceil(Math.min(min, max));
  const right = Math.floor(Math.max(min, max));
  const random = Math.random() * (right - left + 1) + left;
    return Math.floor(random);
};

export const getRandomElement = (items: number[]) => items[getRandomNumber(0, items.length - 1)];
