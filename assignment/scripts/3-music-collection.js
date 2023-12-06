console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];
let albumTracks = [];

function addToCollection(collection, title, artist, yearPublished, tracks) {
  let newAlbum = {
    title,
    artist,
    yearPublished,
    tracks,
    //learned about this shorthand when re-using parameter names for object properties
    //from an Odin Project link to Javascript.info
  }
  collection.push(newAlbum);
  return newAlbum;
}//end of addToCollection

albumTracks = [
  {
    name: "Resonance",
    duration: "2:27",
  },
  {
    name: "Rewrite",
    duration: "3:47",
  },
  {
    name: "To Your Town",
    duration: "3:36",
  },
  {
    name: "My World",
    duration: "4:03",
  },
  {
    name: "The Next Night",
    duration: "3:12",
  },
  {
    name: "Last Scene",
    duration: "4:01",
  },
  {
    name: "Siren",
    duration: "5:28",
  },
  {
    name: "Re:Re:",
    duration: "3:48",
  },
  {
    name: "Midnight",
    duration: "3:31",
  },
  {
    name: "Midnight and Daydreams",
    duration: "4:21",
  },
  {
    name: "Waterfront",
    duration: "4:40",
  },
  {
    name: "Loop & Loop",
    duration: "3:45",
  }
];
//AFKG album
console.log("AFKG Album:", addToCollection(myCollection, "Sol-fa", "Asian Kung-Fu Generation", 2004, albumTracks));//Success!

albumTracks = [
  {
    name: "Oh! Gravity",
    duration: "2:30",
  },
  {
    name: "American Dream",
    duration: "3:09",
  },
  {
    name: "Dirty Second Hands",
    duration: "3:18",
  },
  {
    name: "Awakening",
    duration: "4:11",
  },
  {
    name: "Circles",
    duration: "4:06",
  },
  {
    name: "Amateur Lovers",
    duration: "4:36",
  },
  {
    name: "Faust, Midas, and Myself",
    duration: "3:51",
  },
  {
    name: "Head Over Heels (In This Life)",
    duration: "3:41",
  },
  {
    name: "Yesterdays",
    duration: "4:04",
  },
  {
    name: "Burn Out Bright",
    duration: "3:24",
  },
  {
    name: "4:12",
    duration: "4:12",
  },
  {
    name: "Let Your Love Be Strong",
    duration: "3:47",
  }
];//Oh! Gravity
console.log("Oh! Gravity:", addToCollection(myCollection, "Oh! Gravity", "Switchfoot", 2006, albumTracks));//Success!

albumTracks = [
  {
    name: "The Crane Wife 3",
    duration: "4:18",
  },
  {
    name: "The Island",
    duration: "12:26",
  },
  {
    name: "Yankee Bayonet (I Will Be Home Then)",
    duration: "4:19",
  },
  {
    name: "O Valencia!",
    duration: "3:48",
  },
  {
    name: "The Perfect Crime #2",
    duration: "5:33",
  },
  {
    name: "When the War Came",
    duration: "5:06",
  },
  {
    name: "Shankill Butchers",
    duration: "4:40",
  },
  {
    name: "Summersong",
    duration: "3:31",
  },
  {
    name: "The Crane Wife 1 & 2",
    duration: "11:20",
  },
  {
    name: "Sons & Daughters",
    duration: "5:14",
  }
];//The Crane Wife
console.log("The Crane Wife:", addToCollection(myCollection, "The Crane Wife", "The Decemberists", 2006, albumTracks));//Success!

albumTracks = [
  {
    name: "Norwegian Wood",
    duration: "2:57",
  },
  {
    name: "Big Swing Face",
    duration: "5:15",
  },
  {
    name: "Monitor Theme",
    duration: "2:24",
  },
  {
    name: "Wack Wack",
    duration: "3:04",
  },
  {
    name: "Love for Sale",
    duration: "4:30",
  },
  {
    name: "Mexicali Noise",
    duration: "2:49",
  },
  {
    name: "Willowcrest",
    duration: "4:55",
  },
  {
    name: "The Beat Goes On",
    duration: "4:40",
  },
  {
    name: "Bugle Call Rag",
    duration: "4:42",
  },
  {
    name: "Standing Up in a Hammock",
    duration: "2:32",
  },
  {
    name: "Chicago",
    duration: "2:47",
  },
  {
    name: "Lament for Lester",
    duration: "2:30",
  },
  {
    name: "Machine",
    duration: "3:45",
  },
  {
    name: "Silver Threads Among the Blues",
    duration: "4:40",
  },
  {
    name: "New Blues",
    duration: "4:38",
  },
  {
    name: "Old Timey",
    duration: "3:25",
  },
  {
    name: "Loose",
    duration: "4:05",
  },
  {
    name: "Apples (aka Gino)",
    duration: "2:35",
  },
];//Big Swing Face
console.log("Big Swing Face:", addToCollection(myCollection, "Big Swing Face", "Buddy Rich Big Band", 1967, albumTracks));//Success!

