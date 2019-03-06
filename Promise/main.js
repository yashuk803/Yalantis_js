const users = [
    {id: 1, name: 'Bob'},
    {id: 2, name: 'Joe'},
    {id: 3, name: 'Don', groupId: 1},
    {id: 4, name: 'Kally'},
    {name: 'Alex'},
    {name: 'John'},
];

const groups = [
    {id: 1, title: 'First Group'},
    {id: 2, title: 'Last Group'},
];

const ms = 1000;

/**
 * Create new user
 *
 * @param {object} user
 * @returns {promise}
 */
const createUsers = (user) => {
    return new Promise((resolve, reject) => {
        user.id = Math.floor(Math.random() * 10) + 1;
        return setTimeout(() => resolve(user), ms)
    })
};

/**
 * Set users group
 *
 * @param {object} user
 * @param {int} group - number group
 * @returns {promise}
 */
const setGroupUsers = (user, group) => {
    return new Promise((resolve, reject) => {
        user.groupId = group;
        return setTimeout(() => resolve(user), ms)
    })
};


/**
 * Set users group
 *
 * @param {array} users
 * @param {int} group - number group
 * @returns {array} - array users
 */
const addSelectedGroupToUsers = async (users, group) => {

    Promise.all(
        users.map(async (user, i) => {
            if(!user.id) {
               const createUser =  await createUsers(user);
            }
            if(!user.groupId) {
                const setGroupUser = await setGroupUsers(user, group);
            }
        })
    );
    return users

};

addSelectedGroupToUsers(users, groups[1].id)
    .then((resolve) => console.log(resolve));