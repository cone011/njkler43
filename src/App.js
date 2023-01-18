import React, { Component, useState } from "react";
import posts from "./posts";

// Modifica el componente App para implmentar la funcionalidad requerida

const App = () => {
  const [list, SetList] = useState(posts);
  const onValueChanged = (event) => {
    let valueSearched = event.target.value.toLowerCase();
    let result = posts.filter((item) =>
      item.title.toLowerCase().includes(valueSearched)
    );
    SetList(result);
  };

  return (
    <div>
      <div className="filter">
        <input
          type="text"
          onChange={onValueChanged}
          placeholder="Ingresa el término de búsqueda"
        />
      </div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <a href={item.url}>
              <img src={item.image} />
            </a>
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <div className="filter">
//           <input type="text" placeholder="Ingresa el término de búsqueda" />
//         </div>
//         <ul>
//           <li>
//             <a href={posts[0].url}><img src={posts[0].image } /></a>
//             <p>{ posts[0].title }</p>
//           </li>
//         </ul>
//       </div>
//     )
//   }
// }

export default App;
