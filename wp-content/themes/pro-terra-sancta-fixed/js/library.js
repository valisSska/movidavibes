/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable no-undef */
import React, { lazy, Suspense, Fragment } from 'react';
import { render } from 'react-dom';
import anime from 'animejs/lib/anime.es.js';
import 'waypoints/lib/noframework.waypoints';

const Fivex1000Section = lazy(() => import('./components/5x1000-front'));
const NewsList = lazy(() => import('./components/news-list-front'));
const CampaignsList = lazy(() => import('./components/campaigns-list-front'));
const ProjectSlidesSection = lazy(() => import('./components/project-slides-section-front'));
const ProjectMap = lazy(() => import('./components/project-map-front'));
const FormDonate = lazy(() => import('./components/form-donate-front'));
const FormAnagrafica = lazy(() => import('./components/form-anagrafica-front'));
const FormCheckout = lazy(() => import('./components/form-checkout-front'));
const FormECards = lazy(() => import('./components/form-cards-front'));
const SectionMap = lazy(() => import('./components/section-hero-map-front'));
const NewsGridSection = lazy(() => import('./components/news-grid-section-front'));
const NewsSlidesSection = lazy(() => import('./components/news-slides-section-front'));
const HighlightsSlidesSection = lazy(() => import('./components/highlights-slides-section-front'));

const element5x1000 = document.querySelector('#fivex1000-section-root');
if (element5x1000) {
  render(
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <Fivex1000Section />
      </Suspense>
    </Fragment>,
    element5x1000,
  );
}

const elementNewsList = document.querySelector('#news-list-root');
if (elementNewsList) {
  const { cardColor, cat, postType } = elementNewsList.dataset;
  render(
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <NewsList cardColor={cardColor} cat={cat} postType={postType} />
      </Suspense>
    </Fragment>,
    elementNewsList,
  );
}

const elementCampaignsList = document.querySelector('#campaigns-list-root');
if (elementCampaignsList) {
  const { cardColor, cat, postType } = elementCampaignsList.dataset;
  render(
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <CampaignsList cardColor={cardColor} cat={cat} postType={postType} />
      </Suspense>
    </Fragment>,
    elementCampaignsList,
  );
}

const elementProjectSlidesSection = document.querySelector('#project-slides-section-root');
if (elementProjectSlidesSection) {
  const { cardColor, cat, postType, link, btnText } = elementProjectSlidesSection.dataset;
  render(
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectSlidesSection cardColor={cardColor} cat={cat} postType={postType} link={link} btnText={btnText} />
      </Suspense>
    </Fragment>,
    elementProjectSlidesSection,
  );
}

const elementProjectMap = document.querySelector('#project-map-root');
if (elementProjectMap) {
  const { cardColor, cat, postType, link, btnText } = elementProjectMap.dataset;
  render(
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectMap cardColor={cardColor} cat={cat} postType={postType} link={link} btnText={btnText} />
      </Suspense>
    </Fragment>,
    elementProjectMap,
  );
}

