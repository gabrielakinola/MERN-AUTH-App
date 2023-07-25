import Tickets from "../components/Ticket";
import styles from "./TicketScreen.module.css";
import { useState } from "react";
import Radio from "../components/Radio";
import { useSelector } from "react-redux";
import TransferActions from "../components/TransferActions";
import TicketSummary from "../components/TicketSummary";

const randomId = function (length = 6) {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
};

const TicketScreen = () => {
  const [isMainContent, setShowMainContent] = useState(false);
  const TICKETS = useSelector((state) => state.tickets.tickets);

  const ticketSummary = {
    noOftickets: TICKETS.length,
    artistName: TICKETS[0].artistName,
    eventTitle: TICKETS[0].eventTitle,
    venue: TICKETS[0].venue,
    date: TICKETS[0].date,
    time: TICKETS[0].time,
    imageUrl: TICKETS[0].imageUrl,
  };

  console.log(ticketSummary);

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

  const mainTicketContent = (
    <div className={styles.container}>
      <ul className={styles.cards}>{content}</ul>
      <div className={styles.radio}>{radioContent}</div>
      <TransferActions />
      <div style={{ height: `300px` }}></div>
    </div>
  );

  const divClickHandler = () => {
    setShowMainContent(true);
  };

  return (
    <>
      {!isMainContent && (
        <TicketSummary
          onClickDiv={divClickHandler}
          ticketSummary={ticketSummary}
        />
      )}
      {isMainContent && mainTicketContent}
    </>
  );
};

export default TicketScreen;
