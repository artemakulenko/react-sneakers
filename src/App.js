import Header from "./components/Header/Header";
import Card from "./components/Card";
import Banner from "./components/Banner";

const arr = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999,
    imgUrl: '/img/product1.jpg'
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 12999,
    imgUrl: '/img/product2.jpg'
  },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 1,
    imgUrl: '/img/product3.png'
  },
  {
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 1,
    imgUrl: '/img/product4.png'
  },
  {
    title: 'Мужские Кроссовки Under Armour Curry 8',
    price: 1,
    imgUrl: '/img/product5.png'
  },
]

function App() {
  return (
    <div className="app">
      <Header />
      <Banner/>
      <div className="content">
        <div className="container">
          <h1 className="content__title">Все кроссовки</h1>
        </div>

        <section className="sneakers">
          <div className="container">
            <div className="sneakers__grid">
              {arr.map(item => {
                return <Card 
                  title={item.title}
                  price={item.price}
                  imgUrl={item.imgUrl}
                  displayItem={() => console.log(item)}
                  />
                })}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;