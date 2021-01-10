function renderEntities(connection, entities) {
  var root = document.querySelector('tbody');
  while (root.lastChild) root.removeChild(root.lastChild);
  Object.keys(entities).sort().forEach(function (entId) {
    var tr = document.createElement('tr');
    var tdName = document.createElement('td');
    tdName.innerHTML = entId;
    tr.appendChild(tdName);
    var tdState = document.createElement('td');
    var text = document.createTextNode(entities[entId].state);
    tdState.appendChild(text);
    if (['switch', 'light', 'input_boolean'].indexOf(entId.split('.', 1)[0]) !== -1) {
      var button = document.createElement('button');
      button.innerHTML = 'toggle';
      button.onclick = function() {
        HAWS.callService(connection, 'homeassistant', 'toggle', { entity_id: entId });
      };
      tdState.appendChild(button);
    }
    tr.appendChild(tdState);
    root.appendChild(tr);
  });
}

function useAuth(auth) {
  return HAWS.createConnection({ auth: auth })
    .then(function(connection) {
      history.replaceState(null, null, "/");
      HAWS.subscribeEntities(connection, function(entities) {
        console.log(entities);
        renderEntities(connection, entities)
      });
    });
}

function errorAuth(err) {
  if (err === HAWS.ERR_HASS_HOST_REQUIRED) {
    document.getElementById('ask-connect').style.display = 'block'; 
  } else {
    var error = document.createElement('h1');
    error.innerText = "ERROR: " + err;
    document.body.appendChild(error);
  }
}


function init() {
  document.getElementById('connect').onsubmit = function(ev) {
    ev.preventDefault();
    var host = document.getElementById('host').value;
    var options = { hassUrl: host };
    
    // Mixed-content sucks. We can only connect to insecure contexts
    // If this page is served from insecure contexts.
    // For demo purposes, redirect user to insecure version of Glitch
    // if their instance is not secured (because it's local)
    if (host.substr(0, 5) == 'http:') {
      options.clientId = "http://" + location.host+"/websocket hassio/test.html"; 
      options.redirectUrl = "http://" + location.host+"/websocket hassio/test.html"; 
    }
    
    HAWS.getAuth(options).then(useAuth, errorAuth);
  }
  
  HAWS.getAuth().then(useAuth, errorAuth);
}

init();

