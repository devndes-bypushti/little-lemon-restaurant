// function SummaryPage() {
//   return (
//     <main>
//       <h1>Reservation Summary</h1>
//       <p>Reservation details will go here.</p>
//     </main>
//   );
// }

// export default SummaryPage;

import ReservationLayout from "../components/ReservationLayout";

function SummaryPage() {
  return (
    <ReservationLayout>
      <h2>Reservation Summary</h2>
      <p>Reservation details will go here.</p>
    </ReservationLayout>
  );
}

export default SummaryPage;