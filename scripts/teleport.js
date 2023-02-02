var _mark = false;
var _recall = false;
var _gate = false;
var _data = {};

  //controls 
  var runeControls = {
    one: {
        icon: '<i class="fas fa-check"></i>',
        label: "Mark Rune",
        disabled: _mark,
        callback: async () => {
          markRune();
        }
       },
       two: {
        icon: '<i class="fas fa-check"></i>',
        label: "Recall from Rune",
        disabled: _recall,
        callback: async () => {
          recallRune();
        }
       },
       three: {
        icon: '<i class="fas fa-check"></i>',
        label: "Gate from Rune",
        disabled: _gate,
        callback: async () => {
          gateRune();
        }
       },
       four: {
          icon: '<i class="fas fa-times"></i>',
          label: "Cancel",
          callback: () => {
    
          }
         }
  };

  //dialog
  var runeResults = {};


// Returns a Promise that resolves after "ms" Milliseconds
const timer = ms => new Promise(res => setTimeout(res, ms))

//mark rune spell from clicking rune
Hooks.on("dnd5e.useItem", async (data) => {
    console.log(data);

    if (data.name.toLowerCase().includes("rune") && data.type == "loot")
    {
        //set global
        _data = data;

      //mark
      if (game.actors.get(data.parent.id).items.filter(x => x.type == 'spell' && x.name == 'Mark')[0]) {
        _mark = true;
      }

      //recall
      if (game.actors.get(data.parent.id).items.filter(x => x.type == 'spell' && x.name == 'Recall')[0]) {
        _recall = true;
      }

      //gate
      if (game.actors.get(data.parent.id).items.filter(x => x.type == 'spell' && x.name == 'Gate Travel')[0]) {
        _gate = true;
      }

      if (_mark || _recall || _gate) {
        createDialog()
        runeResults.render(true)
      }
      // dnd5e.documents.macro.rollItem("Mark");
      // let token = game.scenes.current.tokens.filter(x => x.actorId == data.parent.id)[0];
      // data.setFlag('zei-lib', 'runeData', { sceneId: game.scenes.current.id, pos: {x: token.x, y: token.y}});
      // await game.actors.get(data.parent.id).updateEmbeddedDocuments("Item", [{_id: data.id, name: `Rune (${game.scenes.current.name})`}]);



    //   if () {
    // else {
    //   ui.notifications.error(`No rune or Mark spell/scroll found!`);
    // }

  }
  });


  function spawnMoonGate() {
    createMoongate(getMouseStagePos());  
  }
  
  async function createMoongate(token) {
    //console.log(`Creating portal at ${pos.x},${pos.y}`);
  
    //get scene id from rune
    let _runeData = _data.getFlag('zei-lib', 'runeData');
    let _sceneDestId = _runeData.sceneId;
    let _sceneDestCoords = _runeData.pos;
  
    //generate portal location GUID
    let _locationGuid = uuidv4().toString();
  
    //get destination scene
    let _sceneDest = game.scenes.filter(x => x.id == _sceneDestId)[0];
  
    //get data from actor for gate
    let _tokenData = token; //await getTokenData("_Gate");
    //let _pos = {x: pos.x, y: pos.y};
    //_tokenData.updateSource(_pos);
  
    //spawn token on this scene
    //let _tokenLocal = await canvas.scene.createEmbeddedDocuments("Token", [_tokenData]);
  
    //dest token data
    let _tokenDataDest = await getTokenData("_Gate");
    _tokenDataDest.updateSource(_sceneDestCoords);
  
    //spawn token on destination scene
    let _tokenDest = await _sceneDest.createEmbeddedDocuments("Token", [_tokenDataDest]);
  
    playSFX("spells/gate.ogg", 0.5);
  
    //create shape local
    let _drawingDataLocal = _createDrawing({x: _tokenData.x || 0, y: _tokenData.y || 0});
  
    //get drawing on this scene
    let _drawingLocal = await canvas.scene.createEmbeddedDocuments("Drawing", [_drawingDataLocal]);
    let _sceneLocalDrawing = await canvas.scene.drawings.get(_drawingLocal[0].id)
  
    //set teleport location local
    _sceneLocalDrawing.setFlag('zei-lib', "delete", true);
    _sceneLocalDrawing.setFlag('multilevel-tokens', "in", true);
    _sceneLocalDrawing.setFlag('multilevel-tokens', "out", true);
    _sceneLocalDrawing.setFlag('multilevel-tokens', "snapToGrid", true);
    _sceneLocalDrawing.setFlag('multilevel-tokens', "macroEnter", true);
    _sceneLocalDrawing.setFlag('multilevel-tokens', "macroName", "teleport");
    _sceneLocalDrawing.setFlag('multilevel-tokens', "teleportId", _locationGuid);
  
    //create shape dest
    let _drawingDataDest = _createDrawing({x: _tokenDataDest.x || 0, y: _tokenDataDest.y || 0});
  
    //get drawing on this scene
    let _drawingDest = await _sceneDest.createEmbeddedDocuments("Drawing", [_drawingDataDest]);
    let _sceneDestDrawing = await _sceneDest.drawings.get(_drawingDest[0].id)
  
    //set teleport location dest
    _sceneDestDrawing.setFlag('zei-lib', "delete", true);
    _sceneDestDrawing.setFlag('multilevel-tokens', "in", true);
    _sceneDestDrawing.setFlag('multilevel-tokens', "out", true);
    _sceneDestDrawing.setFlag('multilevel-tokens', "snapToGrid", true);
    _sceneDestDrawing.setFlag('multilevel-tokens', "macroEnter", true);
    _sceneDestDrawing.setFlag('multilevel-tokens', "macroName", "teleport");
    _sceneDestDrawing.setFlag('multilevel-tokens', "teleportId", _locationGuid);
  
    log(`Teleport setup complete ${_locationGuid}`);
  }
  
