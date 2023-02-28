var people = [
  ["joseph",27,"united states,['blue,black"]]
  ["maria",21,"uruguay",['blue,black"]]
  ["brian",35,"united kingdom",['blue,black"],]
  ["susan",45,"australia",['blue,black"]]
];

for(var i = 0; i < people.length;i++){
  document.write(person (i+i))
  for(var details in people[i]){
    document.write(people[i][details]);
  }
}
