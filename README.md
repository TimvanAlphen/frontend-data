# Functional-Programming The Volkskrant

De volkskarnt asked us to design an interactive visualisation for the subject: "The car in the city". To do this we get to use data from the RDW (https://opendata.rdw.nl/browse?category=Parkeren&provenance=official). This data contains information about parking spaces in big cities in the Netherlands.

## Research Question:

How do costs, accesability and special parking days (like sundays) change from a company owned parking spot to a township owned parking spot?

### Sub questions:

* How many parkinglocations are company owned and how many are owned by a township?
* Are prices the same across all parkinglocation per owner?
* Are parkinglocations with accesability options more expensive?
* Are the special parking days the same across all parkinglocations owned by the same company or township?


### Assumptions:

I'm pretty sure that company owned parking spots are going to be more expensive than township owned one's. I also think that company owned parking spots are less accessible for peaple with dissabilities and that township parkingspots are trying to be more accessible to everyone. I think special parking days are the same for both.

## Datasets and Variables:

### Dataset: 

Open Data Parkeren: GEBIEDSBEHEERDER (https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEBIEDSBEHEERDER/2uc2-nnv3)

Variables: 

* AreaManagerId (Every parkinglocation owner has their own Id code. The other datasets also show this code. This way I can connect the datasets.)
* AreaManagerDesc (This variable contains the names of every parkinglocation owner.)

### Dataset: 

Open Data Parkeren: TARIEFBEREKENING (https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TARIEFBEREKENING/nfzq-8g7y)

Variables:

* AreaManagerId 
* FareCalculationDesc (Calculating prices is unclear for now.)

### Dataset:

Open Data Parkeren: SPECIFICATIES PARKEERGEBIED (https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIFICATIES-PARKEERGEBIED/b3us-f26s/data#revert)

Variables:

* AreaManagerId
* DisabledAccess (This variable shows if the Parkinglocations are accessable for people with a disability.)

### Dataset: 

Open Data Parkeren: SPECIALE DAG (https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIALE-DAG/hpi4-mynq)

Variables:

* AreaManagerId
* NameSpecialDay (This variable shows what special days like sundays the parkinglocations have. (This doesn't say anything about how much the prices change.))
* DateSpecialDay (This variable shows the dates of these special days.)

## Most interesting functional pattern:

This function looks through all the answers in in the list of eye colors than transforms all the names to uppercase with .map. It than filters out the invalid hex codes by looking if they start with an '#' and are 7 characters long using .filter.

https://github.com/TimvanAlphen/functional-programming/blob/99b6888f349b306ff1139859019f5bc8170ccce3/exercise/cleaneyes2.js#L30

### Early sketch

![Sketch](https://github.com/TimvanAlphen/functional-programming/blob/main/img/Sketch1.jpg)

With this data visualisation I want to compare Company owned parkinglocations to township owned parking locations. To do this I came up with this rough sketch. First the user selects two parkinglocations from the dropdowns. One for company owned locations and one for township owned ones. Two stacked-barcharts will be generated that compare the price of the parkinglocation, the amount of spots for people with a disability and the amount of special parking days. This way company and township parking spots are easily compared.

### Source
These datasets are taken from opendata.rdw.nl.

https://opendata.rdw.nl/browse?category=Parkeren&provenance=official&page=3