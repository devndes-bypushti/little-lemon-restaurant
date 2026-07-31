// import { useState } from "react";
// import "./App.css";

// import BookingPage from "./pages/BookingPage";
// import SummaryPage from "./pages/SummaryPage";
// import ConfirmationPage from "./pages/ConfirmationPage";

// function App() {
//   const [currentPage, setCurrentPage] = useState("booking");

//   const [bookingDetails, setBookingDetails] = useState({
//     date: "",
//     startTime: "",
//     duration: "",
//     guests: 2,
//     seatingType: "",
//   });

//   const [reservationNumber, setReservationNumber] = useState("");

//   const handleBookingSubmit = (details) => {
//     setBookingDetails(details);
//     setCurrentPage("summary");
//   };

//   const handleEditBooking = () => {
//     setCurrentPage("booking");
//   };

//   const handleConfirmBooking = () => {
//     const number = `LL-${Math.floor(100000 + Math.random() * 900000)}`;

//     setReservationNumber(number);
//     setCurrentPage("confirmation");
//   };

//   return (
//     <>
//       {currentPage === "booking" && (
//         <BookingPage
//           bookingDetails={bookingDetails}
//           onSubmit={handleBookingSubmit}
//         />
//       )}

//       {currentPage === "summary" && (
//         <SummaryPage
//           bookingDetails={bookingDetails}
//           onEdit={handleEditBooking}
//           onConfirm={handleConfirmBooking}
//         />
//       )}

//       {currentPage === "confirmation" && (
//         <ConfirmationPage
//           bookingDetails={bookingDetails}
//           reservationNumber={reservationNumber}
//         />
//       )}
//     </>
//   );
// }

// export default App;


import { useState } from "react";
import "./App.css";

import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import SummaryPage from "./pages/SummaryPage";
import ConfirmationPage from "./pages/ConfirmationPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const [bookingDetails, setBookingDetails] = useState({
    date: "",
    startTime: "",
    duration: "",
    guests: 2,
    seatingType: "",
  });

  const [reservationNumber, setReservationNumber] = useState("");

  const handleReserveTable = () => {
    setCurrentPage("booking");
  };

  const handleBookingSubmit = (details) => {
    setBookingDetails(details);
    setCurrentPage("summary");
  };

  const handleEditBooking = () => {
    setCurrentPage("booking");
  };

  const handleConfirmBooking = () => {
    const number = `LL-${Math.floor(100000 + Math.random() * 900000)}`;

    setReservationNumber(number);
    setCurrentPage("confirmation");
  };

  const handleHome = () => {
  setCurrentPage("home");
  };

  return (
    <>
      {currentPage === "home" && (
        <HomePage
          onReserveTable={handleReserveTable}
          onHome={handleHome}
          />
      )}

      {currentPage === "booking" && (
        <BookingPage
        bookingDetails={bookingDetails}
        onSubmit={handleBookingSubmit}
        onHome={handleHome}
        />
      )}

      {currentPage === "summary" && (
        <SummaryPage
        bookingDetails={bookingDetails}
        onEdit={handleEditBooking}
        onConfirm={handleConfirmBooking}
        onHome={handleHome}
        />
      )}

      {currentPage === "confirmation" && (
        <ConfirmationPage
        bookingDetails={bookingDetails}
        reservationNumber={reservationNumber}
        onHome={handleHome}
        />
      )}
    </>
  );
}

export default App;