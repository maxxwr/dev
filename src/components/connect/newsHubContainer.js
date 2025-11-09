import {NewsHub } from "./newsHub";

export const NewsHubContainer = () => {
  const dummySubscribe = () => {
    console.log("Usando EmailJS en lugar de Mailchimp");
  };

  return (
    < NewsHub
      status={null}
      message={""}
      onValidated={dummySubscribe}
    />
  );
};