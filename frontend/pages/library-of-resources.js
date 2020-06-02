import React, {useState} from 'react'
import Layout from '../components/layout'
const CATEGORIES = [
  'PEACE',
  'UNITY',
  'MOTHER EARTH',
  'GRIEF',
  'CELEBRATION'
];
const LOREM_IPSUM = `
Lorem Ipsum is simply dummy text of the printing 
and typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when an unknown printer 
took a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into 
electronic typesetting, remaining essentially unchanged. 
It was popularised in the 1960s with the release of Letraset
sheets containing Lorem Ipsum passages, and more recently with
desktop publishing software like Aldus PageMaker including versions
of Lorem Ipsum.
`;
const RESOURCES = [
  {
    title: 'Prayer for Serenity PEACE',
    content: LOREM_IPSUM,
    author: 'Reinhold Niebuhr (1892-1971)',
    category: 'PEACE'
  },
  {
    title: 'Prayer for Serenity MOTHER EARTH',
    content: LOREM_IPSUM,
    author: 'Reinhold Niebuhr (1892-1971)',
    category: 'MOTHER EARTH'
  },
  {
    title: 'Prayer for Serenity MOTHER EARTH 2',
    content: LOREM_IPSUM,
    author: 'Reinhold Niebuhr (1892-1971)',
    category: 'MOTHER EARTH'
  },
  {
    title: 'Prayer for Serenity UNITY',
    content: LOREM_IPSUM,
    author: 'Reinhold Niebuhr (1892-1971)',
    category: 'UNITY'
  }
]

const LibraryOfResources = () => {
  const Categories = CATEGORIES;
  const Resources = RESOURCES;
  let [categorySelected, setCategory] = useState('');

  const handleSelectCategory = (category) => () => {
    setCategory(category);
  }

  const handleShare = (title) => () => {
    alert('Share category', title);
  }

  return (
    <Layout>
      <h2>
        LIBRARY
      </h2>
      <h1>
        Of resources
      </h1>
      <p>
        {Categories.map((category) => (
          <button onClick={handleSelectCategory(category)}>
            {category}
          </button>
        ))}
      </p>
      { Resources.filter(({
        category
      }) => {console.log(category, categorySelected); return category === categorySelected || categorySelected === ''}).map(
        ({ category, title, content, author }) => 
        <>
          <h2>
            {title}
          </h2>
          <p>
            {content}
          </p>
          <p>
            {author}
          </p>
          <button onClick={handleShare(title)}>Share</button>
        </>
      )}
    </Layout>
  );
}


export default LibraryOfResources