albumTracks = [
  {
    name: "Beloved",
    duration: "5:34",
  },
  {
    name: "Lost 'Cause",
    duration: "3:44",
  },
  {
    name: "Fluorescent",
    duration: "3:35",
  },
  {
    name: "If I Were You",
    duration: "3:48",
  },
  {
    name: "The Bones of Us",
    duration: "4:02",
  },
  {
    name: "Splinter",
    duration: "3:47",
  },
  {
    name: "I Need You (To Be Wrong)",
    duration: "3:33",
  },
  {
    name: "The Hard Way",
    duration: "3:26",
  },
  {
    name: "Wolves",
    duration: "3:10",
  },
  {
    name: "Backwards in Time",
    duration: "4:13",
  },
  {
    name: "Electricity",
    duration: "4:38",
  }
];//interrobang
console.log("interrobang:", addToCollection(myCollection, "interrobang", "Switchfoot", 2021, albumTracks));//Success!

albumTracks = [
  {
    name: "Celebrants",
    duration: "3:24",
  },
  {
    name: "Strangers",
    duration: "4:45",
  },
  {
    name: "Water Under the Bridge, Part 1",
    duration: "1:09",
  },
  {
    name: "The Meadow",
    duration: "3:30",
  },
  {
    name: "Thinnest Wall",
    duration: "3:08",
  },
  {
    name: "Going Out...",
    duration: "3:05",
  },
  {
    name: "Holding Pattern",
    duration: "3:06",
  },
  {
    name: "Where the Long Line Leads",
    duration: "3:25",
  },
  {
    name: "Goddamned Saint",
    duration: "4:44",
  },
  {
    name: "Stone's Throw",
    duration: "3:11",
  },
  {
    name: "Goddamned Saint, Reprise",
    duration: "0:52",
  },
  {
    name: "From the Beach",
    duration: "3:27",
  },
  {
    name: "To the Airport",
    duration: "4:03",
  },
  {
    name: "...Despite the Weather",
    duration: "4:03",
  },
  {
    name: "Hollywood Ending",
    duration: "4:17",
  },
  {
    name: "New Blood",
    duration: "3:40",
  },
  {
    name: "Water Under the Bridge, Part 2",
    duration: "1:05",
  },
  {
    name: "Failure Isn't Forever",
    duration: "5:01",
  }
];//Celebrants
console.log("Celebrants:", addToCollection(myCollection, "Celebrants", "Nickel Creek", 2023, albumTracks));//Success!

console.log("Checking myCollection:", myCollection);

/*function displayTracks(tracksArray) {
  let trackList = "";
  for (let i = 0; i < tracksArray.length; i++) {
    let track = tracksArray[i];
    trackList += `${i + 1}. ${track.name}: ${track.duration} `;
  }
  return trackList;
} This version of the function returns a string*/

function displayTracks(tracksArray) {
  let trackList = [];
  for (let i = 0; i < tracksArray.length; i++) {
    let trackNum = tracksArray[i];
    let track = `${i + 1}. ${trackNum.name}: ${trackNum.duration}`;
    trackList.push(track);
  }
  return trackList;
}//this version of the function returns an array. Using this one for better readability/organization in the console

