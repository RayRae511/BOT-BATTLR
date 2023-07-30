import React from "react";

// Define an object that maps bot classes to icon classes
const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

// Define a function component that renders a bot's details and actions
function BotsInfo({ bot, handleBotActionClick, alreadyListedBot }) {
  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            {/* Render the bot's avatar */}
            <img
              alt="oh no!"
              className="ui medium circular image bordered"
              src={bot.avatar_url}
            />
          </div>
          <div className="four wide column">
            {/* Render the bot's name */}
            <h2>Name: {bot.name}</h2>
            {/* Render the bot's catchphrase */}
            <p>
              <strong>Catchphrase: </strong>
              {bot.catchphrase}
            </p>
            {/* Render the bot's class and icon */}
            <strong>
              Class: {bot.bot_class}
              <i className={botTypeClasses[bot.bot_class]} />
            </strong>
            <br />
            {/* Render the bot's health, damage, and armor */}
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{bot.health}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{bot.damage}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{bot.armor}</strong>
                  </div>
                </div>
              </div>
            </div>
            {/* Render a button to go back to the list of bots */}
            <button
              className="ui button fluid"
              onClick={() => handleBotActionClick(bot, "show-all-bots")}
            >
              Go Back
            </button>
            {/* Render a button to enlist or delist the bot */}
            <button
              className="ui button fluid"
              onClick={() => alreadyListedBot ? handleBotActionClick(bot, "delist-bot") : handleBotActionClick(bot, "enlist-bot")}
            >
              {alreadyListedBot ? "Delist" : "Enlist"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default BotsInfo;