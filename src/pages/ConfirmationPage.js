import ReservationLayout from "../components/ReservationLayout";

function ConfirmationPage({ bookingDetails, reservationNumber }) {
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
    <ReservationLayout>
      <section className="confirmation-section">
        <div className="confirmation-icon" aria-hidden="true">
          ✓
        </div>

        <h2 className="confirmation-title">You're all set!</h2>

        <p className="confirmation-message">
          Your table has been reserved successfully.
        </p>

        <div className="reservation-number">
          <span>Reservation Number</span>
          <strong>{reservationNumber}</strong>
        </div>

        <div className="summary-card">
          <div className="summary-row">
            <span>Date</span>
            <strong>{formattedDate}</strong>
          </div>

          <div className="summary-row">
            <span>Start Time</span>
            <strong>{startTime}</strong>
          </div>

          <div className="summary-row">
            <span>Duration</span>
            <strong>{duration}</strong>
          </div>

          <div className="summary-row">
            <span>Guests</span>
            <strong>{guests}</strong>
          </div>

          <div className="summary-row">
            <span>Seating Type</span>
            <strong>{seatingType}</strong>
          </div>
        </div>
      </section>
    </ReservationLayout>
  );
}

export default ConfirmationPage;