const elementFormsDonate = document.querySelectorAll('.form-donate-root');
if (elementFormsDonate && elementFormsDonate.length > 0) {
  elementFormsDonate.forEach((thisElementFormDonate, index) => {
    const {
      cardColor,
      lng,
      icon1,
      icon2,
      icon3,
      ask1,
      ask1Text,
      ask2,
      ask2Text,
      ask3,
      ask3Text,
      campaignTag,
      paypalKey,
      stripeKey,
      env,
      thankYouUrl,
      formType,
      formShape,
    } = thisElementFormDonate.dataset;
    render(
      <Fragment>
        <Suspense fallback={<div>Loading...</div>}>
          <div id={`modal-place-${index}`}>
            <FormDonate
              key={index}
              index={index}
              cardColor={cardColor}
              lng={lng}
              icon1={icon1}
              icon2={icon2}
              icon3={icon3}
              ask1={ask1}
              ask1Text={ask1Text}
              ask2={ask2}
              ask2Text={ask2Text}
              ask3={ask3}
              ask3Text={ask3Text}
              campaignTag={campaignTag}
              stripeKey={stripeKey}
              paypalKey={paypalKey}
              env={env}
              thankYouUrl={thankYouUrl}
              formType={formType}
              formShape={formShape}
            />
          </div>
        </Suspense>
      </Fragment>,
      thisElementFormDonate,
    );
  });
} else {
  const elementFormDonate = document.querySelector('#form-donate-root');
  if (elementFormDonate) {
    const {
      cardColor,
      lng,
      icon1,
      icon2,
      icon3,
      ask1,
      ask1Text,
      ask2,
      ask2Text,
      ask3,
      ask3Text,
      campaignTag,
      paypalKey,
      stripeKey,
      env,
      thankYouUrl,
      formType,
      formShape,
    } = elementFormDonate.dataset;
    render(
      <Fragment>
        <Suspense fallback={<div>Loading...</div>}>
          <div id="modal-place-1">
            <FormDonate
              key={1}
              index={1}
              cardColor={cardColor}
              lng={lng}
              icon1={icon1}
              icon2={icon2}
              icon3={icon3}
              ask1={ask1}
              ask1Text={ask1Text}
              ask2={ask2}
              ask2Text={ask2Text}
              ask3={ask3}
              ask3Text={ask3Text}
              campaignTag={campaignTag}
              stripeKey={stripeKey}
              paypalKey={paypalKey}
              env={env}
              thankYouUrl={thankYouUrl}
              formType={formType}
              formShape={formShape}
            />
          </div>
        </Suspense>
      </Fragment>,
      elementFormDonate,
    );
  }
}
const elementFormsAnagrafica = document.querySelectorAll('.form-anagrafica-root');
if (elementFormsAnagrafica && elementFormsAnagrafica.length > 0) {
  elementFormsAnagrafica.forEach((thisElementFormAnagrafica, index) => {
    const {
      cardColor,
      lng,
      icon1,
      icon2,
      icon3,
      ask1,
      ask1Text,
      ask2,
      ask2Text,
      ask3,
      ask3Text,
      campaignTag,
      paypalKey,
      stripeKey,
      env,
      thankYouUrl,
      formType,
      formShape,
    } = thisElementFormAnagrafica.dataset;
    render(
      <Fragment>
        <Suspense fallback={<div>Loading...</div>}>
          <div id={`modal-place-${index}`}>
            <FormAnagrafica
              key={index}
              index={index}
              cardColor={cardColor}
              lng={lng}
              icon1={icon1}
              icon2={icon2}
              icon3={icon3}
              ask1={ask1}
              ask1Text={ask1Text}
              ask2={ask2}
              ask2Text={ask2Text}
              ask3={ask3}
              ask3Text={ask3Text}
              campaignTag={campaignTag}
              stripeKey={stripeKey}
              paypalKey={paypalKey}
              env={env}
              thankYouUrl={thankYouUrl}
              formType={formType}
              formShape={formShape}
            />
          </div>
        </Suspense>
      </Fragment>,
      thisElementFormAnagrafica,
    );
  });
} else {
  const elementFormAnagrafica = document.querySelector('#form-anagrafica-root');
  if (elementFormAnagrafica) {
    const {
      cardColor,
      lng,
      icon1,
      icon2,
      icon3,
      ask1,
      ask1Text,
      ask2,
      ask2Text,
      ask3,
      ask3Text,
      campaignTag,
      paypalKey,
      stripeKey,
      env,
      thankYouUrl,
      formType,
      formShape,
    } = elementFormAnagrafica.dataset;
    render(
      <Fragment>
        <Suspense fallback={<div>Loading...</div>}>
          <div id="modal-place-1">
            <FormAnagrafica
              key={1}
              index={1}
              cardColor={cardColor}
              lng={lng}
              icon1={icon1}
              icon2={icon2}
              icon3={icon3}
              ask1={ask1}
              ask1Text={ask1Text}
              ask2={ask2}
              ask2Text={ask2Text}
              ask3={ask3}
              ask3Text={ask3Text}
              campaignTag={campaignTag}
              stripeKey={stripeKey}
              paypalKey={paypalKey}
              env={env}
              thankYouUrl={thankYouUrl}
              formType={formType}
              formShape={formShape}
            />
          </div>
        </Suspense>
      </Fragment>,
      elementFormAnagrafica,
    );
  }
}
const elementFormsCheckout = document.querySelectorAll('.form-checkout-root');
if (elementFormsCheckout && elementFormsCheckout.length > 0) {
  elementFormsCheckout.forEach((thisElementFormDonate, index) => {
    const {
      cardColor,
      lng,
      icon1,
      icon2,
      icon3,
      ask1,
      ask1Text,
      ask2,
      ask2Text,
      ask3,
      ask3Text,
      campaignTag,
      paypalKey,
      stripeKey,
      env,
      thankYouUrl,
      formType,
      formShape,
    } = thisElementFormDonate.dataset;
    render(
      <Fragment>
        <Suspense fallback={<div>Loading...</div>}>
          <div id={`modal-place-${index}`}>
            <FormCheckout
              key={index}
              index={index}
              cardColor={cardColor}
              lng={lng}
              icon1={icon1}
              icon2={icon2}
              icon3={icon3}
              ask1={ask1}
              ask1Text={ask1Text}
              ask2={ask2}
              ask2Text={ask2Text}
              ask3={ask3}
              ask3Text={ask3Text}
              campaignTag={campaignTag}
              stripeKey={stripeKey}
              paypalKey={paypalKey}
              env={env}
              thankYouUrl={thankYouUrl}
              formType={formType}
              formShape={formShape}
            />
          </div>
        </Suspense>
      </Fragment>,
      thisElementFormDonate,
    );
  });
} else {
  const elementFormCheckout = document.querySelector('#form-checkout-root');
  if (elementFormCheckout) {
    const {
      cardColor,
      lng,
      icon1,
      icon2,
      icon3,
      ask1,
      ask1Text,
      ask2,
      ask2Text,
      ask3,
      ask3Text,
      campaignTag,
      paypalKey,
      stripeKey,
      env,
      thankYouUrl,
      formType,
      formShape,
    } = elementFormCheckout.dataset;
    render(
      <Fragment>
        <Suspense fallback={<div>Loading...</div>}>
          <div id="modal-place-1">
            <FormCheckout
              key={1}
              index={1}
              cardColor={cardColor}
              lng={lng}
              icon1={icon1}
              icon2={icon2}
              icon3={icon3}
              ask1={ask1}
              ask1Text={ask1Text}
              ask2={ask2}
              ask2Text={ask2Text}
              ask3={ask3}
              ask3Text={ask3Text}
              campaignTag={campaignTag}
              stripeKey={stripeKey}
              paypalKey={paypalKey}
              env={env}
              thankYouUrl={thankYouUrl}
              formType={formType}
              formShape={formShape}
            />
          </div>
        </Suspense>
      </Fragment>,
      elementFormCheckout,
    );
  }
}
const elementFormCards = document.querySelectorAll('.form-cards-root');
if (elementFormCards) {
  elementFormCards.forEach((elementFormCard, index) => {
    const {
      cardColor,
      lng,
      icon1,
      icon2,
      icon3,
      ask1,
      ask1Text,
      ask2,
      ask2Text,
      ask3,
      ask3Text,
      campaignTag,
      paypalKey,
      stripeKey,
      env,
      thankYouUrl,
      formType,
      formShape,
      image,
      pdf,
      iconText,
    } = elementFormCard.dataset;
    render(
      <Fragment>
        <Suspense fallback={<div>Loading...</div>}>
          <FormECards
            key={index}
            cardColor={cardColor}
            lng={lng}
            icon1={icon1}
            icon2={icon2}
            icon3={icon3}
            ask1={ask1}
            ask1Text={ask1Text}
            ask2={ask2}
            ask2Text={ask2Text}
            ask3={ask3}
            ask3Text={ask3Text}
            campaignTag={campaignTag}
            stripeKey={stripeKey}
            paypalKey={paypalKey}
            env={env}
            thankYouUrl={thankYouUrl}
            formType={formType}
            formShape={formShape}
            image={image}
            pdf={pdf}
            iconText={iconText}
          />
        </Suspense>
      </Fragment>,
      elementFormCard,
    );
  });
}

