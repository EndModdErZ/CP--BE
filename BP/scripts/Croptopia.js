import { world } from "@minecraft/server";


world.events.entityHurt.subscribe(async function(data){
  const { damagingEntity } = data; if (!damagingEntity) return;
  
});
world.events.blockBreak.subscribe