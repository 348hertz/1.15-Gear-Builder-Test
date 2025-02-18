import { getData } from '../dataManager';

const pantsData = [
	{
		id: 0,
		name: 'None',
		legend: 'Nothing Lol',
		defense: 0,
		power: 0,
		agility: 0,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 0,
		gemNo: 2,
		mainType: 'Pants',
		subType: 'None',
		rarity: 'None',
		rarityColor: '#FFFFFF',
		imageId: 'https://i.imgur.com/U9Z0chG.jpg'
	},
	{
		id: 1,
		name: 'Aereus Pants',
		legend: 'A set of black robe bottoms lined with bronze, obtained from a Dark Sealed Chest.',
		defense: 0,
		power: 0,
		agility: 0,
		attackSize: 39,
		attackSpeed: 0,
		intensity: 26,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Pants',
		subType: 'None',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/Nqef809.jpg'
	},
	{
		id: 2,
		name: "Cernyx's Boots",
		legend:
			'A pair of rough grey pants1 with sturdy black boots, made to be worn in the muddy swamp of the Forest of Cernunno.',
		defense: 142,
		power: 0,
		agility: 0,
		attackSize: 0,
		attackSpeed: 18,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Pants',
		subType: 'None',
		rarity: 'Rare',
		rarityColor: '#6765EC',
		imageId: 'https://i.imgur.com/WT6Aamd.jpg'
	},
	{
		id: 3,
		name: 'Dark Bronze Boots',
		legend:
			'A set of finely crafted black iron boots with trims of bronze, obtained from a Dark Sealed Chest.',
		defense: 72,
		power: 0,
		agility: 0,
		attackSize: 0,
		attackSpeed: 36,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Pants',
		subType: 'None',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/Iop3BDn.jpg'
	},
	{
		id: 4,
		name: 'Lion of Ravenna Leggings',
		legend:
			'A pair of scarlet leggings trimmed in bronze, emblazoned with the symbol of the Ravenna Realm. These leggings were specifically made for General Argos, the Lion of Old Ravenna, and were stolen from him after he was killed in the dungeons of Fort Talos in the Bronze Sea.',
		defense: 142,
		power: 0,
		agility: 0,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 24,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Pants',
		subType: 'None',
		rarity: 'Rare',
		rarityColor: '#6765EC',
		imageId: 'https://i.imgur.com/dkMuW5B.jpg'
	},
	{
		id: 5,
		name: 'Ravenna Apostle Leggings',
		legend:
			'A pair of sturdy, metal-capped boots with red metal greaves. These leggings were specifically made to be worn by Lady Carina, a noble of the Ravenna Realm, and were stolen from her after she was defeated in the Shining Plains of Ravenna.',
		defense: 0,
		power: 15,
		agility: 0,
		attackSize: 0,
		attackSpeed: 18,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Pants',
		subType: 'None',
		rarity: 'Rare',
		rarityColor: '#6765EC',
		imageId: 'https://i.imgur.com/wOepRsB.jpg'
	},
	{
		id: 6,
		name: 'Ravenna Fallen King Boots',
		legend:
			'A pair of dark red metal boots trimmed in bronze. They were specifically made for King Calvus IV.',
		defense: 0,
		power: 18,
		agility: 9,
		attackSize: 9,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Pants',
		subType: 'None',
		rarity: 'Rare',
		rarityColor: '#6765EC',
		imageId: 'https://i.imgur.com/A8l3Fl9.jpg'
	},
	{
		id: 7,
		name: 'Ravenna Noble Boots',
		legend:
			'A finely crafted set of bronze armor trimmed in gold, with ornate fabric and golden chainmail. This armor was specifically made to be worn by the nobles of the Ravenna Realm, and was stolen from Lord Elius after he was defeated in the sky of the Bronze Sea.',
		defense: 0,
		power: 15,
		agility: 18,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Pants',
		subType: 'None',
		rarity: 'Rare',
		rarityColor: '#6765EC',
		imageId: 'https://i.imgur.com/tmP5o4W.jpg'
	},
	{
		id: 8,
		name: 'Siren Pants',
		legend:
			'A white robe usually worn by Sirens, which are dangerous mythical creatures found in the Dark Sea. They appear as beautiful women, singing, only to lure in sailors and kill them with their wings and fangs.',
		defense: 0,
		power: 0,
		agility: 22,
		attackSize: 0,
		attackSpeed: 37,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Pants',
		subType: 'None',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/MjKdsFo.jpg'
	},
	{
		id: 9,
		name: 'Sunken Iron Boots',
		legend:
			'A set of boots made out of arcanium metal that have spent hundreds of years underwater, causing their properties to change. They seem to constantly produce water.',
		defense: 175,
		power: 0,
		agility: 0,
		attackSize: 19,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Pants',
		subType: 'None',
		rarity: 'Rare',
		rarityColor: '#6765EC',
		imageId: 'https://i.imgur.com/v3D3oZQ.jpg'
	},
	{
		id: 10,
		name: 'Theurgist Pants',
		legend:
			'The lower part of a robe once worn by a powerful mage, which seems to provide some kind of divine protection when worn. It seems to be designed to fit three socketed jewels instead of two.',
		defense: 0,
		power: 0,
		agility: 0,
		attackSize: 0,
		attackSpeed: 26,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 1,
		maxLevel: 120,
		gemNo: 3,
		mainType: 'Pants',
		subType: 'None',
		rarity: 'Rare',
		rarityColor: '#6765EC',
		imageId: 'https://i.imgur.com/AcL8QDQ.jpg'
	},
	{
		id: 11,
		name: 'Vatrachos Boots',
		legend:
			'A set of brightly colored boots imbued with some strange kind of power, it seems to grant the wearer great power... at a price.',
		defense: 72,
		power: 28,
		agility: 0,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 2,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Pants',
		subType: 'None',
		rarity: 'Rare',
		rarityColor: '#6765EC',
		imageId: 'https://i.imgur.com/dTHnjT0.jpg'
	},
	{
		id: 12,
		name: 'Titanium / Deluxe Iron Boots',
		legend: 'Why are they both the same defense WHAT...',
		defense: 145,
		power: 0,
		agility: 0,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Pants',
		subType: 'None',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/XWOR3Sz.gif'
	},
	{
		id: 13,
		name: 'Sunken Warrior Boots',
		legend:
			'A green and gold set of boots made out of arcanium metal that have spent hundreds of years underwater, causing their properties to change. They seem to constantly produce water.',
		defense: 175,
		power: 0,
		agility: 0,
		attackSize: 0,
		attackSpeed: 19,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Pants',
		subType: 'None',
		rarity: 'Rare',
		rarityColor: '#6765EC',
		imageId: 'https://i.imgur.com/LmkJTxV.jpg'
	},
	{
		id: 14,
		name: 'Mercenary Boots',
		legend: 'A ragged pair of boots usually worn by mercenaries.',
		defense: 0,
		power: 0,
		agility: 22,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 100,
		gemNo: 1,
		mainType: 'Pants',
		subType: 'None',
		rarity: 'Common',
		rarityColor: '7D7D7F',
		imageId: 'https://i.imgur.com/yq73wYJ.jpg'
	},
	{
		id: 15,
		name: "Mountaineer's Boots",
		legend: 'A set of boots normally worn by hikers or mountain bandits.',
		defense: 0,
		power: 0,
		agility: 22,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 37,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 100,
		gemNo: 1,
		mainType: 'Pants',
		subType: 'None',
		rarity: 'Common',
		rarityColor: '7D7D7F',
		imageId: 'https://i.imgur.com/d1Spj9U.jpg'
	},
	{
		id: 16,
		name: 'Sorcerer Pants',
		legend: 'The lower part of a finely knitted robe, usually worn by magic-users',
		defense: 0,
		power: 15,
		agility: 0,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Pants',
		subType: 'None',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/TtWTrWs.jpg'
	}
];

export const pants = getData(pantsData);