const elementSectionMap = document.querySelector('#section-map-root');
if (elementSectionMap) {
  const { textColor, textTitle, textContent, lat, lng, areaId } = elementSectionMap.dataset;
  render(
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <SectionMap
          textColor={textColor}
          title={textTitle}
          textContent={textContent}
          lat={lat}
          lng={lng}
          areaId={areaId}
        />
      </Suspense>
    </Fragment>,
    elementSectionMap,
  );
}

const elementNewsSlidesSection = document.querySelector('#news-slides-section-root');
if (elementNewsSlidesSection) {
  const { cardColor, cat, postType, link, btnText } = elementNewsSlidesSection.dataset;
  render(
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <NewsSlidesSection cardColor={cardColor} cat={cat} postType={postType} link={link} btnText={btnText} />
      </Suspense>
    </Fragment>,
    elementNewsSlidesSection,
  );
}

const elementNewsGridSection = document.querySelector('#news-grid-section-root');
if (elementNewsGridSection) {
  const {
    cardColor,
    cat,
    postType,
    link,
    btnText,
    mainTitle,
    block1Title,
    block2Title,
    block3Title,
    block4Title,
    btnTextMain,
    btnTextBlock1,
    btnTextBlock2,
    btnTextBlock3,
    btnTextBlock4,
    postTypeMain,
    postTypeBlock1,
    postTypeBlock2,
    postTypeBlock3,
    postTypeBlock4,
    catMain,
    catBlock1,
    catBlock2,
    catBlock3,
    catBlock4,
  } = elementNewsGridSection.dataset;
  render(
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <NewsGridSection
          cardColor={cardColor}
          cat={cat}
          postType={postType}
          link={link}
          btnText={btnText}
          mainTitle={mainTitle}
          block1Title={block1Title}
          block2Title={block2Title}
          block3Title={block3Title}
          block4Title={block4Title}
          btnTextMain={btnTextMain}
          btnTextBlock1={btnTextBlock1}
          btnTextBlock2={btnTextBlock2}
          btnTextBlock3={btnTextBlock3}
          btnTextBlock4={btnTextBlock4}
          postTypeMain={postTypeMain}
          postTypeBlock1={postTypeBlock1}
          postTypeBlock2={postTypeBlock2}
          postTypeBlock3={postTypeBlock3}
          postTypeBlock4={postTypeBlock4}
          catMain={catMain}
          catBlock1={catBlock1}
          catBlock2={catBlock2}
          catBlock3={catBlock3}
          catBlock4={catBlock4}
        />
      </Suspense>
    </Fragment>,
    elementNewsGridSection,
  );
}

