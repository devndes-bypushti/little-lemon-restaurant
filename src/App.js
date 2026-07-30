import { useState } from "react";
import "./App.css";

import BookingPage from "./pages/BookingPage";
import SummaryPage from "./pages/SummaryPage";
import ConfirmationPage from "./pages/ConfirmationPage";

function App() {
  const [currentPage, setCurrentPage] = useState("booking");

  return (
    <>
      {currentPage === "booking" && (
        <BookingPage />
      )}

      {currentPage === "summary" && (
        <SummaryPage />
      )}

      {currentPage === "confirmation" && (
        <ConfirmationPage />
      )}
    </>
  );
}

export default App;