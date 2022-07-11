import React from "react";
import myWorld from "../../../../img/myworld.jpg";

function World() {
  return (
    <div className="contenedor">
      <h3 className="title">Mi mundo</h3>
      <div className="contenedor-world">
        <div className="flecha"></div>
        <img className="personal-world-img" src={myWorld} alt="photo-world" />
        <div className="paragraph-world">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          dicta mollitia voluptas? Quibusdam et deleniti, omnis in enim facere
          tempore delectus quis facilis vel. At iste dolores dolorem earum quae,
          repudiandae, eos dicta magnam ipsum, culpa harum vitae consectetur
          suscipit animi odio iusto quibusdam nisi libero eveniet sequi
          assumenda minus?
        </div>
        <div className="flecha"></div>
      </div>
    </div>
  );
}

export default World;
