import SocialLinks from "../SocialLinks";

const ContactView = () => {
  return (
    <div className="ContactView" id="contact-view">
      <h2>Get to know me better!</h2>
      <SocialLinks
        inlineStyle={{
          flexDirection: "none",
          gap: 50,
          justifyContent: "center",
        }}
      />
    </div>
  );
};

export default ContactView;
