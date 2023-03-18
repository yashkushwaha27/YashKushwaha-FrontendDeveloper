import CapsuleSection from '@components/capsuleSection';
import { ShadowSeparator } from '@components/common';
import { default as HomeComponent } from '@components/home';
import { content } from '@constants/index';

/**
 * Method to render home page
 * @returns {JSX.Element}
 */
const Home = (): JSX.Element => {
  return (
    <>
      <HomeComponent />
      <ShadowSeparator />
      <CapsuleSection
        id="upcomingCapsules"
        heading={content.homePage_upcomingCapsules_buttonText}
        data={[
          {
            capsule_serial: 'C202',
            capsule_id: 'dragon2',
            status: 'active',
            original_launch: null,
            original_launch_unix: null,
            missions: [],
            landings: 0,
            type: 'Dragon 2.0',
            details:
              "Capsule used to qualify Dragon 2's environmental control and life support systems.",
            reuse_count: 0,
          },
          {
            capsule_serial: 'C203',
            capsule_id: 'dragon2',
            status: 'active',
            original_launch: null,
            original_launch_unix: null,
            missions: [],
            landings: 0,
            type: 'Dragon 2.0',
            details: 'Rumored to be used for Inflight Abort Test after DM-1',
            reuse_count: 0,
          },
          {
            capsule_serial: 'C204',
            capsule_id: 'dragon2',
            status: 'active',
            original_launch: null,
            original_launch_unix: null,
            missions: [],
            landings: 0,
            type: 'Dragon 2.0',
            details: 'Currently in construction for use in DM-2',
            reuse_count: 0,
          },
        ]}
      />
      <ShadowSeparator />
      <CapsuleSection
        id="previousCapsules"
        heading={content.homePage_previousCapsules_buttonText}
        data={[
          {
            capsule_serial: 'C202',
            capsule_id: 'dragon2',
            status: 'active',
            original_launch: null,
            original_launch_unix: null,
            missions: [],
            landings: 0,
            type: 'Dragon 2.0',
            details:
              "Capsule used to qualify Dragon 2's environmental control and life support systems.",
            reuse_count: 0,
          },
          {
            capsule_serial: 'C203',
            capsule_id: 'dragon2',
            status: 'active',
            original_launch: null,
            original_launch_unix: null,
            missions: [],
            landings: 0,
            type: 'Dragon 2.0',
            details: 'Rumored to be used for Inflight Abort Test after DM-1',
            reuse_count: 0,
          },
          {
            capsule_serial: 'C204',
            capsule_id: 'dragon2',
            status: 'active',
            original_launch: null,
            original_launch_unix: null,
            missions: [],
            landings: 0,
            type: 'Dragon 2.0',
            details: 'Currently in construction for use in DM-2',
            reuse_count: 0,
          },
        ]}
      />
    </>
  );
};

export default Home;
