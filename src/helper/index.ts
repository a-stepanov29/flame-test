export function togglePeople(favorites: any, people: any) {
  const parseFavorites: any = JSON.parse(favorites);
  const isFindPeople = parseFavorites.find((f: any) => f.created === people.created);
  if (isFindPeople) {
    const filterPeoples = parseFavorites.filter((f: any) => f.created !== people.created);
    localStorage.setItem('favorites', JSON.stringify(filterPeoples));
  } else {
    parseFavorites.push(people);
    localStorage.setItem('favorites', JSON.stringify(parseFavorites));
  }
}
export default { togglePeople };
