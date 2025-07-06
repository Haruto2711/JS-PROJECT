let dictionary = {
  hello: "xin chào",
  book: "quyển sách",
  cat: "con mèo",
};

//Add word
function addWord(english, vietnamese) {
  if (dictionary[english]) {
    console.log(`"${english}" exisited`);
  } else {
    dictionary[english] = vietnamese;
    console.log(`Add Successfully: ${english} = ${vietnamese}`);
  }
  return dictionary;
}
  

const add = addWord("English", "Tiếng Anh");
console.log(add);

//Seacrh word
function lookUpword(english) {
  if (dictionary[english]) {
    console.log("Found: " + dictionary[english]);
  } else {
    console.log("Not Found");
  }
}
lookUpword("book");

//Display all word
function showDictionary(){
    console.log("List of dictionary :");
    for (let word in dictionary) {
      console.log(`${word} = ${dictionary[word]}`);
    }
}

showDictionary();

//Update word
function updateWord(english, newMeaning) {
  if (dictionary[english]) {
    dictionary[english] = newMeaning;
    console.log(`Update "${english}" to ${newMeaning}`);
  } else {
    console.log(`Not found: ${english}`);
  }
}
updateWord("book", "sách");

function removeWord(english) {
  if (dictionary[english]) {
    delete dictionary[english];
    console.log(`Remove "${english}"`);
  } else {
    console.log(`❌ Not found: "${english}`);
  }
}
removeWord("cat");
showDictionary();