function getItem (entity,slot = entity.selectedSlot){
  const item = entity
  .getComponent("inventory")
  ?.container
  ?.getItem(slot);
}