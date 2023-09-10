import React, { __ } from '@wordpress/i18n';
import { RichText, MediaUpload } from '@wordpress/block-editor';
import { Button, TextControl } from '@wordpress/components';

export const editTeam = ({ className, attributes, setAttributes }) => {
  const { mediaID, mediaURL } = attributes;

  const onChangeName = (newContent) => {
    setAttributes({ name: newContent });
  };

  const onChangeSurname = (newContent) => {
    setAttributes({ surname: newContent });
  };

  const onChangeRole = (newContent) => {
    setAttributes({ role: newContent });
  };

  const onChangeLinkedin = (newContent) => {
    setAttributes({ linkedin: newContent });
  };

  const onSelectImage = (media) => {
    setAttributes({
      mediaURL: media.url,
      mediaID: media.id,
    });
  };

  return (
    <div className={className}>
      <div className="row no-gutters">
        <div className="col-4">
          <MediaUpload
            onSelect={onSelectImage}
            allowedTypes="image"
            value={mediaID}
            render={({ open }) => (
              <Button className={mediaID ? 'image-team' : 'button button-large'} onClick={open}>
                {__('Upload Image', 'proterrasancta')}
                {!mediaID ? (
                  __('Upload Image', 'proterrasancta')
                ) : (
                  <img src={mediaURL} alt={__('Team Image', 'proterrasancta')} />
                )}
              </Button>
            )}
          />
        </div>
        <div className="col-6">
          <RichText
            className="name-title"
            tagName="div"
            placeholder={__('Nome …', 'proterrasancta')}
            onChange={onChangeName}
            value={attributes.name}
          />
          <RichText
            className="surname-title"
            tagName="div"
            placeholder={__('Cognome …', 'proterrasancta')}
            onChange={onChangeSurname}
            value={attributes.surname}
          />
          <RichText
            className="role-title"
            tagName="div"
            placeholder={__('Ruolo …', 'proterrasancta')}
            onChange={onChangeRole}
            value={attributes.role}
          />
          <TextControl
            className="linkedin-title"
            tagName="div"
            placeholder={__('linkedin …', 'proterrasancta')}
            onChange={onChangeLinkedin}
            value={attributes.linkedin}
          />
        </div>
      </div>
    </div>
  );
};

export const saveTeam = ({ attributes }) => (
  <div className="col-12 col-md-6 col-xl-4">
    <div className="team-block" style={{ backgroundImage: `url(${attributes.mediaURL})` }}>
      <div className="container">
        <div className="row p-1">
          <div className="col-12">
            <span className="name-title font-weight-bold mr-1" style={{ color: 'white' }}>
              {attributes.name}
            </span>
            <span className="surname-title font-weight-bold" style={{ color: 'white' }}>
              {attributes.surname}
            </span>
          </div>
          <div className="col-12">
            <span className="role-title font-weight-normal" style={{ color: '#007EA7' }}>
              {attributes.role}
            </span>
          </div>
          {attributes.linkedin ? (
            <a className="linkedin-title" href={attributes.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in" />
            </a>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  </div>
);
