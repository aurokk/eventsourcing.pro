import type { NextPage } from 'next'
import Image from 'next/image'
import styled from 'styled-components'
import architectureOveview from '../public/architecture-overview.svg'

const ArchitectureOverview = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const Home: NextPage = () => {
  return (
    <div>
      <div>
        
      </div>

      <ArchitectureOverview>
        <Image
          src={architectureOveview}
          layout="responsive"
        />
      </ArchitectureOverview>

      <div></div>
    </div>
  )
}

export default Home
