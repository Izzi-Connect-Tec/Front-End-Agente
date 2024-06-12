import "amazon-connect-streams";

export function acceptCall(){
    // eslint-disable-next-line no-undef
    const agent = new connect.Agent();
    // eslint-disable-next-line no-undef
    const contact  = agent.getContacts(connect.ContactType.VOICE)?.[0]
    const activeConnections = contact?.getConnections().filter((conn) => conn.isActive()) || [];

    if (activeConnections.length === 0) {
      console.log("No Active Connections to answer");
      return;
  }

  contact.accept({
    success: function () {
      console.log("Llamada aceptada por boton")
    },
    failure: function (err) {
      console.log("Error al aceptar por boton")
    },
  });
}

export function rejectCall(){

  // eslint-disable-next-line no-undef
  const agent = new connect.Agent();
  // eslint-disable-next-line no-undef
  const contact  = agent.getContacts(connect.ContactType.VOICE)?.[0]
  const conn = contact?.getInitialConnection()

  if (conn.length === 0) {
    console.log("No Active Connections to pause");
    return;
}

contact.reject();
        
}

export function muteAgent(){
  // eslint-disable-next-line no-undef
  const agent = new connect.Agent();
  // eslint-disable-next-line no-undef
  const contact  = agent.getContacts(connect.ContactType.VOICE)?.[0]
  
  // Get all open active connections
  const activeConnections = contact?.getConnections().filter((conn) => conn.isActive()) || [];
  
  
  if (activeConnections.length === 0) {
      console.log("No Active Connections to mute");
      return;
  }
  
  // Check if we are using multiparty and see if there more than 2 active connections
  if (contact.isMultiPartyConferenceEnabled() && activeConnections.length > 2) {
      // if any of those are in connecting mode
      const connectingConnections =  contact?.getConnections().filter((conn) => conn.isConnecting()) || [];
      if (connectingConnections.length === 0) {
          console.log("Agent Connection is muted at the server side");
          contact.getAgentConnection().muteParticipant();
      } else {
          console.log("Agent Connection cannot be muted while multi party participant is connecting")
      }
  } else {
      console.log("Agent connection muted at the client side");
      agent.mute();
  }
}


export function unmuteAgent(){
  // eslint-disable-next-line no-undef
  const agent = new connect.Agent();
  // eslint-disable-next-line no-undef
  const contact  = agent.getContacts(connect.ContactType.VOICE)?.[0]
  
  // Get all open active connections
  const activeConnections = contact?.getConnections().filter((conn) => conn.isActive()) || [];
  
  
  if (activeConnections.length === 0) {
      console.log("No Active Connections to mute");
      return;
  }
  
  // Check if we are using multiparty and see if there more than 2 active connections
  if (contact.isMultiPartyConferenceEnabled() && activeConnections.length > 2) {
      // if any of those are in connecting mode
      const connectingConnections =  contact?.getConnections().filter((conn) => conn.isConnecting()) || [];
      if (connectingConnections.length === 0) {
          console.log("Agent Connection is muted at the server side");
          contact.getAgentConnection().unmuteParticipant();
      } else {
          console.log("Agent Connection cannot be muted while multi party participant is connecting")
      }
  } else {
      console.log("Agent connection muted at the client side");
      agent.unmute();
  }
}


export function holdCall(){

  // eslint-disable-next-line no-undef
  const agent = new connect.Agent();
  // eslint-disable-next-line no-undef
  const contact  = agent.getContacts(connect.ContactType.VOICE)?.[0]
  const conn = contact?.getInitialConnection()

  if (conn.length === 0) {
    console.log("No Active Connections to pause");
    return;
}

  conn.hold();

}


export function resumeCall(){

  // eslint-disable-next-line no-undef
  const agent = new connect.Agent();
  // eslint-disable-next-line no-undef
  const contact  = agent.getContacts(connect.ContactType.VOICE)?.[0]
  const conn = contact?.getInitialConnection()

  if (conn.length === 0) {
    console.log("No Active Connections to pause");
    return;
}

  conn.resume();

}


export function hangUpCall(){

  // eslint-disable-next-line no-undef
  const agent = new connect.Agent();
  // eslint-disable-next-line no-undef
  const contact  = agent.getContacts(connect.ContactType.VOICE)?.[0]
  const conn = contact?.getInitialConnection()

  if (conn.length === 0) {
    console.log("No Active Connections to pause");
    return;
}

  conn.destroy();
        
}


export function clearCall(){

  // eslint-disable-next-line no-undef
  const agent = new connect.Agent();
  // eslint-disable-next-line no-undef
  const contact  = agent.getContacts(connect.ContactType.VOICE)?.[0]

contact.clear({
  success: function () {
    console.log("PAUSA")
  },
  failure: function (err) {
    console.log("NO PAUSA")
  },
});

}
