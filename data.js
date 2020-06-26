//settings are just variables that can be sent to the client from the server
//they are either related to the rooms or shared with the server 
module.exports.SETTINGS = {
    //if not specified by the url where is the starting point
    defaultRoom: "street",
    //minimum time between talk messages enforced by both client and server
    ANTI_SPAM: 1000,
    //shows up at first non lurking login
    INTRO_TEXT: "Click/tap to move"
};

const pinkBG = "#e1cdcd";
const greenBG = "#d0e1cd";

//miscellaneous sounds to preload
module.exports.SOUNDS = [
    ["beat1", "beat1.ogg"], //credit https://www.youtube.com/watch?v=ugLVpZm69DE
    ["beat2", "beat2.ogg"], // credit https://www.youtube.com/watch?v=dPdoxIz0w24
    ["beat3", "beat3.ogg"], //credit https://www.youtube.com/watch?v=XShEWT4MwJs
    ["DJStop", "DJStop.mp3"]
];

module.exports.ROOMS = {


    street: {
        bg: "cciOutside-bg.png",
        frames: 2,
        frameDelay: 30,
        avatarScale: 2,
        pageBg: greenBG,
        area: "cciOutside-areas.png",
        tint: "#fdeac8",
        bubblesY: 44,
        spawn: [14, 89, 119, 98],
        areaColors: {
            //h will be replaced by #
            hff77a8: { cmd: "enter", room: "security", label: "Security", point: [64, 87], enterPoint: [64, 90], obstacle: false  },
        }
    },

    animal: {
        bg: "animalRoom-bg.png",
        avatarScale: 2,
        pageBg: pinkBG,
        area: "animalRoom-areas.png",
        tint: "#FFFFFF",
        bubblesY: 46,
        spawn: [15, 77, 113, 96],
        areaColors: {
            //left
            hffec27: { cmd: "enter", room: "view", label: "View Room", point: [10, 86], enterPoint: [114, 86], obstacle: false },
            //right
            h00e436: { cmd: "enter", room: "draw", label: "Draw Room", point: [117, 86], enterPoint: [12, 86], obstacle: false },
            //down
            h29adff: { cmd: "enter", room: "care", label: "Care Room", point: [99, 73], enterPoint: [30, 73], obstacle: false },
            //artwork
            ha8e72e: { cmd: "text", txt: "Project by Eunah Lee\n\nHelp Haru find its way back home!\nAn interactive storybook for kids\n\nClick to view project.", align: "left", lines: 6, url: "https://eunah-lee-storybook5-6.glitch.me/", label: "Haru's Adventure", point: [34, 73], obstacle: false },
            hff0000: { cmd: "text", txt: "Project by Stacy\n\nBoggle is: A website for dog lovers, a place to lose yourself in a variety of doggy experiences:\nWear a dog crown\nDraw psychedelic dogs with your nose\nOr play a game of eat the treats using your dog head hoop to catch the dog biscuits\n\nClick to view project.", align: "left", lines: 13, url: "https://dog-game-website-.glitch.me/", label: "Boggle", point: [74, 73], obstacle: false },
            //TV icons
            hf39200: { cmd: "video", url: "https://eunah-lee-storybook5-6.glitch.me/", artistname: "Eunah Lee", point: [34, 73], obstacle: false},
            he6007e: { cmd: "video", url: "https://dog-game-website-.glitch.me/", artistname: "Stacy", point: [74, 73], obstacle: false }
        },
        things: {
            sheep: { file: "objects/sheep-walk.png", frames: 3, frameDelay: 30, position: [64, 59], label: "Sheep" },
            sheep2: { file: "objects/sheep-walk.png", frames: 3, frameDelay: 30, position: [14, 80], label: "Sheep" },
            sheep3: { file: "objects/sheep-idle.png", frames: 2, frameDelay: 30, position: [100, 78], label: "Sheep" },
            sheep4: { file: "objects/sheep-idle.png", frames: 2, frameDelay: 30, position: [12, 63], label: "Sheep" },
            dog: {file: "objects/harvey.png", frames: 2, frameDelay: 30, position: [54, 80], label: "Harvey"}
        }
    },

    care: {
        bg: "careRoom-bg.png",
        avatarScale: 2,
        pageBg: pinkBG,
        area: "careRoom-areas.png",
        tint: "#FFFFFF",
        bubblesY: 46,
        spawn: [15, 77, 113, 96],
        areaColors: {
            //left
            hffec27: { cmd: "enter", room: "disco", label: "Disco Room", point: [10, 86], enterPoint: [114, 86], obstacle: false },
            //right
            h00e436: { cmd: "enter", room: "social", label: "Social Room", point: [117, 86], enterPoint: [12, 86], obstacle: false },
            //down
            hff77a8: { cmd: "enter", room: "security", label: "Security", point: [99, 73], enterPoint: [99, 73], obstacle: false },
            //up
            h29adff: { cmd: "enter", room: "animal", label: "Animal Room", point: [30, 73], enterPoint: [99, 73], obstacle: false },
            //projects
            hff0000: {cmd: "text", txt: "Project by Mia Stoces-Brown\n\nEverybody is just trying to get from A to B.\n\nClick to view project.", align: "left", lines: 6, url: "https://from-a-to-b-.glitch.me", label: "From A to B", point: [24, 80], obstacle: false},
            h0000ff: {cmd: "text", txt: "Project by Bea Taylor Searle\n\nIn a world where we can't hold hands, let's feel closer online.\n\nClick to view project.", align: "left", lines: 6, url: "http://holding-hands2.glitch.me/", label: "Holding Hands", point: [64, 80], obstacle: false},
            hf39200: {cmd: "text", txt: "Project by Jann Choy\n\nIn this pandemic, we can no longer touch one another. As we spend more time in front of our computers, how can we still form connections with each other?\n\nClick to view project.", align: "left", lines: 9, url: "https://when-our-hands-touch.glitch.me/", label: "When we touch, a tree grows", point: [100, 80], obstacle: false},
            //TV icons
            hff00ff: {cmd: "video", url: "https://from-a-to-b-.glitch.me", artistname: "Mia Stoces-Brown", point: [24, 73], obstacle: false},
            h312783: {cmd: "video", url: "https://youtu.be/n1W8W9TUKfY", artistname: "Bea Taylor Searle", point: [64, 80], obstacle: false},
            h056c38: {cmd: "video", url: "https://when-our-hands-touch.glitch.me/", artistname: "Jann Choy", point: [100, 80], obstacle: false}

        },
        things: {
            pinkCushion: { file: "objects/pinkCushion.png", frames: 1, frameDelay: 30, position: [40, 58], label: "Pink Cushion" },
            yellowCushion: { file: "objects/yellowCushion.png", frames: 1, frameDelay: 30, position: [63, 63], label: "Yellow Cushion" }
        }
    },

    social: {
        bg: "socialRoom-bg.png",
        avatarScale: 2,
        tint: "#ffbbb8",
        pageBg: pinkBG,
        bubblesY: 50,
        spawn: [84, 92, 121, 99],
        area: "socialRoom-areas.png",
        areaColors: {
            //left
            hffec27: { cmd: "enter", room: "care", label: "Care Room", point: [10, 86], enterPoint: [114, 86], obstacle: false },
            //projects
            h00ff00: { cmd: "text", txt: "Project by Edward Martin\n\nA prototype for a social networking app that uses your daily emotions to communicate with your friends and family.\n\nClick to view project.", align: "left", lines: 8, url: "https://2020-06-06-regard-socket-app.glitch.me/", label: "Regard.", point: [34, 78], obstacle: true },
            hff0000: { cmd: "text", txt: "Project by Zhiqin Lu\n\nA web-based app to play and chat with images together.\n\nClick to view project.", align: "left", lines: 6, url: "https://observe-.glitch.me/", label: "Observe", point: [64, 78], obstacle: true },
            h0000ff: { cmd: "text", txt: "Project by Maximilian Zimmerer\n\nCommon Denominator is a web-based interaction that uses computer vision and socket connections to merge people's faces in real-time. The motivation behind this project was to create moments of joy between a pair of users and offer a digital sense of togetherness.\n\nClick to view project.", align: "left", lines: 12, url: "https://common-denominator.glitch.me/", label: "Common Denominator", point: [92, 78], obstacle: true },
            hff00ff: { cmd: "text", txt: "Project by Thomas Bugg\n\nClick to view project.", align: "left", lines: 3, url: "https://manipulated-living.glitch.me/", label: "Manipulated Living", point: [100, 88], obstacle: true },
            //TV icons
            hf39200: { cmd: "video", url: "https://2020-06-06-regard-socket-app.glitch.me/", artistname: "Edward Martin", point: [34, 78], obstacle: true },
            h00b9ee: { cmd: "video", url: "https://observe-.glitch.me/", artistname: "Zhiqin Lu", point: [64, 78], obstacle: true },
            h312783: { cmd: "video", url: "https://common-denominator.glitch.me/", artistname: "Maximilian Zimmerer", point: [92, 78], obstacle: true },
            he6007e: { cmd: "video", url: "https://manipulated-living.glitch.me/", artistname: "Thomas Bugg", point: [100, 88], obstacle: true }
        }
    },

    disco: {
        bg: "discoRoom-bg.png",
        avatarScale: 2,
        frames: 2,
        frameDelay: 10,
        pageBg: pinkBG,
        area: "gameRoom-areas.png",
        tint: "#75787f",
        bubblesY: 46,
        spawn: [15, 77, 113, 96],
        areaColors: {
            //right
            h00e436: { cmd: "enter", room: "care", label: "Care Room", point: [117, 86], enterPoint: [12, 86], obstacle: false },
            //projects
            hff0000: { cmd: "text", txt: "Project by Llorenc Garcia Bas\n\nA web based instrumental music app inspired by the Theremin that uses real-time body movements to manipulate sounds.\n\nClick to view project.", align: "left", lines: 8, url: "https://inky-simple-dryosaurus.glitch.me/", label: "Theremax", point: [34, 78], obstacle: true },
            hffff00: { cmd: "text", txt: "Project by Laiqa Mohid\n\nA musical collaboration built through eye contact\n\nClick to view project.", align: "left", lines: 6, url: "https://eye-orchestra-final.glitch.me/", label: "Eye Orchestra", point: [64, 78], obstacle: true },
            h0000ff: { cmd: "text", txt: "Project by Kirsty Proud\n\nClick to view project.", align: "left", lines: 3, url: "https://acid-with-highscore.glitch.me/", label: "Acid", point: [92, 78], obstacle: true },
            hff00ff: { cmd: "text", txt: "Project by Rukiah Zakaria\n\nA body instrument, music video making place in space!\n\nClick to view project.", align: "left", lines: 6, url: "https://breakdown-the-mimi-mix.glitch.me/", label: "Breakdown the Mimi Mix", point: [10, 86], obstacle: true },
            //TV icons
            h312783: { cmd: "video", url: "https://inky-simple-dryosaurus.glitch.me/", artistname: "Llorec Garcia Bas", point: [34, 78], obstacle: true },
            h00ffff: { cmd: "video", url: "https://eye-orchestra-final.glitch.me/", artistname: "Laiqa Mohid", point: [64, 78], obstacle: true },
            he6007e: { cmd: "video", url: "https://acid-with-highscore.glitch.me/", artistname: "Kirsty Proud", point: [92, 78], obstacle: true },
            hf39200: { cmd: "video", url: "https://breakdown-the-mimi-mix.glitch.me/", artistname: "Rukiah Zakaria", point: [10, 86], obstacle: true }
        }
    },

    security: {

        bg: "securityRoom-bg.png",
        avatarScale: 2,
        pageBg: pinkBG,
        area: "securityRoom-areas.png",
        tint: "#FFFFFF",
        bubblesY: 46,
        spawn: [15, 77, 113, 96],
        areaColors: {
            //left
            hffec27: { cmd: "enter", room: "game", label: "Game Room", point: [10, 86], enterPoint: [114, 86], obstacle: false },
            //right
            h00e436: { cmd: "enter", room: "gallery", label: "Gallery", point: [117, 86], enterPoint: [16, 85], obstacle: false },
            //door in back
            h29adff: { cmd: "enter", room: "food", label: "Food Room", point: [30, 73], enterPoint: [30, 89], obstacle: false },
            //up
            hff77a8: { cmd: "enter", room: "care", label: "Care Room", point: [99, 73], enterPoint: [99, 73], obstacle: false },
            //back outside
         
            hbe1250: { cmd: "enter", room: "street", label: "Entrance", point: [63, 98], enterPoint: [64, 98], obstacle: false },
            
        },
        things: {
            guard: { file: "characters/museumGuard.png", frames: 1, frameDelay: 30, position: [13, 56], label: "Security" }
        }

    },

    gallery: {
        bg: "galleryRoom-bg.png",
        avatarScale: 2,
        tint: "#ffbbb8",
        pageBg: pinkBG,
        bubblesY: 50,
        spawn: [84, 92, 121, 99],
        area: "galleryRoom-areas.png",
        areaColors: {
            //left
            hffec27: { cmd: "enter", room: "security", label: "Security", point: [10, 86], enterPoint: [114, 86], obstacle: false },
            //Projects by: Jessie, Val and Riya
            h00ff00: { cmd: "text", txt: "Project by Jessie Zhang\n\nBlow digital bubbles with sound!\n\nClick to view project.", align: "left", lines: 5, url: "https://speech-bubbles.glitch.me/", label: "Speech Bubbles", point: [34, 78], obstacle: true },
            hff0000: { cmd: "text", txt: "Project by Val Toro\n\nWatch the tale of a lonely ghost before joining them in the next realm.\n\nClick to view project.", align: "left", lines: 7, url: "https://ghost-tales.glitch.me/", label: "Ghost Tales", point: [64, 78], obstacle: true },
            h0000ff: { cmd: "text", txt: "Project by Riya Maria\n\nClick to view project.", align: "left", lines: 3, url: "https://allseeing--eyes.glitch.me/", label: "all seeing eyes", point: [92, 78], obstacle: true },
            //TV icons
            he6007e: { cmd: "video", url: "https://www.youtube.com/watch?v=KRUbhRKiauA", artistname: "Jessie Zhang", point: [34, 78], obstacle: true },
            h312783: { cmd: "video", url: "https://ghost-tales.glitch.me/", artistname: "Val Toro", point: [64, 78], obstacle: true },
            hf39200: { cmd: "video", url: "https://allseeing--eyes.glitch.me/", artistname: "Riya Maria", point: [92, 78], obstacle: true }          
        }
    },

    food: {
        bg: "foodRoom-bg.png",
        avatarScale: 2,
        tint: "#ffbbb8",
        pageBg: pinkBG,
        bubblesY: 50,
        spawn: [84, 92, 121, 99],
        area: "foodRoom-areas.png",
        areaColors: {
            //left
            hbe1250: { cmd: "enter", room: "security", label: "Security", point: [34, 94], enterPoint: [34, 74], obstacle: false },
            //projects
            hffff00: { cmd: "text", txt: "Project by Khalisha Tambunan\n\nIt's raining cats and dogs... and everything in between.\n\nClick to view project.", align: "left", lines: 6, url: "https://testkitsc.glitch.me/", label: "Kitschen Dreams", point: [34, 78], obstacle: true },
            hff0000: { cmd: "text", txt: "Project by Kamil Sznajder\n\nA simple screen game, in which one becomes a lizard, running on a red rock. Using your phone flashlight, your task is to eat as much bugs as possible while watching out for predators.\n\nClick to view project.", align: "left", lines: 10, url: "https://time-to-eat.glitch.me/", label: "Time to Eat a Bug!", point: [94, 78], obstacle: true },
            //TV icons
            hf39200: { cmd: "video", url: "https://testkitsc.glitch.me/", artistname: "Khalisha Tambunan", point: [34, 78], obstacle: true },
            h006b2d: { cmd: "video", url: "https://time-to-eat.glitch.me/", artistname: "Kamil Sznajder", point: [94, 78], obstacle: true }           
        },
        things: {
            table: { file: "objects/table.png", frames: 1, frameDelay: 30, position: [65, 80], label: "Food!" },
            pizza: {file: "objects/pizza.png", frames: 2, frameDelay: 30, position: [104, 65], label: "Giant pizza!"}
        }
    },
  

    game: {
        bg: "gameRoom-bg.png",
        avatarScale: 2,
        frames: 3,
        frameDelay: 10,
        pageBg: pinkBG,
        area: "gameRoom-areas.png",
        tint: "#FFFFFF",
        bubblesY: 46,
        spawn: [15, 77, 113, 96],
        areaColors: {
            //right
            h00e436: { cmd: "enter", room: "security", label: "Security", point: [117, 86], enterPoint: [12, 86], obstacle: false },
            //projects
            hff0000: { cmd: "text", txt: "Project by Sandro Valente\n\nThe Head controlled space exploration game that is about spreading goodwill to close enough planets. Who will be the best Starseed? Will any ever reach 200 max score? Upload your high score #starseeds to enter the prize draw! Live Long & Prosper!\n\nClick to view project.", align: "left", lines: 12, url: "https://starseeds-.glitch.me/", label: "Starseeds", point: [34, 78], obstacle: true },
            hffff00: { cmd: "text", txt: "Project by Lexy Garces Beavis\n\nA game inspired by the 1975 Arcade Game: Whac-A-Mole. Use your wrists to move around the rainbows to hit the sun. Encouraging movement as a form of self-care.\n\nClick to view project.", align: "left", lines: 9, url: "https://quaroutine-the-game1.glitch.me/", label: "Quaroutine", point: [64, 78], obstacle: true },
            h0000ff: { cmd: "text", txt: "Project by Dejana Draganić\n\nClick to view project.", align: "left", lines: 3, url: "https://shake-it-out-.glitch.me/", label: "Shake it Out!", point: [92, 78], obstacle: true },
            hff00ff: { cmd: "text", txt: "Project by Martin Del Busto\n\nPixelated is a game about choosing the correct pixelated image using your eyes. 12 questions, 2 pixelated images per question and one correct answer.\n\nClick to view project.", align: "left", lines: 10, url: "https://pixelated.glitch.me/", label: "Pixelated", point: [10, 86], obstacle: true },
            //TV icon
            //the play icons could be in the wrong order (the projects linked were from a different room)
            h312783: { cmd: "video", url: "https://starseeds-.glitch.me/", artistname: "Sandro Valente", point: [34, 78], obstacle: true },
            h00ffff: { cmd: "video", url: "https://quaroutine-the-game1.glitch.me/", artistname: "Lexy Garces Beavis", point: [64, 78], obstacle: true },
            he6007e: { cmd: "video", url: "https://shake-it-out-.glitch.me/", artistname: "Dejana Draganić", point: [92, 78], obstacle: true },
            hf39200: { cmd: "video", url: "https://pixelated.glitch.me/", artistname: "Martin Del Busto", point: [10, 86], obstacle: true },
        },
        things:{
            console: {file: "objects/console.png", frames: 2, frameDelay: 30, position: [17, 85], label: "Let's play!"}
        }

    },

    draw: {
        bg: "drawRoom-bg.png",
        avatarScale: 2,
        tint: "#ffbbb8",
        pageBg: pinkBG,
        bubblesY: 50,
        spawn: [84, 92, 121, 99],
        area: "drawRoom-areas.png",
        areaColors: {
            //left
            hffec27: { cmd: "enter", room: "animal", label: "Animal Room", point: [10, 86], enterPoint: [114, 86], obstacle: false },
            //projects by Alex and Vince
            h00ff00: { cmd: "text", txt: "Project by Alex Greer\n\nA simple teamwork game, with the aim of creating a masterpiece together using only shapes and the colours in your environment.\n\nClick to view project.", align: "left", lines: 8, url: "https://draw-together-again.glitch.me/", label: "Draw Together Again", point: [34, 78], obstacle: true },
            h0000ff: { cmd: "text", txt: "Project by Vince Ibay\n\nTogether is a family friendly multiplayer digital canvas, where kids can create, play and socialise.\n\nClick to view project.", align: "left", lines: 8, url: "https://better-together.glitch.me/", label: "Together", point: [92, 78], obstacle: true },
            //TV icons
            hf39200: { cmd: "video", url: "https://draw-together-again.glitch.me/", artistname: "Alex Greer", point: [34, 78], obstacle: true },
            hff0000: { cmd: "video", url: "https://better-together.glitch.me/", artistname: "Vince Ibay", point: [92, 78], obstacle: true }
        },
        things:{
            console: {file: "objects/palette.png", frames: 1, frameDelay: 0, position: [98, 85], label: "Giant Palette!"}
        }
    },

    view: {
        bg: "viewRoom-bg.png",
        avatarScale: 2,
        frames: 4,
        frameDelay: 50,
        pageBg: pinkBG,
        area: "viewRoom-areas.png",
        tint: "#FFFFFF",
        bubblesY: 46,
        spawn: [15, 77, 113, 96],
        areaColors: {
            //right
            h00e436: { cmd: "enter", room: "animal", label: "Animal Room", point: [117, 86], enterPoint: [12, 86], obstacle: false },
            //projects
            ha8e72e: { cmd: "text", txt: "Project by Morgan Williams\n\nAn interactive randomised location of a view of a city, every time you reload the page. Try moving one hand then the other up and down to see what happens.\n\nClick to view project.", align: "left", lines: 9, url: "https://views-from-a-room.glitch.me/", label: "Views from a Room", point: [34, 78], obstacle: true },
            hffff00: { cmd: "text", txt: "Project by Ella Jonquil Fitzgerald\n\nClick to view project.", align: "left", lines: 3, url: "https://webcam-socket-io.glitch.me/", label: "Quarantine Kiss", point: [64, 78], obstacle: true },
            h0000ff: { cmd: "text", txt: "Project by Catherine Rose Lavender\n\nClick to view project.", align: "left", lines: 3, url: "https://root-dandy-position.glitch.me/", label: "be still, be calm", point: [92, 78], obstacle: true },
            //TV icons
            hf39200: { cmd: "video", url: "https://views-from-a-room.glitch.me/", artistname: "Morgan Williams", point: [34, 78], obstacle: true },
            hff00ff: { cmd: "video", url: "https://webcam-socket-io.glitch.me/", artistname: "Ella Jonquil Fitzgerald", point: [64, 78], obstacle: true },
            hff0000: { cmd: "video", url: "https://root-dandy-position.glitch.me/", artistname: "Catherine Rose Lavender", point: [92, 78], obstacle: true }            
        }
    },
};