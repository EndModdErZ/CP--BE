import { world } from "@minecraft/server";
import { getItem } from "./functions";


world.events.entityHurt.subscribe(async function({hurtEntity,damageSource}){
  const { damagingEntity } = damageSource; if (!damagingEntity) return;
  
  switch (getItem(damagingEntity).typeId) {
    case 'emrz-croptopia:frying_pan':
     
      break;
    
    default:

  }
});
world.events.blockBreak.subscribe