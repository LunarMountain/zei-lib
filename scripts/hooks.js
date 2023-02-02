Hooks.once("init", function() {
    log("Zei's Library init");
    CONFIG.debug.hooks = false;
});
  
Hooks.once("ready", function() {
    if(!game.modules.get('lib-wrapper')?.active && game.user.isGM)
      ui.notifications.error("Zei-Library requires the 'libWrapper' module. Please install and activate it.");

    // MODULE_ID='zei-lib';
    // const MODULE_TITLE = game.modules.get(MODULE_ID).data.title;
    // const Version=9;

    //cursors
    $('body').css('cursor', 'url("cursors/cursor.png"), auto');
    $('li').css('cursor', 'url("cursors/cursor.png"), auto');

    // setTimeout(() => {
    //   console.clear();
    // }, 5000);

    // //clear console every 10m
    // setInterval(() => {
    //   console.clear();
    // }, 300000);

});

//dnd5e.useItem

Hooks.on("renderPause", (app, html, options) => {
    _settings.isPaused = options.paused;
});

Hooks.on('dropActorSheetData', async function (target, sheet, dragSource, user) {
return;

    // log("********************")
    // log("dropActorSheetData")
    // log(dragSource);
    // log(sheet)
    // log
    // log(sheet.options.classes)
    // log(sheet.options.classes.includes("bank"))
    // log("********************")
  

  //   if (target.data._id == merchantDragSource.actorId) {
  //     Logger_1.default.Log("Seller and buyer the same");
  //     // ignore dropping on self
  //     return;
  // }

log(target);
log(dragSource);

    if (target.data._id == dragSource.actorId)
       return; // ignore dropping on self
    

     //let actors = Array.from(game.actors);
     let itemId = dragSource.uuid.split('.')[5];
     let dragSourceId = dragSource.uuid.split('.')[3];
     let dragSourceToken = await game.scenes.current.tokens.get(dragSourceId); //await game.actors.get(dragSourceId); //actors.find(a => a.data._id == dragSource.actorId);
     let dragonSourceActor = await game.actors.get(dragSourceToken.actorId);

     if (!dragSourceToken) {
      log("compendium item swap - no deletion required.");
      return;
     }
     
     log(`${dragSourceToken.name} transfered item ${dragSourceToken.name} to ${target.name}`);

     if (target.type == "character") {     
      await dragonSourceActor.deleteEmbeddedDocuments("Item", [{_id: itemId}]);         
  } else {
    log("npc item swap - no deletion required.");
  }

});

Hooks.on("item-piles-openItemPileInventory", (pile, token) => {
    // log('*** Open pile ***');
    // log(token);
    //let hp = game.actors.get(canvas.tokens.controlled[0].data.actorId).data.data.attributes.hp.value;
  });

  Hooks.on("createToken", (token, data) => {
    if (!game.user.isGM)
      return;
  
  let type = token?.actor?.type;
  let name = game.actors.get(token?.actor?._id)?.name;
  let tokenSpecificName = token?.name;
  
    if (type == 'npc') {
      //animation
  
      //loot generation
        if (!genLootSheet(token.data)) {
        
        let tb = game.tables.getName(name);
      
        //prepopulate loot on NPC
        //tb.normalize();
        if (tb.data.formula == '')
          tb.update({formula: `1d${tb.results.size}`});
  
           //add gold based on CR
           const baseGold = Number(getProperty(token.actor, 'system.currency.gp') ?? 0);
           const cr = token.actor.system.details.cr ?? 1;
           let gold = 0;
           log(`base gold ${baseGold}`);
           log(`cr ${cr}`);
  
           if (token.actor.type == 'npc' && baseGold == 0) {
            log(`generating gold for ${tokenSpecificName}`);
            gold = Math.ceil(cr * (Math.random() * (12 - 8) + 8) * 10);
            //let crGold = Math.round(0.6 * 10 * (10 ** (0.15 * (token.actor.data.details.cr ?? 0))));
           }
           
           token.actor.update({system: {currency: {gp: gold}}});
           //game.scenes.active.tokens.getName("Mar ").update({data: {currency: {gp: 500}}})
  
        log(`Generated ${gold} gold for ${name} (${tokenSpecificName})`);
        log(`Rolltable generating loot for ${name} (${tokenSpecificName})`);
        let table = 'myLootRolltable', rolltable = tb;
        game.betterTables.addLootToSelectedToken(rolltable, token);
      }
    }
  });

  
