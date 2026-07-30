import Header from "./Header";
import RestaurantBanner from "./RestaurantBanner";

function ReservationLayout({ children }) {
  return (
    <>
      <Header />
      <RestaurantBanner />

      <main className="page-content">
        {children}
      </main>
    </>
  );
}

export default ReservationLayout;