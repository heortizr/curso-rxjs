const url = 'https://api.github.com/users?per_page=5';
const fetchPromise = fetch(url);
const handleError = (res) => {
  if (!res.ok) throw new Error(res.statusText);
  return res;
}

fetchPromise
  .then(handleError)
  .then(res => res.json())
  .then(console.log)
  .catch(console.warn);
