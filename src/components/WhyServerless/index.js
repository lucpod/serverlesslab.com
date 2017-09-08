import { h } from 'preact'

const Hero = () =>
  (<section className='why-serverless'>
    <div className='container'>
      <div className='content'>
        <h2>Why is time to jump into serverless?</h2>

        <p>
          The serverless paradigm let developers shift their focus
           from the server level to the task level, allowing organisations to move
           faster and with greater focus on delivering value to their customers
           rather than being stuck with infrastructural concerns.
        </p>

        <p>
          If you are a startup or if you are building a new product, serverless
           will allow you to greatly shorten the time to production and to
          <strong>speed up the development-release-test loop</strong> allowing
           you to <strong>find your product-market fit faster</strong>.
        </p>

        <p>
          If you want to migrate an existing product (or parts of it) to serverless,
          you will then benefit of <strong>greater agility</strong> and
          <strong>ability to integrate with other platforms or release new
          features quickly</strong>, which will give you a
          <strong>sensible advantage over your competitors</strong>.
        </p>

        <p>
          But that’s not all, there are several other important advantages that
          come with serverless architectures:
        </p>

        <ul>
          <li>
            <strong>Auto-scalability</strong>: serverless infrastructure is
            fully managed. Developers don’t need to implement code to scale and
            administrators don’t need to upgrade servers or add additional ones.
          </li>

          <li>
            <strong>High availability & Geolocation</strong>: since the
            infrastructure is fully managed you don’t have to worry about
            maintaining uptime on an machinery level, since this is guaranteed
            by the provider. Plus distributing your app over different
            geographic locations for reduced latency is just  a click away.
          </li>

          <li>
            <strong>Efficiency & cost</strong>: Serverless has a ‘pay as you use’
            model: you pay for the runtime of your function and the time spent
            executing your code, so you incur the cost of unutilized functions
            as seen in a cloud computing model where even ‘idle’ resources
            have to be paid for.
          </li>
        </ul>

      </div>
    </div>
  </section>)

export default Hero