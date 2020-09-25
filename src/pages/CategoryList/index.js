import React from "react";
import "./styles.css";
import PageHeader from "../../components/PageHeader";
import CategoryButton from "../../components/CategoryButton";
import { categories } from "../../utils/categories";
import useDeviceWidth from "../../hooks/useDeviceWidth";

function CategoryList() {
  const [deviceWidth] = useDeviceWidth();

  return (
    <>
      <PageHeader title={deviceWidth < 728 ? "Dev Mobile" : "Dev Web"} />
      <div className="list-container">
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
