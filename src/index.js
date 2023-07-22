import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./index.css";
import App from "./App";
// const pizzaData = [
//   {
//     name: "Focaccia",
//     ingredients: "Bread with italian olive oil and rosemary",
//     price: 6,
//     photoName: "pizzas/focaccia.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Margherita",
//     ingredients: "Tomato and mozarella",
//     price: 10,
//     photoName: "pizzas/margherita.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Spinaci",
//     ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
//     price: 12,
//     photoName: "pizzas/spinaci.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Funghi",
//     ingredients: "Tomato, mozarella, mushrooms, and onion",
//     price: 12,
//     photoName: "pizzas/funghi.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Salamino",
//     ingredients: "Tomato, mozarella, and pepperoni",
//     price: 15,
//     photoName: "pizzas/salamino.jpg",
//     soldOut: true,
//   },
//   {
//     name: "Pizza Prosciutto",
//     ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
//     price: 18,
//     photoName: "pizzas/prosciutto.jpg",
//     soldOut: false,
//   },
// ];

// function App() {
//   return (
//     <div className="container">
//       <Header />
//       <Menu />
//       <Footer />
//     </div>
//   );
// }
// function Header() {
//   const style = { color: "red", fontSize: "32px", textTransform: "uppercase" };

//   return (
//     <header className="header">
//       <h1>Fast React Pizza Co.</h1>;
//     </header>
//   );
// }
// function Menu() {
//   const pizzas = pizzaData;
//   const numPizzas = pizzas.length;
//   return (
//     <main className="menu">
//       <h2>Our Menu</h2>
//       {numPizzas > 0 ? (
//         <ul className="pizzas">
//           {pizzas.map((pizza) => (
//             <Pizza
//               // name={pizza.name}
//               // ingredients={pizza.ingredients}
//               // photoName={pizza.photoName}
//               // price={pizza.price}
//               pizzaObj={pizza}
//               key={pizza.name}
//             />
//           ))}
//         </ul>
//       ) : (
//         <p>We're still working on our menu</p>
//       )}

//       {/* <Pizza
//         name="Pizza Spinaci"
//         ingredients="Tomato, mozarella, spinaci, and ricotta cheese"
//         photoName="pizzas/spinaci.jpg"
//         price={10}
//       />
//       <Pizza
//         name="Pizza Fungi"
//         ingredients="Tomato, mushrooms"
//         photoName="pizzas/funghi.jpg"
//         price={12}
//       /> */}
//     </main>
//   );
// }

// function Pizza(props) {
//   return (
//     <li className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
//       <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
//       <div>
//         <h3>{props.pizzaObj.name}</h3>
//         <p>{props.pizzaObj.ingredients}</p>
//         <span>
//           {props.pizzaObj.soldOut ? "SOLD OUT" : props.pizzaObj.price + 1}
//         </span>
//       </div>
//     </li>
//   );
// }

// function Footer() {
//   const hour = new Date().getHours();
//   const openHour = 12;
//   const closeHour = 22;
//   const isOpen = hour >= openHour && hour <= closeHour;
//   // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
//   // else alert("Sorry we're currently closed");
//   // if(!isOpen) return <p>CLOSED</p>
//   return (
//     <footer className="footer">
//       {isOpen && <Order closeHour={closeHour} />}
//       <button>Order</button>
//       {/* {new Date().toLocaleTimeString()}. We're currently open */}
//     </footer>
//   );
// }

// function Order(props) {
//   return (
//     <p>We're open until {props.closeHour}. come visit us or order online</p>
//   );
// }
// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// ReactDOM.render(<App />, document.getElementById("root"));
