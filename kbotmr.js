const tmi = require('tmi.js'),
    { channel, username, password } = require('./settings.json');

const options = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity : {
        username,
        password
    },
    channels: [channel]
};

const client = new tmi.Client(options);
client.connect().catch(console.error);

// Log when the Bot Connects
client.on('connected',() => {
    client.say(channel, 'bot has connected!');
});

// Handle messages
client.on('message', (channel, user, message, self) => {
    if(self) return;

// Convert the message to lowercase to handle case insesitivity
    const lowerCaseMessage = message.toLowerCase();

    //Marvel Rivals Characters

    //Vanguard
    if(lowerCaseMessage.trim().toLowerCase() === ('What does Hulk do?'.toLowerCase())) {
        client.say(channel, `@${user.username}, 
- Hulk Smash (Ultimate)            
- Indestructible Shield  
- Radioactive Lockdown 
- Incredible Leap 
- Gamma Burst  `);
    }

    if(lowerCaseMessage.trim().toLowerCase() === ('What does Captain America do?'.toLowerCase())) {
        client.say(channel, `@${user.username},
- Freedom Charge (Ultimate)             
- Leading Dash 
- Vibranium Energy Saw 
- Liberty Rush 
- Super-Soldier Slam 
- Living Legend `);
    }

    if(lowerCaseMessage.trim().toLowerCase() === ('What does Doctor Strange do?'.toLowerCase())) {
        client.say(channel, `@${user.username},
- Eye of Agamotto (Ultimate)             
- Cloak of Leviation 
- Maelstorm of Madness 
- Pentagram of Farallah
- Eye of Agamotto
- Shield of the Seraphim  `);
    }

    if(lowerCaseMessage.trim().toLowerCase() === ('What does Groot do?'.toLowerCase())) {
        client.say(channel, `@${user.username}, 
- Strangling Prison (Ultimate)             
- Thronlash Wall 
- IronWood Wall 
- Furious Flora  
- Spore Bomb `);
    }

    if(lowerCaseMessage.trim().toLowerCase() === ('What does Magneto do?'.toLowerCase())) {
        client.say(channel, `@${user.username}, 
- Meteor M (Ultimate)             
- Metallic Curtain 
- Metal Bulwark 
- Iron Bulwark 
- Mag-Cannon         `);
    }

    if(lowerCaseMessage.trim().toLowerCase() === ('What does Peni Parker do?'.toLowerCase())) {
        client.say(channel, `@${user.username}, 
- Spider-Sweeper (Ultimate)             
- Bionic Spider-Nest 
- Arachino-Mine 
- Cyber-Bond 
- Wall Crawl 
- Cyber-Web Snare  `);
    }

    if(lowerCaseMessage.trim().toLowerCase() === ('What does Thor do?'.toLowerCase())) {
        client.say(channel, `@${user.username},
- God of Thunder (Ultimate) 
- Storm Surge 
- Lightning Realm  
- Awakening Rune  
- Hammer Throw  `);
    }

    if(lowerCaseMessage.trim().toLowerCase() === ('What does Venom do?'.toLowerCase())) {
        client.say(channel, `@${user.username},
- Feast of the Abyss (Ultimate) 
- Venom Swing 
- Symbiotic Resilience  
- Frenzied Arrival  
- Cellular Corrosion  `);
    }



    //Strategist

    if(lowerCaseMessage.trim().toLowerCase() === ('What does Adam Warlock do?'.toLowerCase())) {
        client.say(channel, `@${user.username}, 
- Karmic Revival (Ultimate)             
- Soul Bond 
- Avatar Life Stream 
- Cosmic Cluster 
- Regenerative Cocoon   `);
    }
    
    
    if(lowerCaseMessage.trim().toLowerCase() === ('What does Cloak and Dagger do?'.toLowerCase())) {
        client.say(channel, `@${user.username}, 
- Eternal Bond (Ultimate)             
- Shadow's Embrace/Light's Embrace 
- Veil of Lightforce/Terror Cape 
- Dagger Strom/Dark Teleportation   `);
    }

    if(lowerCaseMessage.trim().toLowerCase() === ('What does Loki do?'.toLowerCase())) {
        client.say(channel, `@${user.username}, 
- God of Mischief (Ultimate)             
- Regeneration Domain  
- Doppelganger 
- Devious Exchange
- Backstab 
- Deception   `);
    }

    if(lowerCaseMessage.trim().toLowerCase() === ('What does Rocket Raccoon do?'.toLowerCase())) {
        client.say(channel, `@${user.username}, 
- C.Y.A (Ultimate)             
- Jetpack Dash  
- B.R.B   `);
    }

    if(lowerCaseMessage.trim().toLowerCase() === ('What does Jeff do?'.toLowerCase())) {
        client.say(channel, `@${user.username}, 
- It's Jeff (Ultimate)             
- Hide and Seek  
- Healing Bubble  `);
    }

    if(lowerCaseMessage.trim().toLowerCase() === ('What does Luna Snow do?'.toLowerCase())) {
        client.say(channel, `@${user.username}, 
- Fate of Both Worlds (Ultimate)             
- Ice Arts 
- Share the Stage 
- Absolute Zero   `);
    }

    if(lowerCaseMessage.trim().toLowerCase() === ('What does Mantis do?'.toLowerCase())) {
        client.say(channel, `@${user.username}, 
- Soul Resurgence (Ultimate)             
- Spore Slumber 
- Allied Inspiration 
- Natural Anger 
- Healing Flower   `);
    }

    if(lowerCaseMessage.trim().toLowerCase() === ('What does Invisible Woman do?'.toLowerCase())) {
        client.say(channel, `@${user.username}, 
- Invisible Boundary (Ultimate)             
- Psionic Vortex 
- Force Physics 
- Agile Strike 
- Veiled Step
- Guardian Shield   `);
    }






    //Dualist

    if(lowerCaseMessage.trim().toLowerCase() === ('What does Black Panther do?'.toLowerCase())) {
        client.say(channel, `@${user.username}, 
- Bast's Descent (Ultimate)            
- Spirit Rend 
- Spinning Kick 
- Subtle Step 
- Spear Toss   `);
    }

    if(lowerCaseMessage.trim().toLowerCase() === ('What does Black Widow do?'.toLowerCase())) {
        client.say(channel, `@${user.username},
- Electro-Plasma Explosion (Ultimate)             
- Fleet Foot  
- Edge Dancer  
- Straight Shooter   `);
    }


    if(lowerCaseMessage.trim().toLowerCase() === ('What does Winter Soldier do?'.toLowerCase())) {
        client.say(channel, `@${user.username}, 
- Kraken Impact (Ultimate)            
- Trooper's Fist 
- Tainted Voltage 
- Bionic Hook  `);
    }

    if(lowerCaseMessage.trim().toLowerCase() === ('What does Iron Fist do?'.toLowerCase())) {
        client.say(channel, `@${user.username},
- Living Chi (Ultimate)  
- K'un-Lun Kick 
- Harmony Recovery 
- Crane Leap 
- Dragon's Defense  `);
    }

    if(lowerCaseMessage.trim().toLowerCase() === ('What does Scarlet Witch do?'.toLowerCase())) {
        client.say(channel, `@${user.username},
- Reality Erasure (Ultimate)
- Mystic Projection  
- Dark Seal  
- Telekinesis  
- Chthonian Burst   `);
    }

    if(lowerCaseMessage.trim().toLowerCase() === ('What does Moon Knight do?'.toLowerCase())) {
        client.say(channel, `@${user.username}, 
- Hand of Khonshu (Ultimate)
- Night Glider 
- Ancient Ankh  
- Moonlight Hook  
- Triple Eclipse 
- Rising Leap   `);
    }


    if(lowerCaseMessage.trim().toLowerCase() === ('What does The Punisher do?'.toLowerCase())) {
        client.say(channel, `@${user.username},
- Final Judgement (Ultimate)
- Vantage Connection 
- Culling Turret 
- Scourage Grenade 
- Web Ball   `);
    }

    if(lowerCaseMessage.trim().toLowerCase() === ('What does Magik do?'.toLowerCase())) {
        client.say(channel, `@${user.username}, 
- Darkchild (Ultimate)
- Stepping Discs 
- Umbral Incursion 
- Eldritch Whirl  
- Magik Slash 
- Demon's Rage  `);
    }

    if(lowerCaseMessage.trim().toLowerCase() === ('What does Hawkeye do?'.toLowerCase())) {
        client.say(channel, `@${user.username}, 
- Hunter's Sight (Ultimate)
- Crescent Slash  
- Hypersonic Arrow  
- Ronin Slash 
- Skyward Leap  `);
    }

    if(lowerCaseMessage.trim().toLowerCase() === ('What does Hela do?'.toLowerCase())) {
        client.say(channel, `@${user.username}, 
- Goddess of Death (Ultimate)
- Astral Flock 
- Soul Drainer  
- Piercing Night  `);
    }
    
    if(lowerCaseMessage.trim().toLowerCase() === ('What does Namor do?'.toLowerCase())) {
        client.say(channel, `@${user.username}, 
- Horn of Proteus (Ultimate)
- Blessing of the Deep 
- Aquatic Dominion  
- Descend  
- Wrath of the Seven Seas   `);
    }
    if(lowerCaseMessage.trim().toLowerCase() === ('What does Psylocke do?'.toLowerCase())) {
        client.say(channel, `@${user.username},
- Dance of the Butterfly (Ultimate) 
- Psi-Blade Dash  
- Psychic Stealth  
- Wing Shurikens   `);
    }

    if(lowerCaseMessage.trim().toLowerCase() === ('What does Squirrel Girl do?'.toLowerCase())) {
        client.say(channel, `@${user.username}, 
- Unbeatable Squirrel Tsunami (Ultimate)
- Tail Bounce  
- Mammal Bond  
- Squirrel Blockade   `);
    }

    if(lowerCaseMessage.trim().toLowerCase() === ('What does Star Lord do?'.toLowerCase())) {
        client.say(channel, `@${user.username}, 
- Galactic Legend (Ultimate)
- Rocket Propulsion  
- Blaster Barrage 
- Stellar Shift    `);
    }

    if(lowerCaseMessage.trim().toLowerCase() === ('What does Storm do?'.toLowerCase())) {
        client.say(channel, `@${user.username}, 
- Omega Hurricane 
- Weather Control  
- Goddess Boost  
- Bolt Rush  `);
    }


    if(lowerCaseMessage.trim().toLowerCase() === ('What does Spiderman do?'.toLowerCase())) {
        client.say(channel, `@${user.username},
- Spectacular Spin (Ultimate) 
- Web-Swing  
- Get Over Here! 
- Amazing Combo 
- Thwip and Flip  `);
    }

    if(lowerCaseMessage.trim().toLowerCase() === ('What does Iron man do?'.toLowerCase())) {
        client.say(channel, `@${user.username},
- Invincible Pulse Cannon (Ultimate)  
- Hyper-Velocity  
- Armor Overdrive 
- Micro-Missile Barrage   `);
    }

    if(lowerCaseMessage.trim().toLowerCase() === ('What does Wolverine do?'.toLowerCase())) {
        client.say(channel, `@${user.username},
- Last Stand (Ultimate)
- Feral Leap
- Undying Animal 
- Vicious Rampage  `);
    }

    if(lowerCaseMessage.trim().toLowerCase() === ('What does Mr Fantastic do?'.toLowerCase())) {
        client.say(channel, `@${user.username}, 
- Brainiac Bounce (Ultimate)             
- Reflexive Rubber 
- Flexible Elongation 
- Distended Grip    `);
    }


    if(message == '!botmr') {
        client.say(channel, `@${user.username}, 
            Hi There! I'm your Marvel Rivals bot, here to provide you with a list of Marvel Rivals character abilities.
            Just ask, "What does **** do?" and I will list their abilities. Happy Rivalling!  `);
    }

    



});
