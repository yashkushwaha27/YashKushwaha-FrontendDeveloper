import { useCallback, useMemo } from 'react';
import { default as Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import ReactTyped from 'react-typed';
import { content, particlesConfig } from '@constants/index';
import { useStyles } from './home.styles';
import { Button } from '@components/common';

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
   * Method to render the home label text
   */
  const textToRender = useMemo(() => {
    return (
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
  }, [styles]);

  /**
   * Method to render the button pair
   */
  const buttonsToRender = useMemo(() => {
    return (
      <div css={styles.homeCapsulesButtonWrapper}>
        <Button customStyles={styles.homeCapsuleButton}>
          {content.homePage_upcomingCapsules_buttonText}
        </Button>
        <Button variant="secondary">
          {content.homePage_previousCapsules_buttonText}
        </Button>
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
      {textToRender}
      {buttonsToRender}
    </div>
  );
};

export default Home;
