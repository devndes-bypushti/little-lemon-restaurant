import Header from "../components/Header";
import "./HomePage.css";

import heroImage from "../assets/hero_image.jpg";
import saladImage from "../assets/salad.jpg";
import fishImage from "../assets/fish_food.jpg";
import bruschettaImage from "../assets/bruschetta.jpg";
import pastaImage from "../assets/pasta.jpg";

function HomePage({ onReserveTable }) {
  const menuItems = [
    {
      id: 1,
      title: "Mediterranean Garden Salad",
      price: "$10.99",
      description:
        "Crisp greens, cherry tomatoes, cucumber, olives, feta cheese and house dressing.",
      image: saladImage,
    },
    {
      id: 2,
      title: "Herb-Crusted Seabass",
      price: "$19.99",
      description:
        "Fresh seabass served with roasted vegetables and lemon herb butter.",
      image: fishImage,
    },
    {
      id: 3,
      title: "Classic Tomato Bruschetta",
      price: "$8.99",
      description:
        "Toasted artisan bread topped with tomatoes, basil and olive oil.",
      image: bruschettaImage,
    },
    {
      id: 4,
      title: "Creamy Garlic Pasta",
      price: "$18.99",
      description:
        "Fresh pasta tossed in creamy garlic parmesan sauce with herbs.",
      image: pastaImage,
    },
  ];

  return (
    <div className="app-container">
      <Header />

      <main className="home-page">
        {/* HERO SECTION */}

        <section className="hero-section">

            <div className="hero-image">
                <img src={heroImage} alt="Little Lemon Restaurant" />
            </div>

            <div className="hero-text">
                <h1>Little Lemon</h1>

                <h3>Chicago</h3>

                <p>
                We are a family owned Mediterranean restaurant,
                focused on traditional recipes served with a modern twist.
                </p>

                <button
                className="reserve-button"
                onClick={onReserveTable}
                >
                Reserve a Table
                </button>
            </div>

        </section>

        {/* ORDER SECTION */}

        <section className="order-section">
          <div className="order-header">
            <h2>ORDER NOW!</h2>

            <button className="delivery-button">
              Delivery
            </button>
          </div>

          {/* CATEGORY BUTTONS */}

          <div className="category-list">
            <button>Lunch</button>
            <button>Mains</button>
            <button>Starters</button>
            <button>Desserts</button>
          </div>

          {/* MENU CARDS */}

          <div className="menu-list">
            {menuItems.map((item) => (
              <article
                className="menu-card"
                key={item.id}
              >
                <div className="menu-details">
                  <div className="menu-title">
                    <h3>{item.title}</h3>

                    <span>{item.price}</span>
                  </div>

                  <p>{item.description}</p>

                  <button className="order-button">
                    Order for Delivery →
                  </button>
                </div>

                <img
                  src={item.image}
                  alt={item.title}
                />
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;