import Tickets from "../components/Ticket";
import styles from "./TicketScreen.module.css";
import Radio from "../components/Radio";
import { useSelector } from "react-redux";
import TransferActions from "../components/TransferActions";

const randomId = function (length = 6) {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
};

const TicketScreen = () => {
  const TICKETS = useSelector((state) => state.tickets.tickets);

  const content = TICKETS.map((ticket) => (
    <Tickets
      key={randomId()}
      name={ticket.artistName}
      title={ticket.eventTitle}
      ticketType={ticket.ticketType}
      imageUrl={ticket.imageUrl}
      venue={ticket.venue}
      sec={ticket.section}
      row={ticket.row}
      seat={ticket.seat}
      date={ticket.date}
      time={ticket.time}
      level={ticket.level}
    />
  ));

  const radioContent = TICKETS.map((ticket) => <Radio />);

  return (
    <div className={styles.container}>
      <ul className={styles.cards}>{content}</ul>
      <div className={styles.radio}>{radioContent}</div>
      <TransferActions />
      <div style={{ height: `300px` }}></div>
    </div>
  );
};

export default TicketScreen;
