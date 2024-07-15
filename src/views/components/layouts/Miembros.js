import React from "react";
import img_1 from '../../../img/igms/foto_O.jpg';
import '../../../css/Style.css'; 

const Miembros = () => {
  const members = [
    {
      imgSrc: img_1,
      title: "Card title 1",
      text: ""
    },
    {
      imgSrc: img_1,
      title: "Card title 2",
      text: ""
    },
    {
      imgSrc: img_1,
      title: "Card title 3",
      text: ""
    },
    {
      imgSrc: img_1,
      title: "Card title 4",
      text: ""
    }
  ];

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {members.map((member, index) => (
        <div className="col" key={index}>
          <div className="card h-100 text-center">
            <div className="card-img-container">
              <img src={member.imgSrc} className="card-img-top circular-img mx-auto d-block" alt={member.title} />
            </div>
            <div className="card-body">
              <h5 className="card-title">{member.title}</h5>
              <p className="card-text">{member.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Miembros;
