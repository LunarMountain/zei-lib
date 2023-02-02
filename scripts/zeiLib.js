// ====================================================
var _MODULE_NAME = (_MODULE_NAME === undefined) ? "zei-lib" : _MODULE_NAME;

// ====================================================
//town variable to check if party is in town or outdoors.
const _townSettings = {
  inTown: true,
  weather: ""
};

const _settings = {
  isPaused: false
}

async function toggleTownR() {
  if (!game.user.isGM) return;
  const result = await socketZ.executeForEveryone("toggleTown");
}

function toggleTown(value) {
  if (!game.user.isGM) return;

  if (value != undefined)
    _townSettings.inTown = value;
  else
    _townSettings.inTown = !_townSettings.inTown;

  if (_townSettings.inTown) {
    chat(`The party is now inside of town. Recovery will be 100% and banks are accessible.`);
    playSFX("hom/discovery.ogg", 0.5);
  } else {
    chat(`The party is now outside of town. Recovery will be halved and banks are no longer accessible.`);
    playSFX("hom/mystery.ogg", 0.5);
  }
}
// ====================================================

function log(m) {
  if (game.user?.isGM)
    console.log(m);
}

// ====================================================
//socket
var socketZ;

Hooks.once("socketlib.ready", () => {
  socketZ = socketlib.registerModule("zei-lib");
  socketZ.register("ghostOn", ghostOn);
  socketZ.register("ghostOff", ghostOff);
  socketZ.register("shakeScreen", shakeScreen);
  socketZ.register("flashScreen", flashScreen);
  socketZ.register("fadeScreen", fadeScreen);
  socketZ.register("encounterTrans", encounterTrans);
  socketZ.register("toggleTown", toggleTown);
  socketZ.register("deleteToken", deleteToken);
  socketZ.register("moveToScene", moveToScene);
});

// ====================================================

async function moveToScene(sceneId, playerId) {
 await game.socket.emit("pullToScene", sceneId, playerId);
}

async function deleteToken(tokenId) {
  await canvas.scene.deleteEmbeddedDocuments("Token", [tokenId]);
}

 async function spawnLight(data) {
   let testActor = game.actors.find(a => a.data._id == 'oMnNyeJuH79im35d').data.token.toJSON();
   testActor.x = data.templateData.x;
   testActor.y = data.templateData.y;
   return await canvas.scene.createEmbeddedDocuments("Token", [testActor]);
 }

function getFurthestTarget(name, callback) {
  let furthest = null;
  let caster = game.scenes.find(x => x.active).data.tokens.find(t => t.name == name)?.data;

if (!caster){
  console.warn("Could not find actor!");
  return callback();
}

if (!game.user.targets.size)
 {
  console.warn("No targets!");
  return callback();
 }

  let start = {x: caster.x, y: caster.y};

  function distanceFrom (t1, t2) { return Math.sqrt((Math.pow(t1.x - t2.x, 2))+(Math.pow(t1.y - t2.y, 2))) }

  let objArray = Array.from(game.user.targets).map(t => [ { actor: t, distance: distanceFrom(caster, {x: t.data.x, y: t.data.y}) } ]);
  let targets = [].concat.apply([], objArray.map(Object.values));

  targets.sort((a, b) => b.distance - a.distance);
  if (targets.length) furthest = targets[0].actor;
  return callback(furthest);
}

function updateDarkness(dark, fade = 500) {
  if (game.scenes.current.data.darkness == dark) return;
  game.scenes.current.update({"darkness": dark}, {animateDarkness: fade});
}

function fadeInAndOut(dark = 1, t = 500) {
  let darkness = game.scenes.current.data.darkness;

  updateDarkness(1, t);
  setTimeout(() => {
    setTimeout(() => { updateDarkness(darkness) }, t);
  }, t * 2);
}

