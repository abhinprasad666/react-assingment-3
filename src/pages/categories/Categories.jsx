import React, { useEffect, useState } from "react";
import "./Categories.scss";
import axios from "axios";
import CardCategories from "./CardCategories";
import { Container, Row, Col } from "react-bootstrap";

const Categories = () => {
    const [category, setCategory] = useState([]);
    const [showOneCategory, setshowOneCategory] = useState("Beef");
    const [favoriteDish, setFavoriteDish] = useState();
    const [activatedDish, setActivatedDish] = useState("Beef");

    // get categories

    const getCategories = () => {
        axios("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then((res) => {
                setCategory(res.data.categories);
                setLodingCategory(false);
            })
            .catch((err) => {
                console.log("error in category:", err);
            });
    };

    //use Effect

    useEffect(() => {
        getCategories();
    }, []);

    console.log("categories are:", category);

    // show user select favorite dishes

    const favoriteDishHandler = (favDish) => {
        setFavoriteDish(favDish);
        //showOnlyCategory change value
        setshowOneCategory("");
        setActivatedDish("");
    };

    // map all categories

    const listCategories = category?.map((res) => {
        return (
            <li
                className={`ms-5 fav-category  ${
                    res.strCategory === favoriteDish ? "active" : "" || res.strCategory === activatedDish ? "beef" : ""
                } `}
                onClick={() => {
                    favoriteDishHandler(res.strCategory);
                }}
            >
                {res.strCategory}
            </li>
        );
    });

    return (
        <Container>
            <Row className="my-5  ">
                <Col className="category-name">
                    <h1>Select Your Favorite Dishes</h1>
                </Col>
            </Row>
            <Row className="my-5 list-container pe-5">
                <Col>
                    <ul className="list-allCategory  flex-row">{listCategories}</ul>
                </Col>
            </Row>

            <Row className="me-4">
                <CardCategories favoriteFood={favoriteDish} showOneCategory={showOneCategory} />
            </Row>
        </Container>
    );
};

export default Categories;
