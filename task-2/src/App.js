import "./assets/styles/style.scss";
import Header from "./components/Header";
import Menu from "./components/Menu";
import StatCard from "./components/StatCard";
import iconPersonal from "./assets/images/icon-personal-loan.svg";
import iconCorporate from "./assets/images/icon-corp-loan.svg";
import iconBusiness from "./assets/images/icon-busi-loan.svg";
import iconCustom from "./assets/images/icon-custom-loan.svg";
import ActiveLoansTable from "./components/ActiveLoansTable";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="lyt-content">
        <Menu />
        <div className="content-wrap">
          <ul className="bs-card-list">
            <li className="item">
              <StatCard
                icon={iconPersonal}
                title={"Personal Loans"}
                value={"$50,000"}
              />
            </li>
            <li className="item">
              <StatCard
                icon={iconCorporate}
                title={"Corporate Loans"}
                value={"$100,000"}
              />
            </li>
            <li className="item">
              <StatCard
                icon={iconBusiness}
                title={"Business Loans"}
                value={"$500,000"}
              />
            </li>
            <li className="item">
              <StatCard
                icon={iconCustom}
                title={"Custom Loans"}
                value={"Choose Money"}
              />
            </li>
          </ul>
          <div className="sec">
            <h2 className="sec-title">Active Loans Overview</h2>
            <div className="sec-cont">
              <ActiveLoansTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
