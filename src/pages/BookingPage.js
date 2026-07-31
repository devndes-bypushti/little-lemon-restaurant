import { useState } from "react";
import ReservationLayout from "../components/ReservationLayout";

function BookingPage({
  bookingDetails,
  onSubmit,
  onHome,
}) {
  const [date, setDate] = useState(bookingDetails.date);
  const [startTime, setStartTime] = useState(bookingDetails.startTime);
  const [duration, setDuration] = useState(bookingDetails.duration);
  const [guests, setGuests] = useState(bookingDetails.guests);
  const [seatingType, setSeatingType] = useState(bookingDetails.seatingType);

  const [errors, setErrors] = useState({});

  const handleGuestDecrease = () => {
    setGuests((currentGuests) => Math.max(1, currentGuests - 1));
  };

  const handleGuestIncrease = () => {
    setGuests((currentGuests) => Math.min(10, currentGuests + 1));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!date) {
      newErrors.date = "Please select a date.";
    }

    if (!startTime) {
      newErrors.startTime = "Please select a start time.";
    }

    if (!duration) {
      newErrors.duration = "Please select a duration.";
    }

    if (!seatingType) {
      newErrors.seatingType = "Please select a seating type.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    onSubmit({
      date,
      startTime,
      duration,
      guests,
      seatingType,
    });
  };

  return (
    <ReservationLayout onHome={onHome}>
      <section className="booking-section">
        <h2>Reserve a Table</h2>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="date">Date</label>

            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              min={new Date().toISOString().split("T")[0]}
              aria-describedby={errors.date ? "date-error" : undefined}
              aria-invalid={errors.date ? "true" : "false"}
            />

            {errors.date && (
              <p id="date-error" className="error-message">
                {errors.date}
              </p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="start-time">Start Time</label>

            <select
              id="start-time"
              name="startTime"
              value={startTime}
              onChange={(event) => setStartTime(event.target.value)}
              aria-describedby={
                errors.startTime ? "start-time-error" : undefined
              }
              aria-invalid={errors.startTime ? "true" : "false"}
            >
              <option value="">Select a time</option>
              <option value="18:00">18:00 hours</option>
              <option value="18:30">18:30 hours</option>
              <option value="19:00">19:00 hours</option>
              <option value="19:30">19:30 hours</option>
              <option value="20:00">20:00 hours</option>
              <option value="20:30">20:30 hours</option>
              <option value="21:00">21:00 hours</option>
            </select>

            {errors.startTime && (
              <p id="start-time-error" className="error-message">
                {errors.startTime}
              </p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="duration">Duration</label>

            <select
              id="duration"
              name="duration"
              value={duration}
              onChange={(event) => setDuration(event.target.value)}
              aria-describedby={
                errors.duration ? "duration-error" : undefined
              }
              aria-invalid={errors.duration ? "true" : "false"}
            >
              <option value="">Select duration</option>
              <option value="01:00">01:00 hour</option>
              <option value="01:30">01:30 hours</option>
              <option value="02:00">02:00 hours</option>
              <option value="02:30">02:30 hours</option>
              <option value="03:00">03:00 hours</option>
            </select>

            {errors.duration && (
              <p id="duration-error" className="error-message">
                {errors.duration}
              </p>
            )}
          </div>

          <fieldset className="form-group">
            <legend>Guests</legend>

            <div className="guest-control">
              <button
                type="button"
                onClick={handleGuestDecrease}
                disabled={guests === 1}
                aria-label="Decrease number of guests"
              >
                −
              </button>

              <span aria-live="polite">{guests}</span>

              <button
                type="button"
                onClick={handleGuestIncrease}
                disabled={guests === 10}
                aria-label="Increase number of guests"
              >
                +
              </button>
            </div>

            <p className="guest-description">
              Maximum 10 guests per reservation.
            </p>
          </fieldset>

          <fieldset className="form-group">
            <legend>Seating Type</legend>

            <div className="seating-options">
              <label>
                <input
                  type="radio"
                  name="seatingType"
                  value="Indoor"
                  checked={seatingType === "Indoor"}
                  onChange={(event) => setSeatingType(event.target.value)}
                />
                Indoor
              </label>

              <label>
                <input
                  type="radio"
                  name="seatingType"
                  value="Outdoor"
                  checked={seatingType === "Outdoor"}
                  onChange={(event) => setSeatingType(event.target.value)}
                />
                Outdoor
              </label>
            </div>

            {errors.seatingType && (
              <p className="error-message">{errors.seatingType}</p>
            )}
          </fieldset>

          <button type="submit" className="primary-button">
            Find a Table
          </button>
        </form>
      </section>
    </ReservationLayout>
  );
}

export default BookingPage;