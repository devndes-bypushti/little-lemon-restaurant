import { useState } from "react";
import "./App.css";

import BookingPage from "./pages/BookingPage";
import SummaryPage from "./pages/SummaryPage";
import ConfirmationPage from "./pages/ConfirmationPage";

function App() {
  const [currentPage, setCurrentPage] = useState("booking");

  const [bookingDetails, setBookingDetails] = useState({
    date: "",
    startTime: "",
    duration: "",
    guests: 2,
    seatingType: "",
  });

  const [reservationNumber, setReservationNumber] = useState("");

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

  return (
    <>
      {currentPage === "booking" && (
        <BookingPage
          bookingDetails={bookingDetails}
          onSubmit={handleBookingSubmit}
        />
      )}

      {currentPage === "summary" && (
        <SummaryPage
          bookingDetails={bookingDetails}
          onEdit={handleEditBooking}
          onConfirm={handleConfirmBooking}
        />
      )}

      {currentPage === "confirmation" && (
        <ConfirmationPage
          bookingDetails={bookingDetails}
          reservationNumber={reservationNumber}
        />
      )}
    </>
  );
}

export default App;