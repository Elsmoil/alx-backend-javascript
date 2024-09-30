export function const() {
  let task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function const() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
