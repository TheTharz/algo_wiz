export function randomArray(
  size : number,
  max : number = 300
): number [] {
  return Array.from({length:size},()=>Math.floor(Math.random()*max)+10)
}