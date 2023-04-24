import {v4 as uuidv4} from 'uuid';
let users = []
let fav = []
export const getUsers = (req, res) => {
    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(`Quote with the Title ${user.title} added to the database`);
}
export const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
}
export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`Quote with the id ${id} deleted from the database`);
}
export const updateUser = (req, res) => {
    const { id } = req.params;
    const { title, quote, contact } = req.body;
    const user = users.find((user) => user.id === id);
    if (title) user.title = title;
    if (quote) user.quote = quote;
    // if (contact) user.contact = contact;
    res.send(`Quote with the title ${title} has been updated`);
}

export const favUser = (req, res) => {
    const { id } = req.params;
    // const fav = req.body;
    fav.push(id);
    res.send(`Quote with the Title ${id} added to the database`);
}

export const getFav = (req, res) => {
    res.send(fav);
}

export const deleteFav = (req, res) => {
    const { id } = req.params;
    fav = fav.filter((fav) => fav !== id);
    res.send(`Quote with the id ${id} deleted from the database`);
}