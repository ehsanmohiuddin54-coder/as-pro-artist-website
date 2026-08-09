import { useState } from "react";
import { services } from "../data/services";
import CTAButton from "./CTAButton";
import { IconCheck } from "./Icons";

/**
 * Frontend booking request form.
 * NOTE: There is no backend wired up yet. On submit we simply show a
 * confirmation that the REQUEST was received — never that the appointment
 * is confirmed. Swap the handleSubmit logic for a real API/email/WhatsApp
 * integration (see comment below) when ready.
 */
const initialState = {
  fullName: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  time: "",
  people: "1",
  message: "",
  isBridal: false,
  weddingDate: "",
  weddingVenue: "",
  bridalRequirement: "",
  trialRequired: "",
  depositAcknowledged: false,
};

const BookingForm = ({ defaultService = "" }) => {
  const [form, setForm] = useState({ ...initialState, service: defaultService });
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.isBridal && !form.depositAcknowledged) return;

    // TODO: connect to a real backend — e.g. POST to an email service,
    // a booking API, or trigger a WhatsApp/Google Calendar integration.
    // For now this is a frontend-only request flow.
    console.log("Appointment request submitted:", form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="form-card form-success">
        <div className="form-success__icon">
          <IconCheck width={30} height={30} />
        </div>
        <h3>Appointment Request Sent</h3>
        <p>
          Thank you! Your appointment request has been received. We will contact you to
          confirm availability.
        </p>
        <CTAButton
          variant="outline-gold"
          onClick={() => {
            setForm(initialState);
            setSubmitted(false);
          }}
        >
          Send Another Request
        </CTAButton>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="fullName">Full Name</label>
          <input id="fullName" required value={form.fullName} onChange={update("fullName")} />
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" type="tel" required value={form.phone} onChange={update("phone")} />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" required value={form.email} onChange={update("email")} />
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="service">Service</label>
          <select id="service" required value={form.service} onChange={update("service")}>
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.name} value={s.name}>{s.name} — {s.price}</option>
            ))}
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="people">Number of People</label>
          <input id="people" type="number" min="1" value={form.people} onChange={update("people")} />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="date">Preferred Date</label>
          <input id="date" type="date" required value={form.date} onChange={update("date")} />
        </div>
        <div className="form-field">
          <label htmlFor="time">Preferred Time</label>
          <input id="time" type="time" required value={form.time} onChange={update("time")} />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="message">Message / Special Requirements</label>
        <textarea id="message" value={form.message} onChange={update("message")} />
      </div>

      <div className="form-checkbox" style={{ marginBottom: 8 }}>
        <input
          id="isBridal"
          type="checkbox"
          checked={form.isBridal}
          onChange={update("isBridal")}
        />
        <label htmlFor="isBridal" style={{ margin: 0 }}>
          This is a bridal enquiry
        </label>
      </div>

      {form.isBridal && (
        <fieldset className="form-fieldset">
          <legend>Bridal Details</legend>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="weddingDate">Wedding Date</label>
              <input id="weddingDate" type="date" value={form.weddingDate} onChange={update("weddingDate")} />
            </div>
            <div className="form-field">
              <label htmlFor="weddingVenue">Wedding Venue</label>
              <input id="weddingVenue" value={form.weddingVenue} onChange={update("weddingVenue")} />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="bridalRequirement">Bridal Makeup Requirement</label>
            <input
              id="bridalRequirement"
              placeholder="e.g. Traditional Asian bridal, modern bridal, hair only..."
              value={form.bridalRequirement}
              onChange={update("bridalRequirement")}
            />
          </div>
          <div className="form-field">
            <label htmlFor="trialRequired">Trial Required?</label>
            <select id="trialRequired" value={form.trialRequired} onChange={update("trialRequired")}>
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="not-sure">Not sure yet</option>
            </select>
          </div>
          <div className="form-checkbox">
            <input
              id="depositAcknowledged"
              type="checkbox"
              required
              checked={form.depositAcknowledged}
              onChange={update("depositAcknowledged")}
            />
            <label htmlFor="depositAcknowledged" style={{ margin: 0 }}>
              I understand that bridal bookings require a 50% deposit to secure the date.
            </label>
          </div>
        </fieldset>
      )}

      <button type="submit" className="btn btn--gold btn--block">
        Request Appointment
      </button>
      <p style={{ fontSize: "0.78rem", color: "var(--color-text-muted)", marginTop: 14, textAlign: "center" }}>
        This is an appointment request, not a confirmed booking. We'll contact you to confirm.
      </p>
    </form>
  );
};

export default BookingForm;
