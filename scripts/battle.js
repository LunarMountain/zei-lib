
Hooks.once("init", function() {
  //////////
 let status = {
  icon: "icons/magic/symbols/symbol-lightning-bolt.webp",
  id: "ready",
  label: "Readied Action"
  };
  CONFIG.statusEffects.push(status);
 ///////////

 //////////
 status = {
  icon: "uo/icons/horse.webp",
  id: "horse",
  label: "Riding"
  };
  CONFIG.statusEffects.push(status);
 ///////////

  //////////
  status = {
    icon: "uo/icons/ship.webp",
    id: "ship",
    label: "Sailing"
    };
    CONFIG.statusEffects.push(status);
   ///////////

    //////////
 status = {
  icon: "uo/icons/airship.webp",
  id: "airship",
  label: "Flying"
  };
  CONFIG.statusEffects.push(status);
 ///////////
});

Hooks.once("ready", function() {
log("Zei's Random Battle Generator");
});

    function battleBtn(idField) {
        return {
            name: "Random Battle",
            icon: '<i class="fas fa-chess-knight"></i>',
            condition: li => {
                
                if(game.user.isGM && typeof game.scenes.get(li.data(idField)).getFlag('scene-transitions','transition') =='object')
                    return true;
            },
            callback: li => {	
                let sceneID = li.data(idField);
                socketZ.executeForEveryone("encounterTrans");
                setTimeout(() => {
                encounter(sceneID);
                }, 2000);
            }
        };
   }

function encounterTrans() {
    playSFX("sfx/encounter.ogg", 0.35);
    FluidCanvas.earthquake(20, 1000, 1);
}
    
function encounter(sceneId) {
    game.scenes.preload(sceneId ?? 'ti3ip630qW2MIwFV', true);
  
    setTimeout(() => {
      //$('canvas').fadeOut('slow', () => {
        gotoScene(sceneId);
      //});
    }, 1000);
  
  }
  
  function gotoScene(sceneId) {
    Transition.macro({
      sceneID: sceneId ?? 'ti3ip630qW2MIwFV',
            gmHide: true,
      fontColor:'#ffffff',
      fontSize:'28px',
      bgImg:'uo/screens/Logo2-scaled.webp',
      bgPos:'center center',
      bgSize:'cover',
      bgColor:'#000000',
      bgOpacity:1,
      fadeIn: 400,
      delay:5000,
      fadeOut:1000,
      volume: 1.0,
      skippable:false,
            gmEndAll:true,
            showUI:false,
      content:""
    }, true);
  }
  
  const battleResultsDialog = new Dialog({
    title: "Battle Results",
    content: "",
    buttons: {
      button1: {
        label: "Victory",
        callback: () => {
          playSFXR("hom/victory.ogg", 0.75);
        },
        icon: `<i class="fas fa-check"></i>`
      },
      button2: {
        label: "Defeat",
        callback: () => {
          playSFXR("hom/defeat.ogg", 0.75);
        },
        icon: `<i class="fas fa-times"></i>`
      }
    }
  }).render(true); 

  Hooks.on("getSceneNavigationContext", (html, contextOptions) => {
    contextOptions.push(battleBtn('sceneId'));
});

Hooks.on("getSceneDirectoryEntryContext", (html, contextOptions) => {
    contextOptions.push(battleBtn('documentId'));
});

// Hooks.on("preUpdateCombat", async (combat, update, options, userId) => {
//     const combatStart = combat.round === 0 && update.round === 1;
//       if (!game.user.isGM || !combatStart)
//           return true;
//       log("Rolling NPCs initiative");
//       await game.combat.rollInitiative(game.combat.combatants.filter(a => !a.actor.hasPlayerOwner).filter(a => !a.initiative).map(a => a.id));
//   });
  
  Hooks.on("deleteCombat", async (combat, options, userId) => {
      if (!game.user.isGM)
          return true;

          toggleGrid(false);
          battleResults.render(true);
          spotify("play");
  });


Hooks.on("preUpdateCombat", function (combat, updates) {
  log(`preUpdateCombat ${game.combat?.started}`);
});
// ====================================================

Hooks.on("updateCombat", function (combat, updates) {
  log(`zei-lib: updateCombat ${game.combat.round}`);
  if(!game.combat?.started) return;

  if (game.combat.round == 1 && game.combat.turn == 0) {
    toggleGrid(true);
    spotify("play", "combat");
  }

    //clear targets per turn
    clearTargets(true);
});

function clearTargets(includeGM = false) {
  //gm only
  if (!includeGM && game.user.isGM) return;

        log(`clearing targets for ${game.user?.name}`);
        game.user.targets.forEach(t => t.setTarget(false, { user: game.user, releaseOthers: true, groupSelection: false }));
        canvas.tokens.selectObjects({
            x: 0,
            y: 0,
            height: 0,
            releaseOptions: {},
            controlOptions: { releaseOthers: true, updateSight: true }
        });
}

const battleResults = new Dialog({
    title: "Battle Results",
    content: "<p>Determine the results of battle!</p>",
    buttons: {
     one: {
      icon: '<i class="fas fa-check"></i>',
      label: "Victory",
      callback: () => {
        playSFX("hom/victory.ogg", 0.75);
      }
     },
     two: {
      icon: '<i class="fas fa-times"></i>',
      label: "Defeat",
      callback: () => {
        playSFX("hom/defeat.ogg", 0.75);
      }
     },
     three: {
        icon: '<i class="fas fa-times"></i>',
        label: "Cancel",
        callback: () => {

        }
       }
    },
    default: "three",
    render: html => console.log("Register interactivity in the rendered dialog"),
    close: html => console.log("This always is logged no matter which option is chosen")
   });

   function toggleGrid(on) {
    let changedAlpha = game.scenes.current.data.grid.alpha > 0 ? 0 : 0.3;
      if (on) changedAlpha = 0.3;
      else if (on == false) changedAlpha = 0;

      if (game.scenes.current.data.grid.alpha != changedAlpha) {
         canvas.scene.update({'grid.alpha':changedAlpha})
         canvas.grid.grid.draw({'alpha':changedAlpha})
      }

  }



// Hooks.on("targetToken", (actor, token, targeted) => {
//   let targets = Array.from(game.user.targets);
//   if (targets.includes(canvas.tokens.controlled[0]))
//     return;

//     try {
//     let playerToken = canvas.tokens.controlled[0];
//     let playerPos = playerToken.transform.position;
//     let targetPos = token.transform.position;
//     let playerLook = playerToken.document.texture.scaleX;
//     } catch {
//       return;
//     }
//     if (playerPos._x < targetPos._x) {
//       if (playerLook == -1)
//         playerToken.document.update({"texture.scaleX": playerToken.document.texture.scaleX * -1}, {animate: animationDuration != 0, animation: {duration: animationDuration}});
//     } else {
//       if (playerLook == 1)
//         playerToken.document.update({"texture.scaleX": playerToken.document.texture.scaleX * -1}, {animate: animationDuration != 0, animation: {duration: animationDuration}});
//     }
// });

  