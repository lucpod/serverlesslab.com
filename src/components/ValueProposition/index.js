import { h } from 'preact'

import planetaryIcon from '../icons/planetarysystem.svg'

const ValueProposition = () =>
  (<section id='value-proposition' className='section value-proposition'>
    <div className='container'>
      <div className='content'>
        <h1 className='title'>Our offer</h1>
      </div>
      <div className='columns'>
        <div className='column is-three-quarters'>
          <div className='content'>
            <h2>Serverless Lab has designed a training curriculum to
            &nbsp;get your organisation ready to work with serverless.</h2>
            <p>
              Serverless Lab covers all the topics needed to build enterprise
              &nbsp;ready applications taking advantage of the Serverless paradigm and the
              &nbsp;<strong>AWS cloud infrastructure</strong>.<br />
              Our practical curriculum includes the main serverless technologies like
              &nbsp;<strong>Lambda Functions</strong>,
              &nbsp;<strong>API gateway</strong>,
              &nbsp;<strong>Dynamo DB</strong>,
              &nbsp;<strong>S3</strong>,
              &nbsp;<strong>RDS</strong>,
              &nbsp;<strong>Cloudwatch</strong> and covers a variety of topics from the basic
              &nbsp;to advanced topics like
              &nbsp;<strong>networking</strong>,
              &nbsp;<strong>performance</strong>,
              &nbsp;<strong>security</strong>,
              &nbsp;<strong>troubleshooting</strong> and <strong>continuous delivery</strong>.
            </p>
          </div>
        </div>
        <div className='column'>
          <img src={planetaryIcon} style={{width: '100%', maxWidth: '10em'}} />
        </div>
      </div>
    </div>
  </section>)

export default ValueProposition
