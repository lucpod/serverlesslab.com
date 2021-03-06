import { h } from 'preact'
import planetaryIcon from '../icons/planetarysystem.svg'
import TalkToUsButton from '../utils/TalkToUsButton'

const ValueProposition = () =>
  (<div>
    <section id='value-proposition' className='section value-proposition'>
      <div className='container'>
        <div className='content'>
          <h1 data-aos='fade-up' className='title'>Our offer</h1>
        </div>
        <div className='columns'>
          <div className='column is-three-quarters' data-aos='fade-right' data-aos-delay='100'>
            <div className='content'>
              <h2 className='is-size-2'>
              Serverless Lab has designed a training curriculum to get your organisation ready to work with serverless.
              </h2>
              <p className='is-size-4 has-text-grey-dark'>
              Serverless Lab covers topics needed to build enterprise ready applications taking advantage of the Serverless paradigm and the <strong>AWS cloud infrastructure</strong>.<br />
              Our curriculum includes learning <strong>Lambda Functions</strong>, <strong>API gateway</strong>, <strong>Dynamo DB</strong>, <strong>S3</strong>, <strong>RDS</strong>, <strong>Cloudwatch</strong> and covers from basic to advanced topics like <strong>networking</strong>, <strong>performance</strong>, <strong>security</strong>, <strong>troubleshooting</strong> and <strong>continuous delivery</strong>.
              </p>
              <p>
                <TalkToUsButton />
              </p>
            </div>
          </div>
          <div className='column is-hidden-mobile'>
            <p className='has-text-centered' data-aos='fade-up'>
              <img className='section-icon' src={planetaryIcon} />
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
  )

export default ValueProposition