function enlargeReduce() {
  const selected = canvas.tokens.controlled;
  let udata = [];

  for (const token of selected) {
  let size = 1;
  let sfx = "bloodlust.ogg";
  let a = game.actors.get(token.actorId);
  let obj = {};
  
  if (a.flags.enlargeMacro) { 
    obj['flags.enlargeMacro'] = null;
    obj['data.bonuses.mwak.damage'] = '';
    obj['data.bonuses.rwak.damage'] = '';
    sfx = "shrink.ogg";
  } else {
    obj['flags.enlargeMacro'] = true;
    obj['data.bonuses.mwak.damage'] = '3';
    obj['data.bonuses.rwak.damage'] = '3';
    size = 2;
  }

  a.update(obj);
  playSFX(`spells/${sfx}`);

  udata.push({
  _id: token._id,
  width: size,
  height: size
  });
  }

  canvas.scene.updateEmbeddedDocuments("Token", udata);
}

//play sound locally
function playSFXLocal(s, v = 0.75) {
    AudioHelper.play({ 
      src: [`sounds/${s}`], 
      volume: v
     });
}

//play sound for GM only
function playSFXGM(s, v = 0.75) {

  if (game.user.isGM)
  {

    AudioHelper.play({ 
      src: [`sounds/${s}`], 
      volume: v
     });

    log(`[playSFXGM] ${s}`);
  }
}

//play sound for player / all players
function playSFX(s, v = 0.75, playerId) {

  //play for certain player
  if (playerId && playerId == game.userId) {
    AudioHelper.play({ 
      src: [`sounds/${s}`], 
      volume: v
    });

  } else {
    //play for everyone
    AudioHelper.play({ 
      src: [`sounds/${s}`], 
      volume: v,
      autoplay: true,
      loop: false
    }, true);
  }
}

function shakeScreen(str, dur, freq) {
  let current = {
    x: canvas.scene._viewPosition.x,
    y: canvas.scene._viewPosition.y
  }

  let r = 0;
  let i = 0;
  let dest = {};

  let loopCamera = setInterval(() => {
    //shake every other frame
    if (i % 2 != 0) {

    //linear falloff
    //log(`${i}: cur:${i * freq} pct: ${(dur - (i * freq) / 100)}`);

    if (i * freq > Math.floor(dur / 2)) {
      str -= str * ((dur - (i * freq)) / dur).toFixed(2) / 2;
      str ? str : 1;
    }

    //random coordinate
    r = Math.floor(Math.random() * str) + 1 * (Math.round(Math.random()) * 2 - 1);

    //object for camera
      dest = { x: current.x + r,
        y: current.y + r,
        animate: false
      };
    } else {
      //set to original view
      dest = current;
    }

    //pan
    panCamera(dest);
    
    //inc
    i += 1;

   }, freq);

   //return to normal view
   setTimeout(() => { clearInterval(loopCamera); panCamera(current); }, dur)
}

async function shakeScreenR(a = 50, b = 500, c = 10) {
  const result = await socketZ.executeForEveryone("shakeScreen", a, b, c);
}

function fadeScreen(action, color, duration) {
  color = color ? color.replace('#', '') : "000";

  if (action) {
    if (game.user.isGM) { ui.notifications.info(`Screen fading OUT for players`); return; }
    if ($('#fade-div').length == 0)
      $('body').append(`<div id="fade-div" style="display: none; width: 100%; height: 100%; background-color: #${color}; top: 0; left: 0; z-index: 9999;">&nbsp;</div>`);
    $('#fade-div').fadeIn(duration);
  } else {
    if (game.user.isGM) { ui.notifications.info(`Screen fading IN for players`); return; }
    $('#fade-div').fadeOut(duration, () => $('#fade-div').remove());
  }
}

async function fadeScreenR(a = true, c = "#000", d = 2000) {
  const result = await socketZ.executeForEveryone("fadeScreen", a, c, d);
}

