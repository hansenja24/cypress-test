const LOG4JS = require('log4js');
let logger = LOG4JS.getLogger('NemoSiteScraper Lambda');
logger.level = 'debug';

const async = require('async');

const request = require('request');

const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();
const s3 = new AWS.S3();

//Lambda Handler
exports.handler = function (event, context, callback) {
    // https://xutts546ha.execute-api.us-west-2.amazonaws.com/Test
        context.fail('Nothing passed in!');
    } else {

        let emailInput = event.body.email;
        let params = {
            TableName: 'GithubId',
            Key: {
                emailinput: emailInput
            }
        };

        //Check if the product input number is already exist in database or not
        dynamodb.scan(params, (err, data) => {
          if (err) {
                  console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
              } else {
                  console.log("Query succeeded.");
                  let result
                  data.Items.forEach(function(item) {
                      result = item.emailinput;
                  });
                  context.succeed(result)
              }
        });
      }
}
