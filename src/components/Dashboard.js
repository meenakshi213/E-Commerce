import MainNavbar from "./MainNavbar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./../css/Login.css";
import SecondNavbar from "./SecondNavbar";
import { Description } from "./Description";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const carousel = [
    "https://f.nooncdn.com/mpcms/EN0001/assets/784e958c-65ea-4933-a896-7cdc90fe0488.png",
    "https://f.nooncdn.com/mpcms/EN0001/assets/83b71291-65f5-4fcc-8db8-a72d91b32426.jpg",
    "https://f.nooncdn.com/mpcms/EN0001/assets/3565e4f6-540e-4a2c-8f34-c82244a2a4e0.png",
    "https://f.nooncdn.com/mpcms/EN0001/assets/56921ba5-3479-46c4-8b02-4874d7f38489.png",
    "https://f.nooncdn.com/mpcms/EN0001/assets/dacd8bfa-5223-4ac1-bb3c-dc01c5b2d0f7.png",
    "https://f.nooncdn.com/mpcms/EN0001/assets/69a0c337-ef13-4fbd-a138-583e28dbbb17.gif",
  ];
  const category = [
    "https://f.nooncdn.com/mpcms/EN0001/assets/cf847f24-9b25-4a43-b2b1-ff8881fb51ab.png",
    "	https://f.nooncdn.com/mpcms/EN0001/assets/bcf45499-2c10-4dbd-b419-f3702e46c0ec.png",
    "	https://f.nooncdn.com/mpcms/EN0001/assets/65299a9c-1128-4f49-908e-b84fe793b38b.png",
    "https://f.nooncdn.com/mpcms/EN0001/assets/c9289a52-80e4-46ce-9a39-47c408ea902a.png",
    "https://f.nooncdn.com/mpcms/EN0001/assets/daaee684-f30a-4896-9f8b-02405aec5dca.png",
    "https://f.nooncdn.com/mpcms/EN0001/assets/fa424b75-dd11-4939-80c3-5090e0d691e7.png",
    "https://f.nooncdn.com/mpcms/EN0001/assets/ed889b28-66e2-4ee0-aa41-be4c885ca396.png",
    "https://f.nooncdn.com/mpcms/EN0001/assets/67edd848-2b6f-4c93-b2e6-c72879bafb03.png",
    "https://f.nooncdn.com/mpcms/EN0001/assets/1e51e3ef-2992-47b8-b256-8f9ffd77f968.png",
    "https://f.nooncdn.com/mpcms/EN0001/assets/c8ebfa8d-52db-4352-b12d-57ee96108e18.png",
  ];

  if (!localStorage.getItem("token")) {
    return navigate("/");
  }
  return (
    <>
      <MainNavbar />
      <SecondNavbar />
      <img
        src="https://f.nooncdn.com/mpcms/EN0001/assets/35ed38ac-b1f1-4d24-a7c3-a21aafc803c0.png"
        alt="/welcome-new-user"
        class="sc-hHLeRK kjhlEP"
        className="Image1"
      />
      <Carousel autoPlay>
        {carousel.map((item) => (
          <div>
            <img className="Image2" src={item} />{" "}
          </div>
        ))}
      </Carousel>
      <div style={{ display: "flex" }}>
        {category.map((item) => (
          <img className="Image3" src={item} alt="Avatar" />
        ))}
      </div>
      <p className="titleHeader">Recommended for you</p>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {Description.map((item) => (
          <div
            style={{
              border: "1px solid #52595D",
              width: "17%",
              backgroundColor: "#EBF4FA",
              borderRadius: "8px",
            }}
          >
            <img style={{ width: "150px", height: "190px" }} src={item.image} />
            <h6>{item.title}</h6>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default Dashboard;
