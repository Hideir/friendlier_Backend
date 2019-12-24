const db = require("../../data/db"); 

const addUser = async ( newUser) => {
    return db('users')
    // Pass in the whole object into the insert statement.
    .insert(newUser);
}
const addUserProfile = async (newUserProfile) => {
    return db('profile_information')
    .insert(newUserProfile);
}
const findUsersBy = filter => db("users").where(filter);

const findProfileInformation = (filter) => {
    return db("profile_information").where(filter);
}

const findSearchedUsers = (filter) => {
    if (!filter.length) {
        console.log('attempt to clear query');
        // return a empty row to clear the search page.
        return db.select("*").from('profile_information').where(1 != 2);
    } else if(filter.length) {
        console.log('we tried to grab users');
        // return users with at least one interest.
        return db.raw(`select * from profile_information where interests @> ?::text[]`, [filter]);
    }
}
module.exports = {
    addUser,
    addUserProfile,
    findUsersBy,
    findProfileInformation,
    findSearchedUsers
}