// ====================================================
//Readied Action
Hooks.on('deleteActiveEffect', (activeEffect, config, userId) => {
    if (activeEffect.label == "Readied Action") {
      if (game.userId != userId)
        return;

      Sequencer.EffectManager.endEffects({object: canvas.tokens.controlled[0]})
    }
  });
  
  //conditions
  Hooks.on('createActiveEffect', (activeEffect, config, userId) => {
    if (activeEffect.label == "Readied Action") {
      if (game.userId != userId)
        return;

      let fx = new Sequence()
      .effect()
      .file('modules/jb2a_patreon/Library/Generic/Zoning/ZoningSquare01In_01_Regular_RedYellow_600x600.webm')
            .attachTo(canvas.tokens.controlled[0])
            .scaleToObject(1)
            .persist()
    .play()
    }
  
  if (canvas.tokens.controlled.filter(t => t.actor.type == 'npc').length == 0) {

      //effect on player
      if (game.user.data.character == activeEffect.parent.data._id)
      {
        imageUrl = `https://dnd.zoryn.net/conditions/original/${activeEffect.label}.webp`;
        imageExists(imageUrl, function(exists) {
          if (exists) {
            let p = new ImagePopout(imageUrl);
            p.render(true);
          } else {
            log(`[zeiLib] ${activeEffect.label} not found!`);
          }
        });
      }
  }

  });
  // ====================================================
  
  Hooks.on('preRenderImagePopout', (data) => {
  
  });
  
  Hooks.on('renderImagePopout', (data) => {
    $('.image-popout').css('width', '500px');
    $('.image-popout').css('height', '800px');
  });
  
  //death sfx
  Hooks.on("updateActor", function (actor, updates) {
    if (actor?.defeated)
      return;
  
    if (actor.type == 'character') {
  
      //atropos
      if (actor.name === "Atropos #13" || actor.name === "Atropos") {
  
        //bloodied
        if (updates?.system?.attributes?.hp?.value < actor?.data?.data?.attributes?.hp?.max / 2) {
            let player = canvas.tokens.objects.children.filter(t => t.data.actorId == actor.id)[0];
  
          let fx = new Sequence()
          .effect()
          .file("modules/jb2a_patreon/Library/Generic/Lightning/StaticElectricity_02_Regular_Blue_400x400.webm")
          .scale(0.5,0.5)
          .atLocation({x: player.data.x + game.scenes.current.dimensions.size / 2, y: player.data.y + game.scenes.current.dimensions.size / 2})
          .play();
      }
    }
  
    //die or heal
      if (updates?.system?.attributes?.hp?.value <= 0) {
          playSFX("sfx/playerDeath.ogg", 0.75);
        actor.defeated = true;
      } else {
        actor.defeated = false;
      }
  
    } else if (actor.type == 'npc') {

//damage sound
if(game.combat?.started) {
  if (!game.user.isGM) return;
  try {
  let dsfx = actor?.flags['monks-sound-enhancements']['sound-effect'];
  if (dsfx) {
    dsfx = dsfx.replace("/sounds/", "");
    playSFX(dsfx, 0.50);
  }
} catch {
  log(`No sound to play for ${actor?.name}`);
}
}
        if(updates?.system?.attributes?.hp?.value <= 0) {

          actor.defeated = true;
  
          switch(actor?.labels?.creatureType?.toLowerCase()) {
            case "aberration":
              playSFX("sfx/aberrationDeath.ogg", 0.25);
              break;
  
            case "beast":
              playSFX("sfx/beastDeath.ogg", 0.25);
              break;
  
              case "construct":
                playSFX("sfx/shutdown.ogg", 0.25);
                break;
  
                case "dragon":
                  playSFX("sfx/dragonDeath.ogg", 0.25);
                  break;
  
                case "elemental":
                  playSFX("sfx/elementalDeath.ogg", 0.25);
                  break;
    
              case "fiend":
                playSFX("sfx/fiendDeath.ogg", 0.25);
                break;
  
                case "giant":
                  playSFX("sfx/giantDeath.ogg", 0.25);
                  break;
  
            case "humanoid":
              playSFX("sfx/maleDeath.ogg", 0.50);
              break;
  
              case "monstrosity":
                playSFX("sfx/monstrosityDeath.ogg", 0.25);
                break;
  
              case "undead":
                playSFX("sfx/skeleton.ogg", 0.25);
                break;
  
              default:
                playSFX("sfx/monsterDeath.ogg", 0.50);
              break;
          }
  
        }
    }
  });
  
 Hooks.on("renderMacroConfig", (data) => {
        $('.macro-sheet .form-group.command .furnace-macro-command pre').remove();
        $('.macro-sheet .form-group.command .furnace-macro-command textarea').css('text-fill-color', '#fff');
        $('.macro-sheet').css('width', '1024px');
        $('.macro-sheet').css('height', '1024px');
  });
  
  // Hooks.on("item-piles-openInterface", async (data) => {
  //   console.log("item-piles-openInterface");
  //   $('.item-pile-inventory').remove();
  // });

  
