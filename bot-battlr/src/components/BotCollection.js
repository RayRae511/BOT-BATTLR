import React from "react";

function BotsCollection( { filteredBots }) {
  // The BotCollection component takes in a prop called filteredBots which is an array of BotCard components.

  return (
    <div className="ui four column grid">
      <div className="row">
        {/* Displays a title for the collection */}
        COLLECTION OF ALL BOTS
        {/* Renders the array of BotCard components */}
        {filteredBots}
      </div>
    </div>
  );
}

export default BotsCollection;