async function markRune() {
    let token = game.scenes.current.tokens.filter(x => x.actorId == _data.parent.id)[0];

    new Sequence()
    .effect()
        .file("modules/jb2a_patreon/Library/Generic/Particles/ParticlesOutward01_02_Regular_Blue_400x400.webm")
        .atLocation(token)
        .scaleToObject(2.5)
        .randomRotation()
    .play()

    playSFX("spells/mark.ogg", 0.50);

    _data.setFlag('zei-lib', 'runeData', { sceneId: game.scenes.current.id, pos: {x: token.x, y: token.y}});
    game.actors.get(_data.parent.id).updateEmbeddedDocuments("Item", [{_id: _data.id, name: `Rune (${game.scenes.current.name})`}]);
  }

 async function recallRune() {
        //get dest scene
        let runeData = _data.getFlag('zei-lib', 'runeData');
        let sceneDest = game.scenes.filter(x => x.id == runeData.sceneId)[0];
        let playerTokens = canvas.scene.tokens.filter(x => x.actor.type == "character");

   //todo loop through all players on scene canvas.scene.tokens.filter(x => x.actor.type == "character")
   playerTokens.map(async p => {

    //get spellcaster
      let token = p; //game.scenes.current.tokens.filter(x => x.actorId == _data.parent.id)[0];

      //fx
      playSFX("spells/recall.ogg", 0.5);
      new Sequence()
      .effect()
          .file("modules/jb2a_patreon/Library/Generic/Marker/EnergyStrands_01_Regular_Blue_600x600.webm")
          .atLocation(token)
          .scaleToObject(2.5)
          .randomRotation()
      .wait(2000)
      .thenDo(async () => {
        playSFX("sfx/poof.ogg", 0.5);
        new Sequence()
        .effect()
          .file("modules/jb2a_patreon/Library/Generic/Explosion/Explosion_04_Regular_Blue_400x400.webm")
          .atLocation(token)
          .scaleToObject(2.5)
          .play()

          //get token data of player
          let tokenData = await getTokenDataById(token.actorId);
          tokenData.updateSource(runeData.pos);

         //get userid of player
         let playerId = game.users.filter(x => x.active && x.character?.id == token.actorId)[0]?.id;

          //remove player from current scene
          setTimeout(async () => {

            await socketZ.executeAsGM("deleteToken", canvas.scene.tokens.filter(x => x.actorId == token.actorId)[0].id);

          //await canvas.scene.deleteEmbeddedDocuments("Token", [canvas.scene.tokens.filter(x => x.actorId == token.actorId)[0].id]);

          //create player in dest scene
          await sceneDest.createEmbeddedDocuments("Token", [tokenData]);

          //fx
          playSFX("sfx/poof.ogg", 0.5);
          new Sequence()
          .effect()
            .file("modules/jb2a_patreon/Library/Generic/Explosion/Explosion_04_Regular_Blue_400x400.webm")
            .atLocation(sceneDest.tokens.filter(x => x.actorId == token.actorId)[0].id)
            .scaleToObject(2.5)
            .play()

            //switch scenes for player
            console.log(`moving player: ${playerId} to scene: ${sceneDest.id}`)

            await socketZ.executeAsGM("moveToScene", sceneDest.id, playerId);
            //game.socket.emit("pullToScene", sceneDest.id, playerId);
          }, 500);
        
      }).play()

      //await timer(1000);

      // async () => {
      //  await setTimeout(async ()=> { console.log('waiting') }, 1000);
      // }

    });
  }

 async function gateRune() {
    const callbacks = {
        post: async (template, token) => {
          console.log(token);

          createMoongate(token);
        }
    };

   let summon = await warpgate.spawn("_Gate", {}, callbacks, {});
   //console.log(summon);
  }

  function createDialog() {
    runeResults = new Dialog({
        title: "Mark Rune",
        content: "<p>Do you wish to mark this rune? It will override it's current location.</p>",
        buttons: runeControls,
        default: "two",
        render: html => console.log("Register interactivity in the rendered dialog"),
        close: html => console.log("This always is logged no matter which option is chosen")
      });
  }


