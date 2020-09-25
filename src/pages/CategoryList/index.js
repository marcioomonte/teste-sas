import React from "react";
import "./styles.css";
import PageHeader from "../../components/PageHeader";
import CategoryButton from "../../components/CategoryButton";
import useDeviceWidth from "../../hooks/useDeviceWidth";
import useCategories from "../../hooks/useCategories";

function CategoryList() {
  const [deviceWidth] = useDeviceWidth();
  const [categories] = useCategories();
  return (
    <>
      <div id="page-list-category" className="container">
        <PageHeader title={deviceWidth < 728 ? "Dev Mobile" : "Dev Web"} />
        {/* <div > */}

        <div className="page-subtitle">
          <p>Categories</p>
        </div>

        <main>
          <div className="list-category">
            {categories.length !== 0
              ? categories.map((category) => (
                  <CategoryButton category={category} />
                ))
              : `Sem questoes cadastradas`}
          </div>
        </main>
      </div>
    </>
  );
}

export default CategoryList;
