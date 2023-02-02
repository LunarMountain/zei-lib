
var bankDepositWin = {};
var bankWithdrawWin = {};
let depositWin = {};
let withdrawWin = {};

Hooks.on("renderActorSheet", async (app, html, options) => {
    if (app?.object?._sheet?.options?.classes[0]?.split(' ')?.includes("merchant-sheet-npc")) {

        if (!_townSettings.inTown) {
          log('bank hide');
          $('.merchant-sheet-npc').hide();

          setTimeout(() => {
            $('.merchant-sheet-npc .close').trigger('click');
          }, 1000);
          
            ui.notifications.error(`The bank cannot be accessed outside of town.`);
            return;
        } else {
          $('.merchant-sheet-npc').show();
          log('bank show');
        }


      if (!game.user.isGM)
        $('.merchant-sheet-npc .configure-sheet').remove();

      $('.merchant-sheet-npc .configure-token').remove();
      $('.merchant-sheet-npc .item-piles-config-button').remove();
      $('.merchant-sheet-npc .vtta-tokens').remove();
      $('.merchant-sheet-npc .spellpoints').remove();
      $('.merchant-sheet-npc a:not(.header-button)').remove();

      setTimeout(() => {
        $('.merchant-sheet-npc .open-actor-effect').remove();
        $('.merchant-sheet-npc a:not(.header-button)').remove();
    }, (10));

      setTimeout(() => {
        $('.merchant-sheet-npc .open-actor-effect').remove();
        $('.merchant-sheet-npc a:not(.header-button)').remove();
        createBankWin();

        if (!$('.merchant-sheet-npc .close').hasClass("bound")) {
          $('.merchant-sheet-npc .close').addClass("bound");
          $('.merchant-sheet-npc .close').bind("click", () => playSFXLocal('uo/bankclose.ogg', 0.25));
        }

    }, (100));

    }
  });

function getBank() {
// if ($('.merchant-sheet-npc').length > 0) {
//     $('.merchant-sheet-npc').show();
//     return;
// }

    switch(game.userId) {
    
case "0h6iUg0SzOCz5owk":
  return "4rbL4OZ2DWKOn16S";
  break;

      //zoey
      //Kudh3WOmI6DzF1nv
      case "j1Yu3awSUPHXIGvM":
        return "WhH76hmyPDc481U7";
        break;
    
         //brett
      case "yeyVZxtG6Jlv8SJd":
        return "lkHjomOmem81nTaj";
        break;
    
         //chris
      case "7MeZZsqFr5ezeOmn":
        return "m86OK1CtSFBvjrIi";
        break;
    
         //connor
      case "HKJA5L9bDdqwxLcA":
        return "qXtaWx21UZaQMUKK";
        break;
    
         //greg
      case "1DI2IqigNjcUJGve":
        return "roJ5JNC1kKD5Walg";
        break;
    
         //jc
      case "MFvhSBXuMBLB7XQV":
        return "cHtB3KPp4K3PLKjp";
        break;
    
         //logan
      case "KDp4M7MC3QLbxBzF":
        return "L8BWgws23MwYxue6";
        break;
    
         //skylar
      case "vsdEKJRVJf8hOwE4":
        return "HqH8InS1J66DcAut";
        break;
    
         //test
      case "uTLQQvG2VDyrTvvY":
        return "4rbL4OZ2DWKOn16S";
        break;
    
         //troy
      case "TLwd79X218UlqT3R":
        return "FKpacGY122YK9OP5";
        break;
    
         //wes
      case "eToyVTPaCcWkUaGt":
        return "ZwpLnnxGCJ3pljx1";
        break;
    }
}

//game.actors.get("ZwpLnnxGCJ3pljx1").sheet.render(true);

function bankDeposit() {
  _getGold();
  createBankWin();
  depositWin = bankDepositWin.render(true);
  setTimeout(() => { 
    $('.bank-deposit-input').keypress((e) => { if (e.charCode == 13)  _depositHandler() })
    $('.bank-deposit-input').focus() 
} , 10);
}

