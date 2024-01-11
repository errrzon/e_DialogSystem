
import { onClientCallback, triggerClientCallback } from '@overextended/ox_lib/server';
const ESX = global.exports["es_extended"].getSharedObject()

onClientCallback('ex_interaction:getReputation', (src, pedType: string) => {
    const xPlayer = ESX.GetPlayerFromId(src)
    const reputation = xPlayer.getMeta('reputation')
    if (reputation[pedType] == undefined) {
        reputation[pedType] = 0
        xPlayer.setMeta('reputation', reputation)
        return 0;
    }
    return reputation[pedType];
});

onNet("ex_interaction:increasePedREP", (src: number, pedType: string, howMuch: number) => {
    const xPlayer = ESX.GetPlayerFromId(src)
    const reputation = xPlayer.getMeta('reputation')
    reputation[pedType] + howMuch >= 100 ? reputation[pedType] = 100 : reputation[pedType] + howMuch
    xPlayer.setMeta('reputation', reputation)
});

onNet("ex_interaction:decreasePedREP", (src: number, pedType: string, howMuch: number) => {
    const xPlayer = ESX.GetPlayerFromId(src)
    const reputation = xPlayer.getMeta('reputation')
    reputation[pedType] - howMuch >= 0 ? reputation[pedType] = reputation[pedType] - howMuch : reputation[pedType] = 0
    xPlayer.setMeta('reputation', reputation)
});