Hooks.on("renderItemPileInventoryApp", async (data) => {
  let player = getPlayer();
  if (player.actor.system.attributes.hp.value < 1) {
    ui.notifications.error("You can't do that while you are dead.");
    $('.item-pile-inventory').hide();
  } else 
    $('.item-pile-inventory').show();
});

  Hooks.on("renderActorSheet", async (app, html, options) => {
    if (!app?.object?._sheet?.options?.classes[0]?.split(' ')?.includes("merchant-sheet-npc"))
      $('.actor').css('width', '900px');
  });
  
  Hooks.on("renderJournalSheet", async (app, html, options) => {
    $('.item-list li .item-name').css('color', '#ffffff');
  });
  
  //dice roll mute
  Hooks.on("renderChatMessage", (msg, html) => {
  if (msg.blind || game.user.charname === "Rain")
    msg.sound = null;
  
    if (game.user.isGM)
       if (msg.isRoll)
          msg.sound = null;
  });
  
  //target yourself
Hooks.on("targetToken", (actor, token, targeted) => {
     if (game.user.isGM)
       return;
  
    if (targeted) {
        //connor targetting
      if (actor.charname == "Ryan" && token.data.name !== "Ryan") {
        playSFX("sfx/gunCock.ogg", 0.15);
  
        let fx = new Sequence()
        .effect()
        .file('modules/jb2a_patreon/Library/Generic/Zoning/ZoningIndicator02In_01_Regular_RedYellow_600x600.webm')
              .attachTo(token)
              .scaleToObject(1)
        .play()
      }
  
      let targets = Array.from(game.user.targets);
     
      //if (game.user.data.character == token.data.actorId && targets.find(t => t.data._id == token.data._id))
      if (targets.includes(canvas.tokens.controlled[0]))
        ui.notifications.warn(`<img src="uo/images/skylarTarget.webp"> You are targetting yourself!`);
    }
  });
  
  //spell effects
  Hooks.on("midi-qol.RollComplete", async (data) => {


// console.log(data);
// console.log(data?.templateData?.x);

  //spell sfx
    if (data.item.type == "spell") {
          //fadeInAndOut(3000);
      
      if (data.item.name == "Gate Travel") {
        
      }

      if (data.actor.name == "Metatron") {
        playSFX("ambiance/thunder.ogg", 0.5);
        let player = canvas.tokens.objects.children.filter(t => t.data.actorId == data.actor.id)[0];
        let fx = new Sequence()
        .effect()
        .file("modules/jb2a_patreon/Library/Generic/Lightning/StaticElectricity_03_Regular_Green_400x400.webm")
        .scale(0.5,0.5)
        .atLocation({x: player.data.x + game.scenes.current.dimensions.size / 2, y: player.data.y + game.scenes.current.dimensions.size / 2}).play();
      }
    
      //
      if (data.actor.name == "Ahu Rapa") {
        playSFX("sfx/fireWhoosh.ogg", 1);
        let player = canvas.tokens.objects.children.filter(t => t.data.actorId == data.actor.id)[0];
        let fx = new Sequence()
        .effect()
        .file("modules/jb2a_patreon/Library/Generic/Marker/EnergyStrandsOverlay_01_Regular_Purple_600x600.webm")
        .scale(0.5,0.5)
        .atLocation({x: player.data.x + game.scenes.current.dimensions.size / 2, y: player.data.y + game.scenes.current.dimensions.size / 2}).play();
      }
  
      if (data.actor.name == "Serrin") {
        playSFX("spells/nature.ogg", 0.5);
        playSFX("spells/whiteMagic.ogg", 0.75);
        let player = canvas.tokens.objects.children.filter(t => t.data.actorId == data.actor.id)[0];
        let fx = new Sequence()
        .effect()
        .file("modules/jb2a_patreon/Library/Generic/Butterflies/Butterflies_01_Bright_Green_Many_400x400.webm")
        .scale(0.5,0.5)
        .atLocation({x: player.data.x + game.scenes.current.dimensions.size / 2, y: player.data.y + game.scenes.current.dimensions.size / 2}).play();
      }
  
      if (data.actor.name.split(" ").includes("Sky")) {
        playSFX("spells/ice.ogg", 0.75);
        let player = canvas.tokens.objects.children.filter(t => t.data.actorId == data.actor.id)[0];
        let fx = new Sequence()
        .effect()
        .file("modules/jb2a_patreon/Library/Generic/Ice/ShieldIceAbove01_03_Regular_Blue_400x400.webm")
        .scale(0.5,0.5)
        .atLocation({x: player.data.x + game.scenes.current.dimensions.size / 2, y: player.data.y + game.scenes.current.dimensions.size / 2}).play();
      }
      
      if (data.actor.name == "Raeya") {
        //playSFX("spells/nature.ogg", 0.5);
        playSFX("spells/castAir.ogg", 0.50);
        let player = canvas.tokens.objects.children.filter(t => t.data.actorId == data.actor.id)[0];
        let fx = new Sequence()
        .effect()
        .file("modules/jb2a_patreon/Library/1st_Level/Bless/Bless_01_Regular_Green_Intro_200x200.webm")
        //.file("modules/jb2a_patreon/Library/Generic/Magic_Signs/EvocationCircleIntro_02_Dark_Green_800x800.webm")
        .belowTokens()
        .scale(1,1)
        .atLocation({x: player.data.x + game.scenes.current.dimensions.size / 2, y: player.data.y + game.scenes.current.dimensions.size / 2}).play();
      }
  
      if (data.actor.name === "Atropos #13" || data.actor.name === "Atropos") {
        playSFX("sfx/electrify.ogg", 1);
        playSFX("robot/robo1.ogg", 0.1);
        let player = canvas.tokens.objects.children.filter(t => t.data.actorId == data.actor.id)[0];
        let fx = new Sequence()
        .effect()
        .file("modules/jb2a_patreon/Library/Generic/Lightning/StaticElectricity_03_Regular_Purple_400x400.webm")
        .scale(0.5,0.5)
        .atLocation({x: player.data.x + game.scenes.current.dimensions.size / 2, y: player.data.y + game.scenes.current.dimensions.size / 2}).play();
      }
    } //spell FX
  });
  
  // Hooks.on("lightingRefresh", () => {
  //   //if (game.settings.set("perfect-vision", "improvedGMVision")

  // });

  //disable token vision for GM
  Hooks.on("controlToken", async (data) => {
    if (game.user.isGM 
      && canvas.tokens.controlled[0]?.actor?.type == 'npc' 
      && canvas.tokens.controlled[0]?.vision?.active
      && canvas.tokens.controlled[0]?.actor?.name != "Reyna"
      && canvas.tokens.controlled[0]?.actor?.name != "Ancestral Spirit"
      && canvas.tokens.controlled[0]?.actor?.name != "Wolf (Serrin)"
      && canvas.tokens.controlled[0]?.actor?.name != "Brown Bear (Cable)"
      )
      await canvas.scene.updateEmbeddedDocuments("Token", [{_id: canvas.tokens.controlled[0].id, vision: {enabled: false}}]);
  });

  