function bankWithdraw() {
  _getGold();
  createBankWin();
  withdrawWin = bankWithdrawWin.render(true);
  setTimeout(() => { 
    $('.bank-withdraw-input').keypress((e) => { if (e.charCode == 13)  _withdrawHandler() })
    $('.bank-withdraw-input').focus() 
  }, 10);
}

const _bankData = {
  id: "",
  char: "",
  gold: 0,
  bank: 0
};

function _getGold() {
  log('get gold');
  _bankData.id = getBank();
  _bankData.bank = game.actors.get(_bankData.id)?.data.data.currency.gp ?? 0;
  _bankData.char = game.data.users.find(x => x._id == game.userId)?.character;
  _bankData.gold = game.actors.get(_bankData.char)?.data.data.currency.gp ?? 0;
}

function createBankWin() {
  bankDepositWin = new Dialog({
    title: "Bank Function",
    content: `
    <div style="margin-bottom: 1rem;";>
      <label style="font-weight: bold;">To Bank</label>
      <input class="bank-deposit-input" type="number" placeholder="Enter gold amount" style="width: 100%; margin-bottom: 1rem;">
    </div>

    <div style="margin-bottom: 1rem;";>
      <label style="font-weight: bold;">Bank Balance</label>
      <label>${_bankData.bank}</label>
    </div>

    <div style="margin-bottom: 1rem;";>
      <label style="font-weight: bold;">Character Balance</label>
      <label>${_bankData.gold}</label>
    </div>

    <button onclick="_depositHandler()">Deposit Gold</button>
    `,
    id: 'bank-deposit-win',
    buttons: {}
  }, bankDialogOptions);

  bankWithdrawWin = new Dialog({
    title: "Bank Function",
    content: `
    <div style="margin-bottom: 1rem;";>
      <label style="font-weight: bold;">From Bank</label>
      <input class="bank-withdraw-input" type="number" placeholder="Enter gold amount" style="width: 100%; margin-bottom: 1rem;">
    </div>

    <div style="margin-bottom: 1rem;";>
      <label style="font-weight: bold;">Bank Balance</label>
      <label>${_bankData.bank}</label>
    </div>

    <div style="margin-bottom: 1rem;";>
      <label style="font-weight: bold;">Character Balance</label>
      <label>${_bankData.gold}</label>
    </div>

    <button onclick="_withdrawHandler()">Withdraw Gold</button>
    `,
    id: 'bank-withdraw-win',
    buttons: {}
  }, bankDialogOptions);
}

const bankDialogOptions = {
  width: 250,
  height: 285
};

function _depositHandler() {
  log('_depositHandler')
  _updateGold( $('.bank-deposit-input').val(), "deposit");
}

function _withdrawHandler() {
  log('_withdrawHandler')
  _updateGold($('.bank-withdraw-input').val(), "withdraw");
}

async function _updateGold(gold, type) {
 let source = _bankData.char;
 let target = _bankData.id;

log(`source: ${source} , target: ${target}, ${gold}`)


if (type == "deposit") {
  depositWin.close();
} else {
  withdrawWin.close();
}

//update gold
_getGold();

//do math
if (type == "deposit") {
  if (gold > _bankData.gold) {
    ui.notifications.error(`You don't have enough gold on your character!`);
    return true;
  }

  _bankData.gold -= Math.abs(gold);
  _bankData.bank += Math.abs(gold);
} else {

  //withdraw
  if (gold > _bankData.bank) {
    ui.notifications.error(`You don't have enough gold in the bank!`);
    return true;
  }

  _bankData.bank -= Math.abs(gold);
  _bankData.gold += Math.abs(gold);
}

//play sound for user
playSFX('uo/dropcoin.ogg', 0.75, game.userId);

   await game.actors.get(source)?.update({
    data: {currency: { gp: 
      _bankData.gold
    }}
  });

   await game.actors.get(target)?.update({
    data: {currency: { gp: 
      _bankData.bank
    }}
  });

}
