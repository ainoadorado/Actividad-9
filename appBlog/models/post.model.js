const getAll = () => {
    return db.query('select p.título, p.descripción, p.fecha, p.categoría, p.autorId, a.nombre, a.email, a.imagen from posts as p, autores as a where p.autorId=a.id');
};

const getByPostId = (postId) => {
    return db.query('select p.título, p.descripción, p.fecha, p.categoría, p.autorId, a.nombre, a.email, a.imagen from posts as p, autores as a where p.autorId=a.id and p.id=?', [postId])
};

const getByAutorId = (autorId) => {
    return db.query('select p.título, p.descripción, p.fecha, p.categoría, p.autorId, a.nombre, a.email, a.imagen from posts as p, autores as a where p.autorId=a.id and a.id=?', [autorId])
};

const createP = ({ título, descripción, fecha, categoría, autorId }) => {
    return db.query(
        'insert into clientes (título, descripción, fecha, categoría, autorId) values (?, ?, ?, ?, ?)',
        [título, descripción, fecha, categoría, autorId]
    );
};

module.exports = {
    getAll, getByPostId, getByAutorId, createP
}