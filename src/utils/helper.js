export function filterData(allRest, searchText) {
    const filterRestList = allRest.filter((res) => (res.info.name.toLowerCase().includes(searchText.toLowerCase())));
    return filterRestList;
}
