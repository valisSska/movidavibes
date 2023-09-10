import React, { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';

export const editShowNumbersCard = ({ className, attributes, setAttributes }) => {
  const onChangeNumber = (newContent) => {
    setAttributes({ number: newContent });
  };

  const onChangeSummary = (newContent) => {
    setAttributes({ summary: newContent });
  };

  return (
    <div className={`${className} shadow-md`}>
      <div className="row no-gutters">
        <div className="col-12">
          <RichText
            className="number-title"
            tagName="div"
            placeholder={__('Numbers …', 'rovagnati-us')}
            onChange={onChangeNumber}
            value={attributes.number}
          />
          <RichText
            className="number-summary"
            tagName="div"
            placeholder={__('Summary …', 'rovagnati-us')}
            onChange={onChangeSummary}
            value={attributes.summary}
          />
        </div>
      </div>
    </div>
  );
};

export const saveShowNumbersCard = ({ attributes }) => (
  <div className="col-12 col-md-3">
    <div className="numbers-block">
      <div className="container">
        <div className="row p-1">
          <div className="col-12">
            <span className="number-title mr-1">{attributes.number}</span>
          </div>
        </div>
        <div className="row p-1">
          <div className="col-12">
            <span className="number-summary">{attributes.summary}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
