import React from 'react';

import PageHeader from '../../components/PageHeader';
import CategoryButton from '../../components/CategoryButton';
import useDeviceWidth from '../../hooks/useDeviceWidth';
import useCategories from '../../hooks/useCategories';
import { startTest, useTestContext } from '../../contexts/testContext';

import './styles.css';
import { useHistory } from 'react-router-dom';

function CategoryList() {
  const { tests, testDispatcher } = useTestContext();

  const [deviceWidth] = useDeviceWidth();
  const [categories] = useCategories();
  const history = useHistory();

  const handleCategoryButton = (_category) => {
    const matchTestCategory = tests.tests?.find(
      (test) => test.category === _category.name
    );

    testDispatcher(
      startTest({
        category: _category.name,
        answered_questions: matchTestCategory?.answered_questions || 0,
        answers: matchTestCategory?.answers || [],
      })
    );
    history.push('/questions', _category);
  };

  return (
    <>
      <PageHeader title={deviceWidth < 728 ? 'Dev Mobile' : 'Dev Web'} />
      <div id='page-list-category' className='container'>
        <div className='page-subtitle'>
          <p>Categories</p>
        </div>

        <main>
          <div className='list-category'>
            {categories.length !== 0
              ? categories.map((category) => (
                  <CategoryButton
                    onClick={() => handleCategoryButton(category)}
                    key={category.id}
                    category={category}
                  />
                ))
              : `Loading....`}
          </div>
        </main>
      </div>
    </>
  );
}

export default CategoryList;
