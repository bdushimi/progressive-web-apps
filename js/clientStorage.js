const carInstance = localforage.createInstance({
    name: "cars",

}) 

export const addCars = async (newCars) => { 
    await carInstance.setItem("newcars",newCars);
}