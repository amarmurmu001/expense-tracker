import "./App.css";

function App() {
  return (
    <main>
      <h1>Rs 7000</h1>
      <form action="">
        <div className="basics">
          <input type="text" placeholder="+ 239 Rs rechacrge" />
          <input type="datetime-local" name="" id="" />
        </div>
        <div className="details">
          <input type="text" placeholder="Discription" />
        </div>
        <button type="submit">Add New Transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">Recharge of Jio</div>
            <div className="discription">Time for Recharge</div>
          </div>
          <div className="right">
            <div className="price">Rs 239</div>
            <div className="datetime">date-time</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Recharge of Jio</div>
            <div className="discription">Time for Recharge</div>
          </div>
          <div className="right">
            <div className="price">Rs 239</div>
            <div className="datetime">date-time</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Recharge of Jio</div>
            <div className="discription">Time for Recharge</div>
          </div>
          <div className="right">
            <div className="price">Rs 239</div>
            <div className="datetime">date-time</div>
          </div>
        </div>
          <div className="transaction">
            <div className="left">
              <div className="name">Recharge of Jio</div>
              <div className="discription">Time for Recharge</div>
            </div>
            <div className="right">
              <div className="price">Rs 239</div>
              <div className="datetime">date-time</div>
            </div>
          </div>
      </div>
    </main>
  );
}

export default App;
