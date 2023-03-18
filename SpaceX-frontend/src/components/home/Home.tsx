import { useCallback, useMemo } from 'react';
import { default as Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import ReactTyped from 'react-typed';
import { content, particlesConfig } from '@constants/index';
import { useStyles } from './home.styles';
import { Button } from '@components/common';

/**
 * Method to scroll a div into view
 * @param {string} id
 */
const bringIntoView = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ block: 'nearest' });

/**
 * Method to render home component
 * @returns {JSX.Element}
 */
const Home = (): JSX.Element => {
  const styles = useStyles();

  /**
   * Method to init the particles
   */
  const particlesInit = useCallback(
    async (engine: any) => await loadFull(engine),
    []
  );

  /**
   * Method to render page content
   */
  const contentToRender = useMemo(() => {
    /**
     * constant to render the home label text
     */
    const textToRender = (
      <div css={styles.homeTextWrapper}>
        <ReactTyped
          css={styles.homeHeadingText}
          strings={[content.homePage_heading_text]}
          typeSpeed={40}
        />
        <ReactTyped
          css={styles.homeSubHeadingText}
          strings={Array.from(Array(4).keys()).map(
            (item: number) => content[`homePage_subHeading${item + 1}_text`]
          )}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </div>
    );

    /**
     * constant to render the button pair
     */
    const buttonsToRender = (
      <div css={styles.homeCapsulesButtonWrapper}>
        <Button
          onClick={() => bringIntoView('upcomingCapsules')}
          customStyles={styles.homeCapsuleButton}
        >
          {content.homePage_upcomingCapsules_buttonText}
        </Button>
        <Button
          onClick={() => bringIntoView('previousCapsules')}
          variant="secondary"
        >
          {content.homePage_previousCapsules_buttonText}
        </Button>
      </div>
    );

    return (
      <div css={styles.homeContentWrapper}>
        {textToRender}
        {buttonsToRender}
      </div>
    );
  }, [styles]);

  return (
    <div css={styles.homeWrapper}>
      <Particles
        id="particles"
        options={particlesConfig!}
        init={particlesInit}
        css={styles.homeParticles}
      />
      {contentToRender}
    </div>
  );
};

export default Home;
