function RestaurantBanner() {
  return (
    <section className="restaurant-banner" aria-labelledby="restaurant-name">
      <h1 id="restaurant-name">Little Lemon</h1>

      <p className="restaurant-location">
        <span aria-hidden="true">°</span>
        Chicago
      </p>
    </section>
  );
}

export default RestaurantBanner;