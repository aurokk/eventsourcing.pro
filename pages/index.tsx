import type { NextPage } from 'next'
import Image from 'next/image'
import styled from 'styled-components'
import architectureOveview from '../public/architecture-overview.svg'


const Home: NextPage = () => {
  return (
    <div>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px', }}>
        <h1 style={{ maxWidth: '600px', }}>Event sourcing</h1>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px', }}>
        <p style={{ maxWidth: '600px', }}>It is an architectural pattern the main idea of which is to store the application's data as an immutable log of events.</p>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px', }}>
        <h2 style={{ maxWidth: '600px', }}>Overview</h2>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px', }}>
        <h3 style={{ maxWidth: '600px', }}>How it works</h3>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px', }}>
        <p style={{ maxWidth: '600px', }}></p>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', }}>
        <div style={{ margin: '30px 0', }}>
          <Image
            src={architectureOveview}
            layout="responsive"
          />
        </div>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px', }}>
        <h3 style={{ maxWidth: '600px', }}>When to use it</h3>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px', }}>
        <p style={{ maxWidth: '600px', }}></p>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px', }}>
        <h3 style={{ maxWidth: '600px', }}>Example</h3>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px', }}>
        <p style={{ maxWidth: '600px', }}></p>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px', }}>
        <h2 style={{ maxWidth: '600px', }}>Implementation</h2>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px', }}>
        <h2 style={{ maxWidth: '600px', }}>Real world</h2>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px', }}>
        <h2 style={{ maxWidth: '600px', }}>Alternatives</h2>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px', }}>
        <h2 style={{ maxWidth: '600px', }}>Extra</h2>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px', }}>
        <h2 style={{ maxWidth: '600px', }}>Literature</h2>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px', }}>
        <h2 style={{ maxWidth: '600px', }}>About the author and the site</h2>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px', }}>
        <p style={{ maxWidth: '600px', }}>My name is Dmitry Kochnev. My main programming language is .NET/C#. I'm curious about the software made right and trying to investigate problems I face as deep as I can and share the experience with other. The other information about me you can check at linkedin.</p>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px', }}>
        <h3>Ask a question</h3>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px', }}>
        <p style={{ maxWidth: '600px', }}>It would be nice if you ask questions in github issues, cuz we can discuss it openly and the update the article.</p>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px', }}>
        <h3 style={{ maxWidth: '600px', }}>Edit the article</h3>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px', }}>
        <p style={{ maxWidth: '600px', }}>If want to change the site somehow yourself, you can send me a pull request. I will review it ASAP.</p>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px', }}>
        <h3 style={{ maxWidth: '600px', }}>Support the project</h3>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px', }}>
        <p style={{ maxWidth: '600px', }}>If you want me to update the site more frequently, send me some money, it motivates me :)</p>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px', }}>
        <h3 style={{ maxWidth: '600px', }}>Reach the author</h3>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px', }}>
        <div>Telegram</div>
        <div>Linkedin</div>
        <div>Email</div>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px', }}>
        <div>Created at August 22 2022, last update at August 22 2022.</div>
      </div>
    </div>
  )
}

export default Home