function showCollection(collection) {
  for (let album of collection) {
    let trackList = displayTracks(album.tracks);
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}. Track list below:`);
    console.table(trackList);
  }
}

showCollection(myCollection);//outputs correctly

function findByArtist(collection, artist) {
  let artistDiscography = [];
  for (let album of collection) {
    if (album.artist === artist) {
      artistDiscography.push(album);
    }
  }
  return artistDiscography;
}

console.log("Testing findByArtist:", findByArtist(myCollection, "Asian Kung-Fu Generation"));//should return Sol-Fa
console.log("Testing findByArtist with two matches:", findByArtist(myCollection, "Switchfoot")); //should return Oh Gravity and interrobang
console.log("Testing findByArtist with no matches:", findByArtist(myCollection, "Taylor Swift"));//should return empty array

let searchObject = {
  artist: "Nickel Creek",
  year: 2023,
};

function search(collection, searchCriteria, trackName) {
  let matchingCollection = []
  let matchingTrack = false;
  if (trackName !== undefined) {//searching if trackName was given as parameter
    for (let album of collection) {//start of album loop
      for (let track of album.tracks) {//start of tracklist loop
        if (track.name === trackName) {//start of tracklist if
          matchingTrack = true;
        }//end of tracklist if
      }//end of tracklist loop
      if (matchingTrack) {
        matchingCollection.push(album);
        matchingTrack = false;
      }
    }//end of album loop
    return matchingCollection; //end of if searching for trackName criteria

  } else if (searchCriteria === undefined || (Object.keys(searchCriteria).length === 0 && searchCriteria.constructor === Object)
    || (Object.keys(searchCriteria).length === 1 && searchCriteria.constructor === Object)
    || searchCriteria.artist === "" || searchCriteria.year === "") {
    //this conditional takes care of empty/incomplete objects if searchCriteria is an object

    return collection;

  } else if (Array.isArray(searchCriteria)) {//beginning of array section
    if (searchCriteria.length === 0 || searchCriteria[0] === undefined
      || (Object.keys(searchCriteria[0]).length === 0 && searchCriteria[0].constructor === Object)
      || (Object.keys(searchCriteria[0]).length === 1 && searchCriteria[0].constructor === Object)
      || searchCriteria[0].artist === "" || searchCriteria[0].yearPublished === "" || searchCriteria[0].artist === undefined
      || searchCriteria[0].yearPublished === undefined) {
      //this conditional accounts for empty/incomplete objects in array or empty arrays if searchCriteria is an array of objects

      return collection;
    }
    for (let album of collection) {
      if (album.artist === searchCriteria[0].artist && album.yearPublished === searchCriteria[0].yearPublished) {
        matchingCollection.push(album);
      }
    }
    return matchingCollection;
    //end of array section

  } else {
    for (let album of collection) {
      if (album.artist === searchCriteria.artist && album.yearPublished === searchCriteria.year) {
        matchingCollection.push(album);
      }
    }
    return matchingCollection;
  }//end of objects section
}//end of search function

console.log("Running search function with search criteria that exists in myCollection:", search(myCollection, searchObject));//returns correct album

searchObject = {
  artist: "The Decemberists",
  year: 2006,
}

console.log("Running second test with search criteria that exists in myCollection", search(myCollection, searchObject));//returns correct album

searchObject = {
  artist: "U2",
  year: 2004,
}
console.log("Running search object with criteria that does not exist in myCollection", search(myCollection, searchObject));
//returns empty array

console.log("Running search with empty parameter in searchObject:", search(myCollection, searchObject));
//works with empty string set to year

searchObject = {};

console.log("Running search with completely empty object:", search(myCollection, searchObject));//return full collection

searchObject.artist = "The Decemberists";

console.log("Running search with object that only has one property", search(myCollection, searchObject));//returns full collection

console.log("Running search with no search object provided:", search(myCollection));//returns full collection

//adding tests from test file below to test search with arrays:
let newPrimesCollection = [
  {
    artist: 'Hiroshi Yoshimura',
    title: 'Music For Nine Post Cards',
    yearPublished: 1982
  },
  {
    artist: 'Clifford Brown and Max Roach',
    title: 'Study in Brown',
    yearPublished: 1955
  },
  {
    artist: 'Hiroshi Yoshimura',
    title: 'Green',
    yearPublished: 1986
  },
  {
    artist: 'Cécile McLorin Salvant',
    title: 'Ghost Song',
    yearPublished: 2022
  },
  {
    artist: 'Wilco',
    title: 'Yankee Hotel Foxtrot',
    yearPublished: 2002
  },
];

let wilcoResults = [
  {
    artist: 'Wilco',
    title: 'Yankee Hotel Foxtrot',
    yearPublished: 2002
  }
];

console.log("Running search with Wilco Results as input:", search(newPrimesCollection, wilcoResults));//returns Wilco album!

let testArray = [];

console.log("Running search with empty array as input:", search(myCollection, testArray));//returns full collection!

testArray = [
  {
    artist: "Wilco",
    title: "Yankee Hotel Foxtrot",
  }
];

console.log("Running search with array containing incomplete object:", search(newPrimesCollection, testArray));//works!

testArray = [
  {
    title: "Yankee Hotel Foxtrot",
    yearPublished: 2002
  }
];

console.log("Running search with array missing different information:", search(newPrimesCollection, testArray));//Works!

testArray = [
  {
    artist: "Wilco",
  }
];

console.log("Running search with array missing even more info:", search(newPrimesCollection, testArray));//works!

testArray = [
  {}
];

console.log("Running search with array containing empty object:", search(newPrimesCollection, testArray));//works!

testArray = [
  {
    artist: "",
    title: "Yankee Hotel Foxtrot",
    yearPublished: 2002,
  }
]

console.log("Running search with array containing object with empty string:", search(newPrimesCollection, testArray));//works!

console.log("Running test with array containing info that has no match in collection:", search(myCollection, wilcoResults));//returns empty array!

//testing search with track names below

searchObject = {
  artist: "The Decemberists",
  year: 2006,
};

console.log("Running search with track name parameter:", search(myCollection, searchObject, "Rewrite"));
//function succesfully ignored the first two parameters and returned the correct album containing the song!

console.log("Running search with track name and matching criteria:", search(myCollection, searchObject, "The Island"));
//works again!

console.log("Double checking function will also ignore arrays if given track name:", search(myCollection, wilcoResults, "Celebrants"));
//still works!

console.log("Running search with track name that is not in my collection:", search(myCollection, searchObject, "Where the Streets Have No Name"));
//returns empty array!

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