function flashScreen() {
  if ($('#flash-div').length == 0)
    $('body').append('<div id="flash-div" style="display: none; width: 100%; height: 100%; background-color: rgba(255,255,255, 0.65); top: 0; left: 0; z-index: 9999;">&nbsp;</div>');

    $('#flash-div').fadeIn('fast');

  setTimeout(() => {$('#flash-div').hide(); 
    setTimeout(() => {$('#flash-div').show(); 
      setTimeout(() => {$('#flash-div').hide(); 
        setTimeout(() => {$('#flash-div').show(); 
        setTimeout(() => {$('#flash-div').fadeOut('slow');
        }, 50);
      }, 100);
    }, 75);
}, 50);
}, 35);
}

async function flashScreenR() {
  const result = await socketZ.executeForEveryone("flashScreen");
}

function lightningScreen() {
  flashScreenR(); 
  setTimeout(() => {
    playSFX("spells/thunder.ogg", 0.50);
   }, 500)
}

function lightningScreenShake() {
  flashScreenR(); 
  setTimeout(() => {
    playSFX("spells/thunder.ogg", 0.50);
    shakeScreenR(2, 250, 2);
   }, 500)
}

function imageExists(url, callback) {
  var img = new Image();
  img.onload = function() { callback(true); };
  img.onerror = function() { callback(false); };
  img.src = url;
}

function robotDamage(token, remove) {
  if (!token)
  {
    log("robotDamage: no token found!")
    return;
  }

    let textureData = {
      texturePath: "modules/jb2a_patreon/Library/Generic/Lightning/StaticElectricity_02_Regular_Blue_400x400.webm",
      scale: "1",
      speed: 0,
      multiple: 1,
      rotation: "rotation",
      xScale: 2.5,
      yScale: 2.5,
      belowToken: false,
      radius: 2,
      opacity: 1,
      tint: 16777215,
      equip: false,
      lock : false
  }
    CTA.addAnimation(token, textureData, false, "Electricity 2", null)
}

// ====================================================
//loot sheets
function predicate(entity) {
  return 0;
}

function genLootSheet(actor) {
  if (!game.user.isGM)
    return;

  log(`genLootSheet`);
  if (!actor){
   if (game.user.isGM)
      ui.notifications.error(`Rolltable could not be generated!`);
    return false;
  }

  const name = game.actors.get(actor?.actorId)?.name ?? game.actors.get(actor?.data?._id)?.name;

if (!name) {
    log('genLootSheet big problems reading name');
  return false;
} 

//dont spawn for these tokens
if (name[0] == '_')
  return true;

  if (game.tables.getName(name)) {
    if (game.tables.getName(name).getFlag('better-rolltables', 'table-type') != 'loot') {
      log(`Rolltable ${name} setting table-type to loot`);
        game.tables.getName(name).setFlag('better-rolltables', 'table-type', 'loot');
    }
    log(`Rolltable ${name} exists! Skipping...`);
    return false;
  }

  log(`Rolltable generating ${name}`);
  game.betterTables.createTableFromCompendium(
    name,
    "world.blank",
    { weightPredicate: predicate },
       true
   );
   return true;
}

function generateLootSheets() {
  if (!game.user.isGM) 
    return;
  game.actors.filter(a => a.type == 'npc').forEach(n => genLootSheet(n));
}

function createAni(effectPath, x, y) {
  let fx = new Sequence()
  .effect()
  .file(effectPath)
  .scale(1,1)
  .atLocation({x: x, y: y}).play();
}


// ====================================================
// ghost
function applyGhostShroud() {
  $("#board").css('filter', 'grayscale(100%)');
}

function removeGhostShroud() {
  $("#board").css('filter', 'grayscale(0%)');
}

function ghostOn() {
  console.log("ghost!");
  $('canvas').fadeOut('slow', () => {
    applyGhostShroud();
  });

  setTimeout(() => { 
    ui.notifications.error("You have died!");
  }, 1500);

  setTimeout(() => { 
    $('canvas').fadeIn('slow');
  }, 3000);
}

function ghostOff() {
  console.log("no ghost!");
  setTimeout(() => { 
  removeGhostShroud();
  }, 3500);
}

