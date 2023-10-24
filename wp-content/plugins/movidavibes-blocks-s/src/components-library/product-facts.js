import React, { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';

export const editProductFacts = ({ className, attributes, setAttributes }) => {
  const onChangeFact = (newContent) => {
    setAttributes({ fact: newContent });
  };

  return (
    <div className={`${className} shadow-md`}>
      <div className="row no-gutters">
        <div className="col-12">
          <RichText
            className="product-fact"
            tagName="div"
            placeholder={__('Fact …', 'rovagnati-us')}
            onChange={onChangeFact}
            value={attributes.fact}
          />
        </div>
      </div>
    </div>
  );
};

export const saveProductFacts = ({ attributes }) => (
  <div className="col-12 col-md-3 d-flex">
    <div className="facts-block m-auto">
      <div className="container">
        <div className="row p-1">
          <div className="col-12">
            <RichText.Content className="product-fact" tagName="span" value={attributes.fact} />
          </div>
        </div>
      </div>
    </div>
    <div className="fact-circle-container">
      <div className="fact-circle"></div>
    </div>
  </div>
);
