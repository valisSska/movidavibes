import React, { Fragment } from 'react';
import { __ } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings, RichText } from '@wordpress/block-editor';
import { PanelBody, PanelRow, TextControl } from '@wordpress/components';
import paletteProterrasancta from './palette-proterrasancta';

export const editRecipeIngredients = ({ className, attributes, setAttributes }) => {
  const onChangeRecipeText = (newContent) => {
    setAttributes({ recipeText: newContent });
  };

  const onChangeIngredients = (newContent) => {
    setAttributes({ ingredients: newContent });
  };

  const onChangeBackgroundColor = (color) => {
    setAttributes({ backgroundColor: color });
  };

  const onChangeBackgroundColorIngredients = (color) => {
    setAttributes({ backgroundColorIngredients: color });
  };

  const onChangeCalories = (newContent) => {
    setAttributes({ calories: newContent });
  };

  const onChangeTime = (newContent) => {
    setAttributes({ time: newContent });
  };

  const onChangeDifficulty = (newContent) => {
    setAttributes({ difficulty: newContent });
  };

  const items = [];
  // eslint-disable-next-line no-plusplus
  for (let index = 1; index <= 5; index++) {
    if (index <= Number.parseInt(attributes.difficulty, 10)) {
      items.push(<span className="recipe-stars fa fa-star checked"></span>);
    } else {
      items.push(<span className="recipe-stars fa fa-star"></span>);
    }
  }

  return (
    <div className={className}>
      <InspectorControls>
        <PanelColorSettings
          title={'Background Color'}
          colorSettings={[
            {
              colors: paletteProterrasancta,
              value: attributes.backgroundColor,
              onChange: onChangeBackgroundColor,
              label: __('Background Color'),
            },
          ]}
        />
        <PanelColorSettings
          title={'Background Color Ingredients'}
          colorSettings={[
            {
              colors: paletteProterrasancta,
              value: attributes.backgroundColorIngredients,
              onChange: onChangeBackgroundColorIngredients,
              label: __('Background Color Ingredients'),
            },
          ]}
        />
        <PanelBody title={'Special Settings'} initialOpen={false}>
          <PanelRow>
            <TextControl label="calories" value={attributes.calories} onChange={onChangeCalories} />
          </PanelRow>
          <PanelRow>
            <TextControl label="time" value={attributes.time} onChange={onChangeTime} />
          </PanelRow>
          <PanelRow>
            <TextControl label="difficulty" value={attributes.difficulty} onChange={onChangeDifficulty} />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div className="row no-gutters" style={{ backgroundColor: attributes.backgroundColor }}>
        <div className="col-12 row" style={{ padding: '50px 0 50px 0' }}>
          <div className="col-12 col-md-7 row no-gutters text-center">
            <div className="col-4 recipe-numbers">Calories per portion:</div>
            <div className="col-4 recipe-numbers">Time:</div>
            <div className="col-4 recipe-numbers">Difficulty:</div>
          </div>
          <div className="col-12 col-md-7 row no-gutters text-center font-weight-bold">
            <div className="col-4 recipe-numbers">{attributes.calories}</div>
            <div className="col-4 recipe-numbers">{attributes.time}</div>
            <div className="col-4 recipe-numbers"> {items}</div>
          </div>
          <div className="col-12 col-md-5"></div>
        </div>
        <div className="col-6 p-3">
          <RichText
            className="recipe-text"
            tagName="div"
            placeholder={__('Recipe …', 'proterrasancta')}
            onChange={onChangeRecipeText}
            value={attributes.recipeText}
          />
        </div>
        <div className="col-6 p-3" style={{ backgroundColor: attributes.backgroundColorIngredients }}>
          <RichText
            className="ingredients"
            tagName="div"
            placeholder={__('Ingredients …', 'proterrasancta')}
            onChange={onChangeIngredients}
            value={attributes.ingredients}
          />
        </div>
      </div>
    </div>
  );
};

export const saveRecipeIngredients = ({ attributes }) => {
  const items = [];
  // eslint-disable-next-line no-plusplus
  for (let index = 1; index <= 5; index++) {
    if (index <= Number.parseInt(attributes.difficulty, 10)) {
      items.push(<span className="recipe-stars fa fa-star checked"></span>);
    } else {
      items.push(<span className="recipe-stars fa fa-star"></span>);
    }
  }

  return (
    <Fragment>
      <div className="slip-under-zindex" style={{ backgroundColor: attributes.backgroundColor }}>
        <div className="container">
          <div className="row">
            <div className="col-12 row" style={{ padding: '50px 0 50px 0' }}>
              <div className="col-12 col-md-7 row no-gutters text-center">
                <div className="col-4 recipe-numbers">{attributes.calories ? 'Calories per portion:' : '&nbsp;'}</div>
                <div className="col-4 recipe-numbers">{attributes.time ? 'Time:' : '&nbsp;'}</div>
                <div className="col-4 recipe-numbers">{attributes.difficulty ? 'Difficulty:' : '&nbsp;'}</div>
              </div>
              <div className="col-12 col-md-7 row no-gutters text-center font-weight-bold">
                <div className="col-4 recipe-numbers">{attributes.calories ? attributes.calories : '&nbsp;'}</div>
                <div className="col-4 recipe-numbers">{attributes.time ? attributes.time : '&nbsp;'}</div>
                <div className="col-4 recipe-numbers">{attributes.difficulty ? items : '&nbsp;'}</div>
              </div>
              <div className="col-12 col-md-5"></div>
            </div>
            <div className="col-12 col-md-5 d-block d-md-none mb-3">
              <div style={{ backgroundColor: attributes.backgroundColorIngredients }}>
                <div className="ingredients-title p-3">INGREDIENTS</div>
                <RichText.Content className="ingredients p-3" tagName="div" value={attributes.ingredients} />
              </div>
            </div>
            <div className="col-12 col-md-7">
              <RichText.Content className="recipe-text" tagName="div" value={attributes.recipeText} />
            </div>
            <div className="col-12 col-md-5 d-none d-md-block">
              <div style={{ backgroundColor: attributes.backgroundColorIngredients }}>
                <div className="ingredients-title px-5 pt-5 pb-3">INGREDIENTS</div>
                <RichText.Content className="ingredients px-5 pb-5" tagName="div" value={attributes.ingredients} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
