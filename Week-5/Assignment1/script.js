const getUserIdFromDB = () => 'ElonM@2022';
const getUserNameFromDB = () => 'Elon Musk';           
const getUserAddressFromDB = () => 'Silicon Valley, USA';

/* 
The below mixed function is a combination of generator and async/await functions.
It gets the data from three call back functions getUserIdFromDB(), getUserNameFromDB(), getUserAddressFromDB().
*/
async function* mixedFunction(getUserIdFromDB, getUserNameFromDB, getUserAddressFromDB) {
    const userId = await getUserIdFromDB();
    yield userId;

    const userName = await getUserNameFromDB();
    yield userName;

    const userAddress = await getUserAddressFromDB();
    yield userAddress;
}

/* 
The mixedFunction() do not get executed fully. The next method executes the function till the next yield.
So we are calling next() three times to execute three call back functions.
*/
const iteration = mixedFunction(getUserIdFromDB, getUserNameFromDB, getUserAddressFromDB);
iteration.next().then((value) => console.log(value));
iteration.next().then((value) => console.log(value));
iteration.next().then((value) => console.log(value));


