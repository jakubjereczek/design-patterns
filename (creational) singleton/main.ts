import { APIConnection } from "./API";

const api = APIConnection.getInstance();
api.query('query1')
api.query('query2')

const api2 = APIConnection.getInstance();
api2.query('query1')
