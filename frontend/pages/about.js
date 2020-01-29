import Cards from '../components/03-organisms/Cards';

function AboutPage() {
  // TODO: Add shape to this data in component.
  const cards = [
    {
      title: 'React',
      description: 'details'
    },
    {
      title: 'NextJS',
      description: 'details'
    },
    {
      title: 'AntD',
      description: 'details'
    },
    {
      title: 'Styled Components',
      description: 'details'
    },
    {
      title: 'Jest & Enzyme',
      description: 'details'
    },
    {
      title: 'Apollo Client',
      description: 'details'
    },
  ];

  return (
    <div>
      <div>This is the about page.</div>
      <Cards cards={cards}/>
    </div>
  );
}

export default AboutPage;
