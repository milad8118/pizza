import React, { StrictMode } from "react";
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
      <Header></Header>

      <Menu></Menu>

      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast Pizza co.</h1>;
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const PizzasNum = pizzas.length;
  return (
    <main className="menu">
      <h2>our pizzas</h2>
      {PizzasNum >0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza key={pizza.name} pizzaObj={pizza} />
          ))}
        </ul>
      )}
    </main>
  );
}

function Pizza({pizzaObj}) {
  return (
    <div className="pizza">
      <img alt={pizzaObj.name} src={pizzaObj.photoName}></img>
      <li>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price}$</span>
        {pizzaObj.soldOut ? <p>sorry there is no one left</p> : ""}
      </li>
    </div>
  );
}

function Footer() {
  let Hourtime = new Date().getHours();

  return (
    <div className="footer">
      <footer>
        <span> {Hourtime >= 10 && Hourtime <= 22 ? <OpenTime /> : <CloseTime />} </span>
        <br />
        <Btn />
      </footer>
    </div>
  );
}
function OpenTime() {
  return (
    <div>
      <p>
        We're curreently <strong>open</strong>
      </p>
    </div>
  );
}
function CloseTime() {
  return (
    <div>
      <p>
        We're curreently <strong>closed</strong>
      </p>
    </div>
  );
}
function Btn() {
  return <button className="btn order">order</button>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
