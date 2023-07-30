import React from "react";

// Define an object that maps bot classes to corresponding CSS classes
const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

// Define a functional component that renders the details of a single bot
function BotsCard({ bot, handleBotActionClick }) {
  return (
    <div className="ui column">
      <div
        className="ui card"
        key={bot.id}
        onClick={() => handleBotActionClick(bot, "show-bot-specs")}
      >
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {/* Render the bot's name */}
            {bot.name}
            {/* Render an icon next to the bot's name based on its class */}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          {/* Render the bot's health */}
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>
          {/* Render the bot's damage */}
          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          {/* Render the bot's armor */}
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          {/* Render a button to release the bot */}
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={(event)=>{
                  event.stopPropagation()
                  // Call the handleBotActionClick function with the "release-bot" action type
                  {handleBotActionClick(bot, "release-bot")}}}
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotsCard;