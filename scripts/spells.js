const spellList = [];
const spellListInternal = [];

Hooks.once("ready", function() {

	game.packs.filter(p => p.metadata.name == "ddb-ultima-spells")[0].index.filter(s => s.name != "#[CF_tempEntity]").map(s => { spellListInternal.push(s)});
	
	spellList.push(
		{ id:1, level:0, name: "Acid Splash", school: "Conjuration", ritual: false, book: "PHB", page: 211, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: false},
		{ id:2, level:0, name: "Blade Ward", school: "Abjuration", ritual: false, book: "PHB", page: 218, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:3, level:0, name: "Chill Touch", school: "Necromancy", ritual: false, book: "PHB", page: 221, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:4, level:0, name: "Control Flames", school: "Transmutation", ritual: false, book: "XGtE", page: 152, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:5, level:0, name: "Create Bonfire", school: "Conjuration", ritual: false, book: "XGtE", page: 152, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:6, level:0, name: "Dancing Lights", school: "Evocation", ritual: false, book: "PHB", page: 230, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:7, level:0, name: "Druidcraft", school: "Transmutation", ritual: false, book: "PHB", page: 236, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:8, level:0, name: "Eldritch Blast", school: "Evocation", ritual: false, book: "PHB", page: 236, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: false},
		{ id:9, level:0, name: "Friends", school: "Enchantment", ritual: false, book: "PHB", page: 244, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:10, level:0, name: "Fire Bolt", school: "Evocation", ritual: false, book: "PHB", page: 242, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:11, level:0, name: "Frostbite", school: "Evocation", ritual: false, book: "XGtE", page: 156, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:12, level:0, name: "Guidance", school: "Divination", ritual: false, book: "PHB", page: 248, bard: false, cleric: true, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:13, level:0, name: "Gust", school: "Transmutation", ritual: false, book: "XGtE", page: 157, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:14, level:0, name: "Infestation", school: "Conjuration", ritual: false, book: "XGtE", page: 158, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:15, level:0, name: "Light", school: "Evocation", ritual: false, book: "PHB", page: 255, bard: true, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:16, level:0, name: "Mage Hand", school: "Conjuration", ritual: false, book: "PHB", page: 256, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:17, level:0, name: "Magic Stone", school: "Transmutation", ritual: false, book: "XGtE", page: 160, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: false},
		{ id:18, level:0, name: "Mending", school: "Transmutation", ritual: false, book: "PHB", page: 259, bard: true, cleric: true, druid: true, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:19, level:0, name: "Message", school: "Transmutation", ritual: false, book: "PHB", page: 259, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:20, level:0, name: "Minor Illusion", school: "Illusion", ritual: false, book: "PHB", page: 260, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:21, level:0, name: "Mold Earth", school: "Transmutation", ritual: false, book: "XGtE", page: 162, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:22, level:0, name: "Poison Spray", school: "Conjuration", ritual: false, book: "PHB", page: 266, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:23, level:0, name: "Prestidigitation", school: "Transmutation", ritual: false, book: "PHB", page: 267, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:24, level:0, name: "Produce Flame", school: "Conjuration", ritual: false, book: "PHB", page: 268, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:25, level:0, name: "Ray of Frost", school: "Evocation", ritual: false, book: "PHB", page: 271, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:26, level:0, name: "Resistance", school: "Abjuration", ritual: false, book: "PHB", page: 272, bard: false, cleric: true, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:27, level:0, name: "Sacred Flame", school: "Evocation", ritual: false, book: "PHB", page: 272, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:28, level:0, name: "Shape Water", school: "Transmutation", ritual: false, book: "XGtE", page: 164, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:29, level:0, name: "Shillelagh", school: "Transmutation", ritual: false, book: "PHB", page: 275, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:30, level:0, name: "Shocking Grasp", school: "Evocation", ritual: false, book: "PHB", page: 275, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:31, level:0, name: "Spare the Dying", school: "Necromancy", ritual: false, book: "PHB", page: 277, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:32, level:0, name: "Thaumaturgy", school: "Transmutation", ritual: false, book: "PHB", page: 282, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:33, level:0, name: "Thorn Whip", school: "Transmutation", ritual: false, book: "PHB", page: 282, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:34, level:0, name: "Thunderclap", school: "Evocation", ritual: false, book: "XGtE", page: 168, bard: true, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:35, level:0, name: "Toll the Dead", school: "Necromancy", ritual: false, book: "XGtE", page: 169, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: true},
		{ id:36, level:0, name: "True Strike", school: "Divination", ritual: false, book: "PHB", page: 284, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:37, level:0, name: "Vicious Mockery", school: "Enchantment", ritual: false, book: "PHB", page: 285, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:38, level:0, name: "Word of Radiance", school: "Evocation", ritual: false, book: "XGtE", page: 171, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:39, level:0, name: "Booming Blade ", school: "Evocation", ritual: false, book: "SCAG", page: 142, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:40, level:0, name: "Green-Flame Blade", school: "Evocation", ritual: false, book: "SCAG", page: 143, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:41, level:0, name: "Lightning Lure", school: "Evocation", ritual: false, book: "SCAG", page: 143, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:42, level:0, name: "Sword Burst", school: "Conjuration", ritual: false, book: "SCAG", page: 143, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:43, level:1, name: "Absorb Elements", school: "Abjuration", ritual: false, book: "XGtE", page: 150, bard: false, cleric: false, druid: true, paladin: false, ranger: true, sorcerer: true, warlock: false, wizard: true},
		{ id:44, level:1, name: "Alarm", school: "Abjuration", ritual: true, book: "PHB", page: 211, bard: false, cleric: false, druid: false, paladin: false, ranger: true, sorcerer: false, warlock: false, wizard: true},
		{ id:45, level:1, name: "Animal Friendship", school: "Enchantment", ritual: false, book: "PHB", page: 212, bard: true, cleric: false, druid: true, paladin: false, ranger: true, sorcerer: false, warlock: false, wizard: false},
		{ id:46, level:1, name: "Armor of Agathys", school: "Abjuration", ritual: false, book: "PHB", page: 215, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: false},
		{ id:47, level:1, name: "Arms of Hadar", school: "Conjuration", ritual: false, book: "PHB", page: 215, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: false},
		{ id:48, level:1, name: "Bane", school: "Enchantment", ritual: false, book: "PHB", page: 216, bard: true, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:49, level:1, name: "Banishing Smite", school: "Abjuration", ritual: false, book: "PHB", page: 216, bard: false, cleric: false, druid: false, paladin: true, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:50, level:1, name: "Beast Bond", school: "Divination", ritual: false, book: "XGtE", page: 150, bard: false, cleric: false, druid: true, paladin: false, ranger: true, sorcerer: false, warlock: false, wizard: false},
		{ id:51, level:1, name: "Bless", school: "Enchantment", ritual: false, book: "PHB", page: 219, bard: false, cleric: true, druid: false, paladin: true, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:52, level:1, name: "Burning Hands", school: "Evocation", ritual: false, book: "PHB", page: 220, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:53, level:1, name: "Catapult", school: "Transmutation", ritual: false, book: "XGtE", page: 150, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:54, level:1, name: "Cause Fear", school: "Necromancy", ritual: false, book: "XGtE", page: 151, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: true},
		{ id:55, level:1, name: "Ceremony", school: "Abjuration", ritual: true, book: "XGtE", page: 151, bard: false, cleric: true, druid: false, paladin: true, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:56, level:1, name: "Chaos Bolt", school: "Evocation", ritual: false, book: "XGtE", page: 151, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: false},
		{ id:57, level:1, name: "Charm Person", school: "Enchantment", ritual: false, book: "PHB", page: 221, bard: true, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:58, level:1, name: "Chromatic Orb", school: "Evocation", ritual: false, book: "PHB", page: 221, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:59, level:1, name: "Color Spray", school: "Illusion", ritual: false, book: "PHB", page: 222, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:60, level:1, name: "Command", school: "Enchantment", ritual: false, book: "PHB", page: 223, bard: false, cleric: true, druid: false, paladin: true, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:61, level:1, name: "Compelled Duel", school: "Enchantment", ritual: false, book: "PHB", page: 224, bard: false, cleric: false, druid: false, paladin: true, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:62, level:1, name: "Comprehend Languages", school: "Divination", ritual: true, book: "PHB", page: 224, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:63, level:1, name: "Create or Destroy Water", school: "Transmutation", ritual: false, book: "PHB", page: 229, bard: false, cleric: true, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:64, level:1, name: "Cure Wounds", school: "Evocation", ritual: false, book: "PHB", page: 230, bard: true, cleric: true, druid: true, paladin: true, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:65, level:1, name: "Detect Evil and Good", school: "Divination", ritual: false, book: "PHB", page: 231, bard: false, cleric: true, druid: false, paladin: true, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:66, level:1, name: "Detect Magic", school: "Divination", ritual: true, book: "PHB", page: 231, bard: true, cleric: true, druid: true, paladin: true, ranger: true, sorcerer: true, warlock: false, wizard: true},
		{ id:67, level:1, name: "Detect Poison and Disease", school: "Divination", ritual: true, book: "PHB", page: 231, bard: false, cleric: true, druid: true, paladin: true, ranger: true, sorcerer: false, warlock: false, wizard: false},
		{ id:68, level:1, name: "Disguise Self", school: "Illusion", ritual: false, book: "PHB", page: 233, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:69, level:1, name: "Dissonant Whispers", school: "Enchantment", ritual: false, book: "PHB", page: 234, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:70, level:1, name: "Divine Favor", school: "Evocation", ritual: false, book: "PHB", page: 234, bard: false, cleric: false, druid: false, paladin: true, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:71, level:1, name: "Earth Tremor", school: "Evocation", ritual: false, book: "XGtE", page: 154, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:72, level:1, name: "Ensnaring Strike", school: "Conjuration", ritual: false, book: "PHB", page: 237, bard: false, cleric: false, druid: false, paladin: false, ranger: true, sorcerer: false, warlock: false, wizard: false},
		{ id:73, level:1, name: "Entangle", school: "Conjuration", ritual: false, book: "PHB", page: 238, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:74, level:1, name: "Expeditious Retreat", school: "Transmutation", ritual: false, book: "PHB", page: 238, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:75, level:1, name: "Faerie Fire", school: "Evocation", ritual: false, book: "PHB", page: 239, bard: true, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:76, level:1, name: "false Life", school: "Necromancy", ritual: false, book: "PHB", page: 239, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:77, level:1, name: "Feather Fall", school: "Transmutation", ritual: false, book: "PHB", page: 239, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:78, level:1, name: "Find Familiar", school: "Conjuration", ritual: true, book: "PHB", page: 240, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:79, level:1, name: "Fog Cloud", school: "Conjuration", ritual: false, book: "PHB", page: 243, bard: false, cleric: false, druid: true, paladin: false, ranger: true, sorcerer: true, warlock: false, wizard: true},
		{ id:80, level:1, name: "Goodberry", school: "Conjuration", ritual: false, book: "PHB", page: 246, bard: false, cleric: false, druid: true, paladin: false, ranger: true, sorcerer: false, warlock: false, wizard: false},
		{ id:81, level:1, name: "Grease", school: "Conjuration", ritual: false, book: "PHB", page: 246, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:82, level:1, name: "Guiding Bolt", school: "Evocation", ritual: false, book: "PHB", page: 248, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:83, level:1, name: "Hail of Thorns", school: "Conjuration", ritual: false, book: "PHB", page: 249, bard: false, cleric: false, druid: false, paladin: false, ranger: true, sorcerer: false, warlock: false, wizard: false},
		{ id:84, level:1, name: "Healing Word", school: "Evocation", ritual: false, book: "PHB", page: 250, bard: true, cleric: true, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:85, level:1, name: "Hellish Rebuke", school: "Evocation", ritual: false, book: "PHB", page: 250, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: false},
		{ id:86, level:1, name: "Heroism", school: "Enchantment", ritual: false, book: "PHB", page: 250, bard: true, cleric: false, druid: false, paladin: true, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:87, level:1, name: "Hex", school: "Enchantment", ritual: false, book: "PHB", page: 251, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: false},
		{ id:88, level:1, name: "Hunter's Mark", school: "Divination", ritual: false, book: "PHB", page: 251, bard: false, cleric: false, druid: false, paladin: false, ranger: true, sorcerer: false, warlock: false, wizard: false},
		{ id:89, level:1, name: "Ice Knife", school: "Conjuration", ritual: false, book: "XGtE", page: 157, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:90, level:1, name: "Identify", school: "Divination", ritual: true, book: "PHB", page: 252, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:91, level:1, name: "Illusory Script", school: "Illusion", ritual: true, book: "PHB", page: 252, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:92, level:1, name: "Inflict Wounds", school: "Necromancy", ritual: false, book: "PHB", page: 253, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: false},
		{ id:93, level:1, name: "Jump", school: "Transmutation", ritual: false, book: "PHB", page: 254, bard: true, cleric: false, druid: true, paladin: false, ranger: true, sorcerer: true, warlock: false, wizard: true},
		{ id:94, level:1, name: "Longstrider", school: "Transmutation", ritual: false, book: "PHB", page: 256, bard: true, cleric: false, druid: true, paladin: false, ranger: true, sorcerer: false, warlock: false, wizard: false},
		{ id:95, level:1, name: "Mage Armor", school: "Abjuration", ritual: false, book: "PHB", page: 256, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:96, level:1, name: "Magic Missile", school: "Evocation", ritual: false, book: "PHB", page: 257, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:97, level:1, name: "Protection from Evil and Good", school: "Abjuration", ritual: false, book: "PHB", page: 270, bard: false, cleric: true, druid: false, paladin: true, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:98, level:1, name: "Purify Food and Drink", school: "Abjuration", ritual: true, book: "PHB", page: 270, bard: false, cleric: true, druid: true, paladin: true, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:99, level:1, name: "Ray of Sickness", school: "Necromancy", ritual: false, book: "PHB", page: 271, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:100, level:1, name: "Sanctuary", school: "Abjuration", ritual: false, book: "PHB", page: 272, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:101, level:1, name: "Searing Smite", school: "Evocation", ritual: false, book: "PHB", page: 274, bard: false, cleric: false, druid: false, paladin: true, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:102, level:1, name: "Shield", school: "Abjuration", ritual: false, book: "PHB", page: 275, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:103, level:1, name: "Shield of Faith", school: "Abjuration", ritual: false, book: "PHB", page: 275, bard: false, cleric: true, druid: false, paladin: true, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:104, level:1, name: "Silent Image", school: "Illusion", ritual: false, book: "PHB", page: 276, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:105, level:1, name: "Sleep", school: "Enchantment", ritual: false, book: "PHB", page: 276, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:106, level:1, name: "Snare", school: "Abjuration", ritual: false, book: "XGtE", page: 165, bard: false, cleric: false, druid: true, paladin: false, ranger: true, sorcerer: false, warlock: false, wizard: true},
		{ id:107, level:1, name: "Speak with Animals", school: "Divination", ritual: true, book: "PHB", page: 277, bard: true, cleric: false, druid: true, paladin: false, ranger: true, sorcerer: false, warlock: false, wizard: false},
		{ id:108, level:1, name: "Tasha's Hideous Laughter", school: "Enchantment", ritual: false, book: "PHB", page: 280, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:109, level:1, name: "Tenser's Floating Disk", school: "Conjuration", ritual: true, book: "PHB", page: 282, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:110, level:1, name: "Thunderous Smite", school: "Evocation", ritual: false, book: "PHB", page: 282, bard: false, cleric: false, druid: false, paladin: true, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:111, level:1, name: "Thunderwave", school: "Evocation", ritual: false, book: "PHB", page: 282, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:112, level:1, name: "Unseen Servant", school: "Conjuration", ritual: true, book: "PHB", page: 284, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: true},
		{ id:113, level:1, name: "Witch Bolt", school: "Evocation", ritual: false, book: "PHB", page: 289, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:114, level:1, name: "Wrathful Smite", school: "Evocation", ritual: false, book: "PHB", page: 289, bard: false, cleric: false, druid: false, paladin: true, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:115, level:1, name: "Zephyr Strike", school: "Transmutation", ritual: false, book: "XGtE", page: 171, bard: false, cleric: false, druid: false, paladin: false, ranger: true, sorcerer: false, warlock: false, wizard: false},
		{ id:116, level:2, name: "Aganazzar's Scorcher", school: "Evocation", ritual: false, book: "XGtE", page: 150, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:117, level:2, name: "Aid", school: "Abjuration", ritual: false, book: "PHB", page: 211, bard: false, cleric: true, druid: false, paladin: true, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:118, level:2, name: "Alter Self", school: "Transmutation", ritual: false, book: "PHB", page: 211, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:119, level:2, name: "Animal Messenger", school: "Enchantment", ritual: true, book: "PHB", page: 212, bard: true, cleric: false, druid: true, paladin: false, ranger: true, sorcerer: false, warlock: false, wizard: false},
		{ id:120, level:2, name: "Arcane Lock", school: "Abjuration", ritual: false, book: "PHB", page: 215, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:121, level:2, name: "Augury", school: "Divination", ritual: true, book: "PHB", page: 215, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:122, level:2, name: "Barkskin", school: "Transmutation", ritual: false, book: "PHB", page: 217, bard: false, cleric: false, druid: true, paladin: false, ranger: true, sorcerer: false, warlock: false, wizard: true},
		{ id:123, level:2, name: "Beast Sense", school: "Divination", ritual: true, book: "PHB", page: 217, bard: false, cleric: false, druid: true, paladin: false, ranger: true, sorcerer: false, warlock: false, wizard: false},
		{ id:124, level:2, name: "Blindness/Deafness", school: "Necromancy", ritual: false, book: "PHB", page: 219, bard: true, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:125, level:2, name: "Blur", school: "Illusion", ritual: false, book: "PHB", page: 219, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:126, level:2, name: "Branding Smite", school: "Evocation", ritual: false, book: "PHB", page: 219, bard: false, cleric: false, druid: false, paladin: true, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:127, level:2, name: "Calm Emotions", school: "Enchantment", ritual: false, book: "PHB", page: 221, bard: true, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:128, level:2, name: "Cloud of Daggers", school: "Conjuration", ritual: false, book: "PHB", page: 222, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:129, level:2, name: "Continual Flame", school: "Evocation", ritual: false, book: "PHB", page: 227, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:130, level:2, name: "Cordon of Arrows", school: "Transmutation", ritual: false, book: "PHB", page: 228, bard: false, cleric: false, druid: false, paladin: false, ranger: true, sorcerer: false, warlock: false, wizard: true},
		{ id:131, level:2, name: "Crown of Madness", school: "Enchantment", ritual: false, book: "PHB", page: 229, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:132, level:2, name: "Darkness", school: "Evocation", ritual: false, book: "PHB", page: 230, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:133, level:2, name: "Darkvision", school: "Transmutation", ritual: false, book: "PHB", page: 230, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:134, level:2, name: "Detect Thoughts", school: "Divination", ritual: false, book: "PHB", page: 231, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:135, level:2, name: "Dragon's Breath", school: "Transmutation", ritual: false, book: "XGtE", page: 154, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:136, level:2, name: "Dust Devil", school: "Conjuration", ritual: false, book: "XGtE", page: 154, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:137, level:2, name: "Earthbind", school: "Transmutation", ritual: false, book: "XGtE", page: 154, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:138, level:2, name: "Enhance Ability", school: "Transmutation", ritual: false, book: "PHB", page: 237, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: false},
		{ id:139, level:2, name: "Enlarge/Reduce", school: "Transmutation", ritual: false, book: "PHB", page: 237, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:140, level:2, name: "Enthrall", school: "Enchantment", ritual: false, book: "PHB", page: 238, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: false},
		{ id:141, level:2, name: "Find Steed", school: "Conjuration", ritual: false, book: "PHB", page: 240, bard: false, cleric: false, druid: false, paladin: true, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:142, level:2, name: "Find Traps", school: "Divination", ritual: false, book: "PHB", page: 241, bard: false, cleric: true, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:143, level:2, name: "Flame Blade", school: "Evocation", ritual: false, book: "PHB", page: 242, bard: false, cleric: true, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:144, level:2, name: "Flaming Sphere", school: "Conjuration", ritual: false, book: "PHB", page: 242, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:145, level:2, name: "Gentle Repose", school: "Necromancy", ritual: true, book: "PHB", page: 245, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:146, level:2, name: "Gust of Wind", school: "Evocation", ritual: false, book: "PHB", page: 248, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:147, level:2, name: "Healing Spirit", school: "Conjuration", ritual: false, book: "XGtE", page: 157, bard: false, cleric: false, druid: true, paladin: false, ranger: true, sorcerer: false, warlock: false, wizard: false},
		{ id:148, level:2, name: "Heat Metal", school: "Transmutation", ritual: false, book: "PHB", page: 250, bard: true, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:149, level:2, name: "Hold Person", school: "Enchantment", ritual: false, book: "PHB", page: 251, bard: true, cleric: true, druid: true, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:150, level:2, name: "Invisibility", school: "Illusion", ritual: false, book: "PHB", page: 254, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:151, level:2, name: "Knock", school: "Transmutation", ritual: false, book: "PHB", page: 254, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:152, level:2, name: "Lesser Restoration", school: "Abjuration", ritual: false, book: "PHB", page: 255, bard: true, cleric: true, druid: true, paladin: true, ranger: true, sorcerer: false, warlock: false, wizard: false},
		{ id:153, level:2, name: "Levitate", school: "Transmutation", ritual: false, book: "PHB", page: 255, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:154, level:2, name: "Locate Animals or Plants", school: "Divination", ritual: true, book: "PHB", page: 256, bard: true, cleric: false, druid: true, paladin: false, ranger: true, sorcerer: false, warlock: false, wizard: false},
		{ id:155, level:2, name: "Locate Object", school: "Divination", ritual: false, book: "PHB", page: 256, bard: true, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:156, level:2, name: "Magic Mouth", school: "Illusion", ritual: true, book: "PHB", page: 257, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:157, level:2, name: "Magic Weapon", school: "Transmutation", ritual: false, book: "PHB", page: 257, bard: false, cleric: false, druid: false, paladin: true, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:158, level:2, name: "Maximilian's Earthen Grasp", school: "Transmutation", ritual: false, book: "XGtE", page: 161, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:159, level:2, name: "Melf's Acid Arrow", school: "Evocation", ritual: false, book: "PHB", page: 259, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:160, level:2, name: "Mind Spike", school: "Divination", ritual: false, book: "XGtE", page: 162, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:161, level:2, name: "Mirror Image", school: "Illusion", ritual: false, book: "PHB", page: 260, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:162, level:2, name: "Misty Step", school: "Conjuration", ritual: false, book: "PHB", page: 260, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:163, level:2, name: "Moonbeam", school: "Evocation", ritual: false, book: "PHB", page: 261, bard: false, cleric: false, druid: true, paladin: true, ranger: true, sorcerer: true, warlock: true, wizard: true},
		{ id:164, level:2, name: "Nystul's Magic Aura", school: "Illusion", ritual: false, book: "PHB", page: 263, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:165, level:2, name: "Pass Without Trace", school: "Abjuration", ritual: false, book: "PHB", page: 264, bard: false, cleric: false, druid: true, paladin: false, ranger: true, sorcerer: false, warlock: false, wizard: false},
		{ id:166, level:2, name: "Phantasmal Force", school: "Illusion", ritual: false, book: "PHB", page: 264, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:167, level:2, name: "Prayer of Healing", school: "Evocation", ritual: false, book: "PHB", page: 267, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:168, level:2, name: "Protection from Poison", school: "Abjuration", ritual: false, book: "PHB", page: 270, bard: false, cleric: true, druid: true, paladin: true, ranger: true, sorcerer: false, warlock: false, wizard: false},
		{ id:169, level:2, name: "Pyrotechnics", school: "Transmutation", ritual: false, book: "XGtE", page: 163, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:170, level:2, name: "Ray of Enfeeblement", school: "Necromancy", ritual: false, book: "PHB", page: 271, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: true},
		{ id:171, level:2, name: "Rope Trick", school: "Transmutation", ritual: false, book: "PHB", page: 272, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:172, level:2, name: "Scorching Ray", school: "Evocation", ritual: false, book: "PHB", page: 273, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:173, level:2, name: "See Invisibility", school: "Divination", ritual: false, book: "PHB", page: 274, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:174, level:2, name: "Shadow Blade", school: "Illusion", ritual: false, book: "XGtE", page: 164, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:175, level:2, name: "Shatter", school: "Evocation", ritual: false, book: "PHB", page: 275, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:176, level:2, name: "Silence", school: "Illusion", ritual: true, book: "PHB", page: 275, bard: true, cleric: true, druid: false, paladin: false, ranger: true, sorcerer: false, warlock: false, wizard: false},
		{ id:177, level:2, name: "Skywrite", school: "Transmutation", ritual: true, book: "XGtE", page: 165, bard: true, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:178, level:2, name: "Snilloc's Snowball Swarm", school: "Evocation", ritual: false, book: "XGtE", page: 165, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:179, level:2, name: "Spider Climb", school: "Transmutation", ritual: false, book: "PHB", page: 277, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:180, level:2, name: "Spike Growth", school: "Transmutation", ritual: false, book: "PHB", page: 277, bard: false, cleric: false, druid: true, paladin: false, ranger: true, sorcerer: false, warlock: false, wizard: false},
		{ id:181, level:2, name: "Spiritual Weapon", school: "Evocation", ritual: false, book: "PHB", page: 278, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:182, level:2, name: "Suggestion", school: "Enchantment", ritual: false, book: "PHB", page: 279, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:183, level:2, name: "Warding Bond", school: "Abjuration", ritual: false, book: "PHB", page: 287, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:184, level:2, name: "Warding Wind", school: "Evocation", ritual: false, book: "XGtE", page: 170, bard: true, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:185, level:2, name: "Web", school: "Conjuration", ritual: false, book: "PHB", page: 287, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:186, level:2, name: "Zone of Truth", school: "Enchantment", ritual: false, book: "PHB", page: 289, bard: true, cleric: true, druid: false, paladin: true, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:187, level:3, name: "Animate Dead", school: "Necromancy", ritual: false, book: "PHB", page: 212, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:188, level:3, name: "Auta of Vitality", school: "Abjuration", ritual: false, book: "PHB", page: 216, bard: false, cleric: false, druid: false, paladin: true, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:189, level:3, name: "Beacon of Hope", school: "Abjuration", ritual: false, book: "PHB", page: 217, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:190, level:3, name: "Bestow Curse", school: "Necromancy", ritual: false, book: "PHB", page: 218, bard: true, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:191, level:3, name: "Blinding Smite", school: "Evocation", ritual: false, book: "PHB", page: 219, bard: false, cleric: false, druid: false, paladin: true, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:192, level:3, name: "Blink", school: "Transmutation", ritual: false, book: "PHB", page: 219, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:193, level:3, name: "Call Lightning", school: "Conjuration", ritual: false, book: "PHB", page: 220, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:194, level:3, name: "Catnap", school: "Enchantment", ritual: false, book: "XGtE", page: 151, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:195, level:3, name: "Clairvoyance", school: "Divination", ritual: false, book: "PHB", page: 222, bard: true, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:196, level:3, name: "Conjure Animals", school: "Conjuration", ritual: false, book: "PHB", page: 225, bard: false, cleric: false, druid: true, paladin: false, ranger: true, sorcerer: false, warlock: false, wizard: false},
		{ id:197, level:3, name: "Conjure Barrage", school: "Conjuration", ritual: false, book: "PHB", page: 225, bard: false, cleric: false, druid: false, paladin: false, ranger: true, sorcerer: false, warlock: false, wizard: false},
		{ id:198, level:3, name: "Counterspell", school: "Abjuration", ritual: false, book: "PHB", page: 228, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:199, level:3, name: "Create Food and Water", school: "Conjuration", ritual: false, book: "PHB", page: 229, bard: false, cleric: true, druid: false, paladin: true, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:200, level:3, name: "Crusader's Mantle", school: "Evocation", ritual: false, book: "PHB", page: 230, bard: false, cleric: false, druid: false, paladin: true, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:201, level:3, name: "Daylight", school: "Evocation", ritual: false, book: "PHB", page: 230, bard: false, cleric: true, druid: true, paladin: false, ranger: true, sorcerer: true, warlock: false, wizard: false},
		{ id:202, level:3, name: "Dispel Magic", school: "Abjuration", ritual: false, book: "PHB", page: 234, bard: true, cleric: true, druid: true, paladin: true, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:203, level:3, name: "Elemental Weapon", school: "Transmutation", ritual: false, book: "PHB", page: 236, bard: false, cleric: false, druid: false, paladin: true, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:204, level:3, name: "Enemies Abound", school: "Enchantment", ritual: false, book: "XGtE", page: 155, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:205, level:3, name: "Erupting Earth", school: "Transmutation", ritual: false, book: "XGtE", page: 155, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:206, level:3, name: "Fear", school: "Illusion", ritual: false, book: "PHB", page: 239, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:207, level:3, name: "Feign Death", school: "Necromancy", ritual: true, book: "PHB", page: 240, bard: true, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:208, level:3, name: "Fireball", school: "Evocation", ritual: false, book: "PHB", page: 241, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:209, level:3, name: "Flame Arrows", school: "Transmutation", ritual: false, book: "XGtE", page: 156, bard: false, cleric: false, druid: true, paladin: false, ranger: true, sorcerer: true, warlock: false, wizard: true},
		{ id:210, level:3, name: "Fly", school: "Transmutation", ritual: false, book: "PHB", page: 243, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:211, level:3, name: "Gaseous Form", school: "Transmutation", ritual: false, book: "PHB", page: 244, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:212, level:3, name: "Glyph of Warding", school: "Abjuration", ritual: false, book: "PHB", page: 245, bard: true, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:213, level:3, name: "Haste", school: "Transmutation", ritual: false, book: "PHB", page: 250, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:214, level:3, name: "Hunger of Hadar", school: "Conjuration", ritual: false, book: "PHB", page: 251, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: false},
		{ id:215, level:3, name: "Hypnotic Pattern", school: "Illusion", ritual: false, book: "PHB", page: 252, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:216, level:3, name: "Leomund's Tiny Hut", school: "Evocation", ritual: true, book: "PHB", page: 255, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:217, level:3, name: "Life Transference", school: "Necromancy", ritual: false, book: "XGtE", page: 160, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:218, level:3, name: "Lightning Arrow", school: "Transmutation", ritual: false, book: "PHB", page: 255, bard: false, cleric: false, druid: false, paladin: false, ranger: true, sorcerer: false, warlock: false, wizard: false},
		{ id:219, level:3, name: "Lightning Bolt", school: "Evocation", ritual: false, book: "PHB", page: 255, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:220, level:3, name: "Magic Circle", school: "Abjuration", ritual: false, book: "PHB", page: 256, bard: false, cleric: true, druid: false, paladin: true, ranger: false, sorcerer: false, warlock: true, wizard: true},
		{ id:221, level:3, name: "Major Image", school: "Illusion", ritual: false, book: "PHB", page: 258, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:222, level:3, name: "Mass Healing Word", school: "Evocation", ritual: false, book: "PHB", page: 258, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:223, level:3, name: "Meld into Stone", school: "Transmutation", ritual: true, book: "PHB", page: 259, bard: false, cleric: true, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:224, level:3, name: "Melf's Minute Meteors", school: "Evocation", ritual: false, book: "XGtE", page: 161, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:225, level:3, name: "Nondetection", school: "Abjuration", ritual: false, book: "PHB", page: 263, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:226, level:3, name: "Phantom Steed", school: "Illusion", ritual: true, book: "PHB", page: 265, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:227, level:3, name: "Plant Growth", school: "Transmutation", ritual: false, book: "PHB", page: 266, bard: true, cleric: false, druid: true, paladin: false, ranger: true, sorcerer: false, warlock: false, wizard: false},
		{ id:228, level:3, name: "Protection from Energy", school: "Abjuration", ritual: false, book: "PHB", page: 270, bard: false, cleric: false, druid: true, paladin: false, ranger: true, sorcerer: true, warlock: false, wizard: true},
		{ id:229, level:3, name: "Remove Curse", school: "Abjuration", ritual: false, book: "PHB", page: 271, bard: false, cleric: true, druid: false, paladin: true, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:230, level:3, name: "Revivify", school: "Necromancy", ritual: false, book: "PHB", page: 272, bard: false, cleric: true, druid: false, paladin: true, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:231, level:3, name: "Sending", school: "Evocation", ritual: false, book: "PHB", page: 274, bard: true, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:232, level:3, name: "Sleet Storm", school: "Conjuration", ritual: false, book: "PHB", page: 276, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:233, level:3, name: "Slow", school: "Transmutation", ritual: false, book: "PHB", page: 277, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:234, level:3, name: "Speak with Dead", school: "Necromancy", ritual: false, book: "PHB", page: 277, bard: true, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:235, level:3, name: "Speak with Plants", school: "Transmutation", ritual: false, book: "PHB", page: 277, bard: true, cleric: false, druid: true, paladin: false, ranger: true, sorcerer: false, warlock: false, wizard: false},
		{ id:236, level:3, name: "Spirit Guardians", school: "Conjuration", ritual: false, book: "PHB", page: 278, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:237, level:3, name: "Stinking Cloud", school: "Conjuration", ritual: false, book: "PHB", page: 278, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:238, level:3, name: "Summon Lesser Demons", school: "Conjuration", ritual: false, book: "XGtE", page: 167, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: true},
		{ id:239, level:3, name: "Thunder Step", school: "Conjuration", ritual: false, book: "XGtE", page: 168, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:240, level:3, name: "Tidal Wave", school: "Conjuration", ritual: false, book: "XGtE", page: 168, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:241, level:3, name: "Tiny Servant", school: "Conjuration", ritual: false, book: "XGtE", page: 168, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:242, level:3, name: "Tongues", school: "Divination", ritual: false, book: "PHB", page: 283, bard: true, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:243, level:3, name: "Vampiric Touch", school: "Necromancy", ritual: false, book: "PHB", page: 285, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: true},
		{ id:244, level:3, name: "Wall of Sand", school: "Evocation", ritual: false, book: "XGtE", page: 170, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:245, level:3, name: "Wall of Water", school: "Evocation", ritual: false, book: "XGtE", page: 170, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:246, level:3, name: "Water Breathing", school: "Transmutation", ritual: true, book: "PHB", page: 287, bard: false, cleric: false, druid: true, paladin: false, ranger: true, sorcerer: true, warlock: false, wizard: true},
		{ id:247, level:3, name: "Water Walk", school: "Transmutation", ritual: true, book: "PHB", page: 287, bard: false, cleric: true, druid: true, paladin: false, ranger: true, sorcerer: true, warlock: false, wizard: false},
		{ id:248, level:3, name: "Wind Wall", school: "Evocation", ritual: false, book: "PHB", page: 288, bard: false, cleric: false, druid: true, paladin: false, ranger: true, sorcerer: false, warlock: false, wizard: false},
		{ id:249, level:4, name: "Arcane Eye", school: "Divination", ritual: false, book: "PHB", page: 214, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:250, level:4, name: "Aura of Life", school: "Abjuration", ritual: false, book: "PHB", page: 216, bard: false, cleric: false, druid: false, paladin: true, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:251, level:4, name: "Aura of Purity", school: "Abjuration", ritual: false, book: "PHB", page: 216, bard: false, cleric: false, druid: false, paladin: true, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:252, level:4, name: "Banishment", school: "Abjuration", ritual: false, book: "PHB", page: 217, bard: false, cleric: true, druid: false, paladin: true, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:253, level:4, name: "Blight", school: "Necromancy", ritual: false, book: "PHB", page: 219, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: true},
		{ id:254, level:4, name: "Charm Monster", school: "Enchantment", ritual: false, book: "XGtE", page: 151, bard: true, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:255, level:4, name: "Compulsion", school: "Enchantment", ritual: false, book: "PHB", page: 224, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:256, level:4, name: "Confusion", school: "Enchantment", ritual: false, book: "PHB", page: 224, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:257, level:4, name: "Conjure MInor Elementals", school: "Conjuration", ritual: false, book: "PHB", page: 226, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:258, level:4, name: "Conjure Woodland Beings", school: "Conjuration", ritual: false, book: "PHB", page: 226, bard: false, cleric: false, druid: true, paladin: false, ranger: true, sorcerer: false, warlock: false, wizard: false},
		{ id:259, level:4, name: "Control Water", school: "Transmutation", ritual: false, book: "PHB", page: 227, bard: false, cleric: true, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:260, level:4, name: "Death Ward", school: "Abjuration", ritual: false, book: "PHB", page: 230, bard: false, cleric: true, druid: false, paladin: true, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:261, level:4, name: "Dimension Door", school: "Conjuration", ritual: false, book: "PHB", page: 233, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:262, level:4, name: "Divination", school: "Divination", ritual: true, book: "PHB", page: 234, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:263, level:4, name: "Dominate Beast", school: "Enchantment", ritual: false, book: "PHB", page: 234, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: false},
		{ id:264, level:4, name: "Elemental Bane", school: "Transmutation", ritual: false, book: "XGtE", page: 155, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: true},
		{ id:265, level:4, name: "Evard's Black Tentacles", school: "Conjuration", ritual: false, book: "PHB", page: 238, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:266, level:4, name: "Fabricate", school: "Transmutation", ritual: false, book: "PHB", page: 239, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:267, level:4, name: "Find Greater Steed", school: "Conjuration", ritual: false, book: "XGtE", page: 156, bard: false, cleric: false, druid: false, paladin: true, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:268, level:4, name: "Fire Shield", school: "Evocation", ritual: false, book: "PHB", page: 242, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:269, level:4, name: "Freedom of Movement", school: "Abjuration", ritual: false, book: "PHB", page: 244, bard: true, cleric: true, druid: true, paladin: false, ranger: true, sorcerer: false, warlock: false, wizard: false},
		{ id:270, level:4, name: "Giant Insect", school: "Transmutation", ritual: false, book: "PHB", page: 245, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:271, level:4, name: "Grasping Vine", school: "Conjuration", ritual: false, book: "PHB", page: 246, bard: false, cleric: false, druid: true, paladin: false, ranger: true, sorcerer: false, warlock: false, wizard: false},
		{ id:272, level:4, name: "Greater Invisibility", school: "Illusion", ritual: false, book: "PHB", page: 246, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:273, level:4, name: "Guardian of Faith", school: "Conjuration", ritual: false, book: "PHB", page: 246, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:274, level:4, name: "Guardian of Nature", school: "Transmutation", ritual: false, book: "XGtE", page: 157, bard: false, cleric: false, druid: true, paladin: false, ranger: true, sorcerer: false, warlock: false, wizard: false},
		{ id:275, level:4, name: "Hallucinatory Terrain", school: "Illusion", ritual: false, book: "PHB", page: 249, bard: true, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: true},
		{ id:276, level:4, name: "Ice Storm", school: "Evocation", ritual: false, book: "PHB", page: 252, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:277, level:4, name: "Leomund's Secret Chest", school: "Conjuration", ritual: false, book: "PHB", page: 254, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:278, level:4, name: "Locate Creature", school: "Divination", ritual: false, book: "PHB", page: 256, bard: true, cleric: true, druid: true, paladin: false, ranger: true, sorcerer: false, warlock: false, wizard: true},
		{ id:279, level:4, name: "Mordenkainen's Faithful Hound", school: "Conjuration", ritual: false, book: "PHB", page: 261, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:280, level:4, name: "Mordenkainen's Private Sanctum", school: "Conjuration", ritual: false, book: "PHB", page: 262, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:281, level:4, name: "Otiluke's Resilient Sphere", school: "Evocation", ritual: false, book: "PHB", page: 264, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:282, level:4, name: "Phantasmal Killer", school: "Illusion", ritual: false, book: "PHB", page: 265, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:283, level:4, name: "Polymorph", school: "Transmutation", ritual: false, book: "PHB", page: 266, bard: true, cleric: false, druid: false, paladin: true, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:284, level:4, name: "Shadow of Moil", school: "Necromancy", ritual: false, book: "XGtE", page: 164, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: false},
		{ id:285, level:4, name: "Sickening Radiance", school: "Evocation", ritual: false, book: "XGtE", page: 164, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:286, level:4, name: "Staggering Smite", school: "Evocation", ritual: false, book: "PHB", page: 278, bard: false, cleric: false, druid: false, paladin: true, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:287, level:4, name: "Stone Shape", school: "Transmutation", ritual: false, book: "PHB", page: 278, bard: false, cleric: true, druid: true, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:288, level:4, name: "Stoneskin", school: "Abjuration", ritual: false, book: "PHB", page: 278, bard: false, cleric: false, druid: true, paladin: false, ranger: true, sorcerer: true, warlock: false, wizard: true},
		{ id:289, level:4, name: "Storm Sphere", school: "Evocation", ritual: false, book: "XGtE", page: 166, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: false},
		{ id:290, level:4, name: "Summon Greater Demon", school: "Conjuration", ritual: false, book: "XGtE", page: 166, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: true},
		{ id:291, level:4, name: "Vitriolic Sphere", school: "Evocation", ritual: false, book: "XGtE", page: 170, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:292, level:4, name: "Wall of Fire", school: "Evocation", ritual: false, book: "PHB", page: 285, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:293, level:4, name: "Watery Sphere", school: "Conjuration", ritual: false, book: "XGtE", page: 170, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:294, level:5, name: "Animate Objects", school: "Transmutation", ritual: false, book: "PHB", page: 213, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:295, level:5, name: "Antilife Shell", school: "Abjuration", ritual: false, book: "PHB", page: 213, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:296, level:5, name: "Awaken", school: "Transmutation", ritual: false, book: "PHB", page: 216, bard: true, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:297, level:5, name: "Bigby's Hand", school: "Evocation", ritual: false, book: "PHB", page: 218, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:298, level:5, name: "Circle of Power", school: "Abjuration", ritual: false, book: "PHB", page: 221, bard: false, cleric: false, druid: false, paladin: true, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:299, level:5, name: "Cloudkill", school: "Conjuration", ritual: false, book: "PHB", page: 222, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:300, level:5, name: "Commune", school: "Divination", ritual: true, book: "PHB", page: 223, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:301, level:5, name: "Commune with Nature", school: "Divination", ritual: true, book: "PHB", page: 224, bard: false, cleric: false, druid: true, paladin: false, ranger: true, sorcerer: false, warlock: false, wizard: false},
		{ id:302, level:5, name: "Cone of Cold", school: "Evocation", ritual: false, book: "PHB", page: 224, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:303, level:5, name: "Conjure Elemental", school: "Conjuration", ritual: false, book: "PHB", page: 225, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:304, level:5, name: "Conjure Volley", school: "Conjuration", ritual: false, book: "PHB", page: 226, bard: false, cleric: false, druid: false, paladin: false, ranger: true, sorcerer: false, warlock: false, wizard: false},
		{ id:305, level:5, name: "Contact Other Plane", school: "Divination", ritual: true, book: "PHB", page: 226, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: true},
		{ id:306, level:5, name: "Contagion", school: "Necromancy", ritual: false, book: "PHB", page: 227, bard: false, cleric: true, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:307, level:5, name: "Control Winds", school: "Transmutation", ritual: false, book: "XGtE", page: 152, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:308, level:5, name: "Creation", school: "Illusion", ritual: false, book: "PHB", page: 229, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:309, level:5, name: "Danse Macabre", school: "Necromancy", ritual: false, book: "XGtE", page: 153, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: false},
		{ id:310, level:5, name: "Dawn", school: "Evocation", ritual: false, book: "XGtE", page: 153, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:311, level:5, name: "Destructive Wave", school: "Evocation", ritual: false, book: "PHB", page: 231, bard: false, cleric: false, druid: false, paladin: true, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:312, level:5, name: "Dispell Evil and Good", school: "Abjuration", ritual: false, book: "PHB", page: 233, bard: false, cleric: true, druid: false, paladin: true, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:313, level:5, name: "Dominate Person", school: "Enchantment", ritual: false, book: "PHB", page: 235, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:314, level:5, name: "Dream", school: "Illusion", ritual: false, book: "PHB", page: 236, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: true},
		{ id:315, level:5, name: "Enervation", school: "Necromancy", ritual: false, book: "XGtE", page: 155, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:316, level:5, name: "Far Step", school: "Conjuration", ritual: false, book: "XGtE", page: 155, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:317, level:5, name: "Flame Strike", school: "Evocation", ritual: false, book: "PHB", page: 242, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:318, level:5, name: "Geas", school: "Enchantment", ritual: false, book: "PHB", page: 244, bard: true, cleric: true, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:319, level:5, name: "Greater Restoration", school: "Abjuration", ritual: false, book: "PHB", page: 246, bard: true, cleric: true, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:320, level:5, name: "Hallow", school: "Evocation", ritual: false, book: "PHB", page: 249, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:321, level:5, name: "Hold Monster", school: "Enchantment", ritual: false, book: "PHB", page: 251, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:322, level:5, name: "Holy Weapon", school: "Evocation", ritual: false, book: "XGtE", page: 157, bard: false, cleric: true, druid: false, paladin: true, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:323, level:5, name: "Immolation", school: "Evocation", ritual: false, book: "XGtE", page: 158, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:324, level:5, name: "Infernal Calling", school: "Conjuration", ritual: false, book: "XGtE", page: 158, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: true},
		{ id:325, level:5, name: "Insect Plague", school: "Conjuration", ritual: false, book: "PHB", page: 254, bard: false, cleric: true, druid: true, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: false},
		{ id:326, level:5, name: "Legend Lore", school: "Divination", ritual: false, book: "PHB", page: 254, bard: true, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:327, level:5, name: "Maelstrom", school: "Evocation", ritual: false, book: "XGtE", page: 160, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:328, level:5, name: "Mass Cure Wounds", school: "Evocation", ritual: false, book: "PHB", page: 258, bard: true, cleric: true, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:329, level:5, name: "Mislead", school: "Illusion", ritual: false, book: "PHB", page: 260, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:330, level:5, name: "Modify Memory", school: "Enchantment", ritual: false, book: "PHB", page: 261, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:331, level:5, name: "Negative Energy Field", school: "Necromancy", ritual: false, book: "XGtE", page: 163, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: true},
		{ id:332, level:5, name: "Passwall", school: "Transmutation", ritual: false, book: "PHB", page: 264, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:333, level:5, name: "Planar Binding", school: "Abjuration", ritual: false, book: "PHB", page: 265, bard: true, cleric: true, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:334, level:5, name: "Raise Dead", school: "Necromancy", ritual: false, book: "PHB", page: 270, bard: true, cleric: true, druid: false, paladin: true, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:335, level:5, name: "Rary's Telepathic Bond", school: "Divination", ritual: true, book: "PHB", page: 270, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:336, level:5, name: "Reincarnate", school: "Transmutation", ritual: false, book: "PHB", page: 271, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:337, level:5, name: "Scrying", school: "Divination", ritual: false, book: "PHB", page: 273, bard: true, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: true},
		{ id:338, level:5, name: "Seeming", school: "Illusion", ritual: false, book: "PHB", page: 274, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:339, level:5, name: "Skill Empowerment", school: "Transmutation", ritual: false, book: "XGtE", page: 165, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:340, level:5, name: "Steel Wind Strike", school: "Conjuration", ritual: false, book: "XGtE", page: 166, bard: false, cleric: false, druid: false, paladin: false, ranger: true, sorcerer: false, warlock: false, wizard: true},
		{ id:341, level:5, name: "Swift Quiver", school: "Transmutation", ritual: false, book: "PHB", page: 279, bard: false, cleric: false, druid: false, paladin: false, ranger: true, sorcerer: false, warlock: false, wizard: true},
		{ id:342, level:5, name: "Synaptic Static", school: "Enchantment", ritual: false, book: "XGtE", page: 167, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:343, level:5, name: "Telekinesis", school: "Transmutation", ritual: false, book: "PHB", page: 280, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:344, level:5, name: "Teleportation Circle", school: "Conjuration", ritual: false, book: "PHB", page: 282, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:345, level:5, name: "Transmute Rock", school: "Transmutation", ritual: false, book: "XGtE", page: 169, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:346, level:5, name: "Tree Stride", school: "Conjuration", ritual: false, book: "PHB", page: 283, bard: false, cleric: false, druid: true, paladin: false, ranger: true, sorcerer: false, warlock: false, wizard: false},
		{ id:347, level:5, name: "Wall of Force", school: "Evocation", ritual: false, book: "PHB", page: 285, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:348, level:5, name: "Wall of Light", school: "Evocation", ritual: false, book: "XGtE", page: 170, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:349, level:5, name: "Wall of Stone", school: "Evocation", ritual: false, book: "PHB", page: 287, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:350, level:5, name: "Wrath of Nature", school: "Evocation", ritual: false, book: "XGtE", page: 171, bard: false, cleric: false, druid: true, paladin: false, ranger: true, sorcerer: false, warlock: false, wizard: false},
		{ id:351, level:6, name: "Arcane Gate", school: "Conjuration", ritual: false, book: "PHB", page: 214, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:352, level:6, name: "Blade Barrier", school: "Evocation", ritual: false, book: "PHB", page: 218, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:353, level:6, name: "Bones of the Earth", school: "Transmutation", ritual: false, book: "XGtE", page: 150, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:354, level:6, name: "Chain Lightning", school: "Evocation", ritual: false, book: "PHB", page: 221, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:355, level:6, name: "Circle of Death", school: "Necromancy", ritual: false, book: "PHB", page: 221, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:356, level:6, name: "Conjure Fey", school: "Conjuration", ritual: false, book: "PHB", page: 226, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: false},
		{ id:357, level:6, name: "Contingency", school: "Evocation", ritual: false, book: "PHB", page: 227, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:358, level:6, name: "Create Homunculus", school: "Evocation", ritual: false, book: "XGtE", page: 152, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:359, level:6, name: "Create Undead", school: "Necromancy", ritual: false, book: "PHB", page: 229, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: true},
		{ id:360, level:6, name: "Disintegrate", school: "Transmutation", ritual: false, book: "PHB", page: 233, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:361, level:6, name: "Drawmij's Instant Summons", school: "Conjuration", ritual: true, book: "PHB", page: 235, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:362, level:6, name: "Druid Grove", school: "Abjuration", ritual: false, book: "XGtE", page: 154, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:363, level:6, name: "Eyebite", school: "Necromancy", ritual: false, book: "PHB", page: 238, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:364, level:6, name: "Find the Path", school: "Divination", ritual: false, book: "PHB", page: 240, bard: true, cleric: true, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:365, level:6, name: "Flesh to Stone", school: "Transmutation", ritual: false, book: "PHB", page: 243, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: true},
		{ id:366, level:6, name: "Forbiddance", school: "Abjuration", ritual: true, book: "PHB", page: 243, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:367, level:6, name: "Globe of Invulnerability", school: "Abjuration", ritual: false, book: "PHB", page: 245, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:368, level:6, name: "Guards and Wards", school: "Abjuration", ritual: false, book: "PHB", page: 248, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:369, level:6, name: "Harm", school: "Necromancy", ritual: false, book: "PHB", page: 249, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:370, level:6, name: "Heal", school: "Evocation", ritual: false, book: "PHB", page: 250, bard: false, cleric: true, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:371, level:6, name: "Heroes' Feast", school: "Conjuration", ritual: false, book: "PHB", page: 250, bard: false, cleric: true, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:372, level:6, name: "Investiture of Flame", school: "Transmutation", ritual: false, book: "XGtE", page: 159, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:373, level:6, name: "Investiture of Ice", school: "Transmutation", ritual: false, book: "XGtE", page: 159, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:374, level:6, name: "Investiture of Stone", school: "Transmutation", ritual: false, book: "XGtE", page: 159, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:375, level:6, name: "Investiture of Wind", school: "Transmutation", ritual: false, book: "XGtE", page: 160, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:376, level:6, name: "Magic Jar", school: "Necromancy", ritual: false, book: "PHB", page: 257, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:377, level:6, name: "Mass Suggestion", school: "Enchantment", ritual: false, book: "PHB", page: 258, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:378, level:6, name: "Mental Prison", school: "Illusion", ritual: false, book: "XGtE", page: 161, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:379, level:6, name: "Move Earth", school: "Transmutation", ritual: false, book: "PHB", page: 263, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:380, level:6, name: "Otiluke's Freezing Sphere", school: "Evocation", ritual: false, book: "PHB", page: 263, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:381, level:6, name: "Otto's Irresistible Dance", school: "Enchantment", ritual: false, book: "PHB", page: 264, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:382, level:6, name: "Planar Ally", school: "Conjuration", ritual: false, book: "PHB", page: 265, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:383, level:6, name: "Primordial Ward", school: "Abjuration", ritual: false, book: "XGtE", page: 163, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:384, level:6, name: "Programmed Illusion", school: "Illusion", ritual: false, book: "PHB", page: 268, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:385, level:6, name: "Scatter", school: "Conjuration", ritual: false, book: "XGtE", page: 164, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:386, level:6, name: "Soul Cage", school: "Necromancy", ritual: false, book: "XGtE", page: 165, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: true},
		{ id:387, level:6, name: "Sunbeam", school: "Evocation", ritual: false, book: "PHB", page: 279, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:388, level:6, name: "Tenser's Transformation", school: "Transmutation", ritual: false, book: "XGtE", page: 168, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:389, level:6, name: "Transport via Plants", school: "Conjuration", ritual: false, book: "PHB", page: 283, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:390, level:6, name: "true Seeing", school: "Divination", ritual: false, book: "PHB", page: 284, bard: true, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:391, level:6, name: "Wall of Ice", school: "Evocation", ritual: false, book: "PHB", page: 285, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:392, level:6, name: "Wall of Thorns", school: "Conjuration", ritual: false, book: "PHB", page: 287, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:393, level:6, name: "Wind Walk", school: "Transmutation", ritual: false, book: "PHB", page: 288, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:394, level:6, name: "Word of Recall", school: "Conjuration", ritual: false, book: "PHB", page: 289, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:395, level:7, name: "Conjure Celestial", school: "Conjuration", ritual: false, book: "PHB", page: 225, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:396, level:7, name: "Crown of Stars", school: "Evocation", ritual: false, book: "XGtE", page: 152, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:397, level:7, name: "Delayed Blast Fireball", school: "Evocation", ritual: false, book: "PHB", page: 230, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:398, level:7, name: "Divine Word", school: "Evocation", ritual: false, book: "PHB", page: 234, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:399, level:7, name: "Etherealness", school: "Transmutation", ritual: false, book: "PHB", page: 238, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:400, level:7, name: "Finger of Death", school: "Necromancy", ritual: false, book: "PHB", page: 241, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:401, level:7, name: "Fire Storm", school: "Evocation", ritual: false, book: "PHB", page: 242, bard: false, cleric: true, druid: true, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: false},
		{ id:402, level:7, name: "Forcecage", school: "Evocation", ritual: false, book: "PHB", page: 243, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: true},
		{ id:403, level:7, name: "Mirage Arcane", school: "Illusion", ritual: false, book: "PHB", page: 260, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:404, level:7, name: "Mordenkainen's Magnificent Mansion", school: "Conjuration", ritual: false, book: "PHB", page: 261, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:405, level:7, name: "Mordenkainen's Sword", school: "Evocation", ritual: false, book: "PHB", page: 262, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:406, level:7, name: "Plane Shift", school: "Conjuration", ritual: false, book: "PHB", page: 266, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:407, level:7, name: "Power Word Pain", school: "Enchantment", ritual: false, book: "XGtE", page: 163, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:408, level:7, name: "Prismatic Spray", school: "Evocation", ritual: false, book: "PHB", page: 267, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:409, level:7, name: "Project Image", school: "Illusion", ritual: false, book: "PHB", page: 270, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:410, level:7, name: "Regenerate", school: "Transmutation", ritual: false, book: "PHB", page: 271, bard: true, cleric: true, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:411, level:7, name: "Resurrection", school: "Necromancy", ritual: false, book: "PHB", page: 272, bard: true, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:412, level:7, name: "Reverse Gravity", school: "Transmutation", ritual: false, book: "PHB", page: 272, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:413, level:7, name: "Sequester", school: "Transmutation", ritual: false, book: "PHB", page: 274, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:414, level:7, name: "Simulacrum", school: "Illusion", ritual: false, book: "PHB", page: 276, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:415, level:7, name: "Symbol", school: "Abjuration", ritual: false, book: "PHB", page: 280, bard: true, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:416, level:7, name: "Teleport", school: "Conjuration", ritual: false, book: "PHB", page: 281, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:417, level:7, name: "Temple of the Gods", school: "Conjuration", ritual: false, book: "XGtE", page: 167, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:418, level:7, name: "Whirlwind", school: "Evocation", ritual: false, book: "XGtE", page: 171, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:419, level:8, name: "Abi-Dalzim's Horrid Wilting", school: "Necromancy", ritual: false, book: "XGtE", page: 150, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:420, level:8, name: "Animal Shapes", school: "Transmutation", ritual: false, book: "PHB", page: 212, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:421, level:8, name: "Antimagic Field", school: "Abjuration", ritual: false, book: "PHB", page: 213, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:422, level:8, name: "Antipathy/Sympathy", school: "Enchantment", ritual: false, book: "PHB", page: 214, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:423, level:8, name: "Clone", school: "Necromancy", ritual: false, book: "PHB", page: 222, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:424, level:8, name: "Control Weather", school: "Transmutation", ritual: false, book: "PHB", page: 228, bard: false, cleric: true, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:425, level:8, name: "Demiplane", school: "Conjuration", ritual: false, book: "PHB", page: 231, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: true},
		{ id:426, level:8, name: "Dominate Monster", school: "Enchantment", ritual: false, book: "PHB", page: 234, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:427, level:8, name: "Earthquake", school: "Evocation", ritual: false, book: "PHB", page: 235, bard: false, cleric: true, druid: true, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: false},
		{ id:428, level:8, name: "Feeblemind", school: "Enchantment", ritual: false, book: "PHB", page: 239, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: true},
		{ id:429, level:8, name: "Glibness", school: "Transmutation", ritual: false, book: "PHB", page: 245, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: false},
		{ id:430, level:8, name: "Holy Aura", school: "Abjuration", ritual: false, book: "PHB", page: 251, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:431, level:8, name: "Illusory Dragon", school: "Illusion", ritual: false, book: "XGtE", page: 157, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:432, level:8, name: "Incendiary Cloud", school: "Conjuration", ritual: false, book: "PHB", page: 253, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:433, level:8, name: "Maddening Darkness", school: "Evocation", ritual: false, book: "XGtE", page: 160, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: true},
		{ id:434, level:8, name: "Maze", school: "Conjuration", ritual: false, book: "PHB", page: 258, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:435, level:8, name: "Mighty Fortress", school: "Conjuration", ritual: false, book: "XGtE", page: 161, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:436, level:8, name: "Mind Blank", school: "Abjuration", ritual: false, book: "PHB", page: 259, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:437, level:8, name: "Power Word Stun", school: "Enchantment", ritual: false, book: "PHB", page: 267, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:438, level:8, name: "Sunburst", school: "Evocation", ritual: false, book: "PHB", page: 279, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:439, level:8, name: "Telepathy", school: "Evocation", ritual: false, book: "PHB", page: 281, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:440, level:8, name: "Tsunami", school: "Conjuration", ritual: false, book: "PHB", page: 284, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:441, level:9, name: "Astral Projection", school: "Necromancy", ritual: false, book: "PHB", page: 215, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: true},
		{ id:442, level:9, name: "Foresight", school: "Divination", ritual: false, book: "PHB", page: 244, bard: true, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: true},
		{ id:443, level:9, name: "Gate", school: "Conjuration", ritual: false, book: "PHB", page: 244, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:444, level:9, name: "Imprisonment", school: "Abjuration", ritual: false, book: "PHB", page: 252, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: true},
		{ id:445, level:9, name: "Invulnerability", school: "Abjuration", ritual: false, book: "XGtE", page: 160, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:446, level:9, name: "Mass Heal", school: "Conjuration", ritual: false, book: "PHB", page: 258, bard: false, cleric: true, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:447, level:9, name: "Mass Polymorph", school: "Transmutation", ritual: false, book: "XGtE", page: 160, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:448, level:9, name: "Meteor Swarm", school: "Evocation", ritual: false, book: "PHB", page: 259, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:449, level:9, name: "Power Word Heal", school: "Evocation", ritual: false, book: "PHB", page: 266, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:450, level:9, name: "Power Word Kill", school: "Enchantment", ritual: false, book: "PHB", page: 266, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:451, level:9, name: "Prismatic Wall", school: "Abjuration", ritual: false, book: "PHB", page: 267, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:452, level:9, name: "Psychic Scream", school: "Enchantment", ritual: false, book: "XGtE", page: 163, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: true, wizard: true},
		{ id:453, level:9, name: "Shapechange", school: "Transmutation", ritual: false, book: "PHB", page: 274, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:454, level:9, name: "Storm of Vengeance", school: "Conjuration", ritual: false, book: "PHB", page: 279, bard: false, cleric: false, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:455, level:9, name: "Time Stop", school: "Transmutation", ritual: false, book: "PHB", page: 283, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true},
		{ id:456, level:9, name: "true Polymorph", school: "Transmutation", ritual: false, book: "PHB", page: 283, bard: true, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: true, wizard: true},
		{ id:457, level:9, name: "true Resurrection", school: "Necromancy", ritual: false, book: "PHB", page: 284, bard: false, cleric: true, druid: true, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: false},
		{ id:458, level:9, name: "Weird", school: "Illusion", ritual: false, book: "PHB", page: 288, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: false, warlock: false, wizard: true},
		{ id:459, level:9, name: "Wish", school: "Conjuration", ritual: false, book: "PHB", page: 288, bard: false, cleric: false, druid: false, paladin: false, ranger: false, sorcerer: true, warlock: false, wizard: true}
	);
		
    //relate ids by name to compendium
	spellList.map(s => { s._id = spellListInternal.filter(x => x.name == s.name)[0]?._id });
});

function getSpellsByName(name, className, level, school, ritual) {
		let result = [];
		if (name != undefined && name != "") name = name.toLowerCase();
		if (className != undefined && className != "") className.toLowerCase();
		if (level == undefined || level == "") level = -1;
		if (school != undefined) school = school.toLowerCase();
		if (ritual == undefined) ritual = false;
		
		console.log(`Name: ${name}`);
		console.log(`Class: ${className}`);
		console.log(`Level: ${level}`);
		console.log(`School: ${school}`);
		console.log(`Ritual: ${ritual}`);
		
	if (name && name != "") {
		let pattern = new RegExp('(\\w*'+name+'\\w*)','gi');
		result = spellList.filter(s => s.name.match(pattern));
	} else
		result = spellList;
	
	if (className && className != "") {
		if (className == "bard")
			result = result.filter(s => s.bard);
		
		if (className == "cleric")
			result = result.filter(s => s.cleric);
		
		if (className == "druid")
			result = result.filter(s => s.druid);
		
		if (className == "paladin")
			result = result.filter(s => s.paladin);
		
		if (className == "ranger")
			result = result.filter(s => s.ranger);
		
		if (className == "sorcerer")
			result = result.filter(s => s.sorcerer);
		
		if (className == "warlock")
			result = result.filter(s => s.warlock);
		
		if (className == "wizard")
			result = result.filter(s => s.wizard);
	}
	
	if (level != "" && level != -1) {
		result = result.filter(s => s.level == level);
	}
	
	if (school && school != "") {
		result = result.filter(s => s.school.toLowerCase() == school);
	}
	
	if (ritual) {
		result = result.filter(s => s.ritual);
	}
	
	if (result)
		return result;
	return "No spells found";
}

function getRandomSpell(level, number, className) {
	let result = [];
	let rand = 0;

	if (level == undefined || level == "")
		level = 0;

	if (number == undefined)
		number = 1;
	
	if (number == "" || number == 0)
	number = -1;
		
   if (className == undefined ||className == "") 
   	className = "";

className.toLowerCase();

console.log(`spellList ${level} ${number} ${className}`)

	result = spellList.filter(s => s.level == level);
		
	if (className && className != "") {
		if (className == "bard")
			result = result.filter(s => s.bard);
		
		if (className == "cleric")
			result = result.filter(s => s.cleric);
		
		if (className == "druid")
			result = result.filter(s => s.druid);
		
		if (className == "paladin")
			result = result.filter(s => s.paladin);
		
		if (className == "ranger")
			result = result.filter(s => s.ranger);
		
		if (className == "sorcerer")
			result = result.filter(s => s.sorcerer);
		
		if (className == "warlock")
			result = result.filter(s => s.warlock);
		
		if (className == "wizard")
			result = result.filter(s => s.wizard);
	}

	let randResult = [];

	if (number == -1) {
		return result;
	} else {
		for (i = 0; i < number; i++)
			randResult.push(result[Math.floor(Math.random() * result.length)]);
	}

	return randResult;
}

function itemMessage(item) {
	return`<li>@Compendium[world.ddb-ultima-spells.${item._id}]{${item.name}}</li>`;
}

function generateSpellChat(l, q, c) {
	if (q > 10)
	q = 10;
	
	let results = getRandomSpell(l, q, c)

	let msg = `
		<b style="color: #990099;">Magician's Tome</b></br>
		Identify Scroll Level: ${l || 0} Quantity: ${q} Class: ${c || "All"}</br>
		<ol>`;

	for (i = 0; i < q; i++) {
		msg += itemMessage(results[i]);

		if (i == q - 1) {
			ChatMessage.create({content: msg + `</ol>`});
		}
	}
}

//@Compendium[world.ddb-ultima-spells.4vFfv55DJDjefyxI]{Aid}

// if (party_1.items.length) {
// 	const items = party_1.items.map(item => {
// 		return { _id: item.id, quantity: item.quantity, item: item.data }
// 	})
// 	await API._addItems(party_2.actor, items, party_1.user, { runHooks: false });
// 	await API._removeItems(party_1.actor, items, party_1.user, { runHooks: false });