const elementHighlightsSlidesSection = document.querySelector('#highlights-slides-section-root');
if (elementHighlightsSlidesSection) {
  const { cardColor, cat, postType, link, btnText } = elementHighlightsSlidesSection.dataset;
  render(
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <HighlightsSlidesSection cardColor={cardColor} cat={cat} postType={postType} link={link} btnText={btnText} />
      </Suspense>
    </Fragment>,
    elementHighlightsSlidesSection,
  );
}

const moveMeUps = document.querySelectorAll('.move-me-up');
if (moveMeUps) {
  moveMeUps.forEach((moveMeUp) => {
    // eslint-disable-next-line no-undef,no-new
    const moveMeUpWaypoint = new Waypoint({
      element: moveMeUp,
      offset: '90%',
      handler() {
        anime.timeline({ loop: false }).add({
          targets: moveMeUp,
          translateY: [50, 0],
          opacity: [0, 1],
          duration: 5400,
          easing: 'easeOutElastic(2, 0.5)',
        });
        moveMeUpWaypoint.disable();
      },
    });
  });
}

const animateUPs = document.querySelectorAll('.animate-up');
if (animateUPs) {
  animateUPs.forEach((animateUP) => {
    // eslint-disable-next-line no-undef,no-new
    const animateWaypoint = new Waypoint({
      element: animateUP,
      offset: '90%',
      handler() {
        anime.timeline({ loop: false }).add({
          targets: animateUP,
          translateY: [25, 0],
          opacity: [0, 1],
          duration: 2000,
          easing: 'easeOutElastic(2, 1)',
        });
        animateWaypoint.disable();
      },
    });
  });
}

