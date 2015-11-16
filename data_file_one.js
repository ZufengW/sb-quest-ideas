// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// data_file_one.js
// written by Oxidis
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// json format
// http://en.wikipedia.org/wiki/JSON

  gen_data['main'] = [
    'The {quest_giver} seeks an adventurer {quest_type}. {quest_twist}.\n',
    'The {quest_giver} seeks an adventurer {quest_type}.\n',
    'The {quest_giver} seeks an adventurer to help him {quest_type}.\n',
    'The {quest_giver} seeks an adventurer to help him {quest_type}. {quest_twist}.\n',
    'The {quest_giver} seeks an adventurer {quest_type}, and then {quest_type}.\n',
    'The {quest_giver} seeks an adventurer {quest_type}, and then {quest_type}. {quest_twist}.\n',
    'The {quest_giver} wants {quest_type}. You must prevent this from happening.\n',
  ];
  gen_data['quest_giver'] = [
    '{race} {occupation} named {person_name}',
    '{personality} {race} {occupation} named {person_name}',
    '{personality} {race} named {person_name}',
    '{race} named {person_name}',
    '{occupation} named {person_name}',
 
  ];  
  gen_data['gender'] = [
    'male', 'female'
  ];
  gen_data['occupation'] = [
    'priest', 'guard','soldier','townsperson','merchant','civilian','ex-adventurer',
    'noble','elder','captain','farmer','miner','scout','aristocrat','chef','child',
    'researcher','scholar','intellectual','librarian','professor','explorer',
    'writer','shipwright','engineer',
    'bounty hunter','shop owner','assistant','representative of the {group_type}',
  ];
  gen_data['personality'] = [
    'friendly','supportive','wise','respected','trustworthy',
    'wary', 'cryptic','frantic','desperate','angry','sullen','charming','guarded',
    'elderly','wealthy','corrupt','shady','arrogant','cunning','suspicious','infamous'
  ];
  gen_data['race'] = {
    '1-3': 'human',
    '4-5': 'glitch',
    '6-7': 'avian',
    '8-9': 'hylotl',
    '10-11': 'apex',
    '12': 'floran',
    '13': 'novakid'
  };

  gen_data['quest_type'] = [
    '{quest_all}'
  ];

  gen_data['quest_all'] = [
    'to recover {collective_item} {modifier} {plural_item} from the {unique_planetary_location}',
    'to recover {collective_item} {plural_item} from the {unique_planetary_location}',
    'to discover the hidden {unique_planetary_location}',
    'to discover who is murdering her peers, and why',
    'to discover who is DOING SOMETHING, and why',
    'to discover who is stealing her {plural_item}, and why',
    'to discover who had stolen the {unique_object_type} {group_enemy_title}, and why',
    'to discover the fate of a group of {group_type} lost in the {unique_planetary_location}',
    'to discover the fate of {collective_item} {plural_item} lost in the {unique_planetary_location}',
    'to recover and destroy an evil {unique_object_type} from the {unique_danger_location}',
    'to obtain ITEM',
    'to gather RESOURCES',
    'to FARM SOMETHING',
    'to MINE SOMETHING',
    'to supply {collective_item} {plural_item}',
    'to examine a {adj_desc} {unique_object_type}',
    'to capture MONSTER',
    'to slay MONSTER using {a_weapon}',
    'to find and bring back lost a PET or FRIEND or ITEM, last seen {prep_place}',
    'to find and bring back the {unique_object_type} {group_enemy_title}, lost in the {def_adj_pos} {geo_type}',
    'to slay MONSTER and retrieve its BRAIN',
    'to hunt MONSTER, which can be found in the {unique_planetary_location}',
    'to tame MONSTER, which can be found in the {unique_geo_location}',
    'to deliver {collective_item} {plural_item} to {settlement_name} {settlement_type}',
    'to deliver a message to {person_name}',
    'to deliver a {adj_desc} ITEM to {person_name}',
    'to throw a party',
    'to organise a party to celebrate {person_name}\'s birthday',
    'to prepare for EVENT',
    'to talk to {person_name} who is currently {prep_place}',
    'to ask {person_name} about the {adj_desc} topic of {plural_item}',
    'to disguise himself as a {occupation} and DO SOMETHING',
    'to negotiate with {person_name}',
    'to give advice to {person_name}',
    'to leave a message for the {quest_giver}',
    'to persuade {person_name} to DO SOMETHING',
    'to kidnap the {quest_giver}',
    'to visit the {quest_giver} in the neighbouring {settlement_type}',
    'to visit the {group_type} {prep_place}',
    'to console {person_name}',
    'to borrow an ITEM from {person_name}',
    'to buy something from {person_name}',
    'to intimidate {person_name}',
    'to blackmail {person_name}',
    'to find out {person_name}\'s darkest secret',
    'to promote the image of {person_name}',
    'to teach {person_name} a lesson',
    'to train some {group_type}',
    'to back the {quest_giver} in an argument about {plural_item}',
    'to befriend {person_name}',
    'to convince {person_name} to more trusting',
    'to gain the trust of the {group_type} in this {settlement_type}',
    'to gain the favour of the {quest_giver}',
    'to give a GIFT to {person_name}',
    'to woo {person_name}',
    'to clear his name against charges of TREASON',
    'to help the local {group_type} DO SOMETHING',
    'to escort the {group_type} to {settlement_name} {settlement_type}',
    'to escort a {modifier} ITEM to {settlement_name} {settlement_type}',
    'to escort a group of {group_type} safely to {settlement_name} {settlement_type}',
    'to try the food that she cooked',
    'to test the {modifier} ITEM she made',
    'to spread a {adj_desc} rumour',
    'to inform everyone of URGENT NEWS',
    'to craft {a_weapon}',
    'to SCAN a {modifier} ITEM she had found',
    'to trigger the STATUS PODS',
    'to design {a_weapon}',
    'to test {a_weapon} she had designed',
    'to make an important CHOICE',
    'to decide on a {adj_desc} CHOICE',
    'to choose whether to buy {a_weapon} or {a_weapon}',
    'to participate in a coliseum',
    'to participate in a hunt for a {modifier} MONSTER',
    'to defend the {building_type} from a group of MONSTERS',
    'to defend the {settlement_type} from an army of {collective_enemy}',
    'to expose a spy working for {unique_enemy}',
    'to expose a corrupt {occupation} who serves {unique_enemy}',
    'to intimidate {person_name}',
    'to find INFORMATION about the {quest_giver}',
    'to investigate a STAR which fell into the {unique_planetary_location}',
    'to investigate the mysterious EVENT at the {unique_planetary_location}',
    'to investigate {strange_event} at the the {unique_planetary_location}',
    'to investigate a mysterious OBJECT in nearby space',
    'to find and explore the {unique_danger_location}',
    'to complete a time trial challenge',
    'to complete a puzzle challenge',
    'to complete an obstacle course',
    'to complete a footrace before {person_name} does',
    'to explore the {settlement_name} {geo_type}',
    'to explore the {unique_danger_location}',
    'to navigate the {unique_danger_location}',
    'to {help_place} a {def_adj_pos} {building_type}',
    'to {help_place} a {building_type}',
    'to {help_place} the {def_adj_pos} {building_type}',
    'to {help_place} the {building_type}',
    'to {help_place} a {settlement_type}',
    'to {help_place} a new {building_type}',
    'to {help_place} a new {settlement_type}',
    'to {help_place} a {def_adj_pos} {settlement_type}',
    'to {help_place} the {def_adj_pos} {settlement_type}',
    'to {help_place} the {settlement_type}',
    'to {help_place} a {def_adj_pos} {race} {settlement_type}',
    'to loot a {def_adj_pos} {race} {settlement_type}',
    'to {hurt_place} the {settlement_type} controlled by the {collective_enemy}',
    'to {hurt_place} a rival {settlement_type}',
    'to {hurt_place} the space station controlled by the {collective_enemy} currently orbiting the planet',
    'to retake the {settlement_type} from the {collective_enemy}',
    'to capture {unique_enemy}',
    'to assassinate {unique_enemy}, currently believed to be in {unique_danger_location}',
    'to fight {person_name} in a duel',
    'to defeat {unique_enemy}',
    'to defeat the {collective_enemy} {prep_place}',
    'to hunt down and kill {unique_enemy}',
    'to hunt down and capture {unique_enemy}',
    'to steal the {unique_object_type} {group_enemy_title} from a rival',
    'to steal the {unique_object_type} {group_enemy_title} from {person_name}',
    'to steal the {unique_object_type} {group_enemy_title} from the {collective_enemy}',
    'to rescue the {quest_giver} from the {unique_danger_location}',
    'to rescue the {group_type} from the {unique_danger_location}',
    'to rescue the {settlement_type} of {settlement_name} from {unique_enemy}',
    'to rescue the {settlement_type} of {settlement_name} from the {collective_enemy}',
    'to rescue the {quest_giver} from the {collective_enemy}',
    'to protect him from the {collective_enemy}',
    'to prevent SOMETHING',
    'to thwart the monstrous plan of {unique_enemy}',
    'to thwart the monstrous plan of the {collective_enemy}'
  ];
  gen_data['quest_fetch'] = [
    'to recover {collective_item} {modifier} {plural_item} from the {unique_planetary_location}',
    'to recover {collective_item} {plural_item} from the {unique_planetary_location}',
    'to recover and destroy an evil {unique_object_type} from the {unique_danger_location}',
    'to find and bring back lost a PET or FRIEND or ITEM, last seen {prep_place}',
    'to find and bring back the {unique_object_type} {group_enemy_title}, lost in the {def_adj_pos} {geo_type}',
    'to slay MONSTER and retrieve its BRAIN',
    'to obtain ITEM',
    'to gather RESOURCES',
    'to supply {collective_item} {plural_item}',
    'to FARM SOMETHING',
    'to MINE SOMETHING',
    'to steal the {unique_object_type} {group_enemy_title} from a rival',
    'to steal the {unique_object_type} {group_enemy_title} from {person_name}',
    'to steal the {unique_object_type} {group_enemy_title} from the {collective_enemy}',
  ];
  gen_data['quest_talk'] = [
    'to discover who is murdering her peers, and why',
    'to discover who is DOING SOMETHING, and why',
    'to discover who is stealing her {plural_item}, and why',
    'to discover who had stolen the {unique_object_type} {group_enemy_title}, and why',
    'to deliver {collective_item} {plural_item} to {settlement_name} {settlement_type}',
    'to deliver a message to {person_name}',
    'to throw a party',
    'to organise a party to celebrate {person_name}\'s birthday',
    'to prepare for EVENT',
    'to deliver a {adj_desc} ITEM to {person_name}',
    'to talk to {person_name} who is currently {prep_place}',
    'to ask {person_name} about the {adj_desc} topic of {plural_item}',
    'to disguise himself as a {occupation} and DO SOMETHING',
    'to negotiate with {person_name}',
    'to give advice to {person_name}',
    'to leave a message for the {quest_giver}',
    'to persuade {person_name} to DO SOMETHING',
    'to kidnap the {quest_giver}',
    'to visit the {quest_giver} in the neighbouring {settlement_type}',
    'to visit the {group_type} {prep_place}',
    'to console {person_name}',
    'to borrow an ITEM from {person_name}',
    'to buy something from {person_name}',
    'to intimidate {person_name}',
    'to blackmail {person_name}',
    'to find out {person_name}\'s darkest secret',
    'to promote the image of {person_name}',
    'to teach {person_name} a lesson',
    'to train some {group_type}',
    'to back the {quest_giver} in an argument about {plural_item}',
    'to befriend {person_name}',
    'to convince {person_name} to more trusting',
    'to gain the trust of the {group_type} in this {settlement_type}',
    'to gain the favour of the {quest_giver}',
    'to give a GIFT to {person_name}',
    'to woo {person_name}',
    'to clear his name against charges of TREASON',
    'to help the local {group_type} DO SOMETHING',
    'to try the food that she cooked',
    'to test the {modifier} ITEM she made',
    'to spread a {adj_desc} rumour',
    'to inform everyone of URGENT NEWS',
    'to test {a_weapon} she had designed',
    'to make an important CHOICE',
    'to decide on a {adj_desc} CHOICE',
    'to choose whether to buy {a_weapon} or {a_weapon}',
    'to expose a spy working for {unique_enemy}',
    'to expose a corrupt {occupation} who serves {unique_enemy}',
    'to intimidate {person_name}',
    'to find INFORMATION about the {quest_giver}',
  ];
  gen_data['quest_fight'] = [
    'to recover {collective_item} {modifier} {plural_item} from the {unique_planetary_location}',
    'to recover {collective_item} {plural_item} from the {unique_planetary_location}',
    'to recover and destroy an evil {unique_object_type} from the {unique_danger_location}',
    'to capture MONSTER',
    'to slay MONSTER using {a_weapon}',
    'to participate in a coliseum',
    'to participate in a hunt for a {modifier} MONSTER',
    'to test {a_weapon} she had designed',
    'to defend the {building_type} from a group of MONSTERS',
    'to defend the {settlement_type} from an army of {collective_enemy}',
    'to expose a spy working for {unique_enemy}',
    'to expose a corrupt {occupation} who serves {unique_enemy}',
    'to find and explore the {unique_danger_location}',
    'to explore the {unique_danger_location}',
    'to navigate the {unique_danger_location}',
    'to loot a {def_adj_pos} {race} {settlement_type}',
    'to {hurt_place} the {settlement_type} controlled by the {collective_enemy}',
    'to {hurt_place} a rival {settlement_type}',
    'to {hurt_place} the space station controlled by the {collective_enemy} currently orbiting the planet',
    'to retake the {settlement_type} from the {collective_enemy}',
    'to capture {unique_enemy}',
    'to assassinate {unique_enemy}, currently believed to be in {unique_danger_location}',
    'to fight {person_name} in a duel',
    'to defeat {unique_enemy}',
    'to defeat the {collective_enemy} {prep_place}',
    'to hunt down and kill {unique_enemy}',
    'to hunt down and capture {unique_enemy}',
    'to steal the {unique_object_type} {group_enemy_title} from a rival',
    'to steal the {unique_object_type} {group_enemy_title} from {person_name}',
    'to steal the {unique_object_type} {group_enemy_title} from the {collective_enemy}',
    'to rescue the {quest_giver} from the {unique_danger_location}',
    'to rescue the {group_type} from the {unique_danger_location}',
    'to rescue the {settlement_type} of {settlement_name} from {unique_enemy}',
    'to rescue the {settlement_type} of {settlement_name} from the {collective_enemy}',
    'to rescue the {quest_giver} from the {collective_enemy}',
    'to protect him from the {collective_enemy}',
    'to thwart the monstrous plan of {unique_enemy}',
    'to thwart the monstrous plan of the {collective_enemy}'
  ];
  gen_data['quest_build'] = [

  ];
  gen_data['quest_explore'] = [
    '{quest_build}','{quest_fetch}',
    'to recover {collective_item} {modifier} {plural_item} from the {unique_planetary_location}',
    'to recover {collective_item} {plural_item} from the {unique_planetary_location}',
    'to discover the hidden {unique_planetary_location}',
    'to discover the fate of a group of {group_type} lost in the {unique_planetary_location}',
    'to discover the fate of {collective_item} {plural_item} lost in the {unique_planetary_location}',
    'to recover and destroy an evil {unique_object_type} from the {unique_danger_location}',
    'to find and bring back lost a PET or FRIEND or ITEM, last seen {prep_place}',
    'to find and bring back the {unique_object_type} {group_enemy_title}, lost in the {def_adj_pos} {geo_type}',
    'to slay MONSTER and retrieve its BRAIN',
    'to hunt MONSTER, which can be found in the {unique_planetary_location}',
    'to tame MONSTER, which can be found in the {unique_geo_location}',
    'to deliver {collective_item} {plural_item} to {settlement_name} {settlement_type}',
    'to deliver a message to {person_name}',
    'to deliver a {adj_desc} ITEM to {person_name}',
    'to talk to {person_name} who is currently {prep_place}',
    'to visit the {quest_giver} in the neighbouring {settlement_type}',
    'to escort the {group_type} to {settlement_name} {settlement_type}',
    'to escort a {modifier} ITEM to {settlement_name} {settlement_type}',
    'to escort a group of {group_type} safely to {settlement_name} {settlement_type}',
    'to find INFORMATION about the {quest_giver}',
    'to investigate a STAR which fell into the {unique_planetary_location}',
    'to investigate the mysterious EVENT at the {unique_planetary_location}',
    'to investigate {strange_event} at the the {unique_planetary_location}',
    'to investigate a mysterious OBJECT in nearby space',
    'to find and explore the {unique_danger_location}',
    'to complete a time trial challenge',
    'to complete a puzzle challenge',
    'to complete an obstacle course',
    'to complete a footrace before {person_name} does',
    'to explore the {settlement_name} {geo_type}',
    'to explore the {unique_danger_location}',
    'to navigate the {unique_danger_location}',
    'to loot a {def_adj_pos} {race} {settlement_type}',
    'to {hurt_place} the {settlement_type} controlled by the {collective_enemy}',
    'to {hurt_place} a rival {settlement_type}',
    'to {hurt_place} the space station controlled by the {collective_enemy} currently orbiting the planet',
    'to retake the {settlement_type} from the {collective_enemy}',
    'to capture {unique_enemy}',
    'to assassinate {unique_enemy}, currently believed to be in {unique_danger_location}',
    'to steal the {unique_object_type} {group_enemy_title} from the {collective_enemy}',
    'to rescue the {quest_giver} from the {unique_danger_location}',
    'to rescue the {group_type} from the {unique_danger_location}',
    'to rescue the {settlement_type} of {settlement_name} from {unique_enemy}',
    'to rescue the {settlement_type} of {settlement_name} from the {collective_enemy}',
    'to rescue the {quest_giver} from the {collective_enemy}',
  ];
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  gen_data['modifier'] = [
    // describes physical objects and items in particular
    'exotic','prized','master-work', 'hand-crafted', 'high-quality','valuable',
    'lost','hidden', 'mythical', 'special', 'rare', 'precious', 'gilded',
    'crappy', 'low-quality', 'common', 'standard',
    'powerful','potent', 'deadly', 'mighty', 'significant', 'famous','legendary', 
    '{adj_desc}',
    '{race}-made',
    '{modifier} {modifier}'
  ];
  gen_data['adj_desc'] = [
    // can describe ideas as well as objects
    //will mess with a or an: 'interesting','uncommon','intriguing',
    'unique','notable','fascinating','curious','peculiar','strange','suspicious',
    'small','large', 'simple'
  ];
  gen_data['help_place'] = [
    //helpful action: to {transitive verb} a/the place
    'help','assist',
    'build','construct','establish',
    'extend','upgrade',
    'repair','reinforce',
    'complete',
    'decorate', 'furnish',
    'improve', 'clean',
    'secure',
    'visit'
  ];
  gen_data['hurt_place'] = [
    //destructive action: to {transitive verb} a/the place
    'attack', 'destroy',
    'raid', 'loot','infiltrate',
    'spy on', 'scout',
    'disturb',
  ];
  gen_data['collective_item'] = [
    //'a batch of',
    'a bag of',
    'a container of',
    'a collection of',
    'a stack of',
    'a tonne of',
    'a caravan of',
    'a shipment of',
  ];
 gen_data['plural_item'] = [
    'food items',
    'supplies',
    'exotic goods',
    'artisan goods',
    'minerals','rocks','ores','metals',
    'books',
    'weapons', 'tools', 'equipment', 'clothing',
    'building materials', 'furniture'
  ];
  gen_data['unique_object_type'] = [
    'Star','Stone',
    'Relic', 'Effigy', 'Shard',
    'Device','Machine',
    'Carving', 'Artefact','Ring',
    'Codex','Tome',
    'Statue',
    'Schematic',
    //'axe {melee_weapon_name}'
  ];


  gen_data['def_adj_pos'] = [
    //specifies position: the _ place    //underused?  a _ {geo_type}
    'nearby', 'local','regional','neighbouring',
    'remote','distant','isolated',
    'hidden','secret',
  ];
  gen_data['prep_place'] = [
    //adds more info about the position of something: {something} _ the place
    //'orbiting the planet',
    'near {unique_planetary_location}',
    'inside the {geo_type}',
    'outside the {geo_type}',
    'inside the {building_type}',
    'outside the {building_type}',
    //'surrounding the {building_type}',
    'above the {settlement_type}',
    'below the {settlement_type}',
    'beneath the {settlement_type}',
    'outside the {settlement_type}',
    'within the {settlement_type}'
  ];
  gen_data['any_building'] = [
    '{building_type}','{settlement_type}',
    '{settlement_name} {settlement_type}',
    '{def_adj_pos} {building_type}',
    '{def_adj_pos} {settlement_type}',
    '{def_adj_pos} {race} {settlement_type}',
  ];
  gen_data['building_type'] = [
    'hut', 'house', 'building', 'mansion',
    'camp',
    'garrison','guardhouse',
    'room','kitchen','bathroom',
    'restaurant', 'pub','bar',
    'fortress', 'keep',
    'tower',
    'port', 'spaceport',
    'bunker','vault',
    'beacon','signal tower',
    'site',
    'storage', 'store house', 'warehouse',
    'workshop', 'factory','laboratory','observatory',
    'shop', 'market',
    'temple','monument','megalith',
    'mine', 'quarry','foundry'
  ];
  gen_data['settlement_type'] = [
    'Campsite',
    'Slum',
    'Outpost',
    'Settlement',
    'Town',
    'Village',
    'Colony',
    'City',
    'Fortress',
    'Metropolis',
    'Megapolis',
    //'Planet'
  ];
  gen_data['biome_type'] = [
    'desert','barren','forest','garden','ocean','savannah','snow',
    'alien','toxic','jungle','midnight','arctic','tundra','arid',
    'magma','volcanic',
    'bone','alpine','flesh','giant flower','rust','oasis','swamp',
    'tar','ice','steamspring','eye'
  ];
  gen_data['geo_type'] = [
    'Desert',
    'Woods', 'Jungle', 'Forest',
    'Ocean','Sea',
    'Plains',
    'Underground','Cavern','Mines','Depths','Caves',
    'Swamp',
    'Ruins', 'Wasteland',
    'Hills', 'Mountains',
    'Dungeon',
    'Wilderness',
    'Valley','Vale',
    'Island',
    '{biome_type} biome'
  ];
  gen_data['space_type'] = [
    'Planet',
    'Moon',
    'Asteroid field',
    'Sector',
    '{biome_type} planet'
  ];
  gen_data['settlement_name'] = [
    //'SETTLEMENT_NAME',
    '{person_name}',
    'Gedale',
    'Fordaye Tower',
    'Horliskali',
    'Highgate',
    'Kiriel', 'Kiri',
    'Menai','Menus',
    'Jamas','Jarrah',
    'Chagay',
    'Cabalan',
    'Niggotha',
    'Bleakfen Marsh',
    'Darkwood','Hammerfell',
    'Caer Vilba'
  ];
  gen_data['unique_planetary_location'] = [
    '{unique_geo_location}',
    '{unique_danger_location}'
  ];
  gen_data['unique_geo_location'] = [
    // begins with the _
    '{settlement_name} {geo_type}',
    '{def_adj_pos} {geo_type}',
    //'Howling Jungle',
  ];
  gen_data['unique_danger_location'] = [
    //'DANGER LOCATION',
    'Dungeon of {unique_enemy}',
    'ancient ruins of {settlement_name} {settlement_type}',
    'Ruins of {settlement_name} {settlement_type}',
    'Desolation of {unique_enemy}',
    'Lair of {unique_enemy}',
    '{geo_type} of {unique_enemy}',
    '{geo_type} {group_enemy_title}',
    '{unique_geo_location}',
    'Stronghold of {unique_enemy}',
    'hideout of the {collective_enemy}',
    //'Howling Jungle',
  ];
  gen_data['strange_event'] = [
    'strange events',
    'mysterious lights',
    'a perpetual storm',
    'appearance of {unique_enemy}',
    'bizarre monsters',
    'suspicious activity',
    'a natural disaster',
    'a freak accident',
    'an alien abduction',
  ];

  gen_data['monster_type'] = [
    'Leviathan',
    'creature',
    'Behemoth',
    'Wyrm',
    'Monster',
    'Horror',
    'Monstrosity',
    'Abomination',
  ];

  gen_data['person_name'] = [
    'Richard','George','Molly','Samui','Jones','Coxon','Tiy','Dunto',
    //'PERSON_NAME',
    'Deasgos',
    'Stilda',
    'Hilda',
    'Nayah',
    'Egol', 'Durum',
    'Brian', 'Henry',
    'Bohr',
    'Hiraki', 'Nuru','Esther','Koichi','Lana','Minoru',
    'Balio',
    'Stephye',
    'Walhelm',
    'Nini','Hari',
    'Tom','Gaffney',
    'Marceline',
    'Pammenus',
    'Cenfa','Dalts'
    
  ];
  gen_data['unique_enemy'] = [
    '{enemy_name} {unique_enemy_title}'
  ];
  gen_data['collective_enemy'] = [
    '{hostile_group_type} {group_enemy_title}'
  ];
  gen_data['enemy_name'] = [
    '{person_name}',
    //'ENEMY_NAME',
    'Arthmaig',
    'Ardun',
    'Daresu',
    'Yaapibnin',
    'Bhaal',
    'Big Brother',
    'Blackout'
  ];
  gen_data['unique_enemy_title'] = [
    'the Pontifex',
    'the Empress', 'the King',
    'the Glitch Lord',
    'the Indomitable',
    'the Destroyer',
    'the Dark',
    'the Ancient',
    'the Wild',
    'the Shadow Lord', 'the Evil',
    'the Deranged', 'the Chaotic',
    'the Genius', 'the Inventor',
    'the Overlord', 'the Warlord',
    'the Watcher', 'the Manipulator',
    'the Collector'
  ];
  gen_data['group_enemy_title'] = [
    'of Death',
    'of the Miniknog',
    'of {settlement_name}',
    'of the {settlement_name} {geo_type}',
    'of {settlement_name} {settlement_type}',
    'of {unique_enemy_title}',
    'of {enemy_name} {unique_enemy_title}'
  ];


  gen_data['group_type'] = [
    'civilians', 'people','guests','children',
    'guards', 'scouts',
    'researchers', 'scientists', 'scholars',
    'farmers', 'miners',
    'pilgrims', 'adventurers', 'tourists', 'travellers','explorers',
    'trainees', 'recruits',
    'merchants', 'traders',
    'hunters'
  ];
  gen_data['hostile_group_type'] = [
    'bandits', 'brigands',
    'guards', 'scouts',
    'pirates', 'traitors',
    'soldiers', 'assassins','enforcers',
    'spies', 'hunters', 'agents',
    'cultists','fanatics'
  ];



  gen_data['melee_weapon_name'] = [
    'Demonslicer',
    'Draketooth',
    'Giantlance',
    'Flamefang',
    'Celestial Wrath',
    'MELEE_WEAPON_NAME',
    'Sublime Predator'
  ];
  gen_data['item'] = [
    'ITEM'
    //'an evil artifact',
    //'the axe demonslicer',
    //'{one_h_weapon}',
    //'{two_h_weapon}'
  ];
  gen_data['prep_time'] = [
    'before',
    'during',
    'after',
  ];

  gen_data['times'] = [
    'tomorrow',
    'midnight',
  ];

  gen_data['quest_twist'] = [
    'Moreover, the party must complete the quest without killing anyone',
    'Moreover, the party must complete the quest without offending anyone',
    'Moreover, the party must complete the quest without leaving any trace of their involvement',
    'Moreover, the party must complete the quest before a rival party does',
    'Moreover, the quest must be completed before tomorrow',
    'Moreover, the quest must be completed amidst a natural disaster',
    'Moreover, the party encounters an old ally now working against them',
    'Moreover, the party cannot teleport during their quest',
    'Moreover, the party cannot use techs during their quest',
    'Moreover, the party cannot eat food during their quest',
    'Moreover, the party cannot use matter manipulators during their quest',
    'Moreover, the party cannot have weapons equipped during their quest',
    'Moreover, you must have specific items equipped',
    'Moreover, the quest must be completed amidst a war',
    'Moreover, the quest must be completed within a certain period of time',
    'Moreover, the quest must be completed AT a specific time',
    'Moreover, the quest must be completed AT a specific place',
    'However, the party soon finds itself facing a moral quandary',
    'However, the quest is a trap',
    'However, some information was withheld..',
    'However, {strange_event} hinders the quest',
    'However, the information is completely wrong',
    'However, the information is incomplete',
    'However, the {quest_giver} cannot be trusted',
    'However, the {quest_giver} will try to trick you',
    'However, a {quest_giver} makes a {adj_desc} counter-proposal',

    'The quest location can be accessed from the ship',
    'Moreover, the party will receive additional guidance during their quest',
  ];




  gen_data['armor'] = {
    '01-25': 'civilian clothes',
    '26-30': 'iron armor',
    '31-40': 'steel armor',
    '41-50': 'titanium armor',
    '51-60': 'durasteel armor',
    '61-70': 'ferozium armor',
    '71-80': 'rubium armor',
    '81-90': 'cerulium armor',
    '91-99': 'impervium armor',
       '00': '???'
  };
  gen_data['tool'] = [
    'a matter manipulator','a hoe','a pickaxe','a drill','a bug net','a lantern',
    '{offhand}'
  ];
  gen_data['a_weapon'] = [
    '{one_h_weapon}','{two_h_weapon}',
    '{one_h_ranged_weapon}','{two_h_ranged_weapon}',
    '{offhand}'
    //'{one_h_weapon} and {offhand}',
    //'{one_h_weapon} and {tool}',
    //'{one_h_weapon} and {one_h_weapon}',
    
  ];
  gen_data['one_h_weapon'] = [
    '{one_h_melee_weapon}',
    '{one_h_ranged_weapon}'
  ];
  gen_data['two_h_weapon'] = [
    '{two_h_melee_weapon}',
    '{two_h_ranged_weapon}'
  ];
  gen_data['one_h_melee_weapon'] = [
    'a mace', 'a one-handed sword',
    'an axe', 'a stick', 'a club', 'a knife', 'a dagger', 'a shiv'
  ];
  gen_data['two_h_melee_weapon'] = [
    'a battleaxe', 'a spear','a staff','a stave', 'a broadsword',
    'a two-handed sword', 'a poleaxe', 'a warhammer',
    'a rust sword', 'a slave sword'
  ];
  gen_data['one_h_ranged_weapon'] = [
    'a pistol','a revolver', 'a machine pistol', 'a laser',
    'a bone pistol', 'a blaster'
  ];
  gen_data['two_h_ranged_weapon'] = [
    'a longbow and arrows', 'a heavy crossbow','a rocket launcher','a rifle','a shotgun',
    'a grenade launcher', 'an assault rifle', 'a flamethrower', 'a sniper rifle',
    'a hunting bow', 'a harpoon gun'
  ];
  gen_data['offhand'] = [
    'a shield', 'a torch', 'a flashlight', 'a grappling hook',
    'a throwing axe', 'a throwing dagger', 'a throwing dart', 'a throwing needle'
  ];
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
