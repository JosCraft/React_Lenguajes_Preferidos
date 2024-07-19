import React from "react";
import img_1 from '../../../img/igms/foto_O.jpg';
import '../../../css/Style.css'; 

const Miembros = () => {
  const members = [
    {
      imgSrc: img_1,
      title: "Suxo Daza Victor Joel",
      text: ""
    },
    {
      imgSrc: img_1,
      title: "Conde Sanchez Daniel Mirko",
      text: ""
    },
    {
      imgSrc: img_1,
      title: "Espinal Alvarez Alan Leonardo",
      text: ""
    },
    {
      imgSrc: img_1,
      title: "Aruquipa Ticona Samir Elias",
      text: ""
    },
    {
      imgSrc: img_1,
      title: "Gutierrez quispe Victor Andres",
      text: ""
    },
    {
      imgSrc: img_1,
      title: "Lizarraga Zabala Edward Yamir",
      text: ""
    },
    {
      imgSrc: img_1,
      title: "Luque Tarqui Marcelo",
      text: ""
    },
    {
      imgSrc: img_1,
      title: "Mercado Tumiri Gerson",
      text: ""
    },
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
