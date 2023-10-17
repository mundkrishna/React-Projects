import { useState } from "react";

const initialRecipeList = [
  {
    id: 101,
    name: "Margarita Pizza",
    image: "https://tse2.mm.bing.net/th?id=OIP.Jd-H-LHiVSkNBlLR65nuVwHaEK&pid=Api&P=0&h=180",
    ingredients: "Pizza dough, Tomato sauce, Fresh mozzarella cheese"
  },
  {
    id: 102,
    name: "Classic Caesar Salad",
    image: "https://tse1.mm.bing.net/th?id=OIP.jJI3bTJ-diLfKDHb9-vwmwHaE8&pid=Api&P=0&h=180",
    ingredients: "Romaine lettuce, Olive oil, Parmesan cheese"
  },
  {
    id: 103,
    name: "Banana Pancakes",
    image: "https://tse4.mm.bing.net/th?id=OIP.3mPjvKqSGPi-JXVsFPVZFwHaEo&pid=Api&P=0&h=180",
    ingredients: "Ripe bananas, Milk, Eggs, Butter, flour"
  },
];

export default function App() {
  const [showHideForm, setShowHideForm] = useState(false);
  const [addNewRecipeArr, setAddNewRecipeArr] = useState(initialRecipeList);

  function handleShowForm() {
    setShowHideForm((show) => !show);
  }

  function handleAddNewRecipe(newRecipeObj) {
    setAddNewRecipeArr((addNewRecipeArr) => [...addNewRecipeArr, newRecipeObj]);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <Header />
        <RecipeList
          addNewRecipeArr={addNewRecipeArr}
        />
      </div>
      {showHideForm && <FormAddRecipe onSetNewRecipe={handleAddNewRecipe} />}
      <Button onShowHideForm={handleShowForm}>
        {showHideForm ? "close" : "Add New Recipe"}
      </Button>
    </div>
  )
}

function Header() {
  return (
    <header>
      <h1>Recipe Book</h1>
    </header>
  )
}

function RecipeList({ addNewRecipeArr }) {
  return (
    <div className="recipe-list">
      <ul>
        {addNewRecipeArr.map((recipeObj) =>
          <Recipes
            recipeObj={recipeObj}
            key={recipeObj.id}
          />
        )}
      </ul>
    </div>
  )
}

function Recipes({ recipeObj }) {
  return (
    <div>
      <li className="recipes">
        <img className="recipe-image" src={recipeObj.image} alt={recipeObj.name} />
        <div>
          <h3>{recipeObj.name}</h3>
          <p>{recipeObj.ingredients}</p>
        </div>
      </li>
    </div>
  )
}

function Button({ children, onShowHideForm }) {
  return (
    <button className="button" onClick={onShowHideForm}>{children}</button>
  )
}

function FormAddRecipe({ onSetNewRecipe }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const id = crypto.randomUUID();
    const newRecipeObj = {
      id,
      name,
      image,
      ingredients: ""
    };
    onSetNewRecipe(newRecipeObj);

    setName("");
    setImage("");
  }

  return (
    <form className="form-add-recipe" onSubmit={handleSubmit}>
      <label>Recipe Name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Image</label>
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />

      <Button>Add</Button>

    </form>
  )
}