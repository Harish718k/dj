import fetch from "node-fetch";

const res = await fetch("http://localhost:5000/api/admin/register", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    email: "admin@example.com",
    password: "12345678",
  }),
});

const data = await res.json();
console.log(data);
