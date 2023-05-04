import React from 'react';
import "./Ingredients.css"
const Ingredients = () => {
    return (
        <section id="ingredients">
            <div className="container">
                <div className="row">

                <div className="col-md-7 col-sm-7">

                </div>

                <div className="col-md-5 col-sm-5">
                    <h3>
                    Fine ingredients
                    </h3>
                    <figure>
                    <img src="./../../../public/divider2.png" alt="Divider" className="img-fluid" />
                    </figure>
                    <p>
                    If you’ve been to one of our restaurants, you’ve seen – and tasted – what keeps our customers coming back for more. Perfect
                    materials and freshly baked food, delicious Lambda cakes, muffins, and gourmet coffees make us hard to resist!
                    Stop in today and check us out!
                    </p>

                    <figure>
                    <img src="./../../../public/image1.png" alt="Ingredients" className="img-fluid" />

                    <img src="./../../../public/image2.png" alt="Ingredients" className="img-fluid" />

                    <img src="./../../../public/image3.png" alt="Ingredients" className="img-fluid" />
                    </figure>

                </div>

                </div>
            </div>
        </section>
    );
};

export default Ingredients;