// import Header from "./Header";
// import RestaurantBanner from "./RestaurantBanner";

// function ReservationLayout({ children }) {
//   return (
//     <>
//       <Header />
//       <RestaurantBanner />

//       <main className="page-content">
//         {children}
//       </main>
//     </>
//   );
// }

// export default ReservationLayout;

import Header from "./Header";
import RestaurantBanner from "./RestaurantBanner";

function ReservationLayout({ children, onHome }) {
  return (
    <div className="app-container">
      <Header onHome={onHome} />
      <RestaurantBanner />

      <main className="page-content">
        {children}
      </main>
    </div>
  );
}

export default ReservationLayout;