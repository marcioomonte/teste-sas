import React from "react";

import PageHeader from "../../components/PageHeader";
import CategoryButton from "../../components/CategoryButton";
import useDeviceWidth from "../../hooks/useDeviceWidth";
import useCategories from "../../hooks/useCategories";
import Modal from "../../components/Modal";

import "./styles.css";
function CategoryList() {
  const [deviceWidth] = useDeviceWidth();
  const [categories] = useCategories();
  return (
    <>
      <div id="page-list-category" className="container">
        <PageHeader title={deviceWidth < 728 ? "Dev Mobile" : "Dev Web"} />

        <div className="page-subtitle">
          <p>Categories</p>
        </div>

        <main>
          <div className="list-category">
            {categories.length !== 0
              ? categories.map((category) => (
                  <CategoryButton key={category.id} category={category} />
                ))
              : `Sem questoes cadastradas`}
          </div>
        </main>
      </div>
      <Modal visible={true} />
    </>
  );
}

export default CategoryList;