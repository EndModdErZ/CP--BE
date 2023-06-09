import { world } from "@minecraft/server";
import { getItem } from "./functions";


world.events.entityHurt.subscribe(async function({hurtEntity,damageSource}){
  const { damagingEntity } = damageSource; if (!damagingEntity) return;
  
  switch (getItem(damagingEntity).typeId) {
    case 'emrz-croptopia:frying_pan':
      let {x,y,z} = damagingEntity.viewDirection();
      world.playSound("pan.clang",{"location":hurtEntity.location,"pitch":0.88,"volume":1});
      hurtEntity.applyKnockback(x,z,2,0.6);
      break;
    default:
  }
});