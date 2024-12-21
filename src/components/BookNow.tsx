import { Link } from "react-router-dom";

const BookNow = () => {
  return (
    <div>
      <div className="booknow p-4 mt-5">
        <h3 className="mb-4">Ready to Book?</h3>
        <Link to="/aftercare">
          Review procedure conditions and aftercare info
        </Link>
        <p className="mt-3">
          Upon booking, please read through our cancellation policy:
          <br />
        </p>
        <p className="text-danger">
          We ask that you please reschedule or cancel
          <br />
          at least 1 day before the beginning of your appointment.
        </p>
        <p className="mb-4">
          Not sure which procedure you'd like or have questions about personal
          requests?
          <br />
          No worries, book a free consultation below:
        </p>
        <a
          href="https://square.site/book/LHK3NNJ1H6608/khanh-phan-microblading-lafayette-co"
          className="leave-review-button mb-4"
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

export default BookNow;
