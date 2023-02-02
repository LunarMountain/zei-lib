
 //TokenDocument.create(testActor , { parent: canvas.scene });

     // let tokenId = game.scenes.active.tokens.find(a => a.data.actorId == 'oMnNyeJuH79im35d').data._id
            // let t = canvas.tokens.objects.children.find(t => t.data.actorId == 'oMnNyeJuH79im35d');
        // //t.destroy();
        
        // udata.push({
        //   _id: t.data._id,
        //   });
        
        //   canvas.scene.deleteEmbeddedDocuments("Token", udata);

  //   setTimeout(() => {
  //   let sfx = game.playlists.getName("Spells").data.sounds.find(s => s.name == data.item.data.name);
  //   if (!sfx)
  //     sfx = game.playlists.getName("Spells").data.sounds.find(s => s.name == "BlueMagic");
  //   game.playlists.getName("Spells").playSound(sfx);
  // }, 200);

 

    // let t = game.scenes.find(x => x.active).data.tokens.find(t => t.name == data.actor.data.token.name);
    // let m = new ChatBubbles();
    // setTimeout(() => { m.say(t.data, "test message", true); }, 100);
    // ChatMessage.create({content: data.item.data.name, speaker: ChatMessage.getSpeaker({actor: data.actor})});

// let targets = data.hitTargets ?? [];
  // targets = Array.from(targets);
  // if (targets.length == 0)
  //     return;

  //  if (targets.find(t => t.data.actorData.data.attributes.hp.value == 0))
  //   targets.forEach(t => { 
  //     log("target:");
  //     log(t);
  //     log(t.data.actorData.oldHpVal);

  //     //death sound
  //     let sfx = game.playlists.getName("SFX").data.sounds.find(s => s.name == "monster_death");
  //     try {
  //       setTimeout(() => { game.playlists.getName("SFX").playSound(sfx); }, Math.random(100,400));
  //     } catch {
  //       log(`Could not play sfx ${sfx}`);
  //     }
  //   });

// Hooks.on("createMeasuredTemplate", (...args) => {
// let testActor = game.actors.find(a => a.data._id == 'oMnNyeJuH79im35d').data.token.toJSON();
// testActor.x = args[0].data.x;
// testActor.y = args[0].data.y;
// TokenDocument.create(testActor , { parent: canvas.scene });
// });


// let itemData = game.items.getName("Longsword").toObject();
// itemData.data.quantity = 15;
// await actor.createEmbeddedDocuments("Item", [itemData]);

//delete all measured templates
//canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", canvas.templates.placeables.map(o =>o.id));

//close all doors
// canvas.scene.updateEmbeddedDocuments("Wall", canvas.scene.data.walls.map(w => {
//   return {_id: w.id, ds: w.data.ds === 1 ? 0 : w.data.ds};
// }));
// canvas.sight.resetFog();

// let creatureType = ["undead"];
// if(canvas.tokens.placeables.filter(i=> creatureType.includes(i.actor.data.data.details.type?.value))) {
// // do stuff to undead
// }

// new Sequence()
//   .thenDo(async()=>{
//     makeUndead(); // create transparent tokens
//   })
//   .wait(2000)
//   .animation()
//     .on(Tagger.getByTag("Wight")[0].data._id)
//     .fadeIn(500)
//   .animation()
//     .on(Tagger.getByTag("Skeleton")[0].data._id)
//     .fadeIn(500)
//   .animation()
//     .on(Tagger.getByTag("Skeleton")[1].data._id)
//     .fadeIn(500)
//   .animation()
//     .on(Tagger.getByTag("Skeleton")[2].data._id)
//     .fadeIn(500)
//   .play()

// for ( let u of game.users ) {
//   if ( !u.character ) continue;
//   await u.character.longRest({dialog: false});
// }


// function deleteToken(token) {
//   let udata = [];
//   let a = game.actors.get(token.data.actorId);

//   udata.push({
//     _id: token.data._id,
//     _destroyed: true
//   });
  
//   canvas.scene.updateEmbeddedDocuments("Token", udata);
// }

// game.socket.emit("module.npc-chatter", {
//   tokenId: token.data._id,
//   msg: result
// });

// Hooks.on('createChatMessage', (chatMessage) => {
//  // console.log(chatMessage);

//  // let hasInlineRoll = game.settings.get("dice-so-nice", "animateInlineRoll") && chatMessage.data.content.indexOf('inline-roll') !== -1;

//   // if ((!chatMessage.isRoll && !hasInlineRoll) || (!chatMessage.isContentVisible && !game.settings.get("dice-so-nice", "showGhostDice")) ||
//   //     (game.view != "stream" && (!game.dice3d || game.dice3d.messageHookDisabled)) ||
//   //     (chatMessage.getFlag("core", "RollTable") && !game.settings.get("dice-so-nice", "animateRollTable"))) {
//   //     return;
//   // }

// });