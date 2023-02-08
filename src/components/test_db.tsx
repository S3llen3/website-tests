import Surreal from 'surrealdb.js';

const db_t = async () => {
    console.log('Reached')
    const db = new Surreal('http://127.0.0.1:8000/rpc');
    await db.signin({
        user: 'root',
        pass: 'root'
    });

    await db.use('test', 'test');

    await db.delete('person');
}

const TestDB = () => {

    return (
        <div>
            <p>Test DB</p>
            <button onClick={db_t}>db_t</button>
        </div>
    )
}

export default TestDB;