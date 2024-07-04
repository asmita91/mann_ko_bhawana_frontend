
import React, { useState } from "react";

const TimeSlotSelection = ({
  date,
  today,
  maxDate,
  timeSlots,
  bookedSlots,
  onDateChange,
  onTimeSlotChange,
  price,
  checkout,
}) => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  function isSlotWithinBookedTime(
    bookedStart,
    bookedEnd,
    selectedStart,
    selectedEnd
  ) {
    // Convert time strings to Date objects
    const bookedStartTime = new Date(`2024-01-01T${bookedStart}`);
    const bookedEndTime = new Date(`2024-01-01T${bookedEnd}`);
    const selectedStartTime = new Date(`2024-01-01T${selectedStart}:00`);
    const selectedEndTime = new Date(`2024-01-01T${selectedEnd}:00`);
    // Check if selected time is within the booked time
    return (
      selectedStartTime >= bookedStartTime && selectedEndTime <= bookedEndTime
    );
  }
  const isSlotBooked = (slot) => {
    return bookedSlots.some((appointment) => {
      const [start, end] = slot.split("-");
      const appointmentStart = new Date(appointment.startTime)
        .toTimeString()
        .split(" ")[0];
      const appointmentEnd = new Date(appointment.endTime)
        .toTimeString()
        .split(" ")[0];

      const slotStart = new Date(`${date}T${start.trim()}`);
      const slotEnd = new Date(`${date}T${end.trim()}`);
      const startSlice = start.split(" ");
      const endSlice = end.split(" ");

      return isSlotWithinBookedTime(
        appointmentStart,
        appointmentEnd,
        startSlice[0],
        endSlice[0]
      );
    });
  };

  const handleSlotClick = (slot) => {
    if (!isSlotBooked(slot)) {
      setSelectedSlot(slot);
      onTimeSlotChange(slot);
    }
  };

  return (
    <div className="form-step">
      <div className="time-slots">
        {timeSlots.map((slot, index) => (
          <button
            key={index}
            type="button"
            className={`time-slot-button ${
              isSlotBooked(slot)
                ? "booked"
                : selectedSlot === slot
                ? "selected"
                : ""
            }`}
            onClick={() => handleSlotClick(slot)}
            disabled={isSlotBooked(slot)}
          >
            {slot} {isSlotBooked(slot) ? "(Booked)" : ""}
          </button>
        ))}
      </div>
      <style jsx>{`
        .time-slots {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 20px;
          
        }

        .time-slot-button {
          padding: 5px 15px;
          border: 1px solid #007bff;
          border-radius: 5px;
          background-color: #ffffff;
          color: #007bff;
          cursor: pointer;
          font-size: 0.9rem;
        }

        .time-slot-button.booked {
          background-color: #ccc;
          cursor: not-allowed;
        }

        .time-slot-button.selected {
          background-color: #007bff;
          color:#ffffff;
        }

        .time-slot-button:focus {
          outline: none;
        }

        .time-slot-button:not(.booked):hover {
          background-color: #0056b3;
          color:#ffffff;
        }
      `}</style>
    </div>
  );
};

export default TimeSlotSelection;
