import Cards from '../components/03-organisms/Cards';

function AboutPage() {
  const heading = 'Frontend tooling used on this project';
  // TODO: Add shape to this data in component.
  const cards = [
    {
      id: 'react',
      title: 'React',
      description: 'JavaScript library used for building user interfaces. My components are organized using Atomic Design principals.'
    },
    {
      id: 'nextjs',
      title: 'NextJS',
      description: 'Framework based on Vue.js, Node.js, Webpack and Babel.js. I\'m enjoying the server side rendering support.'
    },
    {
      id: 'antd',
      title: 'Ant Design',
      description: 'React library with a deep set of components, layouts, and building tools. It\'s written in TypeScript with predictable static types.'
    },
    {
      id: 'styled',
      title: 'Styled Components',
      description: 'Library for writting CSS-in-JS. Includes features for passing props, organizing themes, and dynamically changing elements.'
    },
    {
      id: 'storybook',
      title: 'Storybook',
      description: 'Development tool that creates a playground for components. Includes addons for validating, testing, and interacting with components.'
    },
    {
      id: 'typescript',
      title: 'TypeScript',
      description: 'A typed superset of JavaScript. I\'m using the strong static typing features to ensure code is easier to understand and debug.'
    },
    {
      id: 'jest',
      title: 'Jest & Enzyme',
      description: 'details'
    },
    {
      id: 'apollo',
      title: 'Apollo Client',
      description: 'details'
    },
  ];

  return (
    <div>
      <div>This is the about page.</div>
      <Cards 
        heading={heading}
        cards={cards}
      />
    </div>
  );
}

export default AboutPage;
