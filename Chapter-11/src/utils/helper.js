export const filterData = (searchText, restaurants) => {
  // we will write an algorithm to filter data

  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );

  return filterData;
};
