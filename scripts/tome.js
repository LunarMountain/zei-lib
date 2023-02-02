class Tome {
    static getSceneControlButtons(buttons) {
        let tokenButton = buttons.find(b => b.name == "token")
        if (tokenButton) {
            tokenButton.tools.push({
            name: "mageTome",
            title: game.i18n.localize("Magician's Tome"),
            icon: "fas fa-hat-wizard",
            button: true,
            visible: true,
            onClick: () => {
                playSFX("uo/scrolls.ogg", 1);
                Tome.requestTome();
          },
            });
        }
    }
    
    static requestTome() {
        if (TomeRequestor.requestor === undefined)
        TomeRequestor.requestor = new TomeRequestor();
        TomeRequestor.requestor.render(true);
    }
}

class TomeRequestor extends FormApplication {
    constructor(...args) {
        super(...args)
        game.users.apps.push(this);
    }

    static get defaultOptions() {
        const options = super.defaultOptions;
        options.title = "Magician's Tome";
        options.id = "tome";
        options.template = "modules/zei-lib/templates/tome.html";
        options.closeOnSubmit = true;
        options.popOut = true;
        options.width = 800;
        options.height = 640;
        options.classes = ["mageTome"];
        return options;
    }

    activateListeners(html) {
        super.activateListeners(html);
        //this.element.find("#tome1").change(this._onUserChange.bind(this));
        this.element.find("#tome-generate-spell").click((event) => this.setTome(event));
        this.element.find("#tome-generate-chat").click((event) => this.setTomeChat(event));
    }

    setTomeChat(event) {
        event.preventDefault();
        console.log('generate spell');
        generateSpellChat($('#tome-level').val(), $('#tome-number').val(), $('#tome-class').val());
    }

    setTome(event) {
        event.preventDefault();
        console.log('generate spell');

        let results = getRandomSpell($('#tome-level').val(), $('#tome-number').val(), $('#tome-class').val());
        $('#tome-spell-list tbody').empty();
        let i = 1;

        results.forEach(s => {
            let classes = "";
            if (s.bard) classes += "B ";
            if (s.cleric) classes += "C ";
            if (s.druid) classes += "D ";
            if (s.paladin) classes += "Pl ";
            if (s.ranger) classes += "R ";
            if (s.sorcerer) classes += "S ";
            if (s.warlock) classes += "Wr ";
            if (s.wizard) classes += "Wz ";
            $('#tome-spell-list tbody').append(`<tr><td>${i++}</td><td><a class="entity-link content-link" draggable="true" data-pack="world.ddb-ultima-spells" data-id="${s._id}">${s.name}</td><td>${s.level}</td><td>${classes}</td><td>${s.school}</td>`);
        });

       // $("#tome-form").submit();
    }

    async _updateObject(event, formData) {
        // //TODO: Fazer as mensagens do chat.
        // //ui.notifications.warn('oi2');
        // let speaker = ChatMessage.getSpeaker();
        // // Translate metric system        
        // let basemed = this.formatMetricSystem();
        // // preview value
        // game.settings.set("tome", "previewSetting", { tome1: formData["tome1"], tome2: formData["tome2"], tom3: formData["tome3"], tom4: formData["tome4"]});

        // if (!speaker.actor && game.user.character) speaker = ChatMessage.getSpeaker({ actor: game.user.character });
        // let templateChat = "modules/tome/templates/templateChat.html";
        // let marchTotal = this.JourneyTime(formData["jspeed"], formData["tome1"], formData["tome2"], formData["tome3"], formData["tome4"], true);
        // let marchDisclaimer = (formData["tome3"] === 'Slow') ? game.i18n.localize("Tome.Dialog.SlowEffects") : (formData["tome3"] === 'Fast') ? game.i18n.localize("Tome.Dialog.FastEffects"):"";
        // let dialogNarrative = game.i18n.format("Tome.Dialog.Narrative", { units_miles: basemed[2], units_feetAbbr: basemed[1], marchSpeed: formData["jspeed"], marchOnRoad: formData["tome1"], marchOffRoad: formData["tome2"] });
        // let marchstring = "Tome.tome3" + formData["tome3"]; 
        // let marchType = game.i18n.localize(marchstring);
        // let dialogData = {
        //     marchType: marchType,
        //     dialogNarrative: dialogNarrative,
        //     marchTotal: marchTotal,
        //     marchDisclaimer: marchDisclaimer,
        //     chatForced: game.settings.get("tome", "ForcedMarchDialog")
        // };
        // let flavor = "<h3>" + game.i18n.localize("Tome.Dialog.Who") + " (ratio: 1/" + formData["tome4"]+")</h3>";
        // let content = await renderTemplate(templateChat, dialogData);
        // let messageData = {
        //     content: content,
        //     flavor: flavor,
        //     speaker: speaker
        // };
        // ChatMessage.create(messageData);
        // console.log("Tome submit: ", formData);
    }
}

Hooks.on('getSceneControlButtons', Tome.getSceneControlButtons);