fetch("http://localhost:3000/api/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

fetch("http://localhost:3000/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: "Alice", age: 25 }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
