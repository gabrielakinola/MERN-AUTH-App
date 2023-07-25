import styles from "./TicketSummary.module.css";
import tixIcon from "./TixIcon.png";
import { Dot } from "react-bootstrap-icons";

const TicketSummary = (props) => {
  const { noOftickets, artistName, eventTitle, venue, date, time, imageUrl } =
    props.ticketSummary;
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(${imageUrl})`,
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `100%`,
      }}
      className={styles.ticketSummary}
      onClick={props.onClickDiv}
    >
      <div className={styles["summary-description1"]}>
        <p>
          {artistName}
          <span> | </span>
          {eventTitle}
        </p>
      </div>
      <div className={styles["summary-description2"]}>
        <p>
          {date}, <span> {time}</span>{" "}
          <span>
            {" "}
            <Dot style={{ fontSize: `1.5rem` }} />{" "}
          </span>
          <span>{venue}</span>
        </p>
      </div>
      <div className={styles["summary-description3"]}>
        <div className={styles.tixIconDiv}>
          <img className={styles.tixIcon} src={tixIcon} alt="tmlogo" />
        </div>
        <p>
          {noOftickets} <span> tickets</span>
        </p>
      </div>
    </div>
  );
};

export default TicketSummary;