const animateUPDelay100s = document.querySelectorAll('.animate-up-delay-100');
if (animateUPDelay100s) {
  animateUPDelay100s.forEach((animateUPDelay100) => {
    // eslint-disable-next-line no-undef,no-new
    const animateWaypoint = new Waypoint({
      element: animateUPDelay100,
      offset: '90%',
      handler() {
        anime.timeline({ loop: false }).add({
          targets: animateUPDelay100,
          translateY: [25, 0],
          opacity: [0, 1],
          duration: 2000,
          delay: 500,
          easing: 'easeOutElastic(2, 1)',
        });
        animateWaypoint.disable();
      },
    });
  });
}

const animateUPStaggers = document.querySelector('.animate-up-stagger');
if (animateUPStaggers) {
  // eslint-disable-next-line no-undef,no-new
  const animateUPStaggersWaypoint = new Waypoint({
    element: animateUPStaggers,
    offset: '90%',
    handler() {
      anime.timeline({ loop: false }).add({
        targets: document.querySelectorAll('.animate-up-stagger'),
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 5000,
        easing: 'easeOutElastic(2, 1)',
        delay: anime.stagger(250),
      });
      animateUPStaggersWaypoint.disable();
    },
  });
}

const animateLefts = document.querySelectorAll('.animate-left');
if (animateLefts) {
  animateLefts.forEach((animateLeft) => {
    // eslint-disable-next-line no-undef,no-new
    const animateWaypoint = new Waypoint({
      element: animateLeft,
      offset: '90%',
      handler() {
        anime.timeline({ loop: false }).add({
          targets: animateLeft,
          translateX: [25, 0],
          opacity: [0, 1],
          duration: 2000,
          easing: 'easeOutElastic(2, 1)',
        });
        animateWaypoint.disable();
      },
    });
  });
}

const animateRights = document.querySelectorAll('.animate-right');
if (animateRights) {
  animateRights.forEach((animateRight) => {
    // eslint-disable-next-line no-undef,no-new
    const animateWaypoint = new Waypoint({
      element: animateRight,
      offset: '90%',
      handler() {
        anime.timeline({ loop: false }).add({
          targets: animateRight,
          translateX: [-25, 0],
          opacity: [0, 1],
          duration: 2000,
          easing: 'easeOutElastic(2, 1)',
        });
        animateWaypoint.disable();
      },
    });
  });
}

const animateLeftDelays = document.querySelectorAll('.animate-left-delay-100');
if (animateLeftDelays) {
  animateLeftDelays.forEach((animateLeftDelay) => {
    // eslint-disable-next-line no-undef,no-new
    const animateWaypoint = new Waypoint({
      element: animateLeftDelay,
      offset: '90%',
      handler() {
        anime.timeline({ loop: false }).add({
          targets: animateLeftDelay,
          translateX: [25, 0],
          opacity: [0, 1],
          duration: 2000,
          delay: 500,
          easing: 'easeOutElastic(2, 1)',
        });
        animateWaypoint.disable();
      },
    });
  });
}

const animateRightDelays = document.querySelectorAll('.animate-right-delay-100');
if (animateRightDelays) {
  animateRightDelays.forEach((animateRightDelay) => {
    // eslint-disable-next-line no-undef,no-new
    const animateWaypoint = new Waypoint({
      element: animateRightDelay,
      offset: '90%',
      handler() {
        anime.timeline({ loop: false }).add({
          targets: animateRightDelay,
          translateX: [-25, 0],
          opacity: [0, 1],
          duration: 2000,
          delay: 500,
          easing: 'easeOutElastic(2, 1)',
        });
        animateWaypoint.disable();
      },
    });
  });
}
