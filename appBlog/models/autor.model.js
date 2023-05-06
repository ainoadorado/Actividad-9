const getAll = () => {
    return db.query('select * from autores');
};


const getById = (autorId) => {
    return db.query('select * from autores where id=?', [autorId])
};

const createA = ({ nombre, email, imagen }) => {
    return db.query(
        'insert into autores (nombre, email, imagen) values (?, ?, ?)',
        [nombre, email, imagen]
    );
};

module.exports = {
    getAll, getById, createA
}