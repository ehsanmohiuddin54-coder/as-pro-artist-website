import { useState } from "react";
import { categories, services } from "../data/services";
import CTAButton from "./CTAButton";
import { IconCheck, IconWhatsapp } from "./Icons";
import { siteInfo, whatsappLink } from "../data/siteInfo";

/**
 * Booking request form.
 * On submit the customer's details are formatted into a WhatsApp message and
 * sent to the salon's WhatsApp number (siteInfo.whatsappNumber) via wa.me.
 * The customer's own WhatsApp opens with the message pre-filled — they tap
 * send, and the salon receives the full booking details in one message.
 * Nothing is auto-confirmed: this remains a REQUEST until the salon replies.
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

// "2026-05-14" -> "14 May 2026" (falls back to the raw value if unparseable)
const formatDate = (value) => {
  if (!value) return "—";
  const d = new Date(`${value}T00:00:00`);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
};

// "14:30" -> "2:30 PM"
const formatTime = (value) => {
  if (!value) return "—";
  const [h, m] = value.split(":");
  const hour = Number(h);
  if (Number.isNaN(hour)) return value;
  const suffix = hour >= 12 ? "PM" : "AM";
  const twelve = hour % 12 === 0 ? 12 : hour % 12;
  return `${twelve}:${m} ${suffix}`;
};

export const buildBookingMessage = (form) => {
  const selected = services.find((s) => s.name === form.service);
  const price = selected ? ` (${selected.price})` : "";

  const lines = [
    `*NEW BOOKING REQUEST — ${siteInfo.businessName}*`,
    "",
    `*Name:* ${form.fullName}`,
    `*Phone:* ${form.phone}`,
    `*Email:* ${form.email}`,
    `*Service:* ${form.service}${price}`,
    `*Number of People:* ${form.people || "1"}`,
    "",
    `*Requested Date:* ${formatDate(form.date)}`,
    `*Requested Time:* ${formatTime(form.time)}`,
  ];

  if (form.message.trim()) {
    lines.push("", `*Message / Special Requirements:* ${form.message.trim()}`);
  }

  if (form.isBridal) {
    lines.push(
      "",
      "*— BRIDAL ENQUIRY —*",
      `*Wedding Date:* ${formatDate(form.weddingDate)}`,
      `*Wedding Venue:* ${form.weddingVenue || "—"}`,
      `*Bridal Requirement:* ${form.bridalRequirement || "—"}`,
      `*Trial Required:* ${form.trialRequired || "—"}`,
      `*50% Deposit Acknowledged:* ${form.depositAcknowledged ? "Yes" : "No"}`
    );
  }

  lines.push(
    "",
    `_Booked via the website on ${new Date().toLocaleString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })}_`
  );

  return lines.join("\n");
};

const BookingForm = ({ defaultService = "" }) => {
  const [form, setForm] = useState({ ...initialState, service: defaultService });
  const [submitted, setSubmitted] = useState(false);
  const [sentLink, setSentLink] = useState("");

  const update = (field) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.isBridal && !form.depositAcknowledged) return;

    const link = whatsappLink(buildBookingMessage(form));
    setSentLink(link);
    // Open WhatsApp with the booking details pre-filled for the salon number.
    window.open(link, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="form-card form-success">
        <div className="form-success__icon">
          <IconCheck width={30} height={30} />
        </div>
        <h3>Booking Request Ready to Send</h3>
        <p>
          WhatsApp should have opened with your booking details. Just press send and we'll
          receive your request — we'll then contact you to confirm availability.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 20 }}>
          <CTAButton
            href={sentLink}
            variant="whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            icon={<IconWhatsapp width={16} height={16} />}
          >
            Open WhatsApp Again
          </CTAButton>
          <CTAButton
            variant="outline-gold"
            onClick={() => {
              setForm(initialState);
              setSentLink("");
              setSubmitted(false);
            }}
          >
            Send Another Request
          </CTAButton>
        </div>
        <p style={{ fontSize: "0.78rem", color: "var(--color-text-muted)", marginTop: 16 }}>
          If WhatsApp didn't open, tap the button above or call {siteInfo.phoneDisplay}.
        </p>
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
            {categories.map((c) => (
              <optgroup key={c.id} label={c.label}>
                {services
                  .filter((s) => s.category === c.id)
                  .map((s) => (
                    <option key={s.name} value={s.name}>
                      {s.name} — {s.price}
                    </option>
                  ))}
              </optgroup>
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
        Send Booking via WhatsApp
      </button>
      <p style={{ fontSize: "0.78rem", color: "var(--color-text-muted)", marginTop: 14, textAlign: "center" }}>
        Your details will open in WhatsApp and be sent to {siteInfo.phoneDisplay}. This is an
        appointment request, not a confirmed booking — we'll contact you to confirm.
      </p>
    </form>
  );
};

export default BookingForm;
