import styled from 'styled-components';
import {PageHeading} from '../components/01-atoms/Headings';
import Cards from '../components/03-organisms/Cards';
import {aboutPageCards} from '../lib/content';

const Link = styled.a`
  text-decoration: underline;
  text-decoration-style: dotted;
`;

const AboutPage = () => (
  <div>
    <PageHeading>About this Project</PageHeading>
    <p>
      This webapp is a sandbox for me to experiment with new 
      technologies. It includes two projects: a frontend ReactJS 
      app for displaying and managing content and a backend node 
      app for interfacing with a GraphQL service. I'm also using 
      this site as an excuse to play around new technologies for
      proffessional development. Everything is in a public&nbsp;
      <Link href="https://github.com/nJim/dadjokes">GitHub repo</Link>
      &nbsp;if you want to check it out.
    </p>
    <Cards 
      heading='Tooling and Packages'
      cards={aboutPageCards}
    />
  </div>
);

export default AboutPage;
