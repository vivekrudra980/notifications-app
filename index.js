const Notification = (props) => {
  const { className, textContent, imgUrl } = props;

  return (
    <div className={`notification-item ${className}`}>
      <img src={imgUrl} alt={`${className}-icon`} />
      <p>{textContent}</p>
    </div>
  );
};

const element = (
  <div className="notifications-app-container">
    <h1 className="heading">Notifications</h1>
    <div className="notification-list">
      <Notification
        className="info-notification"
        textContent="Information Message"
        imgUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        className="success-notification"
        textContent="Success Message"
        imgUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        className="warning-notification"
        textContent="Warning Message"
        imgUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        className="error-notification"
        textContent="Error Message"
        imgUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
