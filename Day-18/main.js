const countriesAPI = "https://restcountries.eu/rest/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";
// Exercise 1
/*1
Read the countries API using fetch and print the name of country, capital, languages, population and area.

=== Solution ===
*/
fetch(countriesAPI)
  .then((response) => response.json())
  .then((data) =>
    data.forEach((obj) =>
      console.log({
        name: obj.name,
        capital: obj.capital,
        languages: obj.languages,
        population: obj.population,
        area: obj.area,
      })
    )
  )
  .catch((err) => console.log(err));