async function createCorpse() {
  let tid = game.actors.getName('_Loot').id;
  let tokenData = [{actorId: tid, x: 0, y: 0, hidden:false, img: "icons/svg/item-bag.svg"}];
  return await canvas.scene.createEmbeddedDocuments("Token", tokenData);
}

async function createPile() {
  await ItemPiles.API.createItemPile({x: 0, y: 0}).then((r) => {
       let n = r.split('.')[3].toString();
       let tok = game.scenes.current.tokens.get(n);
       return tok.data;
  });
}

async function transferLoot(source, target, callback) {
   return callback(await ItemPiles.API.transferAllItems(
          source, //game.scenes.current.tokens.get(source.id),
          target, //game.scenes.current.tokens.get(target.id),
          ["spell","feat","class","background"], (i) => {
              log('item transfer complete');
    }));
}

async function removeCondition(actor, condition) {
  let remove = [];

  actor.effects.map(e => {
    const isCondition = (e.data.flags?.["age-system"]?.isCondition) ? true : false;
    const isId = (e.data.flags?.core?.statusId === condition) ? true : false;
    if (isCondition && isId) remove.push(e._id);
  });
  await actor.deleteEmbeddedDocuments("ActiveEffect", remove);
}

async function playerToCorpse(token) {
   if (!game.user.isGM) return;

  let playerActor = await game.actors.get(token.document.actorId);
  let playerName = token.name.toLowerCase();
  let playerAvatar = playerActor.img;
  let playerPos = {x: token.x, y: token.y + 50};

  //flag
  playerActor.setFlag('zei-lib', 'avatar', playerAvatar);

  //hp
  playerActor.update({system: {attributes: {hp: {value: 0}}}});

  //fx
  if (playerName == "dizli bentear" || playerName == "serrin")
    playSFX("uo/femaleDeath.ogg", 0.75);
  else if (playerName == "ahu rapa" || playerName == "sky")
    playSFX("sfx/monsterDeath.ogg", 0.75);
  else
    playSFX("uo/maleDeath.ogg", 0.75);

  ChatMessage.create({content: `${playerName} has died!`});

  //update player
  await token.document.update({img: 'uo/avatars/dm/ghost.webp', alpha: 0.5});

  //update actor
  await game.actors.get(playerActor.id).update({img: 'uo/avatars/dm/ghost.webp', alpha: 0.5});

  //create corpse token
  ItemPiles.API.createItemPile({position: playerPos}).then(async (r) => {
    let n = r.actorUuid.split('.')[1].toString();
    let pile = await game.actors.get(n); //game.scenes.current.tokens.get(n);

    //transfer gold
    let playerGold = playerActor.system.currency.gp; //game.actors.get(game.scenes.current.tokens.get(player.id).actorId).system.currency.gp;
    log(`transfering ${playerGold} gold`);
    await playerActor.update({system: {currency: {gp: 0}}});
    await pile.update({system: {currency: {gp: playerGold}}});
    let pileToken = await getTokenByActor(pile);
    
    console.log("==========================")
console.log(pileToken);

      //transfer items
      transferLoot(token, pileToken, () => {
        log("transfer complete");
      }); 
  });
}

async function corpseToPlayer(player) {
  if (!game.user.isGM) return;

  if (!player)
  player = canvas.tokens.controlled[0];

  if (!player) {
    ui.notifications.error("Select a player!");
    return;
  }
  let playerActor = game.actors.get(player.actorId);
  let playerAvatar = player.document.getFlag('zei-lib', 'avatar');
  let tokenData = [{ _id: player.id, img: playerAvatar, alpha: 1 }];
  let playerName = player.name;

  playSFX("uo/heal.ogg", 0.50);

let fx = new Sequence()
.effect()
.file("modules/jb2a_patreon/Library/1st_Level/Cure_Wounds/CureWounds_01_Blue_200x200.webm")
.atLocation({x: player.x + game.scenes.current.dimensions.size / 2, y: player.y + game.scenes.current.dimensions.size / 2}).play();

  setTimeout(() => {
    updates = {
      _id: playerActor.id,
      [`data.${'attributes.hp.value'}`]: 1,
    };
    playSFX("uo/resurrect.ogg", 0.50);
    player.actor.update(updates);
    canvas.scene.updateEmbeddedDocuments("Token", tokenData);
    ChatMessage.create({content: `${playerName} has returned to the land of the living!`});
  }, 3500);
}

