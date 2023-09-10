import React, { Fragment } from 'react';
import { __ } from '@wordpress/i18n';
import { InnerBlocks, InspectorControls, PanelColorSettings, RichText } from '@wordpress/block-editor';
import paletteProterrasancta from './palette-proterrasancta';

export const editNutritionalFacts = ({ className, attributes, setAttributes }) => {
  const onChangeNutritionText = (newContent) => {
    setAttributes({ nutritionText: newContent });
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
          title={'Background Color Facts'}
          colorSettings={[
            {
              colors: paletteProterrasancta,
              value: attributes.backgroundColorIngredients,
              onChange: onChangeBackgroundColorIngredients,
              label: __('Background Color Facts'),
            },
          ]}
        />
      </InspectorControls>
      <div className="row no-gutters" style={{ backgroundColor: attributes.backgroundColor }}>
        <div className="col-6 p-3">
          <RichText
            className="nutrition-text"
            tagName="div"
            placeholder={__('Description …', 'proterrasancta')}
            onChange={onChangeNutritionText}
            value={attributes.nutritionText}
          />
        </div>
        <div className="col-6 p-3" style={{ backgroundColor: attributes.backgroundColorIngredients }}>
          <RichText
            className="ingredients"
            tagName="div"
            placeholder={__('Nutritional Facts …', 'proterrasancta')}
            onChange={onChangeIngredients}
            value={attributes.ingredients}
          />
        </div>
      </div>
      <div className="col-12">
        <InnerBlocks allowedBlocks={['kadence/slider', 'kadence/videopopup']} />
      </div>
    </div>
  );
};

export const saveNutritionalFacts = ({ attributes }) => (
  <Fragment>
    <div className="py-4" style={{ backgroundColor: attributes.backgroundColor }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7">
            <InnerBlocks.Content />
            <div className="d-block d-md-none mt-4">
              <div style={{ backgroundColor: attributes.backgroundColorIngredients }}>
                <div className="ingredients-title p-3">NUTRITIONAL FACTS</div>
                <RichText.Content className="ingredients p-3" tagName="div" value={attributes.ingredients} />
              </div>
            </div>
            <RichText.Content className="nutrition-text mt-5" tagName="div" value={attributes.nutritionText} />
          </div>
          <div className="col-12 col-md-5 d-none d-md-block">
            <div style={{ backgroundColor: attributes.backgroundColorIngredients }}>
              <div className="ingredients-title px-5 pt-5 pb-3">NUTRITIONAL FACTS</div>
              <RichText.Content className="ingredients px-5 pb-5" tagName="div" value={attributes.ingredients} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);
