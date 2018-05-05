const { Pool } = require('pg');
const pgParams = require('./pgParams.js').retParams();

// my queries
const sqlQuery = 'select * from TestsStatus';
const realQuery = 'select enviroment, teststatus, count(testName) from TestsStatus group by enviroment, teststatus';

const retPgData = async () => {
  const pool = new Pool(pgParams)
  const client = await pool.connect()
  try {
    const result = await client.query(realQuery)
    console.log('hello from', result.rows)
  } finally {
    client.release()
  }
}

module.exports = {
  retPgData,
}
