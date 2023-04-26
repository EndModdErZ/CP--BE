function getItem (entity,slot = entity.selectedSlot){
  const item = entity
  .getComponent("inventory")
  ?.container
  ?.getItem(slot);
  if (!item) return {
    "typeId":"minecraft:air",
    "amount":0
  };
  return item;
}
export { getItem };