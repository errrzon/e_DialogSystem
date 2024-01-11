<h1 align="center">Fivem Ped Dialog System</h1>

<div align="center">
<img src="https://cdn.discordapp.com/attachments/1173957604104470530/1194805148648743094/image.png?ex=65b1b001&is=659f3b01&hm=ccd0221580ffb3658dfc87ab5ce37de9a2682e61716bfc869f920461ffacd3ce&">
</div>

This resource allows you to create basically anything you imagine with ped reputation system.

## Dependencies
<a href="https://github.com/Demigod916/demi-pedmanager">demi-pedmanager<a/>
## Usage
Simply export
exports['e_DialogSystem']:interact(self.ped, self.Interact, #self.Interact)

self.ped is basically ped id used to get entity offset etc to make camera look fine.\n
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
                dialog = "sd"
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
