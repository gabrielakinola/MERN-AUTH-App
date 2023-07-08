import styles from "./TicketForm.module.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTicket, setIsTicket, setImgUrl } from "../slices/ticketSlice";
import { useFormik } from "formik";
import { generateImageUrl } from "../helpers/imageUrlGen";
import { toast } from "react-toastify";

const TicketForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isTicketPage, tickets, imgUrl } = useSelector(
    (state) => state.tickets
  );

  const apiKey = process.env.REACT_APP_API_KEY;

  console.log(apiKey);

  const formik = useFormik({
    initialValues: {
      artistName: "",
      eventTitle: "",
      ticketType: "",
      venue: "",
      location: "",
      section: "",
      row: "",
      seat: "",
      date: "",
      time: "",
      level: "",
      titleFilter: "",
    },
    // enableReinitialize: true,
  });

  const genImageHandler = async () => {
    const imgUrlSt = imgUrl;
    const { artistName, titleFilter } = formik.values;
    if (artistName && !imgUrlSt) {
      const image = await generateImageUrl(artistName, titleFilter, apiKey);
      dispatch(setImgUrl(image));
      toast.success(`Img for ${artistName} generated succesfully`);
    } else {
      toast.error("Please enter a valid name to generate image");
    }
  };

  const addTicketHandler = async () => {
    let ticketDetails;
    if (imgUrl) {
      ticketDetails = { ...formik.values, imageUrl: imgUrl };
      dispatch(addTicket(ticketDetails));

      toast.success("Ticket added succesfully");
    } else {
      toast.error("Cannot add ticket item: invalid image");
    }
  };

  const submitHandler = (e) => {
    if (imgUrl) {
      dispatch(setIsTicket());
      navigate("/users/tickets");
    } else {
      toast.error("Cannot generate tickets: invalid image");
    }
  };

  return (
    <div className={styles["form-container"]}>
      <h3>Tickets Generator Form</h3>

      <p>
        Please fill the form for each ticket item and make sure to click on
        <span style={{ fontWeight: "bold" }}>"Add ticket" </span> to add each
        ticket item to cart before proceeding to click{" "}
        <span style={{ fontWeight: "bold" }}>Generate tickets</span>
      </p>

      <form onSubmit={submitHandler}>
        <div className={styles["inputs"]}>
          <div className={styles["input-control"]}>
            <label>Artist Name</label>
            <input
              type="text"
              id="name"
              name="artistName"
              onChange={formik.handleChange}
              value={formik.values.artistName}
            />
          </div>
          <div className={styles["input-control"]}>
            <label>Event Title</label>
            <input
              type="text"
              id="event-title"
              name="eventTitle"
              onChange={formik.handleChange}
              value={formik.values.eventTitle}
            />
          </div>
          <div className={styles["input-control"]}>
            <label>Ticket Type</label>
            <input
              type="text"
              id="ticket-type"
              name="ticketType"
              onChange={formik.handleChange}
              value={formik.values.ticketType}
            />
          </div>
          <div className={styles["input-control"]}>
            <label>Venue</label>
            <input
              type="text"
              placeholder="Enter event venue name"
              id="venue"
              name="venue"
              onChange={formik.handleChange}
              value={formik.values.venue}
            />
          </div>
          <div className={styles["input-control"]}>
            <label>Location</label>
            <input
              placeholder="Enter event location"
              type="text"
              id="location"
              name="location"
              onChange={formik.handleChange}
              value={formik.values.location}
            />
          </div>
          <div className={styles["input-control"]}>
            <label>Section</label>
            <input
              type="text"
              placeholder="GA"
              id="section"
              name="section"
              onChange={formik.handleChange}
              value={formik.values.section}
            />
          </div>
          <div className={styles["input-control"]}>
            <label>Row</label>
            <input
              type="text"
              id="row"
              name="row"
              onChange={formik.handleChange}
              value={formik.values.row}
            />
          </div>
          <div className={styles["input-control"]}>
            <label>Seat</label>
            <input
              type="text"
              id="seat"
              name="seat"
              onChange={formik.handleChange}
              value={formik.values.seat}
            />
          </div>
          <div className={styles["input-control"]}>
            <label>Date</label>
            <input
              placeholder="day, mmm dd, yyyy"
              type="text"
              id="date"
              name="date"
              onChange={formik.handleChange}
              value={formik.values.date}
            />
          </div>
          <div className={styles["input-control"]}>
            <label>Time</label>
            <input
              placeholder="hh:mm am/pm"
              type="text"
              id="time"
              name="time"
              onChange={formik.handleChange}
              value={formik.values.time}
            />
          </div>
          <div className={styles["input-control"]}>
            <label>Level</label>
            <input
              placeholder="optional"
              type="text"
              id="level"
              name="level"
              onChange={formik.handleChange}
              value={formik.values.level}
            />
          </div>
          <div className={styles["input-control"]}>
            <label>Event Title(Filter Search)</label>
            <input
              placeholder="optional"
              type="text"
              id="titleFilter"
              name="titleFilter"
              onChange={formik.handleChange}
              value={formik.values.titleFilter}
            />
          </div>
        </div>
        <div className={styles.actions}>
          {!imgUrl && (
            <button onClick={genImageHandler} type="button">
              Generate Img
            </button>
          )}
          <button onClick={addTicketHandler} type="button">
            Add Ticket
          </button>
          <button type="submit">Generate Tickets</button>
        </div>
      </form>
    </div>
  );
};

export default TicketForm;
