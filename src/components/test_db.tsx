import Surreal from 'surrealdb.js';



const TestDB = () => {
    const db = new Surreal('http://127.0.0.1:8000/rpc');

    const db_t = async () => {
        await db.signin({
            user: 'root',
            pass: 'root'
        });
    
        await db.use('test', 'test');
        console.log('Reached')
    
        console.log(await db.delete('person'));
    }

    return (
        <div>
            <p>Test DB</p>
            <button onClick={db_t}>db_t</button>
        </div>
    )
}

export default TestDB;