import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tracks } from '../index';
import { mockTracks } from "../../mocks";
import { SpotifyTrack } from '../../types/spotify.model';

const tracks: SpotifyTrack[] = mockTracks();

export default {
  title: 'Organism/Tracks',
  component: Tracks,
} as ComponentMeta<typeof Tracks>;

const Template: ComponentStory<typeof Tracks> = (args) => <Tracks {...args} />;

export const Main = Template.bind({});
Main.args = {
  tracks,
};