async function killPlayer() {
  if (!game.user.isGM) return;
  if (canvas.tokens.controlled.length == 0) {
    ui.notifications.error("Select a player!");
    return;
  }

  let token = canvas.tokens.controlled[0];
  let actorId = canvas.tokens.controlled[0].document.actor.id;
  let userId = game.users.find(x => x.character?.id == actorId).id; //game.users.find(u => u.character == game.actors.get(game.scenes.current.tokens.get(player.id).actorId)).id; //game.users.find(u => u.character == game.actors.get(game.scenes.current.tokens.get(player.id).actorId)._id)._id;

  playerToCorpse(token);
  const result = await socketZ.executeAsUser("ghostOn", userId);
}

async function resPlayer() {
  if (!game.user.isGM) return;
  if (canvas.tokens.controlled.length == 0) {
    ui.notifications.error("Select a player!");
    return;
  }

  let player = canvas.tokens.controlled[0];
  let playerId = game.users.find(u => u.character == game.actors.get(game.scenes.current.tokens.get(player.id).actorId)).id; //game.users.find(u => u.character == game.actors.get(game.scenes.current.tokens.get(player.id).actorId)._id)._id; 
  corpseToPlayer(player);
  const result = await socketZ.executeAsUser("ghostOff", playerId);
}
// ====================================================

function getPlayer() {
  let id = game.data.userId;
  let actor = game.users.get(id)?.character;
  let token = game.scenes.current.tokens.find(x => x.actorId == actor.id);
  return {id: id, actor: actor, token: token};
 }

function chat(m) {
  if (!game.user.isGM) return;
  let msg = `<b style="color: #990099;">Zei's Library</b></br> ${m}`;
  ChatMessage.create({content: msg});
}

function shapeShift(originalSprite, transformSprite, effectSprite, sfxIn, sfxOut) {
  
  let player = canvas.tokens.controlled[0];
  let actor = game.actors.get(player.actorId);
  let avatar = actor.img;

  if (!originalSprite)
    originalSprite = avatar;

  if (!transformSprite)
    transformSprite = 'systems/dnd5e/tokens/humanoid/Werebear.webp';

  if (!effectSprite)
    effectSprite = "modules/jb2a_patreon/Library/2nd_Level/Misty_Step/MistyStep_02_Regular_Blue_400x400.webm";
  
    sfxIn = sfxIn ? sfxIn : "sfx/shapeShift.ogg";
    sfxOut = sfxOut ? sfxOut : "sfx/shapeShift.ogg";
  
  let img = player.img === originalSprite ? transformSprite : originalSprite;
  let sfx = "";

  //teleport in
sfx = player.img === originalSprite ? sfxIn : sfxOut;

//start sound
playSFX(sfx, 0.75);

new Sequence()
    .effect()
        .file(effectSprite)
        .atLocation(player)
        .scaleToObject(2.5)
        .randomRotation()
    .wait(1500)
    .thenDo(() => {
      playSFX("sfx/poof.ogg", 0.5);
      player.document.update({ img });
    })
    .play()
}

function spotify(command, playlist) {
  let xhr = new XMLHttpRequest();
  xhr.open('POST','http://192.168.0.201:40638', true);

  if (playlist == undefined || playlist == "" || playlist == "scene")
   playlist = canvas.scene.getFlag("zei-lib", "playlist");

   if (playlist == "none")
   command = "stop";

  let obj = `{"sender": "foundry", command: "${command}", track: "${playlist}"}`;
  xhr.send(obj);
}

//$('#module-list input:checkbox').prop('checked', true)

function getActiveUsers() {
  return game.users.filter(u => u.active);
}

