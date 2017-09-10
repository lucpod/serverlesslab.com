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
            <h2 className='is-size-2'>
              Serverless Lab has designed a training curriculum to get your organisation ready to work with serverless.
            </h2>
            <p className='is-size-4 has-text-grey-dark'>
              Serverless Lab covers all the topics needed to build enterprise ready applications taking advantage of the Serverless paradigm and the <strong>AWS cloud infrastructure</strong>.<br />
              Our practical curriculum includes the main serverless technologies like <strong>Lambda Functions</strong>, <strong>API gateway</strong>, <strong>Dynamo DB</strong>, <strong>S3</strong>, <strong>RDS</strong>, <strong>Cloudwatch</strong> and covers a variety of topics from the basic to advanced topics like <strong>networking</strong>, <strong>performance</strong>, <strong>security</strong>, <strong>troubleshooting</strong> and <strong>continuous delivery</strong>.
            </p>
            <p>
              <a href='#' className='button is-info is-large'>Talk with us</a>
            </p>
          </div>
        </div>
        <div className='column is-hidden-mobile'>
          <p className='has-text-centered'>
            <img className='section-icon' src={planetaryIcon} />
          </p>
        </div>
      </div>
    </div>
  </section>)

export default ValueProposition
