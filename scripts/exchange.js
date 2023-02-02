  class Win {

    static getSceneControlButtons(buttons) {
        let tokenButton = buttons.find(b => b.name == "token")
        if (tokenButton) {
            tokenButton.tools.push({
            name: "zei-exchange",
            title: game.i18n.localize("Gold Exchange"),
            icon: "fas fa-balance-scale",
            button: true,
            visible: game.user.isGM,
            onClick: () => {
                Win.requestWin();
                playSFXGM('uo/bankopen.ogg');
          },
            });
        }
    }

    static requestWin() {
        if (ExchangeRequestor.requestor === undefined)
        ExchangeRequestor.requestor = new ExchangeRequestor();
        ExchangeRequestor.requestor.render(true);
    }
}

class ExchangeRequestor extends FormApplication {
    constructor(...args) {
        super(...args)
        game.users.apps.push(this);
    }

    static get defaultOptions() {
        const options = super.defaultOptions;
        options.title = "Gold Exchange";
        options.id = "zei-exchange";
        options.template = "modules/zei-lib/templates/exchange.html";
        options.closeOnSubmit = true;
        options.popOut = true;
        options.width = 320;
        options.height = 320;
        options.classes = ["zei-exchange"];
        return options;
    }

    activateListeners(html) {
        super.activateListeners(html);
        getData();

        //this.element.find("#tome1").change(this._onUserChange.bind(this));
         this.element.find("#exchange-set-gold-button").click((event) => this.setGold(event));
         this.element.find("#exchange-set-gold-input").keypress((e) => { if (e.charCode == 13) this.setGold(e)});
         this.element.find('.close').click((e) => playSFXGM('uo/bankclose.ogg'));

        //set focus
        $('#exchange-set-gold-input').focus();
    }

   async setGold(event) {
        event.preventDefault();

        //setup gold to be added/deducted
        let gold = parseInt($('#exchange-set-gold-input').val() || 0);
        
        //if default return
        if (gold == 0)
            return true;

        //set players
        let selectedPlayers = [];

        //set last selected
        exchangeSelectedUserIndex = $('#exchange-player-select')[0].selectedIndex;

        //determine players
        if ($('#exchange-player-select').val() == 'all') {

            //all players
            selectedPlayers = exchangeUsers;
        } else {

            //single player
            let selectCharId = $('#exchange-player-select').val();
            selectedPlayers.push(exchangeUsers.find(p => p.charId == selectCharId));
        }

            //no players
            if (selectedPlayers.length == 0)
                return true;

                //play sound for GM
                playSFXGM('uo/dropcoin.ogg', 0.75);

            //for each active user
            for (const user of selectedPlayers) {

                //if user has more gold than we are taking away
                if (gold > 0 || (gold < 0 && user.gold >= Math.abs(gold))) {

                    //create chat message
                    messageData(`You ${gold > 0 ? ' received ' : ' withdrew '} <b>${Math.abs(gold)} gold</b>!`, user.id);

                    //play sound for user
                    playSFX('uo/dropcoin.ogg', 0.75, user.id);
                    
                    //update user
                    await game.actors.get(user?.charId)?.update({
                                        system: {currency: { gp: 
                                            user.gold += gold
                                        }}
                    });

                } else if (gold < 0 && user.gold < Math.abs(gold)) {
                    let diff = Math.abs(gold) - user.gold;

                    //play sound for user
                    playSFX('npcs/liche1.ogg', 0.75);

                    //player does not have enough gold
                    messageData(`<label style="color: #ff0000">${user.name} lacks funds of <b>${diff} gold</b>!</label>`, user.id);

                    //update user
                    await game.actors.get(user?.charId)?.update({
                        system: {currency: { gp: 
                            user.gold = 0
                        }}
                });
                }
                
                //refresh data
                getData();

                //reset value
                $('#exchange-set-gold-input').val('');
                
                //set focus
                $('#exchange-set-gold-input').focus();
        }
    }

    async _updateObject(event, formData) {
       
    }
}

var exchangeUsers = [];
var exchangeSelectedUserIndex = 0;

function getUsers() {
    
    exchangeUsers = game.data.users.filter(x => x.name != 'Gamemaster' && x.name != 'CoDM')
    .filter(x => game.users.filter(u => u.active).map(x => x.data._id).includes(x._id))
    .map(p => 
        ({
            name: p.name,
            id: p._id,
            charId: p?.character,
            gold: game.actors.get(p?.character)?.system.currency.gp ?? 0
        })
    );

    exchangeUsers.sort((a, b) => (a.name > b.name) ? 1 : -1);
}

function getData() {
    //setup markup
    let markup = '';

    //
    $('#exchange-player-select').html('<option value="all">All Players</option>');

    //get users and load into array
    getUsers();

    //each user
    exchangeUsers.forEach((u,i) => markup += 
    `<tr data-id="${u.id}" data-charId="${u.charId}" data-gold=${u.gold}>
        <td>
            ${i+1})
        </td>    
        <td>
            ${u.name}
        </td>
        <td>
            ${u.gold}
        </td>
    </tr>`);

    //add markup
    $("#zei-exchange .table-users tbody").html(markup);

    //setup select
    exchangeUsers.forEach((u, i) => {
        $('#exchange-player-select').append(`<option value="${u.charId}">${u.name}</option>`);

        if (i == exchangeUsers.length - 1)
            $(`#exchange-player-select option:eq(${exchangeSelectedUserIndex})`).prop('selected', 1);
    });
}

//send player message
function messageData(message, playerId) {
    let chatData = {
        user : game.user._id,
        speaker: ChatMessage.getSpeaker(),
        whisper: game.users.find(u => u._id == playerId),
        content : `<img src="uo/images/gold.webp" style="select: none;"> ${message}`
    };
        ChatMessage.create(chatData,{});
}

Hooks.on('getSceneControlButtons', Win.getSceneControlButtons);