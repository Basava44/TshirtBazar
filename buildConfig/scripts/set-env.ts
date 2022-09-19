var yargs = require('yargs');
var fs = require('fs');
var path = require('path');
let countryVal;

const yargsResult = yargs
  .options({
    country: {
      alias: 'cn',
      describe: 'enter Country eg npm run --cn malawi or --country country',
      demandOption: true,
    },
  })
  .help().argv;

let configData;
countryVal = yargsResult.country;

console.log(`running on country = ${countryVal}`);

const localEnvPath = path.join(
  __dirname,
  '../../src/environments/environment.ts'
);

let writeFile = (savPath: any, data: any) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(savPath, data, function (err: any) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

let ReadFile = (srcPath: any) => {
  return new Promise((resolve, reject) => {
    fs.readFile(srcPath, 'utf8', (err: any, data: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

let returnConfigObject = (config: any, env: any) => {
  let envFile = `
    export const environment = {
      production: false,
      envName: '${env}',
      config: ${config}
    };
    `;
  return envFile;
};

async function countryConfig(country: any) {
  let data = await ReadFile(
    path.join(
      __dirname,
      `../../buildConfig/constants/${country}/AppConstant.constant.json`
    )
  );
  return data;
}

countryConfig(countryVal).then((data: any) => {
  configData = data;
  const localConstant = returnConfigObject(configData, 'local');
  const localEnvPath = path.join(
    __dirname,
    '../../src/environments/environment.ts'
  );
  // console.log(data);
  writeFile(localEnvPath, localConstant).then(
    () => {
      console.log('environment updated for local');
    },
    (err) => {
      console.log('Unable to update environment file to local');
    }
  );
});
