import Hero from "../components/Hero";
import { useState } from "react";
import TicketForm from "../components/TicketForm";

const HomeScreen = () => {
  const [isGeneratorForm, setIsGeneratorForm] = useState(false);

  const generatorClickHandler = () => {
    setIsGeneratorForm(true);
  };

  return !isGeneratorForm ? (
    <Hero onClickGenerator={generatorClickHandler} />
  ) : (
    <TicketForm />
  );
};

export default HomeScreen;
