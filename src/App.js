import BlockImgs from './blockImgs';
import Header   from   "./Header";

import './css/App.css';


function App() {
  const data = [
    {title: "Hey",    imgSrc: "https://source.unsplash.com/gYl-UtwNg_I/1500x1500"}, 
    {title: "Let's",  imgSrc: "https://source.unsplash.com/rFKUFzjPYiQ/1500x1500"},
    {title: "Give",   imgSrc: "https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d"},
    {title: "All",    imgSrc: "https://source.unsplash.com/ITjiVXcwVng/1500x1500"},
    {title: "You Can",imgSrc: "https://source.unsplash.com/3MNzGlQM7qs/1500x1500"}
  ]; 


  return (
      <div className="app">
        <Header />
        <BlockImgs data={data}/>
      </div>
  );
}

export default App;
