import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1> Vishnu's Pizza Co. </h1>
    </header>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openTime = 12;
  const closeTime = 23;
  const isOpen = hour >= openTime && hour <= closeTime;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeTime={closeTime}/>
      ) : (
        <p>
          We're Closed now :( We are happy to welcome you between {openTime}
          :00 and {closeTime}:00
        </p>
      )}
    </footer>
  );
}

function Order({closeTime}) {
  return (
    <div className="order">
      <p>We're Open until {closeTime}:00 Come Visit us or order online</p>
      <button className="btn">Order Now</button>
    </div>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2> Our Menu </h2>
      {numPizzas > 0 ? (
        <>
        <p>Authentic Italian Pizzas!!</p>
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
        </>
      ) : (
        <p>We're Still working on our menu. Please come back later :)</p>
      )}
      
    </main>
  );
}

function Pizza({pizzaObj}) {
  console.log(pizzaObj);
  // if (pizzaObj.soldOut) return null;

  return (
    <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price + "$"}</span>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
