import React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { mockTracks } from "../mocks/data";
import { PlaylistTracks } from '../components';
import { SpotifyTrack } from '../types/spotify.model';

const tracks: SpotifyTrack[] = mockTracks();

export default {
  title: 'Components/PlaylistTracks',
  component: PlaylistTracks,
  decorators: [withRouter],
} as ComponentMeta<typeof PlaylistTracks>;

const Template: ComponentStory<typeof PlaylistTracks> = (args) => <PlaylistTracks {...args} />;

export const Main = Template.bind({});
Main.args = {
  loading: false,
  tracks,
};
