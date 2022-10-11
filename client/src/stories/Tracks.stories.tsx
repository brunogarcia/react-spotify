import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { mockTracks } from "../mocks/data";
import { Tracks } from '../components';
import { SpotifyTrack } from '../types/spotify.model';

const tracks: SpotifyTrack[] = mockTracks();

export default {
  title: 'Components/Tracks',
  component: Tracks,
} as ComponentMeta<typeof Tracks>;

const Template: ComponentStory<typeof Tracks> = (args) => <Tracks {...args} />;

export const Main = Template.bind({});
Main.args = {
  tracks,
};
