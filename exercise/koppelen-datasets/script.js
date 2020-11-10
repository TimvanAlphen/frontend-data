//Code with help from Gijs Laarman
const ownersJSON = 'https://opendata.rdw.nl/resource/2uc2-nnv3.json?$limit=10000';
const specificationsJSON = 'https://opendata.rdw.nl/resource/b3us-f26s.json?$limit=10000';

// Get multiple datasets with an await function
async function getDatasets() {
  const areaIDs = await getData(ownersJSON);
  const specifications = await getData(specificationsJSON);

  return [areaIDs, specifications];
  
}
function combineData([areaIDs, specifications]) {
  return areaIDs.map((area) => {
    const areaId = area.areamanagerid;

    // Get all the specifications for this ID.
    const allThisData = specifications.filter(
      (spec) => spec.areamanagerid === areaId
    );

    // Reduce the capacity of all the objects into an added up number.
    const capacityAddedUp = allThisData.reduce(
      (accumulator, { capacity }) => accumulator + Number(capacity),
      0
    );

    return {
      id: area.areamanagerid,
      name: area.areamanagerdesc,
      startdata: area.startdateareamanagerid,
      enddata: area.enddateareamanagerid,
      capacity: capacityAddedUp, // For each specification we want to add up this number,
      vehicleheight: area.maximumvehicleheight,
      
    };
  });
}

getDatasets().then((data) => {
  const [areaIDs, specifications] = data; // -> destructuring the data array into usable variables.

  // How do we fetch all the right data that fits with the areamanagerid
/*
  // Desired object for each item:
  const obj = {
    areamanagerid: '1235',
    name: 'Katwijk',
    startdata: '20141010',
    capacity: 1000 + 2000, // For each specification we want to add up this number,
  };
*/
  // Use our function we created to combine both datasets.
  const combinedData = combineData(data)

  // Get rid of all the area's that have no capacity.
  const filteredCombinedData = combinedData.filter(item => item.capacity > 0)
  
  // Log output or do something else
  console.log(filteredCombinedData);
  //console.log(combinedData);
});

async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();

  return data;
}

/*


//returns all values for for a certain key in an array of data.
function filterData(dataArray, key) {
  return dataArray.map((item) => item[key]);
}

//Returns all unique values in an array
function listUnique(dataArray) {
  let uniqueArray = [];
  dataArray.map((item) => {
    if (uniqueArray.indexOf(item) == -1) {
      uniqueArray.push(item);
    }
  });
  return uniqueArray;
}

//Compares two arrrays and returns the values that are present in array1 but not array2.
function compareArray(array1, array2){
	return valuesOnlyPresentInArray1
}

//Returns the number of times a value is present in an array
function countValuesInArray(valueArray, specificValue){
 let count = 0
 valueArray.forEach(item => {
 	if (item == specificValue) {
 		count += 1
 	}
 })
 return count
}
*/
