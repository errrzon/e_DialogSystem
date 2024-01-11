<h1 align="center">Fivem Ped Dialog System</h1>

<div align="center">
This is a simple boilerplate for getting started with TypeScript game-scripts, in FiveM.
</div>

<div align="center">
<img src="https://cdn.discordapp.com/attachments/1173957604104470530/1194802088283222106/image.png?ex=65b1ad28&is=659f3828&hm=7a6540cebaad449424435fda5eb8a0f7fba3f59c4c64e9ab9462563c11b3ce74&">
</div>

This resource allows you to create basically anything you imagine with ped reputation system.

## Dependencies
<a href="https://github.com/Demigod916/demi-pedmanager">demi-pedmanager<a/>
## Usage
Simply export
exports['e_DialogSystem']:interact(self.ped, self.Interact, #self.Interact)

self.ped is basically ped id used to get entity offset etc to make camera look fine.
self.Interact is object that contains every info like pedName, pedType == reputation type so for example. hacking,sanitation,trucking etc. and rest is pretty self explanatory

<code>
Interact = {
                pedName = "Reee man",
                pedType = "ped__type",
                {
                    rep = 20,
                    dialog =
                    " Hey, that's A DIALOG!",
                    action = function()
                        print("HElloe")
                    end
                },
                default = {
                    dialog =
                    "Elo elo",
                    action = function()
                        print("xyz")
                    end
                }
            },
            onSelect = function(self)
                exports['e_DialogSystem']:interact(self.entity, self.Interact, #self.Interact)
            end
        },
<code/>



So below is PedList.lua file from demi-pedmanager, one ped is working with target, second one is working with his interaction system. Copy and have fun!

<code>
Peds = {
    {
        model = "u_m_y_zombie_01",
        coords = vec4(-752.4815, -1047.1799, 12.3561, 299.8617),
        renderDistance = 50.0,
        scenario = "WORLD_HUMAN_CLIPBOARD", --optionally use a scenario or an animation.
        animation = {
            dict = "amb@code_human_in_bus_passenger_idles@female@tablet@idle_a",
            anim = "idle_a",
            flag = 63
        },
        targetOptions = { -- standard ox_target options that will apply to the ped
            label = 'Talk to',
            Interact = {
                pedName = "Reee man",
                pedType = "ped__type",
                {
                    rep = 20,
                    dialog =
                    " What's up dude, want to buy some meth??",
                    action = function()
                        print("HElloe")
                    end
                },
                default = {
                    dialog =
                    "Elo elo",
                    action = function()
                        print("xyz")
                    end
                }
            },
            onSelect = function(self)
                exports['e_DialogSystem']:interact(self.entity, self.Interact, #self.Interact)
            end
        },
    },
    {
        model = "u_m_y_zombie_01",
        coords = vec4(-753.9375, -1038.1399, 12.7861, 202.1458),
        renderDistance = 50.0,
        scenario = "WORLD_HUMAN_CLIPBOARD", --optionally use a scenario or an animation.
        animation = {
            dict = "amb@code_human_in_bus_passenger_idles@female@tablet@idle_a",
            anim = "idle_a",
            flag = 63
        },
        Interact = {
            pedName = "John Arrr",
            pedType = "ped__type",
            {
                rep = 2,
                dialog =
                "DIalog ++",
                action = function()
                    print("hello world")
                end
            },
            default = {
                dialog =
                    "In the heart of the bustling city, where the streets hummed with the symphony of life, there existed a quaint little bookstore tucked away between towering skyscrapers. Its weathered facade, adorned with ivy creeping along the edges, hinted at stories within that were as old as time itself. The wooden door, with its brass handle polished by the touch of countless curious minds, welcomed all who sought refuge in the pages of forgotten tales and undiscovered adventures." ..
                    "Stepping across the threshold felt like traversing a portal into an alternate realm—one where time slowed to a gentle rhythm and the scent of aged parchment hung delicately in the air. Sunlight danced through the windows, casting ethereal patterns upon shelves that sagged under the weight of knowledge and imagination." ..
                    "Each book seemed to possess a life of its own, whispering promises of uncharted lands, thrilling escapades, and profound wisdom. Leather-bound tomes nestled beside modern paperbacks, forming a mosaic of genres and eras that catered to every yearning soul seeking solace or enlightenment." ..
                    "The bookstore keeper, a gentle soul with eyes that mirrored the wisdom of centuries, moved among the aisles like a guardian spirit. Their soft-spoken recommendations were steeped in an intimate knowledge of each book's essence, guiding patrons to literary treasures that resonated with their very essence." ..
                    "As visitors perused the shelves, the ambiance hummed with the quiet rustle of pages being turned, occasional gasps of wonderment, and the distant sounds of the city fading into obscurity. It was a sanctuary where one could lose track of time, where the outside world ceased to exist, and where the imagination reigned supreme." ..
                    "In this haven of boundless narratives, people from all walks of life found themselves united by a common thread—the love for stories. Strangers would strike conversations over a shared favorite book, exchanging anecdotes and insights as if they had known each other for a lifetime." ..
                    "And so, this unassuming bookstore stood not merely as a vendor of books but as a haven for dreamers, a sanctuary for the seekers of truth, a rendezvous point for kindred spirits brought together by the magic woven within the pages of every tome.",
                action = function(self)
                    print("xyz")
                end
            }
        },
        textUI = {
            text = 'Say Hi!',
            timeout = math.floor(GetAnimDuration('friends@frj@ig_1', 'wave_a') * 1000),
            onSelect = function(self)
                exports['e_DialogSystem']:interact(self.ped, self.Interact, #self.Interact)
            end
        },
    },
}

<code/>

## Contact
discord: _erzn
