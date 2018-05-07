const { Pool } = require('pg');
const pgParams = require('./pgParams.js').retParams();


const realQuery = "SELECT \"Environment\", sts.\"StatusName\", count(org.\"Id\")\
  	FROM public.\"TestsStatus\" as org join \"Statuses\" as sts on \"TestStatus\" = sts.\"Id\"\
  	WHERE date_trunc('day',\"TestDate\") = to_date('30/04/2018', 'DD/MM/YYYY')\
  	GROUP BY \"Environment\", sts.\"StatusName\"";




const retPgData = async (query) => {
  // this is bringing the default query back
  query = realQuery;
  const pool = new Pool(pgParams);
  const client = await pool.connect();
  try {
    const result = await client.query(realQuery);

    return aggData(result.rows)
      .catch(err => {
        console.error(err);
      });
  } finally {
    client.release();
  }

}


const aggData = async (pgRows) => {

  const finalData = {};
  await pgRows.map(row => {

    let keys = Object.keys(row);
    let statusArr = [row[keys[1]],row[keys[2]]];

    if (!finalData[row[keys[0]]]) {
		finalData[row[keys[0]]] = []
	}
    if (statusArr[0] == 'Pass') {
      // finalData[row[keys[0]]].push(statusArr);
      finalData[row[keys[0]]][0] =(statusArr);
    } else {
      finalData[row[keys[0]]][1] =(statusArr);
    }
  })

	return finalData;
}

module.exports = {
  retPgData,
}
