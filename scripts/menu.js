Hooks.on("getSceneControlButtons", (controls, b, c) => {
    if (!canvas.scene) return;
    controls
      .find((c) => c.name == "token")
      .tools.push(
        {
          name: "virtues",
          title: game.i18n.localize("The Eight Virtues"),
          icon: "fas fa-gem",
          button: true,
          visible: true,
          onClick: () => {
            playSFXLocal("hom/mystery.ogg", 0.75);
            virtuesWin.render(true);
          },
        },
  
          {
            name: "bestiary",
            title: game.i18n.localize("Bestiary"),
            icon: "fas fa-paw",
            button: true,
            visible: true,
            onClick: () => {
            game.journal.getName("Britannia Bestiary").sheet.render(true);
          },
        },

        {
          name: "bank",
          title: game.i18n.localize("Bank of Britannia"),
          icon: "fas fa-coins",
          button: true,
          visible: true,
          onClick: () => {
            if (_townSettings.inTown)
              playSFXLocal("uo/bankopen.ogg", 0.25);
            game.actors.get(getBank()).sheet.render(true);
        },
      }
      );
  });

const virtuesDialogOptions = {
    width: 250,
    height: 285,
    left: window.innerWidth - 250 - $('#ui-right').width(),
    top: window.innerHeight - 250
  };
  
  const virtuesWin = new Dialog({
    title: "The Eight Virtues",
    content: `<img src="uo/images/virtues.png" style="select: none;">`,
    id: 'virtues-win',
    buttons: {}
  }, virtuesDialogOptions);
 