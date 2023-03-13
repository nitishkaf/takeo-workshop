import HelloWorld from './components/HelloWorld';
import UnorderedList from './components/List';
import Heading from './components/Heading';

function App() {
  return (
    <div>

      <HelloWorld data={'Hello Hello'}>
        <p>This is passed through a  children prop</p>
      </HelloWorld>
      <Heading>This is a H1 Tag</Heading>
      <Heading>This is a H2 Tag
        <p>Hey</p>
      </Heading>

      <h6>This is a H6 Tag</h6>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta aliquam ad, placeat ut nostrum magnam sed quo, porro expedita nobis ullam veritatis. Aut ipsa cumque molestias excepturi id! <strong>Laudantium, natus.</strong></p>

      <UnorderedList>
        <li>Alaska</li>
        <li>Chicago</li>
        <li>New York</li>
        <li>San Francisco</li>
      </UnorderedList>
    </div>
  );
}

export default App;