//{ x: data.x, y: data.y, scale: data.scale, duration: data.duration }
function panCamera(dest) {

    if (dest.animate)
        canvas.animatePan(dest);
    else
        canvas.pan(dest);
  
}

async function getActorByToken(token) {
  return await game.actors.get(token.document.actorId);
}

async function getActorByTokenId(id) {
  return await game.actors.get(id);
}

async function getTokenData(actorNameDoc, tokenUpdates) {

  let sourceActor = actorNameDoc;
  if(typeof actorNameDoc == 'string') {
    /* lookup by actor name */
    sourceActor = game.actors.getName(actorNameDoc);
  }

  //get source actor
  if (!sourceActor) {
    log(`Could not find world actor named "${actorNameDoc}" or no souce actor document provided.`);
    return false;
  }

  //get prototoken data -- need to prepare potential wild cards for the template preview
  let protoData = await sourceActor.getTokenDocument(tokenUpdates);
  if (!protoData) {
   log(`Could not find proto token data for ${sourceActor.name}`);
    return false;
  }

  return protoData;
}

async function getTokenDataById(id, tokenUpdates) {

  let sourceActor = id;
  if(typeof id == 'string') {
    /* lookup by actor id */
    sourceActor = game.actors.get(id);
  }

  //get source actor
  if (!sourceActor) {
    log(`Could not find world actor named "${id}" or no souce actor document provided.`);
    return false;
  }

  //get prototoken data -- need to prepare potential wild cards for the template preview
  let protoData = await sourceActor.getTokenDocument(tokenUpdates);
  if (!protoData) {
   log(`Could not find proto token data for ${sourceActor.name}`);
    return false;
  }

  return protoData;
}

async function getTokenByActor(actor) {
  return await game.scenes.current.tokens.find(x => x.actorId == actor.id);
}

function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

function _createDrawing(loc) {
  return {
    shape: {
        type: 'r',
        width: 50,
        height: 50,
        radius: null,
        points: []
    },
    x: loc.x,
    y: loc.y,
    z: loc.z,
    rotation: 0,
    bezierFactor: 0,
    fillType: 0,
    fillColor: '#707070',
    fillAlpha: 0.5,
    strokeWidth: 8,
    strokeColor: '#FFFFFF',
    strokeAlpha: 1,
    texture: null,
    text: "",
    fontFamily: 'KingthingsExeter',
    fontSize: 48,
    textColor: '#FFFFFF',
    textAlpha: 1,
    hidden: true,
    locked: false,
  };
}

function getMouseStagePos() {
  const mouse = canvas.app.renderer.plugins.interaction.mouse;
  const _coords = mouse.getLocalPosition(canvas.app.stage);
  return { 
    x: Math.floor((_coords.x + 1)/canvas.scene.grid.size)*canvas.scene.grid.size,
    y: Math.floor((_coords.y + 1)/canvas.scene.grid.size)*canvas.scene.grid.size 
  };
}


// function _createTile() {
//   return {
//     texture: {
//         src: "modules/jb2a_patreon/Library/1st_Level/Shield/Shield_02_Regular_Blue_OutroExplode_400x400.webm",
//         scaleX: 1,
//         scaleY: 1,
//         offsetX: 0,
//         offsetY: 0,
//         rotation: 0,
//         tint: null
//     },
//     x: 0,
//     y: 0,
//     width: 400,
//     height: 400,
//     overhead: false,
//     z: 100,
//     rotation: 0,
//     alpha: 1,
//     hidden: false,
//     locked: false,
//     roof: false,
//     occlusion: {
//         mode: 1,
//         alpha: 0,
//         radius: null
//     },
//     video: {
//         loop: false,
//         autoplay: true,
//         volume: 0
//     }
// }
// }

// const callbacks = {
//   post: async (template, token) => {
//      playSFX("spells/gate.ogg", 0.35);
//   }
// };

// warpgate.spawn("_Moongate", {}, callbacks, {});


// function smoothCamera(old, new, amount) {
//   let loopCamera = setInterval((i) => {

//   });

//   setTimeout(() => { clearInterval(loopCamera); }, 200);
// }