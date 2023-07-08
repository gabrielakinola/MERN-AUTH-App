import styles from "./Ticket.module.css";
import { Link } from "react-router-dom";

import { Dot, Ticket } from "react-bootstrap-icons";
import apple from "./apple.png";
import tmVerified from "./tmLogo.png";

const Tickets = ({
  id,
  name,
  title,
  ticketType,
  venue,
  sec,
  imageUrl,
  row,
  seat,
  date,
  time,
  level,
}) => {
  return (
    <li className={styles.card}>
      <div className={styles.ticketType}>{ticketType}</div>

      <div className={styles.ticketDetails}>
        <div>
          <p className={styles.seatproptitle}>SEC</p>
          <p className={styles.seatprop}>{sec}</p>
        </div>
        <div>
          <p className={styles.seatproptitle}>ROW</p>
          <p className={styles.seatprop}>{row}</p>
        </div>
        <div>
          <p className={styles.seatproptitle}>SEAT</p>
          <p className={styles.seatprop}>{seat}</p>
        </div>
      </div>

      <div
        className={styles.imageUrl}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(${imageUrl})`,
          backgroundPosition: `center`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `100%`,
        }}
      >
        <div className={styles.descriptions}>
          <p className={styles.descChild}>
            {name}
            <span> | </span>
            {title}
          </p>
        </div>
        <div className={styles.descriptions2}>
          <p className={styles.descChild}>
            {date} <span> {time}</span>{" "}
            <span>
              {" "}
              <Dot style={{ fontSize: `1.5rem` }} />{" "}
            </span>
            {venue}
          </p>
        </div>
      </div>
      <div className={styles[`level-details`]}>
        <div className={styles[`level-descriptions`]}>
          <p className={styles["seat-level"]}>{level}</p>
        </div>
        <div className={styles[`apple-wallet`]}>
          <img className={styles.apple} src={apple} alt="apple wallet" />
        </div>
        <div className={styles[`barcode-details`]}>
          <Link style={{ textDecoration: `none`, fontWeight: "bold" }} to={"#"}>
            View Barcode{" "}
          </Link>
          <Link style={{ textDecoration: `none`, fontWeight: "bold" }} to={"#"}>
            Ticket Details
          </Link>
        </div>
      </div>
      <div className={styles.tmVerified}>
        <div className={styles.tmVerifiedLogo}>
          <img className={styles.tmLogo} src={tmVerified} alt="tmlogo" />
        </div>
        <em className={styles.tmVerifiedCont}>ticketmaster.verified</em>
      </div>
    </li>
  );
};

export default Tickets;
