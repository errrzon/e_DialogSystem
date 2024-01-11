import { triggerServerCallback } from '@overextended/ox_lib/client'

let cachedFunction: (() => void) | undefined = undefined

const getCameraHeading = (ped: number): number => {
  const heading = GetEntityHeading(ped)
  if (heading > 180) {
    return (heading - 180)
  }
  return 360 - (180 - heading)
}

const interact = async (ped: number, data: any, length: number): Promise<void> => {
  const cameraHeading = getCameraHeading(ped)
  const cameraCoords: number[] = GetOffsetFromEntityInWorldCoords(ped, 0, 1, 0)
  const playerCoords: number[] = GetOffsetFromEntityInWorldCoords(ped, 0, 2, 0)
  TaskGoToCoordAnyMeans(PlayerPedId(), playerCoords[0], playerCoords[1], playerCoords[2], 1.0, 0, false, 786603, 1.0)
  let currentRep
  const response = await triggerServerCallback<{ serverValue: number }>('ex_interaction:getReputation', 1, data.pedType);
  currentRep = response

  let cachedVal = null
  for (let i = 1; i <= length; i++) {
    if (currentRep >= data[i].rep) {
      cachedVal = i
    }
  }
  if (cachedVal == null) {
    cachedVal = data.default
  }
  else {
    cachedVal = data[cachedVal]
  }
  CreateCamWithParams("DEFAULT_SCRIPTED_CAMERA", cameraCoords[0], cameraCoords[1], cameraCoords[2] + .55, -0, -0.0, cameraHeading, 40, true, 0)
  RenderScriptCams(true, true, 750, true, true)
  cachedFunction = cachedVal.action
  SendNUIMessage({
    type: 'open',
    values: {
      pedName: data.pedName,
      pedType: data.pedType,
      currentRep: currentRep,
      dialog: cachedVal.dialog,
    },
  })
  SetNuiFocus(true, true)
}

RegisterNuiCallbackType('stopInteract')
on('__cfx_nui:stopInteract', () => {
  RenderScriptCams(false, true, 750, true, true)
  SetNuiFocus(false, false)
  cachedFunction = undefined
});

RegisterNuiCallbackType('doAction')
on('__cfx_nui:doAction', () => {
  if (cachedFunction) {
    cachedFunction()
  }
});

globalThis.exports("interact", (ped: number, data: object, length: number): Promise<void> => {
  return interact(ped, data, length)
});