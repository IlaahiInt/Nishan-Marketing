const FtpDeploy = require("ftp-deploy");
const config = require("./deploy.config.json");

const ftpDeploy = new FtpDeploy();

ftpDeploy
  .deploy(config)
  .then(() => console.log("Deploy complete!"))
  .catch(err => console.log(err)); 