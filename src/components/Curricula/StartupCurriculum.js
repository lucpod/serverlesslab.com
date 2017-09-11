import { h } from 'preact'

const StartupCurriculum = () => (
  <div className='content'>
    <p className='is-size-4'>In this curriculum we will build from scratch an <strong>application to sell event tickets</strong></p>
    <p className='is-size-5'>Class duration: <strong>8 hours</strong> (1 full day)</p>
    <ul className='is-size-6'>
      <li>What is Serverless and what is AWS Lambda</li>
      <li>Building a real-world serverless application on AWS</li>
      <li>Our first lambda on the AWS console</li>
      <li>Locale development and testing</li>
      <li>SAM template and Cloudformation deployment</li>
      <li>Manage sensible configuration values with Environment Variables</li>
      <li>Building an API to list events</li>
      <li>Introduction to Dynamo DB</li>
      <li>Store events in Dynamo DB</li>
      <li>Use data from Dynamo DB in our event listing API</li>
      <li>Introduction to S3 and CloudFront</li>
      <li>Build a single page serverless application</li>
      <li>Consume our serverless RESTful API from the serverless application</li>
      <li>Create a form to purchase event tickets</li>
      <li>Process the form input with a POST API Lambda Function</li>
      <li>Form validation and errors management</li>
      <li>Introduction to SNS and SQS</li>
      <li>Publishing a message on SQS when a purchase happens</li>
      <li>Creating a worker Lambda to send tickets to the users</li>
      <li>Logging, monitoring and debugging</li>
      <li>Tips and tricks for improved quality and productivity</li>
      <li>Recap & additional learning resources</li>
    </ul>
  </div>
)

export default StartupCurriculum
