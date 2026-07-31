// function SummaryPage() {
//   return (
//     <main>
//       <h1>Reservation Summary</h1>
//       <p>Reservation details will go here.</p>
//     </main>
//   );
// }

// export default SummaryPage;

// import ReservationLayout from "../components/ReservationLayout";

// function SummaryPage() {
//   return (
//     <ReservationLayout>
//       <h2>Reservation Summary</h2>
//       <p>Reservation details will go here.</p>
//     </ReservationLayout>
//   );
// }

// export default SummaryPage;




import ReservationLayout from "../components/ReservationLayout";

function SummaryPage({
  bookingDetails,
  onEdit,
  onConfirm,
  onHome,
}) {
  const {
    date,
    startTime,
    duration,
    guests,
    seatingType,
  } = bookingDetails;

  const formattedDate = date
    ? new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Not selected";

  return (
    <ReservationLayout onHome={onHome}>
      <section className="summary-section">
        <h2>Reservation Summary</h2>

        <div className="summary-card">
          <div className="summary-row">
            <span>Date</span>
            <strong>{formattedDate}</strong>
          </div>

          <div className="summary-row">
            <span>Start Time</span>
            <strong>{startTime || "Not selected"}</strong>
          </div>

          <div className="summary-row">
            <span>Duration</span>
            <strong>{duration || "Not selected"}</strong>
          </div>

          <div className="summary-row">
            <span>Guests</span>
            <strong>{guests}</strong>
          </div>

          <div className="summary-row">
            <span>Seating Type</span>
            <strong>{seatingType || "Not selected"}</strong>
          </div>
        </div>

        <div className="summary-actions">
          <button
            type="button"
            className="secondary-button"
            onClick={onEdit}
          >
            Edit Reservation
          </button>

          <button
            type="button"
            className="primary-button"
            onClick={onConfirm}
          >
            Confirm Reservation
          </button>
        </div>
      </section>
    </ReservationLayout>
  );
}

export default SummaryPage;