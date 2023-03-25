let AppDataSource = require("./datasource.config");

const datasource = AppDataSource() // config is one that is defined in datasource.config.ts file

datasource.initialize();

export default datasource; 